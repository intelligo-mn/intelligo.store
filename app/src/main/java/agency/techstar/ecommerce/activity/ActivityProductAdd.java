package agency.techstar.ecommerce.activity;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.provider.MediaStore;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.techstar.ecommerce.R;
import agency.techstar.ecommerce.utilities.TSConstants;
import agency.techstar.ecommerce.utilities.DialogUtils;
import agency.techstar.ecommerce.utilities.PrefManager;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.UUID;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityProductAdd extends AppCompatActivity {

    private static final String TAG = ActivityProductAdd.class.getSimpleName();
    private Handler mHandler;
    private PrefManager prefManager;
    EditText name, model, description, price, currency;
    Button add;
    Bitmap bitmap;
    ImageView uploadedImage;

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
        uploadedImage = (ImageView) findViewById(R.id.product_add_photo);

        mHandler = new Handler(Looper.getMainLooper());

        uploadedImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (bitmap != null) {
                    new AlertDialog.Builder(ActivityProductAdd.this)
                            .setMessage(getString(R.string.image_select))
                            .setPositiveButton(getString(R.string.yes), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    chooseFile();
                                }
                            }).setNegativeButton(getString(R.string.no), new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            Toast.makeText(ActivityProductAdd.this, "Cool, next time then...", Toast.LENGTH_SHORT).show();
                        }
                    }).create().show();
                } else {
                    chooseFile();
                }

            }
        });

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DialogUtils.getInstance().startProgress(ActivityProductAdd.this, getString(R.string.loading));
                create(name.getText().toString(),
                        model.getText().toString(),
                        description.getText().toString(),
                        price.getText().toString(),
                        currency.getText().toString(),
                        prefManager.getUserId(),
                        6,
                        bitmap);
                DialogUtils.getInstance().stopProgress();
                finish();
            }
        });
    }

    private void create (String name, String model, String desc, String price, String currency, int userId, int brandId, Bitmap bitmap) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 85, baos);
        byte[] imageBytes = baos.toByteArray();

        String randomChunk = UUID.randomUUID().toString().substring(0, 8).replaceAll("-", "");
        String imageName = randomChunk.concat(".jpg");

        RequestBody formBody = new MultipartBody.Builder()
                .setType(MultipartBody.FORM)
                .addFormDataPart("state", "c")
                .addFormDataPart("name", name)
                .addFormDataPart("model", model)
                .addFormDataPart("description", desc)
                .addFormDataPart("price", String.valueOf(price))
                .addFormDataPart("currency", currency)
                .addFormDataPart("ui", String.valueOf(userId))
                .addFormDataPart("brand_id", String.valueOf(brandId))
                .addFormDataPart("file", imageName, RequestBody.create(MediaType.parse("image/*"), imageBytes))
                .build();

        String uri = TSConstants.ProductService;

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

    public void chooseFile() {
        Intent mIntent = new Intent();
        mIntent.setType("image/*");
        mIntent.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(Intent.createChooser(mIntent, "Choose an image..."), 2123);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 2123 & data != null && resultCode == RESULT_OK) {
            Uri imageUri = data.getData();
            try {
                bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), imageUri);
                uploadedImage.setImageBitmap(bitmap);
            } catch (IOException e) {
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
