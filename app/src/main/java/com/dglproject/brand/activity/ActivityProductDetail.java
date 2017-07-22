package com.dglproject.brand.activity;

import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.adapters.ProductAdapter;
import com.dglproject.brand.database.CartTable;
import com.dglproject.brand.models.CartProducts;
import com.dglproject.brand.utilities.DGLConstants;
import com.dglproject.brand.utilities.PrefManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.text.DecimalFormat;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityProductDetail extends AppCompatActivity {

    ImageView imgPreview;
    TextView txtText, txtSubText;
    WebView txtDescription;
    ProgressBar prgLoading;
    TextView txtAlert;
    TextView totalOrderView;
    TextView totalCostView;

    Button increaseTotalCostButton;
    Button decreaseTotalCostButton;
    Button addToListButton;

    CoordinatorLayout coordinatorLayout;

    String Product_image, Product_name, Product_description;

    double totalCostDouble;
    int totalOrder;
    String imageTitleString;

    double Product_price;

    private Handler mHandler;

    PrefManager prefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_detail);

        prefManager = new PrefManager(getApplicationContext());

        mHandler = new Handler(Looper.getMainLooper());

        final Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        final android.support.v7.app.ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }

        CollapsingToolbarLayout collapsingToolbar = (CollapsingToolbarLayout) findViewById(R.id.collapsing_toolbar);
        collapsingToolbar.setTitle("");

        imgPreview = (ImageView) findViewById(R.id.imgPreview);
        txtText = (TextView) findViewById(R.id.txtText);
        txtSubText = (TextView) findViewById(R.id.txtSubText);

        txtDescription = (WebView) findViewById(R.id.txtDescription);

        coordinatorLayout = (CoordinatorLayout) findViewById(R.id.main_content);

        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        txtAlert = (TextView) findViewById(R.id.txtAlert);


        increaseTotalCostButton = (Button)findViewById(R.id.increaseTotalCostButton);
        addToListButton = (Button)findViewById(R.id.addToListButton);
        decreaseTotalCostButton = (Button)findViewById(R.id.decreaseTotalCostButton);

        increaseTotalCostButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                increaseTotalCost();
            }
        });

        decreaseTotalCostButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                decreaseTotalCost();
            }
        });

        addToListButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                addToList();
            }
        });

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.btnAdd);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent sendInt = new Intent(Intent.ACTION_SEND);
                sendInt.putExtra(Intent.EXTRA_SUBJECT, Product_name);
                sendInt.putExtra(Intent.EXTRA_TEXT, Product_description + "\n" + Product_image + "\n");
                sendInt.setType("text/plain");
                startActivity(Intent.createChooser(sendInt, getString(R.string.title_app_share)));
            }
        });

        com.github.clans.fab.FloatingActionButton fab2 = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.send_sms);
        fab2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

//                if (prefManager.isLoggedIn()) {
                    startActivity(new Intent(getApplicationContext(), ActivityCart.class));
//                } else {
//                    Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
//                            .setAction(R.string.login, new View.OnClickListener() {
//                                @Override
//                                public void onClick(View v) {
//                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
//                                }
//                            }).show();
//                }
            }
        });

        com.github.clans.fab.FloatingActionButton fab3 = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.send_mail);
        fab3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (prefManager.isLoggedIn()) {

                } else {
                    Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                            .setAction(getString(R.string.login), new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
                                }
                            }).show();
                }
            }
        });

//        new getDataTask().execute();

//        getSupportActionBar().setTitle(Product_name);
//        displayData();
        getProduct();
