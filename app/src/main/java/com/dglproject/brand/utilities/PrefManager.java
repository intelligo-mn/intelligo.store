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
    private static final String LOGGED_IN = "isLoggedIn";
    private static final String LOGGED_IN_USER_ID = "loggedUserId";
    private static final String LOGGED_IN_USERNAME = "loggedUsername";
    private static final String LOGGED_IN_EMAIL = "loggedEmail";
    private static final String LANGUAGE = "language";
    private static final String BRAND_ID = "brandId";
    private static final String CATEGORY_ID = "catId";

    public PrefManager(Context context) {
        this._context = context;
        pref = _context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
        editor = pref.edit();
    }

    /**
     * Хэрэглэгч нэвтрэх болон гарах үед ашиглана
     *
     * @param isLoggedIn нэвтрэх үед true гарах үед false
     */
    public void setLogin(boolean isLoggedIn) {
        editor.putBoolean(LOGGED_IN, isLoggedIn);
        editor.commit();
    }

    /**
     * амжилттай нэвтэрсэн хэрэглэгчийн мэдээлэл хадгалах
     *
     * @param id хэрэглэгчийн id
     * @param username хэрэглэгчийн нэр
     * @param email хэрэглэгийн email
     */
    public void setUser(int id, String username, String email) {
        editor.putInt(LOGGED_IN_USER_ID, id);
        editor.putString(LOGGED_IN_USERNAME, username);
        editor.putString(LOGGED_IN_EMAIL, email);
        editor.commit();
    }

    /**
     * нэвтэрсэн байгаа хэрэглэгчийн id авах
     *
     * @return нэвтэрсэн байгаа хэрэглэгчийн id
     */
    public int getUserId () { return pref.getInt(LOGGED_IN_USER_ID, 0);}

    public String getUserName () {
        return pref.getString(LOGGED_IN_USERNAME, "");
    }

    public String getUserEmail () {
        return pref.getString(LOGGED_IN_EMAIL, "");
    }

    /**
     * Application хамгийн анх ачааллахад
     *
     * @param isFirstTime анх програм нээхэд true
     */
    public void setFirstTimeLaunch(boolean isFirstTime) {
        editor.putBoolean(IS_FIRST_TIME_LAUNCH, isFirstTime);
        editor.commit();
    }

    /**
     * Application хамгийн анх ачааллаж байгаа эсэх
     */
    public boolean isFirstTimeLaunch() {
        return pref.getBoolean(IS_FIRST_TIME_LAUNCH, true);
    }

    /**
     * нэвтэрсэн хэрэглэгч байгаа эсэх
     *
     * @return хэрэглэгч нэвтэрсэн эсвэл нэвтрээгүй байна
     */
    public boolean isLoggedIn(){
        return pref.getBoolean(LOGGED_IN, false);
    }

    /**
     * Сонгогдсон хэлийг хадгалах
     *
     * @param language сонгосон хэлний нэрний товчлол
     */
    public void setLanguage(String language) {
        editor.putString(LANGUAGE, language);
        editor.commit();
    }
    /**
     * Ямар хэл тохируулсан байгааг авах
     *
     * @return сонгосон хэлний нэрний товчлол
     */
    public String getLanguage () {
        return pref.getString(LANGUAGE, "");
    }

    /**
     * Брэндийн мэдээлэл хадгалах
     *
     * @param brandId
     */
    public void setBrand(int brandId) {
        editor.putInt(BRAND_ID, brandId);
        editor.commit();
    }
    /**
     * Брэндийн id авах
     *
     * @return brand id
     */
    public int getBrandId () {
        return pref.getInt(BRAND_ID, 0);
    }


    /**
     * Ангиллалын мэдээлэл хадгалах
     *
     * @param catId
     */
    public void setCat(int catId) {
        editor.putInt(CATEGORY_ID, catId);
        editor.commit();
    }
    /**
     * Ангилалын id авах
     *
     * @return category id
     */
    public int getCatId () {
        return pref.getInt(CATEGORY_ID, 0);
    }

}