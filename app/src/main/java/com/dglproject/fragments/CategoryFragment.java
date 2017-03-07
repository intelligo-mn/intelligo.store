package com.dglproject.fragments;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.activity.ActivityProductList;
import com.dglproject.adapters.CategoryAdapter;

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

public class CategoryFragment extends Fragment {

    public static final String ARG_PAGE = "ARG_PAGE";
    private int mPageNo;
    private static View rootView;

    GridView listCategory;
    ProgressBar prgLoading;
    TextView txtAlert;

    CategoryAdapter categoryAdapter;

    public static ArrayList<Long> Category_ID = new ArrayList<Long>();
    public static ArrayList<String> Category_name = new ArrayList<String>();
    public static ArrayList<String> Category_image = new ArrayList<String>();

    String CategoryAPI;
    int IOConnect = 0;

    public static CategoryFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(ARG_PAGE, pageNo);
        CategoryFragment fragment = new CategoryFragment();
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
        rootView = inflater.inflate(R.layout.fragment_category, container, false);

        prgLoading = (ProgressBar) rootView.findViewById(R.id.prgLoading);
        listCategory = (GridView) rootView.findViewById(R.id.listCategory);
        txtAlert = (TextView) rootView.findViewById(R.id.txtAlert);

        categoryAdapter = new CategoryAdapter(getActivity());

        CategoryAPI = DglConstants.CategoryAPI+"?accesskey="+ DglConstants.AccessKey;

        new getDataTask().execute();

        listCategory.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {
                Intent iMenuList = new Intent(getActivity(), ActivityProductList.class);
                iMenuList.putExtra("category_id", Category_ID.get(position));
                iMenuList.putExtra("category_name", Category_name.get(position));
                startActivity(iMenuList);
            }
        });
        return  rootView;
    }


    void clearData(){
        Category_ID.clear();
        Category_name.clear();
        Category_image.clear();
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

            if((Category_ID.size() > 0) && (IOConnect == 0)){
                listCategory.setVisibility(0);
                listCategory.setAdapter(categoryAdapter);
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
            HttpUriRequest request = new HttpGet(CategoryAPI);
            HttpResponse response = client.execute(request);
            InputStream atomInputStream = response.getEntity().getContent();
            BufferedReader in = new BufferedReader(new InputStreamReader(atomInputStream));

            String line;
            String str = "";
            while ((line = in.readLine()) != null){
                str += line;
            }

            JSONObject json = new JSONObject(str);
            JSONArray data = json.getJSONArray("data");

            for (int i = 0; i < data.length(); i++) {
                JSONObject object = data.getJSONObject(i);

                JSONObject category = object.getJSONObject("category");

                Category_ID.add(Long.parseLong(category.getString("category_id")));
                Category_name.add(category.getString("category_name"));
                Category_image.add(category.getString("category_image"));
                Log.d("Category name", Category_name.get(i));
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            IOConnect = 1;
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
