package com.dglproject.activity;

import android.content.Intent;
import android.content.res.Configuration;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import java.text.DecimalFormat;
import java.util.ArrayList;

import com.dglproject.database.CartProductsAdapter;
import com.dglproject.R;
import com.dglproject.models.CartProducts;

public class ActivityCart extends AppCompatActivity {

    public final static String  TAG = "Cart";

    final CartProductsAdapter productAdapter = new CartProductsAdapter(this);
    TextView subTotalView;
    TextView taxView;
    TextView totalView;
    double subTotal;
    double tax;
    double total;
    ArrayList<CartProducts> data;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);

        data = productAdapter.readData();
        displayBill();

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
    public void calculateBill(){
        subTotal = tax = total = 0;
        for(CartProducts dat : data){
            subTotal += dat.getTotalCost();
        }
        tax = subTotal*0.15;
        total = tax + subTotal;
    }

    public void displayBill(){
        calculateBill();
        subTotalView = (TextView) findViewById(R.id.sub_total_text_view);
        subTotalView.setText("Нийт дүн: $ " + new DecimalFormat("#.##").format(subTotal));

        taxView = (TextView) findViewById(R.id.tax_text_view);
        taxView.setText("Татвар: $ " + new DecimalFormat("#.##").format(tax));

        totalView = (TextView) findViewById(R.id.total_text_view);
        totalView.setText("Нийт: $ " + new DecimalFormat("#.##").format(total));
    }

    public void startPayment(View view){
        if (data.size() > 0){
            Intent intent = new Intent(this, ActivityOrder.class);
            String subTotalString = "" + subTotal;
            String taxString = "" + tax;
            String totalString = "" + total;
            String[] transferData = {subTotalString,taxString,totalString};
            intent.putExtra(TAG,transferData);
            startActivity(intent);
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
