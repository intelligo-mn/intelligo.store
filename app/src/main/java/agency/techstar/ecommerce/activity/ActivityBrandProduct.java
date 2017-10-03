package agency.techstar.ecommerce.activity;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.techstar.ecommerce.R;
import agency.techstar.ecommerce.adapters.ProductAdapter;
import agency.techstar.ecommerce.utilities.TSConstants;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;

import agency.techstar.ecommerce.widgets.TSProgressBar;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityBrandProduct extends AppCompatActivity {
    private static final String TAG = ActivityBrandProduct.class.getSimpleName();
    private ListView listMenu;
    private TSProgressBar prgLoading;
    private TextView txtTitle;
    private EditText edtKeyword;
    private ImageButton btnSearch;
    private TextView txtAlert;
    private String brandId;
    private String brandName;
    private String Keyword;
    private Handler mHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_list);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        prgLoading = (TSProgressBar) findViewById(R.id.prgLoading);
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
                listMenu.invalidateViews();
                getBrandProduct();
                return true;

            case android.R.id.home:
                this.finish();
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
    }

    public void getBrandProduct (){
        prgLoading.setVisibility(View.VISIBLE);
        String uri = TSConstants.ProductService;
        RequestBody formBody = new FormBody.Builder()
                .add("state", "r")
                .add("brand_id", brandId)
                .build();
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(uri)
                .post(formBody)
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
