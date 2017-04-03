package com.dglproject.brand.adapters;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.dglproject.brand.DglConstants;
import com.dglproject.brand.R;
import com.dglproject.brand.fragments.HomeItems;
import com.dglproject.brand.utils.ImageLoader;

/**
 * Created by Tortuvshin Byambaa on 3/5/2017.
 */
public class AllProductAdapter extends BaseAdapter {

    private Activity activity;
    public ImageLoader imageLoader;

    HomeItems homeItems = new HomeItems();

    public AllProductAdapter(Activity act) {
        this.activity = act;
        imageLoader = new ImageLoader(act);
    }

    public int getCount() {

        return homeItems.Product_ID.size();
    }

    public Object getItem(int position) {

        return position;
    }

    public long getItemId(int position) {

        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {

        ViewHolder holder;

        if(convertView == null){
            LayoutInflater inflater = (LayoutInflater) activity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.product_list_item, null);
            holder = new ViewHolder();

            convertView.setTag(holder);
        }else{
            holder = (ViewHolder) convertView.getTag();
        }

        holder.txtText = (TextView) convertView.findViewById(R.id.txtText);
        holder.txtSubText = (TextView) convertView.findViewById(R.id.txtSubText);
        holder.imgThumb = (ImageView) convertView.findViewById(R.id.imgThumb);

        holder.txtText.setText(homeItems.Product_name.get(position));
        holder.txtSubText.setText(homeItems.Product_price.get(position)+" ₮");

        imageLoader.DisplayImage(DglConstants.AdminPageURL+ homeItems.Product_image.get(position), holder.imgThumb);

        return convertView;
    }

    static class ViewHolder {
        TextView txtText, txtSubText;
        ImageView imgThumb;
    }
}

