package com.dglproject.fragments;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.activity.ActivityProductDetail;
import com.dglproject.adapters.AllProductAdapter;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.util.ArrayList;

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

    AllProductAdapter allProductAdapter;

    public static ArrayList<Long> Product_ID = new ArrayList<Long>();
    public static ArrayList<String> Product_name = new ArrayList<String>();
    public static ArrayList<Double> Product_price = new ArrayList<Double>();
    public static ArrayList<String> Product_image = new ArrayList<String>();

    String AllProductApi;

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

        AllProductApi = DglConstants.AllProductApi +"?accesskey="+DglConstants.AccessKey;

        new getDataTask().execute();

        allProductAdapter = new AllProductAdapter(getActivity());

        homeItemList.setNumColumns(3);

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

    void clearData(){
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
            }else{
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
            HttpUriRequest request = new HttpGet(AllProductApi);
            HttpResponse response = client.execute(request);
            InputStream atomInputStream = response.getEntity().getContent();

            BufferedReader in = new BufferedReader(new InputStreamReader(atomInputStream));

            String line;
            String str = "";
            while ((line = in.readLine()) != null){
                str += line;
            }

            JSONObject json = new JSONObject(str);
            JSONArray data = json.getJSONArray("data"); // this is the "items: [ ] part

            for (int i = 0; i < data.length(); i++) {
                JSONObject object = data.getJSONObject(i);

                JSONObject product = object.getJSONObject("product_all");

                Product_ID.add(Long.parseLong(product.getString("product_id")));
                Product_name.add(product.getString("product_name"));
                Product_price.add(Double.valueOf(product.getDouble("price")));
                Product_image.add(product.getString("product_image"));

            }

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }


    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
