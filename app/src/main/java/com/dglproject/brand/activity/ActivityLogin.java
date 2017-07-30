package com.dglproject.brand.activity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Handler;
import android.os.Looper;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.afollestad.materialdialogs.MaterialDialog;
import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.utilities.DGLConstants;
import com.dglproject.brand.utilities.PrefManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityLogin extends AppCompatActivity {

    private static final String TAG = ActivityLogin.class.getSimpleName();

    private static final int REQUEST_SIGNUP = 0;

    PrefManager prefManager;

    EditText nameText;
    EditText passwordText;
    Button loginButton;
    TextView signUpLink;
    CheckBox rememberDetail;

    private SharedPreferences   sharedPreferences;
    private MaterialDialog dialog;
    private Handler mHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        prefManager = new PrefManager(this);
        mHandler = new Handler(Looper.getMainLooper());
        sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);

        if(prefManager.isLoggedIn()){
            Intent intent = new Intent(ActivityLogin.this, MainActivity.class);
            startActivity(intent);
            finish();
        }

        nameText = (EditText)findViewById(R.id.username);
        passwordText = (EditText)findViewById(R.id.password);
        loginButton = (Button)findViewById(R.id.login);
        signUpLink = (TextView)findViewById(R.id.signup);
        rememberDetail = (CheckBox)findViewById(R.id.rememberMe);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                login();
            }
        });
        signUpLink.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ActivityLogin.this, ActivitySignup.class);
                startActivity(intent);
            }
        });
    }

    public void login() {
        if (!validate()) {
            onLoginFailed();
            return;
        }

        String username = nameText.getText().toString();
        String password = passwordText.getText().toString();

        loginUser(username, password);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_SIGNUP) {
            if (resultCode == RESULT_OK) {
                this.finish();
            }
        }
    }

    public void onLoginSuccess() {
        loginButton.setEnabled(true);
        finish();
    }

    public void onLoginFailed() {
        Toast.makeText(getBaseContext(), getString(R.string.err_try_again), Toast.LENGTH_LONG).show();
        loginButton.setEnabled(true);
    }

    public boolean validate() {
        boolean valid = true;
        String username = nameText.getText().toString();
        String password = passwordText.getText().toString();

        if (username.isEmpty() || password.length() < 3) {
            nameText.setError(getString(R.string.err_username_short));
            valid = false;
        } else {
            nameText.setError(null);
        }

        if (password.isEmpty() || password.length() < 4 ) {
            passwordText.setError(getString(R.string.err_pass_short));
            valid = false;
        } else {
            passwordText.setError(null);
        }

        if (username.trim().length() > 0 && password.trim().length() > 0){
            valid = true;
        } else {
            Toast.makeText(ActivityLogin.this, getString(R.string.err_username_pass_invalid), Toast.LENGTH_SHORT).show();
            valid = false;
        }

        return valid;
    }

//    private class LoginUser extends AsyncTask<String, String, JSONObject> {
//
//        @Override
//        protected void onPreExecute() {
//            super.onPreExecute();
//        }
//
//        @Override
//        protected JSONObject doInBackground(String... args) {
//
//            String password = args[3];
//            String name= args[2];
//            String state = args[1];
//            String accesskey = args[0];
//
//            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();
//
//            params.add(new BasicNameValuePair("accesskey", accesskey));
//            params.add(new BasicNameValuePair("state", state));
//            params.add(new BasicNameValuePair("username", name));
//            params.add(new BasicNameValuePair("password", password));
//
//            JSONObject json = jsonParser.makeHttpRequest(Config.UserService, "POST", params);
//
//            return json;
//
//        }
//
//        protected void onPostExecute(JSONObject result) {
//
//            try {
//                if (result != null) {
//                    if(result.getString("success") != "0"){
//                        prefManager.setUser(Integer.parseInt(result.getString("id")), result.getString("username"), result.getString("email"));
//                        final ProgressDialog progressDialog = new ProgressDialog(ActivityLogin.this,
//                                R.style.AppTheme_Dark_Dialog);
//                        progressDialog.setIndeterminate(true);
//                        progressDialog.setMessage(getString(R.string.loading));
//                        progressDialog.show();
//                        new android.os.Handler().postDelayed(
//                                new Runnable() {
//                                    public void run() {
//                                        prefManager.setLogin(true);
//                                        Intent i = new Intent(getApplicationContext(), MainActivity.class);
//                                        i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
//                                        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                                        startActivity(i);
//                                        progressDialog.dismiss();
//                                    }
//                                }, 2000);
//                    } else {
//                        Toast.makeText(getApplicationContext(),result.getString("message"),Toast.LENGTH_LONG).show();
//                    }
//                } else {
//                    Toast.makeText(getApplicationContext(), getString(R.string.server_error), Toast.LENGTH_LONG).show();
//                }
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
//        }
//    }

    private void loginUser(final String username, String password) {
        dialog = new MaterialDialog.Builder(ActivityLogin.this)
                .title(R.string.app_name)
                .content(R.string.loading)
                .progress(true, 0)
                .show();

        RequestBody formBody = new FormBody.Builder()
                .add("state", "signin")
                .add("username", username)
                .add("password", password)
                .build();

        String uri = DGLConstants.UserService;
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
                            JSONObject ob = new JSONObject(String.valueOf(res));
                            String success = ob.getString("success");
                            if (success == "1") {
                                prefManager.setUser(ob.getString("id"),ob.getString("username"), ob.getString("email"));
                                prefManager.setLogin(true);
                                Toast.makeText(getApplicationContext(), ob.getString("id")+ob.getString("username")+ob.getString("email"), Toast.LENGTH_LONG).show();
                                Intent i = new Intent(ActivityLogin.this, MainActivity.class);
                                startActivity(i);
                                finish();
                            } else {
                                Toast.makeText(ActivityLogin.this, getString(R.string.err_username_pass_invalid), Toast.LENGTH_LONG)
                                        .show();
                            }
                            dialog.dismiss();
                        } catch (JSONException e) {
                            e.printStackTrace();
                            Log.e("ERROR : ", e.getMessage() + " ");
                        }
                    }
                });
            }
        });
    }
}
