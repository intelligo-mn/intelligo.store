package cloud.techstar.ecommerce.activity;

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
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.Toast;

import cloud.techstar.ecommerce.R;
import cloud.techstar.ecommerce.fragments.CompanyFragment;
import cloud.techstar.ecommerce.models.Category;
import cloud.techstar.ecommerce.utilities.TSConstants;
import cloud.techstar.ecommerce.utilities.DialogUtils;
import cloud.techstar.ecommerce.utilities.PrefManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import android.widget.AdapterView.OnItemSelectedListener;
/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityCompanyAdd extends AppCompatActivity implements OnItemSelectedListener{

    private static final String TAG = CompanyFragment.class.getSimpleName();

    EditText name, description, phone, email, image;
    private Handler mHandler;
    PrefManager prefManager;
    private Spinner catSpinner;
    private Spinner subCatSpinner;
    private ArrayAdapter<String> catAdapter;
    private ArrayAdapter<Category> subCatAdapter;
    JSONObject category;
    JSONArray catItems;
    Bitmap bitmap;
    ImageView uploadedImage;

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
        catSpinner = (Spinner) findViewById(R.id.catSpinner);
        subCatSpinner = (Spinner) findViewById(R.id.subCatSpinner);
        catSpinner.setOnItemSelectedListener(this);
        subCatSpinner.setOnItemSelectedListener(this);
        uploadedImage = (ImageView) findViewById(R.id.brand_add_photo);

        prefManager = new PrefManager(this);
        mHandler = new Handler(Looper.getMainLooper());
        getCategory();

        uploadedImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (bitmap != null) {
                    new AlertDialog.Builder(ActivityCompanyAdd.this)
                            .setMessage(getString(R.string.image_select))
                            .setPositiveButton(getString(R.string.yes), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    chooseFile();
                                }
                            }).setNegativeButton(getString(R.string.no), new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            Toast.makeText(ActivityCompanyAdd.this, "Cool, next time then...", Toast.LENGTH_SHORT).show();
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
                add.setEnabled(false);
                DialogUtils.getInstance().startProgress(ActivityCompanyAdd.this, getString(R.string.loading));
                create(name.getText().toString(),
                        description.getText().toString(),
                        prefManager.getUserId(),
                        prefManager.getCatId(),
                        prefManager.getLanguage(),
                        phone.getText().toString(),
                        email.getText().toString(),
                        "",
                        bitmap
                );

                DialogUtils.getInstance().stopProgress();
                finish();
            }
        });
    }

    public void create (String name, String desc, int userId, String catId, String lang, String mobile, String email, String address, Bitmap bitmap) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 85, baos);
        byte[] imageBytes = baos.toByteArray();

        String randomChunk = UUID.randomUUID().toString().substring(0, 8).replaceAll("-", "");
        String imageName = randomChunk.concat(".jpg");

        OkHttpClient client = new OkHttpClient();

        RequestBody formBody = new MultipartBody.Builder()
                .setType(MultipartBody.FORM)
                .addFormDataPart("state", "c")
                .addFormDataPart("name", name)
                .addFormDataPart("description", desc)
                .addFormDataPart("ui", String.valueOf(userId))
                .addFormDataPart("categoryId", catId)
                .addFormDataPart("language", lang)
                .addFormDataPart("mobile", mobile)
                .addFormDataPart("email", email)
                .addFormDataPart("address", address)
                .addFormDataPart("file", imageName, RequestBody.create(MediaType.parse("image/*"), imageBytes))
                .build();

        String uri = TSConstants.BrandService;
        Log.e("Exection: ", uri + " ");

        Request request = new Request.Builder()
                .url(uri)
                .post(formBody)
                .build();

        Log.e(TAG, request.toString());

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e(TAG, "Login failed : " + e.getMessage());
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
                                Toast.makeText(ActivityCompanyAdd.this, getString(R.string.success), Toast.LENGTH_LONG)
                                        .show();
                            } else {
                                Toast.makeText(ActivityCompanyAdd.this, getString(R.string.error), Toast.LENGTH_LONG)
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

    private void getCategory() {
        String uri = TSConstants.CategoryService;

        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(uri)
                .build();
        Log.e(TAG,request.toString());
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e(TAG, e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                final String res = response.body().string();
                mHandler.post(() -> {
                    try {
                        category = new JSONObject(String.valueOf("{category="+res+"}"));
                        catItems = category.getJSONArray("category");
                        List<String> categories = new ArrayList<String>();
                        for (int i = 0; i < catItems.length(); i++){
                            if(!catItems.getJSONObject(i).getString("level").equalsIgnoreCase("3"))
                                categories.add(catItems.getJSONObject(i).getString("name"));
                        }
                        catAdapter = new ArrayAdapter<String>(ActivityCompanyAdd.this, android.R.layout.simple_spinner_item, categories);
                        catAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
                        catSpinner.setAdapter(catAdapter);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                });
            }
        });

    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {

        switch (parent.getId()) {
            case R.id.catSpinner:
                List<Category> subCats = new ArrayList<Category>();
                try {
                    String catId = catItems.getJSONObject(position).getString("id");
                    Log.e(TAG, catItems.getJSONObject(position).getString("id")+" "+catItems.getJSONObject(position).getString("name"));

                    for (int i = 0; i < catItems.length(); i++){

                        String parentId = catItems.getJSONObject(i).getString("parent_id");
                        if (catId.equalsIgnoreCase(parentId)){
                            Log.e(TAG, "Parent id: "+parentId+" name: "+catItems.getJSONObject(i).getString("name"));
                            subCats.add(new Category(catItems.getJSONObject(i).getString("id"), catItems.getJSONObject(i).getString("name")));
                        } else {
                        }

                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                subCatAdapter = new ArrayAdapter<Category>(ActivityCompanyAdd.this, android.R.layout.simple_spinner_item, subCats);
                subCatAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
                subCatSpinner.setAdapter(subCatAdapter);

                break;
            case R.id.subCatSpinner:
                Category category = (Category) parent.getSelectedItem();
                Log.e(TAG, "Дэд ангилал сонгосон: "
                        +category.getCategoryId()+" нэр: "
                        +category.getCategoryName());
                prefManager.setCat(category.getCategoryId());
                break;
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

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
