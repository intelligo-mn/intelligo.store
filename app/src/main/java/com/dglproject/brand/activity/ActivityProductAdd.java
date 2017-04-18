package com.dglproject.brand.activity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.AsyncTask;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.json.JSONParser;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityProductAdd extends AppCompatActivity {

    String URL= Config.ProductService;

    JSONParser jsonParser=new JSONParser();

    EditText name, model, description, price, currency;
    Button add;

    double prices;

    Button btpic, btnup;
    private Uri fileUri;
    String picturePath;
    Uri selectedImage;
    Bitmap photo;
    String ba1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_add);
        getSupportActionBar().setTitle(getString(R.string.product_add));
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
                createProduct.execute(String.valueOf(Config.generateAccessKey()), "c", name.getText().toString(), model.getText().toString(), description.getText().toString(), price.getText().toString(), currency.getText().toString());
            }
        });
//        btpic = (Button) findViewById(R.id.cpic);
//        btpic.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                clickpic();
//            }
//        });
//
//        btnup = (Button) findViewById(R.id.up);
//        btnup.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                upload();
//            }
//        });
//
    }

    private void upload() {

//        Bitmap bm = BitmapFactory.decodeFile(picturePath);
//        ByteArrayOutputStream bao = new ByteArrayOutputStream();
//        bm.compress(Bitmap.CompressFormat.JPEG, 100, bao);
//        byte[] ba = bao.toByteArray();
//        ba1 = Base64.encodeToString(ba, Base64.NO_WRAP);
//        new uploadToServer().execute();

    }

    private void clickpic() {

//        if (getApplicationContext().getPackageManager().hasSystemFeature(
//                PackageManager.FEATURE_CAMERA)) {
//
//            Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
//            intent.putExtra(MediaStore.EXTRA_OUTPUT, fileUri);
//
//            startActivityForResult(intent, 100);
//
//        } else {
//            Toast.makeText(getApplication(), "Camera not supported", Toast.LENGTH_LONG).show();
//        }
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 100 && resultCode == RESULT_OK) {

//            selectedImage = data.getData();
//            photo = (Bitmap) data.getExtras().get("data");
//
//            String[] filePathColumn = {MediaStore.Images.Media.DATA};
//            Cursor cursor = getContentResolver().query(selectedImage,
//                    filePathColumn, null, null, null);
//            cursor.moveToFirst();
//
//            int columnIndex = cursor.getColumnIndex(filePathColumn[0]);
//            picturePath = cursor.getString(columnIndex);
//            cursor.close();
//
//            Bitmap photo = (Bitmap) data.getExtras().get("data");
//            ImageView imageView = (ImageView) findViewById(R.id.Imageprev);
//            imageView.setImageBitmap(photo);
        }
    }

    public class uploadToServer extends AsyncTask<Void, Void, String> {

        private ProgressDialog pd = new ProgressDialog(ActivityProductAdd.this);
        protected void onPreExecute() {
            super.onPreExecute();
            pd.setMessage(getString(R.string.waiting_upload));
            pd.show();
        }

        @Override
        protected String doInBackground(Void... params) {

            ArrayList<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();
            nameValuePairs.add(new BasicNameValuePair("base64", ba1));
            nameValuePairs.add(new BasicNameValuePair("image", System.currentTimeMillis() + ".jpg"));
            try {
                HttpClient httpclient = new DefaultHttpClient();
                HttpPost httppost = new HttpPost(URL);
                httppost.setEntity(new UrlEncodedFormEntity(nameValuePairs));
                HttpResponse response = httpclient.execute(httppost);
                String st = EntityUtils.toString(response.getEntity());
                Log.v("log_tag", "In the try Loop" + st);

            } catch (Exception e) {
                Log.v("log_tag", "Error in http connection " + e.toString());
            }
            return "Success";

        }

        protected void onPostExecute(String result) {
            super.onPostExecute(result);
            pd.hide();
            pd.dismiss();
        }
    }

    private class CreateProduct extends AsyncTask<String, String, JSONObject> {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected JSONObject doInBackground(String... args) {

            String currency = args[6];
            String price = args[5];
            String desc = args[4];
            String model = args[3];
            String name = args[2];
            String state = args[1];
            String accesskey = args[0];

            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("accesskey", accesskey));
            params.add(new BasicNameValuePair("state", state));
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
