package com.dglproject;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.adapter.CategoryAdapter;

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


public class CategoryActivity extends AppCompatActivity {

    GridView listCategory;
    ProgressBar prgLoading;
    TextView txtAlert;

    CategoryAdapter categoryAdapter;

    public static ArrayList<Long> Category_ID = new ArrayList<Long>();
    public static ArrayList<String> Category_name = new ArrayList<String>();
    public static ArrayList<String> Category_image = new ArrayList<String>();

    String CategoryAPI;
    int IOConnect = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_category);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setHomeButtonEnabled(true);
        getSupportActionBar().setTitle("Ангилал");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        listCategory = (GridView) findViewById(R.id.listCategory);
        txtAlert = (TextView) findViewById(R.id.txtAlert);

        categoryAdapter = new CategoryAdapter(CategoryActivity.this);

        CategoryAPI = DglConstants.CategoryAPI+"?accesskey="+ DglConstants.AccessKey;

        new getDataTask().execute();

        listCategory.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {
                // TODO Auto-generated method stub
                Intent iMenuList = new Intent(CategoryActivity.this, ProductListActivity.class);
                iMenuList.putExtra("category_id", Category_ID.get(position));
                iMenuList.putExtra("category_name", Category_name.get(position));
                startActivity(iMenuList);
            }
        });

    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_category, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()) {
            case R.id.cart:
                Intent iMyOrder = new Intent(CategoryActivity.this, CartActivity.class);
                startActivity(iMyOrder);
                return true;

            case R.id.refresh:
                IOConnect = 0;
                listCategory.invalidateViews();
                clearData();
                new getDataTask().execute();
                return true;

            case android.R.id.home:
                this.finish();
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
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
            // TODO Auto-generated method stub
            parseJSONData();
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {
            // TODO Auto-generated method stub
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

            // parse json data and store into arraylist variables
            JSONObject json = new JSONObject(str);
            JSONArray data = json.getJSONArray("data");

            for (int i = 0; i < data.length(); i++) {
                JSONObject object = data.getJSONObject(i);

                JSONObject category = object.getJSONObject("Category");

                Category_ID.add(Long.parseLong(category.getString("Category_ID")));
                Category_name.add(category.getString("Category_name"));
                Category_image.add(category.getString("Category_image"));
                Log.d("Category name", Category_name.get(i));

            }


        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            IOConnect = 1;
            e.printStackTrace();
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    protected void onDestroy() {
        // TODO Auto-generated method stub
        //categoryAdapter.imageLoader.clearCache();
        listCategory.setAdapter(null);
        super.onDestroy();
    }


    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }

    @Override
    public void onBackPressed() {
        // TODO Auto-generated method stub
        super.onBackPressed();
        finish();
    }
}
