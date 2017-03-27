package com.dglproject.activity;

import android.app.Activity;
import android.app.SearchManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.speech.RecognizerIntent;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.MenuItemCompat;
import android.support.v7.widget.SearchView;
import android.telephony.cdma.CdmaCellLocation;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.R;
import com.dglproject.activity.ActivityAbout;
import com.dglproject.activity.ActivityBrandAdd;
import com.dglproject.activity.ActivityCart;
import com.dglproject.activity.ActivityCategory;
import com.dglproject.activity.ActivityLogin;
import com.dglproject.activity.ActivityProductAdd;
import com.dglproject.activity.ActivitySettings;
import com.dglproject.activity.ActivitySignup;
import com.dglproject.activity.ActivityUserSettings;
import com.dglproject.activity.ActivityCompany;
import com.dglproject.activity.ActivityDepartment;
import com.dglproject.activity.ActivityHelp;
import com.dglproject.activity.ActivityUserProfile;
import com.dglproject.fragments.CategoryFragment;
import com.dglproject.fragments.HomeItems;
import com.dglproject.utils.PrefManager;
import com.dglproject.widgets.CustomViewPager;
import com.dglproject.widgets.MaterialSearchView;

import android.support.v4.app.Fragment;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    ImageView userImage;
    private TabLayout mTabLayout;

    private int[] mTabsIcons = {
            R.drawable.dgl_white_heart,
            R.drawable.dgl_white_app,
            R.drawable.dgl_white_list,
            R.drawable.dgl_white_list};

    PrefManager prefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();
        setupViewPager();
        HomeItems.newInstance(1);
        isStoragePermissionGranted();

    }

    // oncreate үйлдэл ажиллахад дуудагдах
    public void init () {
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        prefManager = new PrefManager(getApplicationContext());

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        View headerView = getLayoutInflater().inflate(R.layout.nav_header_main, navigationView, false);
        navigationView.addHeaderView(headerView);

        CustomViewPager viewPager = (CustomViewPager) findViewById(R.id.view_pager);
        MyPagerAdapter pagerAdapter = new MyPagerAdapter(getSupportFragmentManager());

        if (viewPager != null) {
            viewPager.setPagingEnabled(false);
            viewPager.setAdapter(pagerAdapter);
        }

        mTabLayout = (TabLayout) findViewById(R.id.tab_layout);
        if (mTabLayout != null) {
            mTabLayout.setupWithViewPager(viewPager);

            for (int i = 0; i < mTabLayout.getTabCount(); i++) {
                TabLayout.Tab tab = mTabLayout.getTabAt(i);
                if (tab != null)
                    tab.setCustomView(pagerAdapter.getTabView(i));
            }

            mTabLayout.getTabAt(0).getCustomView().setSelected(true);
        }

        userImage = (ImageView ) headerView.findViewById(R.id.imageViewNavUser);

        userImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent profile = new Intent(MainActivity.this, ActivityUserProfile.class);
                startActivity(profile);
            }
        });


