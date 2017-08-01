package com.dglproject.brand;

import android.app.Application;

import com.dglproject.brand.utilities.DialogUtils;

/**
 * Created by turtuvshin on 8/1/17.
 */
public class AppStarter extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        DialogUtils.init();
    }
}