package com.dglproject.activity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.database.SQLException;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.text.DecimalFormat;
import java.util.ArrayList;

import com.dglproject.DBHelper;
import com.dglproject.DglConstants;
import com.dglproject.R;
import com.dglproject.adapters.CartAdapter;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ActivityCart extends AppCompatActivity {

//	ImageButton imgNavBack;
    ListView listOrder;
    ProgressBar prgLoading;
    TextView txtTotalLabel, txtTotal, txtAlert;
    Button btnClear, Checkout;
    RelativeLayout lytOrder;

    DBHelper dbhelper;
    CartAdapter mola;

    static double Tax;
    public static String Currency;

    ArrayList<ArrayList<Object>> data;
    public static ArrayList<Integer> Menu_ID = new ArrayList<Integer>();
    public static ArrayList<String> Menu_name = new ArrayList<String>();
    public static ArrayList<Integer> Quantity = new ArrayList<Integer>();
    public static ArrayList<Double> Sub_total_price = new ArrayList<Double>();

    double Total_price;
    final int CLEAR_ALL_ORDER = 0;
    final int CLEAR_ONE_ORDER = 1;
    int FLAG;
    int ID;
    String TaxCurrencyAPI;
    int IOConnect = 0;

    DecimalFormat formatData = new DecimalFormat("#.##");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);


//        imgNavBack = (ImageButton) findViewById(R.id.imgNavBack);
        Checkout = (Button) findViewById(R.id.Checkout);
        prgLoading = (ProgressBar) findViewById(R.id.prgLoading);
        listOrder = (ListView) findViewById(R.id.listOrder);
        txtTotalLabel = (TextView) findViewById(R.id.txtTotalLabel);
        txtTotal = (TextView) findViewById(R.id.txtTotal);
        txtAlert = (TextView) findViewById(R.id.txtAlert);
        btnClear = (Button) findViewById(R.id.btnClear);
        lytOrder = (RelativeLayout) findViewById(R.id.lytOrder);

        TaxCurrencyAPI = DglConstants.TaxCurrencyAPI+"?accesskey="+DglConstants.AccessKey;

        mola = new CartAdapter(this);
        dbhelper = new DBHelper(this);


        try{
            dbhelper.openDataBase();
        }catch(SQLException sqle){
            throw sqle;
        }

        new getTaxCurrency().execute();

        btnClear.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {

                showClearDialog(CLEAR_ALL_ORDER, 1111);
            }
        });


        listOrder.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {

                showClearDialog(CLEAR_ONE_ORDER, Menu_ID.get(position));
            }
        });

//        imgNavBack.setOnClickListener(new OnClickListener() {
//
//			public void onClick(View arg0) {

//				dbhelper.close();
//				finish();
//				overridePendingTransition(R.anim.open_main, R.anim.close_next);
//			}
//		});

        Checkout.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {

                dbhelper.close();
                Intent iReservation = new Intent(ActivityCart.this, ActivityCheckout.class);
                startActivity(iReservation);
            }
        });
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        switch (item.getItemId()) {

            case android.R.id.home:
                this.finish();
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
    }

    void showClearDialog(int flag, int id){
        FLAG = flag;
        ID = id;
        AlertDialog.Builder builder = 	new AlertDialog.Builder(this);
        builder.setTitle("Батлах");
        switch(FLAG){
            case 0:
                builder.setMessage(getString(R.string.clear_all_order));
                break;
            case 1:
                builder.setMessage(getString(R.string.clear_one_order));
                break;
        }
        builder.setCancelable(false);
        builder.setPositiveButton("Тийм", new DialogInterface.OnClickListener() {

            public void onClick(DialogInterface dialog, int which) {

                switch(FLAG){
                    case 0:

                        dbhelper.deleteAllData();
                        listOrder.invalidateViews();
                        clearData();
                        new getDataTask().execute();
                        break;
                    case 1:

                        dbhelper.deleteData(ID);
                        listOrder.invalidateViews();
                        clearData();
                        new getDataTask().execute();
                        break;
                }

            }
        });

        builder.setNegativeButton("Үгүй", new DialogInterface.OnClickListener() {

            public void onClick(DialogInterface dialog, int which) {

                dialog.cancel();
            }
        });
        AlertDialog alert = builder.create();
        alert.show();

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

            if(IOConnect == 0){
                new getDataTask().execute();
            }else{
                txtAlert.setVisibility(0);
                txtAlert.setText(R.string.no_internet);
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
        Quantity.clear();
        Sub_total_price.clear();
    }

    public class getDataTask extends AsyncTask<Void, Void, Void>{

        getDataTask(){
            if(!prgLoading.isShown()){
                prgLoading.setVisibility(0);
                lytOrder.setVisibility(8);
                txtAlert.setVisibility(8);
            }
        }

        @Override
        protected Void doInBackground(Void... arg0) {

            getDataFromDatabase();
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {

            txtTotal.setText( Total_price+" "+Currency);
            txtTotalLabel.setText(getString(R.string.total_order)+" (Tax "+Tax+"%)");
            prgLoading.setVisibility(8);
            if(Menu_ID.size() > 0){
                lytOrder.setVisibility(0);
                listOrder.setAdapter(mola);
            }else{
                txtAlert.setVisibility(0);
            }

        }
    }

    public void getDataFromDatabase(){

        Total_price = 0;
        clearData();
        data = dbhelper.getAllData();

        for(int i=0;i<data.size();i++){
            ArrayList<Object> row = data.get(i);

            Menu_ID.add(Integer.parseInt(row.get(0).toString()));
            Menu_name.add(row.get(1).toString());
            Quantity.add(Integer.parseInt(row.get(2).toString()));
            Sub_total_price.add(Double.parseDouble(formatData.format(Double.parseDouble(row.get(3).toString()))));
            Total_price += Sub_total_price.get(i);
        }

        Total_price -= (Total_price * (Tax/100));
        Total_price = Double.parseDouble(formatData.format(Total_price));
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        dbhelper.close();
        finish();
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
