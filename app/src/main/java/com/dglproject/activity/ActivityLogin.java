package com.dglproject.activity;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.MainActivity;
import com.dglproject.R;
import com.dglproject.json.JSONParser;
import com.dglproject.utils.PrefManager;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

public class ActivityLogin extends AppCompatActivity {

    private static final String TAG = "Login";

    private static final int REQUEST_SIGNUP = 0;

    PrefManager prefManager;

    EditText nameText;
    EditText passwordText;
    Button loginButton;
    TextView signUpLink;
    CheckBox rememberDetail;

    String URL= "http://dgl.toroo.info/api/UserService.php";

    JSONParser jsonParser=new JSONParser();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        prefManager = new PrefManager(this);

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
        userAttempt.execute(username,password);

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
        Toast.makeText(getBaseContext(), "Хэрэглэгчийн мэдээллээ шинэчлээд дахин оролдно уу !", Toast.LENGTH_LONG).show();
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
            nameText.setError("хэрэглэгчийн нэр 3-аас багагүй тэмдэгт байна");
            valid = false;
        } else {
            nameText.setError(null);
        }

        if (password.isEmpty() || password.length() < 4 ) {

            passwordText.setError("нууц үг 4-өөс олон тэмдэгт байна");
            valid = false;
        } else {
            passwordText.setError(null);
        }

        if (username.trim().length() > 0 && password.trim().length() > 0){

            valid = true;
        } else {

            Toast.makeText(ActivityLogin.this,"Хэрэглэгчийн нэр нууц үг буруу байна", Toast.LENGTH_SHORT).show();
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

            String password = args[1];
            String name= args[0];

            ArrayList<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("username", name));
            params.add(new BasicNameValuePair("password", password));

            JSONObject json = jsonParser.makeHttpRequest(URL, "POST", params);

            return json;

        }

        protected void onPostExecute(JSONObject result) {

            try {
                if (result != null) {
                    if(result.getString("success") == "1"){
                        final ProgressDialog progressDialog = new ProgressDialog(ActivityLogin.this,
                                R.style.AppTheme_Dark_Dialog);
                        progressDialog.setIndeterminate(true);
                        progressDialog.setMessage("Уншиж байна...");
                        progressDialog.show();
                        new android.os.Handler().postDelayed(
                                new Runnable() {
                                    public void run() {
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
                    Toast.makeText(getApplicationContext(), "Сэрвэрээс өгөгдөл авах боломжгүй байна", Toast.LENGTH_LONG).show();
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
