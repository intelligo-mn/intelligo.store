package com.dglproject.brand.fragments;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import com.dglproject.brand.R;
import com.dglproject.brand.database.CartProductsAdapter;
import com.dglproject.brand.models.CartProducts;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;

public class CartFragment extends Fragment {

    public final static String  TAG = "Cart";

    CartProductsAdapter productAdapter;
    TextView subTotalView;
    TextView taxView;
    TextView totalView;
    double subTotal;
    double tax;
    double total;
    View rootView;
    ArrayList<CartProducts> data;

    public static CartFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(TAG, pageNo);
        CartFragment fragment = new CartFragment();
        fragment.setArguments(args);

        return fragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.fragment_cart, container, false);

        productAdapter = new CartProductsAdapter(this.getActivity());

        data = productAdapter.readData();
        displayBill();
        ArrayList<CartProducts> datas = productAdapter.readData();

        ListView listView = (ListView) rootView.findViewById(R.id.fragment_item_ordered_list_view);

        final ArrayList<HashMap<String, String>> dataList;

        dataList = new ArrayList<HashMap<String, String>>();

        for (CartProducts x : datas) {
            HashMap<String, String> map = new HashMap<String, String>();
            map.put("Title", x.getTitle());
            map.put("Image", x.getImage());
            map.put("TotalOrder", getString(R.string.total)+" : " + x.getTotalOrder());
            map.put("TotalCost", getString(R.string.total_cost)+" : " + x.getTotalCost()+" ₮");
            dataList.add(map);
        }

        ListAdapter adapter = new SimpleAdapter(
                this.getActivity(),
                dataList,
                R.layout.item_cart,
                new String[]{"Title", "Image", "TotalOrder", "TotalCost"},
                new int[]{R.id.list_image_text_view, R.id.img, R.id.recepit_total_order_text_view, R.id.recepit_cost_text_view});

        listView.setAdapter(adapter);

//        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
//            @Override
//            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
//                String title = dataList.get(position).get("Title");
//                CartProducts item = productAdapter.findByTitle(title);
//                String costString = "" + item.getCost();
//                String totalCostString = "" + item.totalCost;
//                String totalOrderString = "" + item.getTotalOrder();
//                String[] transferData = {item.getTitle(), item.getDescription(), costString, totalCostString, totalOrderString, item.getImage()};
//                Intent intent = new Intent(getActivity(), ActivityCartEdit.class);
//                intent.putExtra(TAG, transferData);
//                startActivity(intent);
//            }
//        });
        productAdapter.close();
        return rootView;

    }

    public void calculateBill(){
        subTotal = tax = total = 0;
        for(CartProducts dat : data){
            subTotal += dat.getTotalCost();
        }
        tax = subTotal*0.1;
        total = tax + subTotal;
    }

    public void displayBill(){
        calculateBill();
        subTotalView = (TextView) rootView.findViewById(R.id.sub_total_text_view);
        subTotalView.setText(getString(R.string.total_cost)+" : " + new DecimalFormat("#.##").format(subTotal)+" ₮");

        taxView = (TextView) rootView.findViewById(R.id.tax_text_view);
        taxView.setText(getString(R.string.tax)+" : " + new DecimalFormat("#.##").format(tax)+" ₮");

        totalView = (TextView) rootView.findViewById(R.id.total_text_view);
        totalView.setText(getString(R.string.total)+" : " + new DecimalFormat("#.##").format(total)+" ₮");
    }

    public void startPayment(View view){
        if (data.size() > 0){
//            Intent intent = new Intent(this, ActivityOrder.class);
//            String subTotalString = "" + subTotal;
//            String taxString = "" + tax;
//            String totalString = "" + total;
//            String[] transferData = {subTotalString,taxString,totalString};
//            intent.putExtra(TAG,transferData);
//            startActivity(intent);
        }
    }
}
