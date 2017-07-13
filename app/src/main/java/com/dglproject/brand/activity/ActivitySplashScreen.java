package com.dglproject.brand.activity;

import android.content.Intent;
import android.content.res.Resources;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.ImageButton;

import com.dglproject.brand.R;

import java.util.Locale;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class ActivitySplashScreen extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        ImageButton en = (ImageButton)findViewById(R.id.langEn);
        ImageButton mn = (ImageButton)findViewById(R.id.langMn);
        ImageButton cn = (ImageButton)findViewById(R.id.langCn);
        ImageButton ru = (ImageButton)findViewById(R.id.langRu);

        mn.setOnClickListener(this);
        en.setOnClickListener(this);
        cn.setOnClickListener(this);
        ru.setOnClickListener(this);
    }

    // Хэл сонгох
    private void changeLanguage(String lang) {
        Resources res = getApplicationContext().getResources();
        DisplayMetrics dm = res.getDisplayMetrics();
        android.content.res.Configuration conf = res.getConfiguration();
        conf.locale = new Locale(lang);
        res.updateConfiguration(conf, dm);

        Intent intent = new Intent(ActivitySplashScreen.this, ActivityWelcome.class);
        startActivity(intent);
        finish();
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.langEn:
                changeLanguage("en");
                break;
            case R.id.langMn:
                changeLanguage("mn");
                break;
            case R.id.langCn:
                changeLanguage("cn");
                break;
            case R.id.langRu:
                changeLanguage("ru");
                break;
        }
    }
}
