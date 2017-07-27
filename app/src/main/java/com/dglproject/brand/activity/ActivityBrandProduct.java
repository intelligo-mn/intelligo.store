package com.dglproject.brand.activity;

import android.content.Intent;
import android.content.res.Configuration;
import android.opengl.Visibility;
import android.os.AsyncTask;
import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.adapters.BrandProductAdapter;
import com.dglproject.brand.adapters.ProductAdapter;
import com.dglproject.brand.utilities.DGLConstants;

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

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityBrandProduct extends AppCompatActivity {
    private static final String TAG = ActivityBrandProduct.class.getSimpleName();
    private ListView listMenu;
    private ProgressBar prgLoading;
    private TextView txtTitle;
    private EditText edtKeyword;
    private ImageButton btnSearch;
    private TextView txtAlert;

    private JSONObject jsonObject;
    private JSONArray jsonArrayProducts;

    private String ProductService;
    private int IOConnect = 0;
    private String brandId;
    private String brandName;
    private String Keyword;
    private Handler mHandler;

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

        Intent iGet = getIntent();
        brandId = iGet.getStringExtra("brand_id");
        brandName = iGet.getStringExtra("brand_name");

        Log.d("","Brand ID: "+brandId);

        getSupportActionBar().setTitle(brandName);

        mHandler = new Handler(Looper.getMainLooper());

        listMenu.setVisibility(View.VISIBLE);

        getBrandProduct();

//        btnSearch.setOnClickListener(new View.OnClickListener() {
//
//            public void onClick(View arg0) {
//                try {
//                    Keyword = URLEncoder.encode(edtKeyword.getText().toString(), "utf-8");
//                } catch (UnsupportedEncodingException e) {
//                    e.printStackTrace();
//                }
//                ProductService += "&keyword="+Keyword;
//                IOConnect = 0;
//                listMenu.invalidateViews();
//                clearData();
//                new getDataTask().execute();
//            }
//        });

//        listMenu.setOnItemClickListener(new AdapterView.OnItemClickListener() {
//
//            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
//                                    long arg3) {
//
//                Intent iDetail = new Intent(ActivityBrandProduct.this, ActivityProductDetail.class);
//                iDetail.putExtra("product_id", Product_ID.get(position));
//                startActivity(iDetail);
//            }
//        });
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
//            	ProductApi += "&keyword="+Keyword;
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
                Intent iMyOrder = new Intent(ActivityBrandProduct.this, ActivityCart.class);
                startActivity(iMyOrder);
                return true;

            case R.id.refresh:
                IOConnect = 0;
                listMenu.invalidateViews();
//                clearData();
//                new getDataTask().execute();
                return true;

            case android.R.id.home:
                this.finish();
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
    }

//    void clearData(){
//        Product_ID.clear();
//        Product_name.clear();
//        Product_price.clear();
//        Product_image.clear();
//    }

//    public class getDataTask extends AsyncTask<Void, Void, Void>{
//
//        getDataTask(){
//            if(!prgLoading.isShown()){
//                prgLoading.setVisibility(0);
//                txtAlert.setVisibility(8);
//            }
//        }
//
//        @Override
//        protected Void doInBackground(Void... arg0) {
//            parseJSONData();
//            return null;
//        }
//
//        @Override
//        protected void onPostExecute(Void result) {
//            prgLoading.setVisibility(8);
//
//            if(Product_ID.size() > 0){
//                listMenu.setVisibility(0);
//                listMenu.setAdapter(brandProductAdapter);
//            }else{
//                txtAlert.setVisibility(0);
//                Toast.makeText(getApplicationContext(), getString(R.string.no_product), Toast.LENGTH_SHORT).show();
//            }
//
//        }
//    }

//    public void parseJSONData(){
//
//        clearData();
//
//        try {
//            HttpClient client = new DefaultHttpClient();
//            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
//            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
//            HttpUriRequest request = new HttpGet(ProductService);
//            HttpResponse response = client.execute(request);
//            InputStream atomInputStream = response.getEntity().getContent();
//
//            BufferedReader in = new BufferedReader(new InputStreamReader(atomInputStream));
//
//            String line;
//            String str = "";
//            while ((line = in.readLine()) != null){
//                str += line;
//            }
//
//            Log.d("","JSON: "+str);
//            jsonObject = new JSONObject("{product=" + str+"}");
//            jsonArrayProducts = jsonObject.getJSONArray("product");
//
//            for (int i = 0; i < jsonArrayProducts.length(); i++) {
//
//                Product_ID.add(jsonArrayProducts.getJSONObject(i).getLong("id"));
//                Product_name.add(jsonArrayProducts.getJSONObject(i).getString("name"));
//                Product_price.add(jsonArrayProducts.getJSONObject(i).getDouble("price"));
//                Product_image.add(jsonArrayProducts.getJSONObject(i).getString("folder"));
//
//            }
//
//        } catch (MalformedURLException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (JSONException e) {
//            e.printStackTrace();
//        }
//    }

    public void getBrandProduct (){
        prgLoading.setVisibility(View.VISIBLE);
        String uri = DGLConstants.ProductService+"?state=r&brand_id="+brandId;

        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(uri)
                .build();

        Log.e(TAG, request.toString());

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("Request Error ", "Алдаа:" + e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                final String res = response.body().string();
                mHandler.post(() -> {
                    try {

                        JSONArray prodItems = new JSONArray(res);
                        Log.e("Response: ", prodItems + "");
                        prgLoading.setVisibility(View.GONE);
                        listMenu.setAdapter(new ProductAdapter(ActivityBrandProduct.this, prodItems));
                    } catch (JSONException ex){
                        ex.printStackTrace();
                    }
                });
            }
        });
    }

    @Override
    protected void onDestroy() {
        //brandProductAdapter.imageLoader.clearCache();
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
