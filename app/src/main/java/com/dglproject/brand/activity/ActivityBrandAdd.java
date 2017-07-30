package com.dglproject.brand.activity;

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

import com.dglproject.brand.R;
import com.dglproject.brand.fragments.BrandFragment;
import com.dglproject.brand.utilities.DGLConstants;
import com.dglproject.brand.utilities.PrefManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

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
public class ActivityBrandAdd extends AppCompatActivity {

    private static final String TAG = BrandFragment.class.getSimpleName();

    EditText name, description, phone, email, image;
    private Handler mHandler;
    PrefManager prefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_brand_add);
        getSupportActionBar().setTitle(getString(R.string.company_add));
        getSupportActionBar().setHomeButtonEnabled(true);

        name = (EditText)findViewById(R.id.bName);
        description = (EditText)findViewById(R.id.bDescription);
        phone = (EditText)findViewById(R.id.bPhone);
        email = (EditText)findViewById(R.id.bEmail);
        Button add = (Button)findViewById(R.id.btnBrandAdd);

        prefManager = new PrefManager(this);
        mHandler = new Handler(Looper.getMainLooper());
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), String.valueOf(prefManager.getUserId()), Toast.LENGTH_LONG).show();
                create(name.getText().toString(),
                        description.getText().toString(),
                        String.valueOf(prefManager.getUserId()),
                        "",
                        "",
                        phone.getText().toString(),
                        email.getText().toString(),
                        ""
                );
            }
        });
    }

    private void create (String name, String desc, String userId, String catId, String lang, String mobile, String email, String address) {

        RequestBody formBody = new FormBody.Builder()
                .add("state", "c")
                .add("name", name)
                .add("description", desc)
                .add("ui", userId)
                .add("categoryId", catId)
                .add("language", lang)
                .add("mobile", mobile)
                .add("email", email)
                .add("address", address)
                .build();

        String uri = DGLConstants.BrandService;
        Log.e("Exection: ", uri + " ");

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(uri)
                .post(formBody)
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e(TAG, "Login failed : " + e.getMessage());
            }

            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                final String res = response.body().string();
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
                                Toast.makeText(ActivityBrandAdd.this, getString(R.string.error), Toast.LENGTH_LONG)
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
