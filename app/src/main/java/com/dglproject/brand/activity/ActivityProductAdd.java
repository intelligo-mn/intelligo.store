package com.dglproject.brand.activity;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.dglproject.brand.R;
import com.dglproject.brand.json.JSONParser;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ActivityProductAdd extends AppCompatActivity {

    String URL= "http://dgl.toroo.info/api/ProductService.php";

    JSONParser jsonParser=new JSONParser();

    EditText name, model, description, price, currency;
    Button add;

    double prices;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_add);
        getSupportActionBar().setTitle("Бүтээгдэхүүн нэмэх");
        getSupportActionBar().setHomeButtonEnabled(true);

        name = (EditText)findViewById(R.id.pName);
        model = (EditText)findViewById(R.id.pModel);
        description = (EditText)findViewById(R.id.pDescription);
        price = (EditText)findViewById(R.id.pPrice);
        currency= (EditText)findViewById(R.id.pCurrency);
        add = (Button)findViewById(R.id.productAdd);

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CreateProduct createProduct = new CreateProduct();
                createProduct.execute(name.getText().toString(), model.getText().toString(), description.getText().toString(), price.getText().toString(), currency.getText().toString());
            }
        });

    }
    private class CreateProduct extends AsyncTask<String, String, JSONObject> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected JSONObject doInBackground(String... args) {

            String currency = args[4];
            String price = args[3];
            String desc = args[2];
            String model = args[1];
            String name = args[0];

            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("name", name));
            params.add(new BasicNameValuePair("model", model));
            params.add(new BasicNameValuePair("description", desc));
            params.add(new BasicNameValuePair("price", price));
            params.add(new BasicNameValuePair("currency", currency));

            JSONObject json = jsonParser.makeHttpRequest(URL, "GET", params);

            return json;

        }

        protected void onPostExecute(JSONObject result) {

            try {
                if (result != null) {
                    Toast.makeText(getApplicationContext(),result.getString("message"),Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(getApplicationContext(), "Сэрвэрээс өгөгдөл авах боломжгүй байна", Toast.LENGTH_LONG).show();
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
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
}
