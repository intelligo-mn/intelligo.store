package com.dglproject.brand.activity;

import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.PreferenceManager;
import android.provider.MediaStore;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.afollestad.materialdialogs.MaterialDialog;
import com.dglproject.brand.R;
import com.dglproject.brand.utilities.DGLConstants;
import com.dglproject.brand.utilities.PrefManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.UUID;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivitySignup extends AppCompatActivity {

    private static final String TAG = ActivitySignup.class.getSimpleName();
    EditText nameEditText, emailEditText, passwordEditText, confirmPasswordEditText;
    Button signUpButton;
    TextView loginLink;
    PrefManager prefManager;

    int i=0;

    private SharedPreferences   sharedPreferences;
    private Handler mHandler;
    Bitmap bitmap;
    ImageView uploadedImage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        prefManager = new PrefManager(this);
        mHandler = new Handler(Looper.getMainLooper());
        sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);

        nameEditText = (EditText)findViewById(R.id.sName);
        emailEditText = (EditText)findViewById(R.id.sEmail);
        passwordEditText = (EditText)findViewById(R.id.sPassword);
        confirmPasswordEditText = (EditText)findViewById(R.id.sComfirmPassword);
        signUpButton = (Button)findViewById(R.id.btnSignUp);
        loginLink = (TextView)findViewById(R.id.linkLogin);
        uploadedImage = (ImageView) findViewById(R.id.signup_photo);

        uploadedImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (bitmap != null) {
                    new AlertDialog.Builder(ActivitySignup.this)
                            .setMessage(getString(R.string.image_select))
                            .setPositiveButton(getString(R.string.yes), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    chooseFile();
                                }
                            }).setNegativeButton(getString(R.string.no), new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            Toast.makeText(ActivitySignup.this, "Cool, next time then...", Toast.LENGTH_SHORT).show();
                        }
                    }).create().show();
                } else {
                    chooseFile();
                }

            }
        });
        signUpButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                signup();
            }
        });
        loginLink.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                finish();
            }
        });
    }
    public void signup() {
        if (!validate()) {
            onSignupFailed();
            return;
        }
        signUpButton.setEnabled(false);
        final ProgressDialog progressDialog = new ProgressDialog(ActivitySignup.this,
                R.style.AppTheme_Dark_Dialog);
        progressDialog.setIndeterminate(true);
        progressDialog.setMessage(getString(R.string.register_loaging));
        progressDialog.show();

        new android.os.Handler().postDelayed(
                new Runnable() {
                    public void run() {
                        onSignupSuccess();
                        progressDialog.dismiss();
                    }
                }, 3000);
    }

    public void onSignupSuccess() {
        signUpButton.setEnabled(true);
        setResult(RESULT_OK, null);
        new android.os.Handler().postDelayed(
                new Runnable() {
                    public void run() {
                        finish();
                    }
                }, 3000);

        Toast.makeText(getBaseContext(), getString(R.string.register_success), Toast.LENGTH_LONG).show();
        String name = nameEditText.getText().toString();
        String email = emailEditText.getText().toString();
        String password = passwordEditText.getText().toString();

        register(name,password,email, bitmap);
    }

    public void onSignupFailed() {
        Toast.makeText(getBaseContext(), getString(R.string.register_error), Toast.LENGTH_LONG).show();
        signUpButton.setEnabled(true);
    }

    public boolean validate() {

        boolean valid = true;

        String name = nameEditText.getText().toString();
        String email = emailEditText.getText().toString();
        String password = passwordEditText.getText().toString();
        String confirmPassword = confirmPasswordEditText.getText().toString();

        if (name.isEmpty() || name.length() < 3) {
            nameEditText.setError(getString(R.string.err_username_short));
            valid = false;
        } else {
            nameEditText.setError(null);
        }
        if (email.isEmpty() || !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            emailEditText.setError(getString(R.string.err_mail));
            valid = false;
        } else {
            emailEditText.setError(null);
        }
        if (password.isEmpty() || password.length() < 4 || password.length() > 17) {
            passwordEditText.setError(getString(R.string.err_pass_short));
            passwordEditText.setText("");
            valid = false;
        } else {
            passwordEditText.setError(null);
        }
        if (!password.equals(confirmPassword)){
            confirmPasswordEditText.setError(getString(R.string.err_pass_confirm));
            valid = false;
        }
        else{
            confirmPasswordEditText.setError(null);
        }

        return valid;
    }

    private void register(final String username, String password, String email, Bitmap bitmap) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 85, baos);
        byte[] imageBytes = baos.toByteArray();

        String randomChunk = UUID.randomUUID().toString().substring(0, 8).replaceAll("-", "");
        String imageName = randomChunk.concat(".jpg");

        RequestBody formBody = new MultipartBody.Builder()
                .setType(MultipartBody.FORM)
                .addFormDataPart("state", "signup")
                .addFormDataPart("username", username)
                .addFormDataPart("password", password)
                .addFormDataPart("file", imageName, RequestBody.create(MediaType.parse("image/*"), imageBytes))
                .build();

        String uri = DGLConstants.UserService;
        Log.e(TAG, uri + " ");

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
                            JSONObject ob = new JSONObject(String.valueOf(res));
                            String success = ob.getString("success");
                            if (success == "1") {
                                JSONObject o = ob.getJSONObject("id");
                                String id = o.getString("id");
                                String name = o.getString("name");
                                SharedPreferences.Editor editor = sharedPreferences.edit();
                                editor.putString(DGLConstants.USER_ID, id);
                                editor.putString(DGLConstants.USER_NAME, name);
                                editor.apply();
                                Log.e("Sign up : ", "id id" + id + name);
                                Intent i = new Intent(ActivitySignup.this, MainActivity.class);
                                startActivity(i);
                                finish();
                            } else {
                                Toast.makeText(ActivitySignup.this, getString(R.string.err_username_pass_invalid), Toast.LENGTH_LONG)
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

}
