package com.dglproject.brand.fragments;

import android.content.ContentValues;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.util.Pair;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.brand.DglConstants;
import com.dglproject.brand.activity.MainActivity;
import com.dglproject.brand.R;
import com.dglproject.brand.activity.ActivityProductDetail;
import com.dglproject.brand.adapters.AllProductAdapter;
import com.dglproject.brand.json.JSONParser;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.HttpConnectionParams;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static android.content.ContentValues.TAG;

/**
 * Created by Tortuvshin Byambaa on 2/24/2017.
 */

public class HomeItems extends Fragment {

    public static final String ARG_PAGE = "ARG_PAGE";
    private int mPageNo;
    private static View rootView;

    GridView homeItemList;
    ProgressBar prgLoading;
    TextView txtAlert;

    int IOConnect = 0;
    String Keyword;

    AllProductAdapter allProductAdapter;

    MainActivity mainActivity;

    public static ArrayList<Long> Product_ID = new ArrayList<Long>();
    public static ArrayList<String> Product_name = new ArrayList<String>();
    public static ArrayList<Double> Product_price = new ArrayList<Double>();
    public static ArrayList<String> Product_image = new ArrayList<String>();

    String ProductService;
    JSONObject jsonObject;
    JSONArray jsonArrayProducts;
    JSONParser jsonParser = new JSONParser();

    public static HomeItems newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(ARG_PAGE, pageNo);
        HomeItems fragment = new HomeItems();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mPageNo = getArguments().getInt(ARG_PAGE);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.home_items, container, false);
        prgLoading = (ProgressBar) rootView.findViewById(R.id.homeLoading);
        homeItemList = (GridView) rootView.findViewById(R.id.homeItemList);
        txtAlert = (TextView) rootView.findViewById(R.id.homeTxtAlert);

        ProductService = DglConstants.ProductService;

        mainActivity = new MainActivity();

        allProductAdapter = new AllProductAdapter(getActivity());

        new getDataTask().execute();

        homeItemList.setNumColumns(2);

        homeItemList.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {

                Intent iDetail = new Intent(getActivity(), ActivityProductDetail.class);
                iDetail.putExtra("product_id", Product_ID.get(position));
                startActivity(iDetail);
            }
        });
        return rootView;
    }

    public void searchData(String a){

        try {
            Keyword = URLEncoder.encode(a, "utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        ProductService += "&keyword="+Keyword;

        IOConnect = 0;
        homeItemList.invalidateViews();
        clearData();
        new getDataTask().execute();
    }

    public void clearData(){
        Product_ID.clear();
        Product_name.clear();
        Product_price.clear();
        Product_image.clear();
    }

    public class getDataTask extends AsyncTask<Void, Void, Void> {

        getDataTask(){
            if(!prgLoading.isShown()){
                prgLoading.setVisibility(0);
                txtAlert.setVisibility(8);
            }
        }

        @Override
        protected Void doInBackground(Void... arg0) {
            parseJSONData();
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {
            prgLoading.setVisibility(8);

            if(Product_ID.size() > 0){
                homeItemList.setVisibility(0);
                homeItemList.setAdapter(allProductAdapter);
            } else {
                txtAlert.setVisibility(0);
            }
        }
    }

    public void parseJSONData(){

        clearData();
        try {
            HttpClient client = new DefaultHttpClient();
            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
            HttpUriRequest request = new HttpGet(ProductService+"?accesskey="+String.valueOf(DglConstants.generateAccessKey())+"&state=r");
            HttpResponse response = client.execute(request);
            InputStream atomInputStream = response.getEntity().getContent();
            BufferedReader in = new BufferedReader(new InputStreamReader(atomInputStream));

            String line;
            String str = "";
            while ((line = in.readLine()) != null){
                str += line;
            }

            jsonObject = new JSONObject("{product=" + str+"}");
            jsonArrayProducts = jsonObject.getJSONArray("product");

            for (int i=0; i<jsonArrayProducts.length(); i++){

                Product_ID.add(jsonArrayProducts.getJSONObject(i).getLong("id"));
                Product_name.add(jsonArrayProducts.getJSONObject(i).getString("name"));
                Product_price.add(jsonArrayProducts.getJSONObject(i).getDouble("price"));
                Product_image.add(jsonArrayProducts.getJSONObject(i).getString("folder"));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}