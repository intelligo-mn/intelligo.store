package com.dglproject.activity;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.dglproject.R;

public class ActivityUserProfile extends AppCompatActivity {

    ImageView settingsImg;
    ImageView back;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_profile);
        getSupportActionBar().hide();

        back = (ImageView) findViewById(R.id.profile_back);
        settingsImg = (ImageView) findViewById(R.id.user_profile_set_btn);

        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        settingsImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent set = new Intent(ActivityUserProfile.this, ActivityUserSettings.class);
                startActivity(set);
            }
        });
    }
}
