package cloud.techstar.ecommerce.activity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.techstar.ecommerce.R;

import cloud.techstar.ecommerce.fragments.CartFragment;
import cloud.techstar.ecommerce.fragments.CategoryFragment;
import cloud.techstar.ecommerce.fragments.CompanyFragment;
import cloud.techstar.ecommerce.fragments.NavigationFragment;
import cloud.techstar.ecommerce.fragments.ProductFragment;
import cloud.techstar.ecommerce.utilities.PrefManager;
import cloud.techstar.ecommerce.widgets.CustomViewPager;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class MainActivity extends AppCompatActivity {

    private TabLayout mTabLayout;

    private int[] mTabsIcons = {
            R.drawable.ic_home,
            R.drawable.ic_dart_board,
            R.drawable.ic_category,
            R.drawable.ic_cart,
            R.drawable.ic_menu};

    PrefManager prefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();
        setupViewPager();
        ProductFragment.newInstance(1);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (ContextCompat.checkSelfPermission(MainActivity.this,
                    Manifest.permission.CAMERA)
                    != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(new String[]{Manifest.permission.CAMERA,
                        Manifest.permission.READ_EXTERNAL_STORAGE,
                        Manifest.permission.WRITE_EXTERNAL_STORAGE,
                        Manifest.permission.BLUETOOTH,
                        Manifest.permission.BLUETOOTH_ADMIN,
                        Manifest.permission.READ_CONTACTS,
                        Manifest.permission.WRITE_CONTACTS,
                        Manifest.permission.READ_PHONE_STATE,
                        Manifest.permission.WAKE_LOCK,
                        Manifest.permission.INTERNET,
                        Manifest.permission.ACCESS_NETWORK_STATE,
                        Manifest.permission.ACCESS_FINE_LOCATION,
                        Manifest.permission.ACCESS_COARSE_LOCATION,
                        Manifest.permission.VIBRATE,

                }, 0);
            }
        }
    }

    // oncreate үйлдэл ажиллахад дуудагдах
    public void init () {

        prefManager = new PrefManager(getApplicationContext());

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


        com.github.clans.fab.FloatingActionButton prodAdd = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.product_add);

        prodAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (prefManager.isLoggedIn()) {
                    Intent intent = new Intent(MainActivity.this, ActivityProductAdd.class);
                    startActivity(intent);
                } else {
                    Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                            .setAction(getString(R.string.login), new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
                                }
                            }).show();
                }
            }
        });

        com.github.clans.fab.FloatingActionButton companyAdd = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.company_add);

        companyAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (prefManager.isLoggedIn()) {
                    startActivity(new Intent(MainActivity.this, ActivityCompanyAdd.class));
                } else {
                    Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                            .setAction(getString(R.string.login), new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
                                }
                            }).show();
                }
            }
        });
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

        public final int PAGE_COUNT = 5;

        private final String[] mTabsTitle = {getString(R.string.company), getString(R.string.product),  getString(R.string.category), getString(R.string.card), getString(R.string.menu)};

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
                    return CompanyFragment.newInstance(1);
                case 1:
                    return ProductFragment.newInstance(2);
                case 2:
                    return CategoryFragment.newInstance(3);
                case 3:
                    return CartFragment.newInstance(4);
                case 4:
                    return NavigationFragment.newInstance(5);
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
        Toast.makeText(this, getString(R.string.exit_two_press), Toast.LENGTH_SHORT).show();

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
//        switch (id) {
//            case R.id.action_search:
//                Intent search = new Intent(MainActivity.this, ActivitySearch.class);
//                startActivity(search);
//                return true;
//        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
    }
}
