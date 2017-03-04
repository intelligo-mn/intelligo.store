package com.dglproject.activity;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.adapters.ProductListAdapter;

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
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.text.DecimalFormat;
import java.util.ArrayList;

public class ProductListActivity extends AppCompatActivity {

    ListView listMenu;
    ProgressBar prgLoading;
    //TextView txtTitle;
    EditText edtKeyword;
    ImageButton btnSearch;
    TextView txtAlert;

    static double Tax;
    public static String Currency;

    ProductListAdapter productListAdapter;

    public static ArrayList<Long> Menu_ID = new ArrayList<Long>();
    public static ArrayList<String> Menu_name = new ArrayList<String>();
    public static ArrayList<Double> Menu_price = new ArrayList<Double>();
    public static ArrayList<String> Menu_image = new ArrayList<String>();

    String MenuAPI;
    String TaxCurrencyAPI;
    int IOConnect = 0;
    long Category_ID;
    String Category_name;
    String Keyword;

    DecimalFormat formatData = new DecimalFormat("#.##");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_list);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        listMenu = (ListView) findViewById(R.id.listMenu);
        edtKeyword = (EditText) findViewById(R.id.edtKeyword);
        btnSearch = (ImageButton) findViewById(R.id.btnSearch);
        txtAlert = (TextView) findViewById(R.id.txtAlert);

        MenuAPI = DglConstants.MenuAPI+"?accesskey="+DglConstants.AccessKey+"&category_id=";

        TaxCurrencyAPI = DglConstants.TaxCurrencyAPI+"?accesskey="+DglConstants.AccessKey;

        Intent iGet = getIntent();
        Category_ID = iGet.getLongExtra("category_id",0);
        Category_name = iGet.getStringExtra("category_name");
        MenuAPI += Category_ID;

//        txtTitle.setText(Category_name);

        productListAdapter = new ProductListAdapter(ProductListActivity.this);

        new getTaxCurrency().execute();

        btnSearch.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {
                try {
                    Keyword = URLEncoder.encode(edtKeyword.getText().toString(), "utf-8");
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                MenuAPI += "&keyword="+Keyword;
                IOConnect = 0;
                listMenu.invalidateViews();
                clearData();
                new getDataTask().execute();
            }
        });

        listMenu.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {

                Intent iDetail = new Intent(ProductListActivity.this, ProductDetailActivity.class);
                iDetail.putExtra("menu_id", Menu_ID.get(position));
                startActivity(iDetail);
            }
        });
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_category, menu);

//		final SearchView searchView = (SearchView) menu.findItem(R.id.search).getActionView();
//        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
//
//        	@Override
//            public boolean onQueryTextChange(String newText) {
//                return true;
//            }
//
//        	@Override
//            public boolean onQueryTextSubmit(String query) {
//        		try {
//					Keyword = URLEncoder.encode(query.toString(), "utf-8");
//				} catch (UnsupportedEncodingException e) {
//					e.printStackTrace();
//				}
//
//            	MenuAPI += "&keyword="+Keyword;
// 				IOConnect = 0;
//     			listMenu.invalidateViews();
//     			clearData();
// 				new getDataTask().execute();
//
//                return true;
//            }
//        });
//
//        searchView.addOnAttachStateChangeListener(new OnAttachStateChangeListener() {
//
//            @Override
//            public void onViewDetachedFromWindow(View arg0) {
//            	IOConnect = 0;
//    			listMenu.invalidateViews();
//    			clearData();
//    			new getDataTask().execute();
//            }
//
//            @Override
//            public void onViewAttachedToWindow(View arg0) {
//                // search was opened
//            }
//        });

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()) {
            case R.id.cart:
                Intent iMyOrder = new Intent(ProductListActivity.this, ActivityCart.class);
                startActivity(iMyOrder);
                return true;

            case R.id.refresh:
                IOConnect = 0;
                listMenu.invalidateViews();
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

    public class getTaxCurrency extends AsyncTask<Void, Void, Void> {

        getTaxCurrency(){
            if(!prgLoading.isShown()){
                prgLoading.setVisibility(0);
                txtAlert.setVisibility(8);
            }
        }

        @Override
        protected Void doInBackground(Void... arg0) {
            parseJSONDataTax();
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {
            prgLoading.setVisibility(8);

            if((Currency != null) && IOConnect == 0){
                new getDataTask().execute();
            }else{
                txtAlert.setVisibility(0);
            }
        }
    }

    public void parseJSONDataTax(){
        try {

            HttpClient client = new DefaultHttpClient();
            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
            HttpUriRequest request = new HttpGet(TaxCurrencyAPI);
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

            JSONObject object_tax = data.getJSONObject(0);
            JSONObject tax = object_tax.getJSONObject("tax_n_currency");

            Tax = Double.parseDouble(tax.getString("Value"));

            JSONObject object_currency = data.getJSONObject(1);
            JSONObject currency = object_currency.getJSONObject("tax_n_currency");

            Currency = currency.getString("Value");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            IOConnect = 1;
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    void clearData(){
        Menu_ID.clear();
        Menu_name.clear();
        Menu_price.clear();
        Menu_image.clear();
    }

    public class getDataTask extends AsyncTask<Void, Void, Void>{

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

            if(Menu_ID.size() > 0){
                listMenu.setVisibility(0);
                listMenu.setAdapter(productListAdapter);
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
            HttpUriRequest request = new HttpGet(MenuAPI);
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

                JSONObject menu = object.getJSONObject("Menu");

                Menu_ID.add(Long.parseLong(menu.getString("Menu_ID")));
                Menu_name.add(menu.getString("Menu_name"));
                Menu_price.add(Double.valueOf(formatData.format(menu.getDouble("Price"))));
                Menu_image.add(menu.getString("Menu_image"));

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
    protected void onDestroy() {
        //productListAdapter.imageLoader.clearCache();
        listMenu.setAdapter(null);
        super.onDestroy();
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }


}
