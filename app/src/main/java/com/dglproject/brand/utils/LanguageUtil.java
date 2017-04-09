//package com.dglproject.brand.utils;
//
//import android.content.Context;
//import android.content.res.Configuration;
//import android.content.res.Resources;
//import android.util.DisplayMetrics;
//import android.util.Log;
//
//import java.util.Locale;
//
///**
// * Created by Tortuvshin Byambaa on 4/10/2017.
// */
//
//public class LanguageUtil {
//    public static void changeLanguageType(Context context, Locale localelanguage) {
//        Log.i("=======", "context = " + context);
////        Resources resources = context.getResources();
//        Resources resources = app.getContext().getResources();
//        DisplayMetrics dm = resources.getDisplayMetrics();
//        Configuration config = resources.getConfiguration();
//        // 应用用户选择语言
//        // 参考 https://developer.android.com/reference/android/content/res/Configuration.html
//        if (VersionUtils.isAfter24()) {
//            config.setLocale(localelanguage);
//        } else {
//            config.locale = localelanguage;
//            resources.updateConfiguration(config, dm);
//        }
//    }
//
//    public static Locale getLanguageType(Context context) {
//        Log.i("=======", "context = " + context);
////        Resources resources = context.getResources();
//        Resources resources = getApplicationContext().getResources();
//        Configuration config = resources.getConfiguration();
//        // 应用用户选择语言
//        if (VersionUtils.isAfter24()) {
//            return config.getLocales().get(0);
//        } else {
//            return config.locale;
//        }
//    }
//}