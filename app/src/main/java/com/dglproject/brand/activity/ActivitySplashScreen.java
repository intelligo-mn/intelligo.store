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

public class ActivitySplashScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        ImageButton en = (ImageButton)findViewById(R.id.langEn);
        ImageButton mn = (ImageButton)findViewById(R.id.langMn);
        ImageButton cn = (ImageButton)findViewById(R.id.langCn);
        ImageButton ru = (ImageButton)findViewById(R.id.langRu);


        en.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Resources res = getApplicationContext().getResources();
                DisplayMetrics dm = res.getDisplayMetrics();
                android.content.res.Configuration conf = res.getConfiguration();
                conf.locale = new Locale("en");
                res.updateConfiguration(conf, dm);

                Intent intent = new Intent(ActivitySplashScreen.this, ActivityWelcome.class);
                startActivity(intent);
                finish();
            }
        });

        mn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Resources res = getApplicationContext().getResources();
                DisplayMetrics dm = res.getDisplayMetrics();
                android.content.res.Configuration conf = res.getConfiguration();
                conf.locale = new Locale("mn");
                res.updateConfiguration(conf, dm);

                Intent intent = new Intent(ActivitySplashScreen.this, ActivityWelcome.class);
                startActivity(intent);
                finish();
            }
        });

        cn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Resources res = getApplicationContext().getResources();
                DisplayMetrics dm = res.getDisplayMetrics();
                android.content.res.Configuration conf = res.getConfiguration();
                conf.locale = new Locale("zh");
                res.updateConfiguration(conf, dm);

                Intent intent = new Intent(ActivitySplashScreen.this, ActivityWelcome.class);
                startActivity(intent);
                finish();
            }
        });

        ru.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Resources res = getApplicationContext().getResources();
                DisplayMetrics dm = res.getDisplayMetrics();
                android.content.res.Configuration conf = res.getConfiguration();
                conf.locale = new Locale("ru");
                res.updateConfiguration(conf, dm);

                Intent intent = new Intent(ActivitySplashScreen.this, ActivityWelcome.class);
                startActivity(intent);
                finish();
            }
        });

    }
}
