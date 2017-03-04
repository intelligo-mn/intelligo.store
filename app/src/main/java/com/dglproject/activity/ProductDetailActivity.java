package com.dglproject.activity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.database.SQLException;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.InputFilter;
import android.text.InputType;
import android.util.DisplayMetrics;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.ScrollView;
import android.widget.TextView;

import com.dglproject.DBHelper;
import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.utils.ImageLoader;

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
import java.text.DecimalFormat;

public class ProductDetailActivity extends AppCompatActivity {

    ImageView imgPreview;
    TextView txtText, txtSubText;
    WebView txtDescription;
    Button btnAdd;
    ScrollView sclDetail;
    ProgressBar prgLoading;
    TextView txtAlert;

    static DBHelper dbhelper;

    ImageLoader imageLoader;

    String Menu_image, Menu_name, Menu_serve, Menu_description;
    double Menu_price;
    int Menu_quantity;
    long Menu_ID;
    String MenuDetailAPI;
    int IOConnect = 0;

    DecimalFormat formatData = new DecimalFormat("#.##");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_detail);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);


        imgPreview = (ImageView) findViewById(R.id.imgPreview);
        txtText = (TextView) findViewById(R.id.txtText);
        txtSubText = (TextView) findViewById(R.id.txtSubText);
        txtDescription = (WebView) findViewById(R.id.txtDescription);
        btnAdd = (Button) findViewById(R.id.btnAdd);
        //btnShare = (Button) findViewById(R.id.btnShare);
        sclDetail = (ScrollView) findViewById(R.id.sclDetail);
        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        txtAlert = (TextView) findViewById(R.id.txtAlert);

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);
        int wPix = dm.widthPixels;
        int hPix = wPix / 2 + 50;

        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(wPix, hPix);
        imgPreview.setLayoutParams(lp);

        imageLoader = new ImageLoader(ProductDetailActivity.this);
        dbhelper = new DBHelper(this);

        Intent iGet = getIntent();
        Menu_ID = iGet.getLongExtra("menu_id", 0);

        MenuDetailAPI = DglConstants.MenuDetailAPI+"?accesskey="+DglConstants.AccessKey+"&menu_id="+Menu_ID;

        new getDataTask().execute();

        btnAdd.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {
                inputDialog();
            }
        });
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

        alert.setPositiveButton("Add", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {
                String temp = edtQuantity.getText().toString();
                int quantity = 0;

                if(!temp.equalsIgnoreCase("")){
                    quantity = Integer.parseInt(temp);
                    if(dbhelper.isDataExist(Menu_ID)){
                        dbhelper.updateData(Menu_ID, quantity, (Menu_price*quantity));
                    }else{
                        dbhelper.addData(Menu_ID, Menu_name, quantity, (Menu_price*quantity));
                    }
                }else{
                    dialog.cancel();
                }
            }
        });

        alert.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
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

            prgLoading.setVisibility(8);
            if((Menu_name != null) && IOConnect == 0){
                sclDetail.setVisibility(0);

                imageLoader.DisplayImage(DglConstants.AdminPageURL+Menu_image, imgPreview);

                txtText.setText(Menu_name);
                txtSubText.setText("Price : " +Menu_price+" "+ProductListActivity.Currency+"\n"+"Status : "+Menu_serve+"\n"+"Stock : "+Menu_quantity);
                txtDescription.loadDataWithBaseURL("", Menu_description, "text/html", "UTF-8", "");
                txtDescription.setBackgroundColor(Color.parseColor("#e7e7e7"));
            }else{
                txtAlert.setVisibility(0);
            }
        }
    }

    public void parseJSONData(){

        try {

            HttpClient client = new DefaultHttpClient();
            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
            HttpUriRequest request = new HttpGet(MenuDetailAPI);
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

                JSONObject menu = object.getJSONObject("Menu_detail");

                Menu_image = menu.getString("Menu_image");
                Menu_name = menu.getString("Menu_name");
                Menu_price = Double.valueOf(formatData.format(menu.getDouble("Price")));
                Menu_serve = menu.getString("Serve_for");
                Menu_description = menu.getString("Description");
                Menu_quantity = menu.getInt("Quantity");

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
        dbhelper.close();
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
