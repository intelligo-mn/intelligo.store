package com.dglproject.brand.activity;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.json.JSONParser;
import com.dglproject.brand.utilities.PrefManager;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityBrandAdd extends AppCompatActivity {

    String URL= Config.BrandService;

    JSONParser jsonParser = new JSONParser();

    EditText name, description, image;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_brand_add);
        getSupportActionBar().setTitle(getString(R.string.company_add));
        getSupportActionBar().setHomeButtonEnabled(true);
        final PrefManager prefManager = new PrefManager(this);

        name = (EditText)findViewById(R.id.bName);
        description = (EditText)findViewById(R.id.bDescription);
        Button add = (Button)findViewById(R.id.btnBrandAdd);

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CreateBrand createBrand = new CreateBrand();
                createBrand.execute(String.valueOf(Config.generateAccessKey()), "c", name.getText().toString(), description.getText().toString(),String.valueOf(prefManager.getUserId()));
            }
        });
    }

    private class CreateBrand extends AsyncTask<String, String, JSONObject> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected JSONObject doInBackground(String... args) {

            String userid = args[4];
            String desc = args[3];
            String name = args[2];
            String state = args[1];
            String accesskey = args[0];

            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("accesskey", accesskey));
            params.add(new BasicNameValuePair("state", state));
            params.add(new BasicNameValuePair("name", name));
            params.add(new BasicNameValuePair("description", desc));
            params.add(new BasicNameValuePair("ui", userid));

            JSONObject json = jsonParser.makeHttpRequest(URL, "GET", params);

            return json;
        }

        protected void onPostExecute(JSONObject result) {

            try {
                if (result != null) {
                    Toast.makeText(getApplicationContext(),result.getString("message"),Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(getApplicationContext(), getString(R.string.server_error), Toast.LENGTH_LONG).show();
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
