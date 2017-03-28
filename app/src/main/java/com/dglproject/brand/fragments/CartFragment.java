package com.dglproject.brand.fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import com.brand.R;
import com.dglproject.brand.database.CartProductsAdapter;
import com.dglproject.brand.models.CartProducts;

import java.util.ArrayList;
import java.util.HashMap;

public class CartFragment extends android.app.Fragment {

    public final static String  TAG = "Cart";
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_cart, container, false);

        final CartProductsAdapter productAdapter = new CartProductsAdapter(this.getActivity());
        ArrayList<CartProducts> data = productAdapter.readData();

        ListView listView = (ListView) rootView.findViewById(R.id.fragment_item_ordered_list_view);

        final ArrayList<HashMap<String, String>> dataList;

        dataList = new ArrayList<HashMap<String, String>>();

        for (CartProducts x : data) {
            HashMap<String, String> map = new HashMap<String, String>();
            map.put("Title", x.getTitle());
            map.put("Image", x.getImage());
            map.put("TotalOrder", "Тоо: " + x.getTotalOrder());
            map.put("TotalCost", "Нийт үнэ: " + x.getTotalCost()+" ₮");
            dataList.add(map);
        }

        ListAdapter adapter = new SimpleAdapter(
                this.getActivity(),
                dataList,
                R.layout.item_cart,
                new String[]{"Title", "Image", "TotalOrder", "TotalCost"},
                new int[]{R.id.list_image_text_view, R.id.img, R.id.recepit_total_order_text_view, R.id.recepit_cost_text_view});

        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                String title = dataList.get(position).get("Title");
                CartProducts item = productAdapter.findByTitle(title);
                String costString = "" + item.getCost();
                String totalCostString = "" + item.totalCost;
                String totalOrderString = "" + item.getTotalOrder();
                String[] transferData = {item.getTitle(), item.getDescription(), costString, totalCostString, totalOrderString, item.getImage()};
//                Intent intent = new Intent(getActivity(), ActivityCartEdit.class);
//                intent.putExtra(TAG, transferData);
//                startActivity(intent);
            }
        });
        productAdapter.close();
        return rootView;

    }
}
