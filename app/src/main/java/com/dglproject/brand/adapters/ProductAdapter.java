package com.dglproject.brand.adapters;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.fragments.ProductFragment;
import com.dglproject.brand.utilities.ImageLoader;

import org.json.JSONArray;
import org.json.JSONException;

/*
 * Copyright (c) 2017.
 * Author: Turtuvshin Byambaa.
 *
 */

public class ProductAdapter extends BaseAdapter{

    final Context context;
    final JSONArray products;
    public ImageLoader imageLoader;

    private LayoutInflater inflater = null;

    public ProductAdapter(Context context, JSONArray products) {
        this.context = context;
        this.products = products;
        inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);

    }

    @Override
    public int getCount() {
        return products.length();
    }

    @Override
    public Object getItem(int position) {
        try {
            return products.getJSONObject(position);
        } catch (JSONException e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View vi = convertView;
        if(vi == null)
            vi = inflater.inflate(R.layout.product_list_item, null);

        TextView pName = (TextView) vi.findViewById(R.id.txtText);
        TextView pPrice = (TextView) vi.findViewById(R.id.txtSubText);
        ImageView pImage  = (ImageView)vi.findViewById(R.id.imgThumb);

        try {
            pName.setText(products.getJSONObject(position).getString("name"));
            pPrice.setText(products.getJSONObject(position).getString("price"+" ₮"));
            imageLoader.DisplayImage(Config.AdminPageURL+"/uploads/product_photos/"+products.getJSONObject(position), pImage);
        } catch (JSONException e) {
            e.printStackTrace();
            Log.e("ERROR", e.getMessage());
        }
        return vi;
    }
}
