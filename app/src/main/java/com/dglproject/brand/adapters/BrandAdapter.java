package com.dglproject.brand.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.fragments.BrandFragment;
import com.dglproject.brand.utilities.ImageLoader;

import org.json.JSONArray;
import org.json.JSONException;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class BrandAdapter extends BaseAdapter {

    final Context context;
    final JSONArray brands;
    public ImageLoader imageLoader;

    private LayoutInflater inflater = null;

    public BrandAdapter(Context context, JSONArray brands) {
        this.context = context;
        this.brands = brands;
        imageLoader = new ImageLoader(context);
        inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    public int getCount() {
        return brands.length();
    }

    public Object getItem(int position) {
        try {
            return brands.getJSONObject(position);
        } catch (JSONException ex) {
            ex.printStackTrace();
        }
        return position;
    }

    public long getItemId(int position) {
        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {

        View vi = convertView;
        if (vi == null)
            vi = inflater.inflate(R.layout.category_item, null);

        TextView txtText = (TextView) convertView.findViewById(R.id.txtText);
        ImageView imgThumb = (ImageView) convertView.findViewById(R.id.imgThumb);

        try {
            txtText.setText(brands.getJSONObject(position).getString("name"));
            imageLoader.DisplayImage(Config.AdminPageURL + "/uploads/product_brand_icons/" + brands.getJSONObject(position).getString("icon_image"), imgThumb);

        } catch (JSONException ex) {
            ex.printStackTrace();
        }

        return vi;

    }
}