package com.dglproject;

import android.app.SearchManager;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.MenuItemCompat;
import android.support.v7.widget.SearchView;
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
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.dglproject.activity.ActivityCart;
import com.dglproject.activity.ActivityCategory;
import com.dglproject.activity.ActivityLogin;
import com.dglproject.activity.ActivitySettings;
import com.dglproject.activity.ActivityUserSettings;
import com.dglproject.activity.ActivityCompany;
import com.dglproject.activity.ActivityDepartment;
import com.dglproject.activity.ActivityHelp;
import com.dglproject.activity.ActivityUserProfile;
import com.dglproject.fragments.MainFragment;
import com.dglproject.fragments.PageFragment;
import com.dglproject.widgets.CustomViewPager;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    ImageView userImage;

    private TabLayout mTabLayout;

    private int[] mTabsIcons = {
            R.drawable.ic_recents_selector,
            R.drawable.ic_favorite_selector,
            R.drawable.ic_place_selector};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();
        setupViewPager();
    }


    // oncreate үйлдэл ажиллахад дуудагдах
    public void init () {
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        View headerView = getLayoutInflater().inflate(R.layout.nav_header_main, navigationView, false);
        navigationView.addHeaderView(headerView);

        userImage = (ImageView ) headerView.findViewById(R.id.imageViewNavUser);

        userImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent profile = new Intent(MainActivity.this, ActivityUserProfile.class);
                startActivity(profile);
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

            mTabLayout.getTabAt(0).getCustomView().setSelected(true);
        }
    }

    private class MyPagerAdapter extends FragmentPagerAdapter {

        public final int PAGE_COUNT = 3;

        private final String[] mTabsTitle = {"Дэлгүүр", "Брэнд апп", "Аялал жуулчлал"};

        public MyPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        public View getTabView(int position) {
            // Given you have a custom layout in `res/layout/custom_tab.xml` with a TextView and ImageView
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
                    return PageFragment.newInstance(1);

                case 1:
                    return MainFragment.newInstance(1);
                case 2:
                    return PageFragment.newInstance(3);

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
        SearchManager searchManager = (SearchManager) getSystemService(SEARCH_SERVICE);
        SearchView searchView = (SearchView) menu.findItem(R.id.action_search).getActionView();

        searchView.setSearchableInfo(searchManager.getSearchableInfo(getComponentName()));
        searchView.setIconifiedByDefault(false);

        SearchView.OnQueryTextListener textChangeListener = new SearchView.OnQueryTextListener()
        {
            @Override
            public boolean onQueryTextChange(String newText)
            {
                return true;
            }
            @Override
            public boolean onQueryTextSubmit(String query)
            {
                return true;
            }
        };
        searchView.setOnQueryTextListener(textChangeListener);

        MenuItem cartItem = menu.findItem(R.id.action_cart);
        MenuItemCompat.setActionView(cartItem, R.layout.action_icon_cart);
        View view = MenuItemCompat.getActionView(cartItem);
        cartItem.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem item) {
                Intent cart = new Intent(MainActivity.this, ActivityCart.class);
                startActivity(cart);
                return true;
            }
        });
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            Intent settings = new Intent(MainActivity.this, ActivitySettings.class);
            startActivity(settings);
        } else if (id == R.id.action_category) {
            Intent cat = new Intent(MainActivity.this, ActivityCategory.class);
            startActivity(cat);
        } else if (id == R.id.action_cart) {
            Intent cart = new Intent(MainActivity.this, ActivityCart.class);
            startActivity(cart);
        }
            else if (id == R.id.action_login) {
            Intent cart = new Intent(MainActivity.this, ActivityLogin.class);
            startActivity(cart);

        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_category) {
            // Handle the camera action
            Intent loginIntent = new Intent(MainActivity.this, ActivityCategory.class);
            startActivity(loginIntent);
        } else if (id == R.id.nav_company) {
            Intent companyIntent = new Intent(MainActivity.this, ActivityCompany.class);
            startActivity(companyIntent);
        } else if (id == R.id.nav_department) {
            Intent depaIntent = new Intent(MainActivity.this, ActivityDepartment.class);
            startActivity(depaIntent);
        } else if (id == R.id.nav_checkout) {

        } else if (id == R.id.nav_location) {

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
}
