package cloud.techstar.ecommerce.activity

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.support.design.widget.Snackbar
import android.support.design.widget.TabLayout
import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentPagerAdapter
import android.support.v4.content.ContextCompat
import android.support.v7.app.AppCompatActivity
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast

import com.techstar.ecommerce.R

import cloud.techstar.ecommerce.fragments.CartFragment
import cloud.techstar.ecommerce.fragments.CategoryFragment
import cloud.techstar.ecommerce.fragments.CompanyFragment
import cloud.techstar.ecommerce.fragments.NavigationFragment
import cloud.techstar.ecommerce.fragments.ProductFragment
import cloud.techstar.ecommerce.utilities.PrefManager
import cloud.techstar.ecommerce.widgets.CustomViewPager

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
class MainActivity : AppCompatActivity() {

    private var mTabLayout: TabLayout? = null

    private val mTabsIcons = intArrayOf(R.drawable.ic_home, R.drawable.ic_dart_board, R.drawable.ic_category, R.drawable.ic_cart, R.drawable.ic_menu)

    internal var prefManager: PrefManager? = null

    internal var doubleBackToExitPressedOnce = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        init()
        setupViewPager()
        ProductFragment.newInstance(1)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (ContextCompat.checkSelfPermission(this@MainActivity,
                            Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(arrayOf(Manifest.permission.CAMERA, Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.BLUETOOTH, Manifest.permission.BLUETOOTH_ADMIN, Manifest.permission.READ_CONTACTS, Manifest.permission.WRITE_CONTACTS, Manifest.permission.READ_PHONE_STATE, Manifest.permission.WAKE_LOCK, Manifest.permission.INTERNET, Manifest.permission.ACCESS_NETWORK_STATE, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.VIBRATE), 0)
            }
        }
    }

    // oncreate үйлдэл ажиллахад дуудагдах
    fun init() {

        prefManager = PrefManager(applicationContext)

        val viewPager = findViewById<View>(R.id.view_pager) as CustomViewPager
        val pagerAdapter = MyPagerAdapter(supportFragmentManager)

        if (viewPager != null) {
            viewPager.isPagingEnabled = false
            viewPager.adapter = pagerAdapter
        }

        mTabLayout = findViewById<View>(R.id.tab_layout) as TabLayout
        if (mTabLayout != null) {
            mTabLayout!!.setupWithViewPager(viewPager)

            for (i in 0 until mTabLayout!!.tabCount) {
                val tab = mTabLayout!!.getTabAt(i)
                if (tab != null)
                    tab.customView = pagerAdapter.getTabView(i)
            }

            mTabLayout!!.getTabAt(0)!!.customView!!.isSelected = true
        }


        val prodAdd = findViewById<View>(R.id.product_add) as com.github.clans.fab.FloatingActionButton

        prodAdd.setOnClickListener { v ->
            if (prefManager!!.isLoggedIn) {
                val intent = Intent(this@MainActivity, ActivityProductAdd::class.java)
                startActivity(intent)
            } else {
                Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                        .setAction(getString(R.string.login)) { startActivity(Intent(applicationContext, ActivityLogin::class.java)) }.show()
            }
        }

        val companyAdd = findViewById<View>(R.id.company_add) as com.github.clans.fab.FloatingActionButton

        companyAdd.setOnClickListener { v ->
            if (prefManager!!.isLoggedIn) {
                startActivity(Intent(this@MainActivity, ActivityCompanyAdd::class.java))
            } else {
                Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                        .setAction(getString(R.string.login)) { startActivity(Intent(applicationContext, ActivityLogin::class.java)) }.show()
            }
        }
    }

    fun setupViewPager() {
        val viewPager = findViewById<View>(R.id.view_pager) as CustomViewPager
        val pagerAdapter = MyPagerAdapter(supportFragmentManager)

        if (viewPager != null) {
            viewPager.isPagingEnabled = false
            viewPager.adapter = pagerAdapter
        }

        mTabLayout = findViewById<View>(R.id.tab_layout) as TabLayout
        if (mTabLayout != null) {
            mTabLayout!!.setupWithViewPager(viewPager)

            for (i in 0 until mTabLayout!!.tabCount) {
                val tab = mTabLayout!!.getTabAt(i)
                if (tab != null)
                    tab.customView = pagerAdapter.getTabView(i)
            }

            mTabLayout!!.getTabAt(1)!!.customView!!.isSelected = true
        }
    }

    private inner class MyPagerAdapter(fm: FragmentManager) : FragmentPagerAdapter(fm) {

        val PAGE_COUNT = 5

        private val mTabsTitle = arrayOf(getString(R.string.company), getString(R.string.product), getString(R.string.category), getString(R.string.card), getString(R.string.menu))

        fun getTabView(position: Int): View {
            val view = LayoutInflater.from(this@MainActivity).inflate(R.layout.custom_tab, null)
            val title = view.findViewById<View>(R.id.title) as TextView
            title.text = mTabsTitle[position]
            val icon = view.findViewById<View>(R.id.icon) as ImageView
            icon.setImageResource(mTabsIcons[position])
            return view
        }

        override fun getItem(pos: Int): Fragment? {
            when (pos) {

                0 -> return CompanyFragment.newInstance(1)
                1 -> return ProductFragment.newInstance(2)
                2 -> return CategoryFragment.newInstance(3)
                3 -> return CartFragment.newInstance(4)
                4 -> return NavigationFragment.newInstance(5)
            }
            return null
        }

        override fun getCount(): Int {
            return PAGE_COUNT
        }

        override fun getPageTitle(position: Int): CharSequence? {
            return mTabsTitle[position]
        }
    }

    override fun onBackPressed() {

        if (doubleBackToExitPressedOnce) {
            super.onBackPressed()
            return
        }

        this.doubleBackToExitPressedOnce = true
        Toast.makeText(this, getString(R.string.exit_two_press), Toast.LENGTH_SHORT).show()

        Handler().postDelayed({ doubleBackToExitPressedOnce = false }, 2000)
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {

        menuInflater.inflate(R.menu.main, menu)
        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        val id = item.itemId
        //        switch (id) {
        //            case R.id.action_search:
        //                Intent search = new Intent(MainActivity.this, ActivitySearch.class);
        //                startActivity(search);
        //                return true;
        //        }
        return super.onOptionsItemSelected(item)
    }

    override fun onPause() {
        super.onPause()
    }

    override fun onResume() {
        super.onResume()
    }
}
