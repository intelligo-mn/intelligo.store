package cloud.techstar.ecommerce.activity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

import com.techstar.ecommerce.R;

import java.text.DecimalFormat;
import java.util.ArrayList;

import cloud.techstar.ecommerce.database.CartTable;
import cloud.techstar.ecommerce.models.CartProducts;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityCart extends AppCompatActivity {

    private final static String  TAG = "CartActivity";

    final CartTable productAdapter = new CartTable(this);
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
        tax = subTotal*0.1;
        total = tax + subTotal;
    }

    public void displayBill(){
        calculateBill();
        subTotalView = (TextView) findViewById(R.id.sub_total_text_view);
        subTotalView.setText(getString(R.string.total_cost) + new DecimalFormat("#.##").format(subTotal)+" ₮");

        taxView = (TextView) findViewById(R.id.tax_text_view);
        taxView.setText(getString(R.string.tax) + new DecimalFormat("#.##").format(tax)+" ₮");

        totalView = (TextView) findViewById(R.id.total_text_view);
        totalView.setText(getString(R.string.total) + new DecimalFormat("#.##").format(total)+" ₮");
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
