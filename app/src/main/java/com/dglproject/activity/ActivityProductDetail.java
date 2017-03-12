package com.dglproject.activity;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.database.SQLException;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Environment;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.Toolbar;
import android.text.InputFilter;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.database.DBHelper;
import com.dglproject.utils.ImageLoader;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

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
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DecimalFormat;
public class ActivityProductDetail extends AppCompatActivity {

    ImageView imgPreview;
    TextView txtText, txtSubText;
    WebView txtDescription;
    FloatingActionButton btnAdd;
//    NestedScrollView sclDetail;
    ProgressBar prgLoading;
    TextView txtAlert;

    CoordinatorLayout coordinatorLayout;

    static DBHelper dbhelper;

    ImageLoader imageLoader;

    String Product_image, Product_name, Product_serve, Product_description;
    double Product_price;
    int Product_quantity;
    long Product_ID;
    String ProductDetailAPI;
    int IOConnect = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_detail);

        final Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        final android.support.v7.app.ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }

        CollapsingToolbarLayout collapsingToolbar = (CollapsingToolbarLayout) findViewById(R.id.collapsing_toolbar);
        collapsingToolbar.setTitle("");

        imgPreview = (ImageView) findViewById(R.id.imgPreview);
        txtText = (TextView) findViewById(R.id.txtText);
        txtSubText = (TextView) findViewById(R.id.txtSubText);

        //txtDescription = (WebView) findViewById(R.id.txtDescription);
        txtDescription = (WebView) findViewById(R.id.txtDescription);

        coordinatorLayout = (CoordinatorLayout) findViewById(R.id.main_content);

        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        txtAlert = (TextView) findViewById(R.id.txtAlert);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.btnAdd);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                inputDialog();
            }
        });

        com.github.clans.fab.FloatingActionButton fab2 = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.cart);
        fab2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), ActivityCart.class));
            }
        });

        com.github.clans.fab.FloatingActionButton fab3 = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.checkout);
        fab3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), ActivityCheckout.class));
            }
        });

        //imageLoader = new ImageLoader(ActivityMenuDetail.this);
        dbhelper = new DBHelper(this);


//        imageLoader = new ImageLoader(ActivityProductDetail.this);

        dbhelper = new DBHelper(this);

        Intent iGet = getIntent();

        Product_ID = iGet.getLongExtra("product_id", 0);

        ProductDetailAPI = DglConstants.ProductDetailAPI +"?accesskey="+ DglConstants.AccessKey+"&product_id="+ Product_ID;

        new getDataTask().execute();

        getSupportActionBar().setTitle(Product_name);

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

    void inputDialog(){

        try{
            dbhelper.openDataBase();
        }catch(SQLException sqle){
            throw sqle;
        }

        AlertDialog.Builder alert = new AlertDialog.Builder(this);

        alert.setTitle(R.string.order);
        alert.setMessage(R.string.number_order);
        alert.setCancelable(false);
        final EditText edtQuantity = new EditText(this);
        int maxLength = 3;
        edtQuantity.setFilters(new InputFilter[] {new InputFilter.LengthFilter(maxLength)});
        edtQuantity.setInputType(InputType.TYPE_CLASS_NUMBER);
        alert.setView(edtQuantity);

        alert.setPositiveButton("Нэмэх", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {
                String temp = edtQuantity.getText().toString();
                int quantity = 0;

                if(!temp.equalsIgnoreCase("")){
                    quantity = Integer.parseInt(temp);
                    if(dbhelper.isDataExist(Product_ID)){
                        dbhelper.updateData(Product_ID, quantity, (Product_price *quantity));
                    }else{
                        dbhelper.addData(Product_ID, Product_name, quantity, (Product_price *quantity));
                    }
                }else{
                    dialog.cancel();
                }
            }
        });

        alert.setNegativeButton("Буцах", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {

                dialog.cancel();
            }
        });

        alert.show();
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
            prgLoading.setVisibility(View.GONE);
            if ((Product_name != null) && IOConnect == 0) {
                coordinatorLayout.setVisibility(View.VISIBLE);

                Picasso.with(getApplicationContext()).load(DglConstants.AdminPageURL + "/" + Product_image).placeholder(R.drawable.loading).into(imgPreview, new Callback() {
                    @Override
                    public void onSuccess() {
                        Bitmap bitmap = ((BitmapDrawable) imgPreview.getDrawable()).getBitmap();
                        Palette.from(bitmap).generate(new Palette.PaletteAsyncListener() {
                            @Override
                            public void onGenerated(Palette palette) {
                            }
                        });
                    }

                    @Override
                    public void onError() {

                    }
                });

                txtText.setText(Product_name);
                txtSubText.setText("Үнэ : " + Product_price + " ₮" );
                txtDescription.loadDataWithBaseURL("", Product_description, "text/html", "UTF-8", "");
                txtDescription.setBackgroundColor(Color.parseColor("#ffffff"));

                txtDescription.getSettings().setDefaultTextEncodingName("UTF-8");
                WebSettings webSettings = txtDescription.getSettings();
                Resources res = getResources();
//                int fontSize = res.getInteger(R.integer.font_size);
//                webSettings.setDefaultFontSize(fontSize);

            } else {
                txtAlert.setVisibility(View.VISIBLE);
            }
        }
    }

    public void parseJSONData(){

        try {

            HttpClient client = new DefaultHttpClient();
            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
            HttpUriRequest request = new HttpGet(ProductDetailAPI);
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

                JSONObject menu = object.getJSONObject("product_detail");

                Product_image = menu.getString("product_image");
                Product_name = menu.getString("product_name");
                Product_price = menu.getDouble("price");
                Product_serve = menu.getString("serve_for");
                Product_description = menu.getString("description");
                Product_quantity = menu.getInt("quantity");

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
    public void onBackPressed() {
        super.onBackPressed();
//        dbhelper.close();
        finish();
    }

    @Override
    protected void onDestroy() {
        //imageLoader.clearCache();
        super.onDestroy();
    }


    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