//        com.github.clans.fab.FloatingActionButton fabShare = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.share);
//        fabShare.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Intent sendInt = new Intent(Intent.ACTION_SEND);
//                sendInt.putExtra(Intent.EXTRA_SUBJECT, Product_name);
//                sendInt.putExtra(Intent.EXTRA_TEXT, Product_description + "\n" + Product_image + "\n");
//                sendInt.setType("text/plain");
//                startActivity(Intent.createChooser(sendInt, getString(R.string.title_app_share)));
//            }
//        });

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                finish();
                break;
            default:
                return super.onOptionsItemSelected(item);
        }
        return false;   
    }

    public void displayData() {
        totalCostView = (TextView) findViewById(R.id.total_cost_text_view);
        totalCostView.setText(getString(R.string.total_cost) +" : "+ new DecimalFormat("#.##").format(totalCostDouble)+" ₮");

        totalOrderView = (TextView) findViewById(R.id.total_item_number);
        totalOrderView.setText(getString(R.string.total_number)+" : " + totalOrder);
    }

    public void increaseTotalCost() {
        totalOrder++;
        totalCostDouble += Product_price;
        displayUpdate();
    }

    public void decreaseTotalCost() {
        totalOrder = (--totalOrder < 1) ? 1 : totalOrder;
        totalCostDouble -= Product_price;
        totalCostDouble = (totalCostDouble < Product_price) ? Product_price : totalCostDouble;
        displayUpdate();
    }

    public void displayUpdate() {
        totalCostView = (TextView) findViewById(R.id.total_cost_text_view);
        totalCostView.setText(getString(R.string.total_cost)+" : " + new DecimalFormat("#.##").format(totalCostDouble)+" ₮");

        totalOrderView = (TextView) findViewById(R.id.total_item_number);
        totalOrderView.setText(getString(R.string.total_number)+" : " + totalOrder);
    }

    public void addToList() {
        CartTable productAdapter = new CartTable(this);;
        CartProducts item = new CartProducts(Product_name, Product_description, Product_price, imageTitleString, totalCostDouble, totalOrder);
        productAdapter.addProduct(item);
        Toast.makeText(getApplicationContext(), getString(R.string.cart_add_success), Toast.LENGTH_SHORT).show();

    }
//
//    public class getDataTask extends AsyncTask<Void, Void, Void> {
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
//
//            getProduct();
//            return null;
//        }
//
//        @Override
//        protected void onPostExecute(Void result) {
//            prgLoading.setVisibility(View.GONE);
//            if ((Product_name != null) && IOConnect == 0) {
//                coordinatorLayout.setVisibility(View.VISIBLE);
//                  Picasso.with(getApplicationContext()).load(Config.AdminPageURL + "/uploads/product_photos/" + Product_image).placeholder(R.drawable.loading).into(imgPreview, new Callback() {
//                    @Override
//                    public void onSuccess() {
//                        Bitmap bitmap = ((BitmapDrawable) imgPreview.getDrawable()).getBitmap();
//                        Palette.from(bitmap).generate(new Palette.PaletteAsyncListener() {
//                            @Override
//                            public void onGenerated(Palette palette) {
//                            }
//                        });
//                    }
//
//                    @Override
//                    public void onError() {
//
//                    }
//                });
//
//                txtText.setText(Product_name);
//                txtSubText.setText(getString(R.string.price)+" : " + Product_price + " ₮" );
//                txtDescription.loadDataWithBaseURL("", Product_description, "text/html", "UTF-8", "");
//                txtDescription.setBackgroundColor(Color.parseColor("#ffffff"));
//
//                txtDescription.getSettings().setDefaultTextEncodingName("UTF-8");
//                WebSettings webSettings = txtDescription.getSettings();
//                Resources res = getResources();
//
//            } else {
//                txtAlert.setVisibility(View.VISIBLE);
//            }
//        }
//    }

    public void getProduct () {
        prgLoading.setVisibility(View.VISIBLE);

        Intent iGet = getIntent();

        String uri = DGLConstants.ProductService+"?state=r&product_id="+ iGet.getStringExtra("product_id");
//        String uri = DGLConstants.ProductService+"?state=r";

        Log.e("Дуудсан холбоос: ", uri);
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(uri)
                .addHeader("Content-Type","text/json;charset=utf-8")
                .build();

        Log.e("Request: ", request.toString());

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("Request Error ", "Алдаа:" + e.getMessage());
            }

            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                final String res = response.body().string();

                Log.e("Res: ", ""+res);
                mHandler.post(() -> {
                    try {
                        JSONObject prod = new JSONObject(String.valueOf(res));
                        JSONArray prodItems = prod.getJSONArray("item");
//                        prodItems.getString("name");
//                        Log.e("Response: ", prodItems + "");
//                        for (int i = 0; i < prodItems.length(); i++) {
//                            Product_image = data.getJSONObject(i).getString("folder");
//                            Product_name = data.getJSONObject(i).getString("name");
//                            Product_price = data.getJSONObject(i).getDouble("price");
//                            Product_description = data.getJSONObject(i).getString("description");
//                            Product_quantity = data.getJSONObject(i).getInt("currency");

                            txtText.setText(prod.getString("name"));
//                        }
                        prgLoading.setVisibility(View.GONE);

                    } catch (Exception ex){
                        ex.printStackTrace();
                    }

                });
            }
        });
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
