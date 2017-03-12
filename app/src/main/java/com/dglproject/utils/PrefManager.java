package com.dglproject.utils;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by Tortuvshin Byambaa on 3/9/2017.
 */
public class PrefManager {
    SharedPreferences pref;
    SharedPreferences.Editor editor;
    Context _context;

    int PRIVATE_MODE = 0;

    private static final String PREF_NAME = "DGLBRAND";

    private static final String IS_FIRST_TIME_LAUNCH = "IsFirstTimeLaunch";

    public PrefManager(Context context) {
        this._context = context;
        pref = _context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
        editor = pref.edit();
    }

    public void setFirstTimeLaunch(boolean isFirstTime) {
        editor.putBoolean(IS_FIRST_TIME_LAUNCH, isFirstTime);
        editor.commit();
    }

    public boolean isFirstTimeLaunch() {
        return pref.getBoolean(IS_FIRST_TIME_LAUNCH, true);
    }

    public void createUser(String username, String email, String password) {
        editor.putString("user_name", username);
        editor.putString("user_email", email);
        editor.putString("password", password);
        editor.commit();
    }

    public boolean loginUser (String email, String password) {

        boolean valid = true;

        String thisUsermail = pref.getString("user_email", "");
        String thisPassword = pref.getString("password", "");

        if (thisUsermail == email || thisPassword == password) {
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    }

    public void saveLoggedInUser(String username, String email, String password) {
        editor.putString("user_name", username);
        editor.putString("user_email", email);
        editor.putString("password", password);
        editor.commit();
    }
}