package com.dglproject.brand.utilities;

import android.content.Context;
import android.content.SharedPreferences;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class PrefManager {
    SharedPreferences pref;
    SharedPreferences.Editor editor;
    Context _context;

    int PRIVATE_MODE = 0;

    private static final String PREF_NAME = "DGLBRAND";

    private static final String IS_FIRST_TIME_LAUNCH = "IsFirstTimeLaunch";

    private static final String KEY_IS_LOGGED_IN = "isLoggedIn";
    private static final String KEY_IS_LOGGED_IN_USER_ID = "loggedUserId";
    private static final String KEY_IS_LOGGED_IN_USERNAME = "loggedUsername";
    private static final String KEY_IS_LOGGED_IN_EMAIL = "loggedEmail";

    public PrefManager(Context context) {
        this._context = context;
        pref = _context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
        editor = pref.edit();
    }

    public void setLogin(boolean isLoggedIn) {
        editor.putBoolean(KEY_IS_LOGGED_IN, isLoggedIn);
        editor.commit();

    }

    public void setUser(int id, String username, String email) {
        editor.putInt(KEY_IS_LOGGED_IN_USER_ID, id);
        editor.putString(KEY_IS_LOGGED_IN_USERNAME, username);
        editor.putString(KEY_IS_LOGGED_IN_EMAIL, email);
        editor.commit();
    }

    public int getUserId () { return pref.getInt(KEY_IS_LOGGED_IN_USER_ID, 0);}

    public String getUserName () {
        return pref.getString(KEY_IS_LOGGED_IN_USERNAME, "");
    }

    public String getUserEmail () {
        return pref.getString(KEY_IS_LOGGED_IN_EMAIL, "");
    }

    public void setFirstTimeLaunch(boolean isFirstTime) {
        editor.putBoolean(IS_FIRST_TIME_LAUNCH, isFirstTime);
        editor.commit();
    }

    public boolean isFirstTimeLaunch() {
        return pref.getBoolean(IS_FIRST_TIME_LAUNCH, true);
    }

    public boolean isLoggedIn(){
        return pref.getBoolean(KEY_IS_LOGGED_IN, false);
    }

}