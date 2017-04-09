package com.dglproject.brand.activity;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import com.dglproject.brand.R;
import com.dglproject.brand.adapters.AdapterList;

public class ActivityAbout extends AppCompatActivity {

    ListView list;
    String[] titleId;
    String[] subtitleId;

    Integer[] imageId = {
            R.drawable.dgl_home,
            R.drawable.dgl_round,
            R.drawable.dgl_mail,
            R.drawable.dgl_technology,
            R.drawable.dgl_share,
            R.drawable.dgl_dart_board,
            R.drawable.dgl_menu

    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        final android.support.v7.app.ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
            getSupportActionBar().setTitle(R.string.about);
        }

        titleId = getResources().getStringArray(R.array.title);
        subtitleId = getResources().getStringArray(R.array.subtitle);

        AdapterList adapter = new AdapterList(ActivityAbout.this, titleId, subtitleId, imageId);
        list = (ListView) findViewById(R.id.list);
        list.setAdapter(adapter);
        list.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if (position == 4) {
                    Intent sendInt = new Intent(Intent.ACTION_SEND);
                    sendInt.putExtra(Intent.EXTRA_SUBJECT, getString(R.string.app_name));
                    sendInt.putExtra(Intent.EXTRA_TEXT, getString(R.string.app_name) + "\n" + getString(R.string.share_content) + "\n" + "https://play.google.com/store/apps/details?id=" + getPackageName());
                    sendInt.setType("text/plain");
                    startActivity(Intent.createChooser(sendInt, getString(R.string.about)));
                }
                if (position == 5) {
                    final String appName = getPackageName();
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + appName)));
                    } catch (android.content.ActivityNotFoundException anfe) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://play.google.com/store/apps/details?id=" + appName)));
                    }
                }
                if (position == 6) {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(getString(R.string.more_apps))));
                }
            }
        });

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                this.finish();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

}
