package com.dglproject.brand.activity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.json.JSONParser;
import com.dglproject.brand.utilities.PrefManager;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivityLogin extends AppCompatActivity {

    private static final String TAG = "Login";

    private static final int REQUEST_SIGNUP = 0;

    PrefManager prefManager;

    EditText nameText;
    EditText passwordText;
    Button loginButton;
    TextView signUpLink;
    CheckBox rememberDetail;

    JSONParser jsonParser=new JSONParser();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        prefManager = new PrefManager(this);

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
//        rememberDetail.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                RememberMe();
//            }
//        });
//        SharedPreferences prefs = getSharedPreferences(PREFER_NAME, 0);
//        String thisUsername = prefs.getString("Username", "");
//        String thisPassword = prefs.getString("Password", "");
//        boolean thisRemember = prefs.getBoolean("Remember", false);
//        if(thisRemember) {
//            nameText.setText(thisUsername);
//            passwordText.setText(thisPassword);
//            rememberDetail.setChecked(thisRemember);
//        }
    }

    public void login() {
        if (!validate()) {
            onLoginFailed();
            return;
        }

        String username = nameText.getText().toString();
        String password = passwordText.getText().toString();

        LoginUser userAttempt = new LoginUser();
        userAttempt.execute(String.valueOf(Config.generateAccessKey()),"signin", username,password);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_SIGNUP) {
            if (resultCode == RESULT_OK) {
                // TODO: Implement successful signup logic here
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

//    private void RememberMe() {
//        boolean thisRemember = rememberDetail.isChecked();
//        sharedPreferences = getSharedPreferences(PREFER_NAME, 0);
//        editor = sharedPreferences.edit();
//        editor.putBoolean("Remember", thisRemember);
//        editor.commit();
//    }

    public boolean validate() {
        boolean valid = true;
        String username = nameText.getText().toString();
        String password = passwordText.getText().toString();

        //password = PasswordEncryption(password);

        //Toast.makeText(getApplicationContext(), "Хэрэглэгч нэвтэрсэн байдал: " + session.isUserLoggedIn(), Toast.LENGTH_LONG).show();
        //sharedPreferences = getSharedPreferences(PREFER_NAME, Context.MODE_PRIVATE);
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
//
//    private void saveLoggedInUser(long id, String username, String password) {
//        SharedPreferences settings = getSharedPreferences(PREFER_NAME, 0);
//        editor = settings.edit();
//        editor.putLong("UserId", id);
//        editor.putString("Username", username);
//        editor.putString("Password", password);
//        boolean rememberThis = rememberDetail.isChecked();
//        editor.putBoolean("rememberThis", rememberThis);
//        editor.commit();
//    }

    private String PasswordEncryption(String s) {
        try {
            MessageDigest digest = java.security.MessageDigest.getInstance("MD5"); digest.update(s.getBytes());
            byte messageDigest[] = digest.digest();
            StringBuffer hexString = new StringBuffer();
            for (int i=0; i<messageDigest.length; i++)
                hexString.append(Integer.toHexString(0xFF & messageDigest[i]));
            return hexString.toString();
        }
        catch (NoSuchAlgorithmException e) {
            return s;
        }
    }

    private class LoginUser extends AsyncTask<String, String, JSONObject> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected JSONObject doInBackground(String... args) {

            String password = args[3];
            String name= args[2];
            String state = args[1];
            String accesskey = args[0];

            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();

            params.add(new BasicNameValuePair("accesskey", accesskey));
            params.add(new BasicNameValuePair("state", state));
            params.add(new BasicNameValuePair("username", name));
            params.add(new BasicNameValuePair("password", password));

            JSONObject json = jsonParser.makeHttpRequest(Config.UserService, "POST", params);

            return json;

        }

        protected void onPostExecute(JSONObject result) {

            try {
                if (result != null) {
                    Toast.makeText(getApplicationContext(), result.getString("username").toString(), Toast.LENGTH_SHORT).show();
                    if(result.getString("success") != "0"){
                        prefManager.setUser(result.getString("username"), result.getString("email"));
                        final ProgressDialog progressDialog = new ProgressDialog(ActivityLogin.this,
                                R.style.AppTheme_Dark_Dialog);
                        progressDialog.setIndeterminate(true);
                        progressDialog.setMessage(getString(R.string.loading));
                        progressDialog.show();
                        new android.os.Handler().postDelayed(
                                new Runnable() {
                                    public void run() {
                                        prefManager.setLogin(true);
                                        Intent i = new Intent(getApplicationContext(), MainActivity.class);
                                        i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                                        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                        startActivity(i);
                                        progressDialog.dismiss();
                                    }
                                }, 2000);
                    } else {
                        Toast.makeText(getApplicationContext(),result.getString("message"),Toast.LENGTH_LONG).show();
                    }
                } else {
                    Toast.makeText(getApplicationContext(), getString(R.string.server_error), Toast.LENGTH_LONG).show();
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
