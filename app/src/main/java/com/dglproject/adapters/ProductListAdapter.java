package com.dglproject.adapters;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.dglproject.DglConstants;
import com.dglproject.utils.ImageLoader;
import com.dglproject.activity.ActivityProductList;
import com.dglproject.R;

/**
 * Created by Tortuvshin Byambaa on 3/3/2017.
 */
public class ProductListAdapter extends BaseAdapter{

    private Activity activity;
    public ImageLoader imageLoader;

    public ProductListAdapter(Activity act) {
        this.activity = act;
        imageLoader = new ImageLoader(act);
    }

    public int getCount() {

        return ActivityProductList.Menu_ID.size();
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

        holder.txtText.setText(ActivityProductList.Menu_name.get(position));
        holder.txtSubText.setText(ActivityProductList.Menu_price.get(position)+" "+ ActivityProductList.Currency);

        imageLoader.DisplayImage(DglConstants.AdminPageURL+ ActivityProductList.Menu_image.get(position), holder.imgThumb);

        return convertView;
    }

    static class ViewHolder {
        TextView txtText, txtSubText;
        ImageView imgThumb;
    }
}
