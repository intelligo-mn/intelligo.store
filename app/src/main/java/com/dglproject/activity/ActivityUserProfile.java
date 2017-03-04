package com.dglproject.activity;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;

import com.dglproject.R;

public class ActivityUserProfile extends AppCompatActivity {

    ImageView settingsImg;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_profile);
        getSupportActionBar().hide();

        settingsImg = (ImageView) findViewById(R.id.user_profile_set_btn);

        settingsImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent set = new Intent(ActivityUserProfile.this, ActivityUserSettings.class);
                startActivity(set);
            }
        });
    }
}
