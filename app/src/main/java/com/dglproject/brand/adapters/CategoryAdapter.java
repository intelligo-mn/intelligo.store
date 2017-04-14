package com.dglproject.brand.adapters;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.dglproject.brand.Config;
import com.dglproject.brand.fragments.CategoryFragment;
import com.dglproject.brand.utilities.ImageLoader;
import com.dglproject.brand.R;

/**
 * Created by Tortuvshin Byambaa on 3/3/2017.
 */
public class CategoryAdapter extends BaseAdapter{

    private Activity activity;
    public ImageLoader imageLoader;

    public CategoryAdapter(Activity act) {
        this.activity = act;
        imageLoader = new ImageLoader(act);
    }

    public int getCount() {
        return CategoryFragment.Category_ID.size();
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
            convertView = inflater.inflate(R.layout.category_item, null);
            holder = new ViewHolder();

            convertView.setTag(holder);
        }else{
            holder = (ViewHolder) convertView.getTag();
        }

        holder.txtText = (TextView) convertView.findViewById(R.id.txtText);
        holder.imgThumb = (ImageView) convertView.findViewById(R.id.imgThumb);

        holder.txtText.setText(CategoryFragment.Category_name.get(position));
        imageLoader.DisplayImage(Config.AdminPageURL+"/uploads/project_category_icons/"+ CategoryFragment.Category_image.get(position), holder.imgThumb);

        return convertView;
    }

    static class ViewHolder {
        TextView txtText;
        ImageView imgThumb;
    }
}
