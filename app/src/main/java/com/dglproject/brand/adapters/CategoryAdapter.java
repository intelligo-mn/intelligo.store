package com.dglproject.brand.adapters;

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

import org.json.JSONArray;
import org.json.JSONException;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class CategoryAdapter extends BaseAdapter{

    final Context context;
    final JSONArray category;
    public ImageLoader imageLoader;

    private LayoutInflater inflater = null;

    public CategoryAdapter(Context context, JSONArray category) {
        this.context = context;
        this.category = category;
        imageLoader = new ImageLoader(context);
        inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    public int getCount() {
        return category.length();
    }

    public Object getItem(int position) {
        try {
            return category.getJSONObject(position);
        } catch (JSONException ex){
            ex.printStackTrace();
        }
        return position;
    }

    public long getItemId(int position) {
        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        View vi = convertView;
        if(vi == null)
            vi = inflater.inflate(R.layout.category_item, null);

        TextView txtText = (TextView) vi.findViewById(R.id.txtText);
        ImageView imgThumb = (ImageView) vi.findViewById(R.id.imgThumb);

        try {
            txtText.setText(category.getJSONObject(position).getString("name"));

            imageLoader.DisplayImage(Config.AdminPageURL+"/uploads/project_category_icons/"+
                category.getJSONObject(position).getString("folder")+
                "/"+
                category.getJSONObject(position).getString("icon_image"), imgThumb);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return vi;
    }
}
