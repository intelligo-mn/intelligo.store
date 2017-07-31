package com.dglproject.brand.activity;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.fragments.BrandFragment;
import com.dglproject.brand.utilities.DGLConstants;
import com.dglproject.brand.utilities.PrefManager;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityProductAdd extends AppCompatActivity {

    private static final String TAG = ActivityProductAdd.class.getSimpleName();
    private Handler mHandler;
    private PrefManager prefManager;
    EditText name, model, description, price, currency;
    Button add;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_add);
        getSupportActionBar().setTitle(getString(R.string.product_add));
        getSupportActionBar().setHomeButtonEnabled(true);

        prefManager = new PrefManager(getBaseContext());

        name = (EditText)findViewById(R.id.pName);
        model = (EditText)findViewById(R.id.pModel);
        description = (EditText)findViewById(R.id.pDescription);
        price = (EditText)findViewById(R.id.pPrice);
        currency= (EditText)findViewById(R.id.pCurrency);
        add = (Button)findViewById(R.id.productAdd);

        mHandler = new Handler(Looper.getMainLooper());

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                create(name.getText().toString(),
                        model.getText().toString(),
                        description.getText().toString(),
                        price.getText().toString(),
                        currency.getText().toString(),
                        prefManager.getUserId(),
                        40);
            }
        });
    }

    private void create (String name, String model, String desc, String price, String currency, int userId, int brandId) {

        RequestBody formBody = new FormBody.Builder()
                .add("state", "c")
                .add("name", name)
                .add("model", model)
                .add("description", desc)
                .add("price", String.valueOf(price))
                .add("currency", currency)
                .add("ui", String.valueOf(userId))
                .add("brand_id", String.valueOf(brandId))
                .build();

        String uri = DGLConstants.ProductService;

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(uri)
                .post(formBody)
                .build();

        Log.e(TAG, request.toString());

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e(TAG, e.getMessage());
            }

            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                final String res = response.body().string();

                Log.e(TAG, res);

                mHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            JSONArray ob = new JSONArray(String.valueOf(res));
                            Log.e(TAG, ob.toString());
                            String success = "";
                            for (int i = 0; i < ob.length(); i++) {
                                success = ob.getJSONObject(i).getString("success");
                            }

                            if (success == "1") {
                                finish();
                            } else {
                                Toast.makeText(ActivityProductAdd.this, getString(R.string.error), Toast.LENGTH_LONG)
                                        .show();
                            }

                        } catch (JSONException e) {
                            e.printStackTrace();
                            Log.e("ERROR : ", e.getMessage() + " ");
                        }
                    }
                });
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
}
