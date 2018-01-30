package cloud.techstar.ecommerce.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.techstar.ecommerce.R;

import org.json.JSONArray;
import org.json.JSONException;

import cloud.techstar.ecommerce.activity.ActivityProductDetail;
import cloud.techstar.ecommerce.utilities.TSConstants;
import cloud.techstar.imageloader.ImageLoader;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class CompanyProductAdapter extends BaseAdapter{

    final Context context;
    final JSONArray brandProducts;
    public ImageLoader imageLoader;
    private LayoutInflater inflater = null;

    public CompanyProductAdapter(Context context, JSONArray brandProducts) {
        this.context = context;
        this.brandProducts = brandProducts;
        imageLoader = new ImageLoader(context);
        inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    public int getCount() {
        return brandProducts.length();
    }

    public Object getItem(int position) {
        try {
            return brandProducts.getJSONObject(position);
        } catch (JSONException ex) {
            ex.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return position;
    }

    public long getItemId(int position) {
        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {

        View view = convertView;
        if(view == null)
            view = inflater.inflate(R.layout.product_list_item, null);


        TextView bpName = (TextView) convertView.findViewById(R.id.txtText);
        TextView bpPrice = (TextView) convertView.findViewById(R.id.txtSubText);
        ImageView imgThumb = (ImageView) convertView.findViewById(R.id.imgThumb);

        try {
            bpName.setText(brandProducts.getJSONObject(position).getString("name"));
            bpPrice.setText(brandProducts.getJSONObject(position).getString("price"));
            imageLoader.DisplayImage(TSConstants.WebURL+"/uploads/product_photos/"+brandProducts.getJSONObject(position).getString("folder"), imgThumb);
            view.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent iDetail = new Intent(context, ActivityProductDetail.class);
                    try {
                        iDetail.putExtra("product_id", brandProducts.getJSONObject(position).getString("id"));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    context.startActivity(iDetail);
                }
            });
        } catch (JSONException ex) {
            ex.printStackTrace();
        }

        return view;
    }
}
