package com.dglproject.activity;

import android.app.ProgressDialog;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.R;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ActivitySignup extends AppCompatActivity {

    private static final String TAG = "SignUp";
    public SharedPreferences sharedPreferences;
    SharedPreferences.Editor editor;
    EditText nameEditText, emailEditText, passwordEditText, confirmPasswordEditText;
    Button signUpButton;
    TextView loginLink;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        nameEditText = (EditText)findViewById(R.id.sName);
        emailEditText = (EditText)findViewById(R.id.sEmail);
        passwordEditText = (EditText)findViewById(R.id.sPassword);
        confirmPasswordEditText = (EditText)findViewById(R.id.sComfirmPassword);
        signUpButton = (Button)findViewById(R.id.btnSignUp);
        loginLink = (TextView)findViewById(R.id.linkLogin);

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
        progressDialog.setMessage("Бүртгэл үүсгэж байна...");
        progressDialog.show();

        // TODO: Implement your own signup logic here.
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
        Toast.makeText(getBaseContext(), "Бүртгэл амжилттай боллоо", Toast.LENGTH_LONG).show();
        String name = nameEditText.getText().toString();
        String email = emailEditText.getText().toString();
        String password = passwordEditText.getText().toString();

    }

    public void onSignupFailed() {
        Toast.makeText(getBaseContext(), "Бүртгүүлэхэд алдаа гарлаа", Toast.LENGTH_LONG).show();
        signUpButton.setEnabled(true);
    }

    public boolean validate() {
        boolean valid = true;
        sharedPreferences = getSharedPreferences(ActivityLogin.PREFER_NAME, 0);
        editor = sharedPreferences.edit();
        editor.putLong("UserId",0);
        editor.commit();

        String name = nameEditText.getText().toString();
        String email = emailEditText.getText().toString();
        String password = passwordEditText.getText().toString();
        String confirmPassword = confirmPasswordEditText.getText().toString();

        if (name.isEmpty() || name.length() < 3) {
            nameEditText.setError("хамгийн багадаа 3 тэмдэгт");
            valid = false;
        } else {
            nameEditText.setError(null);
        }
        if (email.isEmpty() || !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            emailEditText.setError("И-мэйл хаягаа зөв оруулна уу");
            valid = false;
        } else {
            emailEditText.setError(null);
        }
        if (password.isEmpty() || password.length() < 4 || password.length() > 17) {
            passwordEditText.setError("нууц үг 4-өөс 16 тэмдэгт");
            passwordEditText.setText("");
            valid = false;
        } else {
            passwordEditText.setError(null);
        }
        if (!password.equals(confirmPassword)){
            confirmPasswordEditText.setError("Нууц үг таарахгүй байна");
            valid = false;
        }
        else{
            confirmPasswordEditText.setError(null);
        }

        //password = PasswordHashes(password);

        return valid;
    }
    private void saveLoggedInUser(long id, String username, String password) {
        sharedPreferences = getSharedPreferences(ActivityLogin.PREFER_NAME, 0);
        editor = sharedPreferences.edit();
        editor.putLong("UserId", id);
        editor.putString("Username", username);
        editor.putString("Password", password);
        editor.commit();
    }
    /**
     * Hashes the password with MD5.
     * @param s
     * @return
     */
    private String PasswordHashes(String s) {
        try {

            MessageDigest digest = java.security.MessageDigest.getInstance("MD5");
            digest.update(s.getBytes());
            byte messageDigest[] = digest.digest();

            StringBuffer hexString = new StringBuffer();
            for (int i=0; i<messageDigest.length; i++)
                hexString.append(Integer.toHexString(0xFF & messageDigest[i]));
            return hexString.toString();

        } catch (NoSuchAlgorithmException e) {
            return s;
        }
    }
}