//        com.github.clans.fab.FloatingActionButton companyAdd = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.add_company);
//        companyAdd.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                if (prefManager.isLoggedIn()) {
//                    startActivity(new Intent(getApplicationContext(), ActivityBrandAdd.class));
//                } else {
//                    Snackbar.make(v, "Та нэвтрэх шаардлагатай !", Snackbar.LENGTH_LONG)
//                            .setAction("Нэвтрэх", new View.OnClickListener() {
//                                @Override
//                                public void onClick(View v) {
//                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
//                                }
//                            }).show();
//                }
//            }
//        });
//        com.github.clans.fab.FloatingActionButton productAdd = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.add_product);
//        productAdd.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                if (prefManager.isLoggedIn()) {
//                    startActivity(new Intent(getApplicationContext(), ActivityProductAdd.class));
//                } else {
//                    Snackbar.make(v, "Та нэвтрэх шаардлагатай !", Snackbar.LENGTH_LONG)
//                            .setAction("Нэвтрэх", new View.OnClickListener() {
//                                @Override
//                                public void onClick(View v) {
//                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
//                                }
//                            }).show();
//                }
//
//            }
//        });
    }

    public void setupViewPager () {
        CustomViewPager viewPager = (CustomViewPager) findViewById(R.id.view_pager);
        MyPagerAdapter pagerAdapter = new MyPagerAdapter(getSupportFragmentManager());

        if (viewPager != null) {
            viewPager.setPagingEnabled(false);
            viewPager.setAdapter(pagerAdapter);
        }

        mTabLayout = (TabLayout) findViewById(R.id.tab_layout);
        if (mTabLayout != null) {
            mTabLayout.setupWithViewPager(viewPager);

            for (int i = 0; i < mTabLayout.getTabCount(); i++) {
                TabLayout.Tab tab = mTabLayout.getTabAt(i);
                if (tab != null)
                    tab.setCustomView(pagerAdapter.getTabView(i));
            }

            mTabLayout.getTabAt(1).getCustomView().setSelected(true);
        }
    }

    private class MyPagerAdapter extends FragmentPagerAdapter {

        public final int PAGE_COUNT = 4;

        private final String[] mTabsTitle = {"Бүтээгдэхүүн", "Брэндүүд", "Ангилалууд", "Ангилалууд"};

        public MyPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        public View getTabView(int position) {
            View view = LayoutInflater.from(MainActivity.this).inflate(R.layout.custom_tab, null);
            TextView title = (TextView) view.findViewById(R.id.title);
            title.setText(mTabsTitle[position]);
            ImageView icon = (ImageView) view.findViewById(R.id.icon);
            icon.setImageResource(mTabsIcons[position]);
            return view;
        }

        @Override
        public Fragment getItem(int pos) {
            switch (pos) {

                case 0:
                    getSupportActionBar().setTitle("");
                    return HomeItems.newInstance(1);
                case 1:
                    getSupportActionBar().setTitle("");
                    return HomeItems.newInstance(2);
                case 2:
                    getSupportActionBar().setTitle("");
                    return CategoryFragment.newInstance(3);

            }
            return null;
        }

        @Override
        public int getCount() {
            return PAGE_COUNT;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            return mTabsTitle[position];
        }
    }

    boolean doubleBackToExitPressedOnce = false;

    @Override
    public void onBackPressed() {

        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(this, "Гарах бол дахин дарна уу.", Toast.LENGTH_SHORT).show();

        new Handler().postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce=false;
            }
            }, 2000);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {

        getMenuInflater().inflate(R.menu.main, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();
        switch (id) {
            case R.id.action_search:
//                searchView.openSearch();
                Intent search = new Intent(MainActivity.this, ActivitySearch.class);
                startActivity(search);

                return true;
            case R.id.action_cart:
                Intent cart = new Intent(MainActivity.this, ActivityCart.class);
                startActivity(cart);
                return true;
            case R.id.action_settings:
                Intent settings = new Intent(MainActivity.this, ActivitySettings.class);
                startActivity(settings);
                return true;

        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem item) {

        item.setChecked(true);
        int id = item.getItemId();
        if (id == R.id.nav_category) {
            Intent loginIntent = new Intent(MainActivity.this, ActivityCategory.class);
            startActivity(loginIntent);
        } else if (id == R.id.nav_company) {
            Intent companyIntent = new Intent(MainActivity.this, ActivityCompany.class);
            startActivity(companyIntent);
        } else if (id == R.id.nav_checkout) {

        } else if (id == R.id.nav_settings) {
            Intent settingsIntent = new Intent(MainActivity.this, ActivityUserSettings.class);
            startActivity(settingsIntent);
        } else if (id == R.id.nav_help) {
            Intent helpIntent = new Intent(MainActivity.this, ActivityHelp.class);
            startActivity(helpIntent);
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == MaterialSearchView.REQUEST_VOICE && resultCode == RESULT_OK) {
            ArrayList<String> matches = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            if (matches != null && matches.size() > 0) {
                String searchWrd = matches.get(0);
                if (!TextUtils.isEmpty(searchWrd)) {
//                    searchView.setQuery(searchWrd, false);
                }
            }

            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onPause() {
        super.onPause();
//        searchView.clearSuggestions();
    }

    @Override
    protected void onResume() {
        super.onResume();
//        searchView.activityResumed();
//        String[] arr = getResources().getStringArray(R.array.suggestions);
//
//        searchView.addSuggestions(arr);
    }



    public boolean isStoragePermissionGranted() {
        if (Build.VERSION.SDK_INT >= 23) {
            if (checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    == PackageManager.PERMISSION_GRANTED) {
                return true;
            } else {

                ActivityCompat.requestPermissions(this, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);
                return false;
            }
        } else {
            return true;
        }
    }
}
