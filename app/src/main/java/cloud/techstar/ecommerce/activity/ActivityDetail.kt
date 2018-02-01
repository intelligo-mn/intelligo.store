package cloud.techstar.ecommerce.activity

import android.content.Intent
import android.content.res.Configuration
import android.content.res.Resources
import android.graphics.Bitmap
import android.graphics.Color
import android.graphics.drawable.BitmapDrawable
import android.os.AsyncTask
import android.os.Bundle
import android.support.design.widget.CollapsingToolbarLayout
import android.support.design.widget.CoordinatorLayout
import android.support.design.widget.FloatingActionButton
import android.support.design.widget.Snackbar
import android.support.v7.app.AppCompatActivity
import android.support.v7.graphics.Palette
import android.support.v7.widget.Toolbar
import android.view.MenuItem
import android.view.View
import android.webkit.WebSettings
import android.webkit.WebView
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast

import com.squareup.picasso.Callback
import com.squareup.picasso.Picasso
import com.techstar.ecommerce.R

import java.text.DecimalFormat

import cloud.techstar.ecommerce.database.CartTable
import cloud.techstar.ecommerce.models.CartProducts
import cloud.techstar.ecommerce.utilities.PrefManager
import cloud.techstar.ecommerce.utilities.TSConstants
import cloud.techstar.ecommerce.widgets.TSProgressBar

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
class ActivityDetail : AppCompatActivity() {

    private var imgPreview: ImageView? = null


    internal var txtText: TextView? = null
    internal var txtSubText: TextView? = null
    internal var txtDescription: WebView? = null
    internal var prgLoading: TSProgressBar? = null
    internal var txtAlert: TextView? = null
    internal var totalOrderView: TextView? = null
    internal var totalCostView: TextView? = null

    internal var increaseTotalCostButton: Button? = null
    internal var decreaseTotalCostButton: Button? = null
    internal var addToListButton: Button? = null

    internal var coordinatorLayout: CoordinatorLayout? = null

    internal var Product_image: String? = null
    internal var Product_name: String? = null
    internal var Product_description: String? = null

    internal var totalCostDouble: Double = 0.toDouble()
    internal var totalOrder: Int = 0
    internal var imageTitleString: String? = null

    internal var Product_price: Double = 0.toDouble()
    internal var Product_quantity: Int = 0
    internal var Product_ID: Long = 0
    internal var ProductService: String? = null
    internal var IOConnect = 0

    internal var prefManager: PrefManager? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_product_detail)

        prefManager = PrefManager(applicationContext)

        val toolbar = findViewById<View>(R.id.toolbar) as Toolbar
        setSupportActionBar(toolbar)
        val actionBar = supportActionBar
        if (actionBar != null) {
            supportActionBar!!.setDisplayHomeAsUpEnabled(true)
        }

        val collapsingToolbar = findViewById<View>(R.id.collapsing_toolbar) as CollapsingToolbarLayout
        collapsingToolbar.title = ""

        imgPreview = findViewById<View>(R.id.imgPreview) as ImageView
        txtText = findViewById<View>(R.id.txtText) as TextView
        txtSubText = findViewById<View>(R.id.txtSubText) as TextView

        txtDescription = findViewById<View>(R.id.txtDescription) as WebView

        coordinatorLayout = findViewById<View>(R.id.main_content) as CoordinatorLayout

        prgLoading = findViewById<View>(R.id.prgLoading) as TSProgressBar
        txtAlert = findViewById<View>(R.id.txtAlert) as TextView

        increaseTotalCostButton = findViewById<View>(R.id.increaseTotalCostButton) as Button
        addToListButton = findViewById<View>(R.id.addToListButton) as Button
        decreaseTotalCostButton = findViewById<View>(R.id.decreaseTotalCostButton) as Button

        increaseTotalCostButton!!.setOnClickListener { increaseTotalCost() }

        decreaseTotalCostButton!!.setOnClickListener { decreaseTotalCost() }

        addToListButton!!.setOnClickListener { addToList() }

        val fab = findViewById<View>(R.id.btnAdd) as FloatingActionButton
        fab.setOnClickListener {
            val sendInt = Intent(Intent.ACTION_SEND)
            sendInt.putExtra(Intent.EXTRA_SUBJECT, Product_name)
            sendInt.putExtra(Intent.EXTRA_TEXT, Product_description + "\n" + Product_image + "\n")
            sendInt.type = "text/plain"
            startActivity(Intent.createChooser(sendInt, getString(R.string.share)))
        }

        val fab2 = findViewById<View>(R.id.send_sms) as com.github.clans.fab.FloatingActionButton
        fab2.setOnClickListener {
            //                if (prefManager.isLoggedIn()) {
            startActivity(Intent(applicationContext, ActivityCart::class.java))
            //                } else {
            //                    Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
            //                            .setAction(R.string.login, new View.OnClickListener() {
            //                                @Override
            //                                public void onClick(View v) {
            //                                    startActivity(new Intent(getApplicationContext(), ActivityLogin.class));
            //                                }
            //                            }).show();
            //                }
        }

        val fab3 = findViewById<View>(R.id.send_mail) as com.github.clans.fab.FloatingActionButton
        fab3.setOnClickListener { v ->
            if (prefManager!!.isLoggedIn) {

            } else {
                Snackbar.make(v, getString(R.string.login_required), Snackbar.LENGTH_LONG)
                        .setAction(getString(R.string.login)) { startActivity(Intent(applicationContext, ActivityLogin::class.java)) }.show()
            }
        }

        val iGet = intent

        Product_ID = iGet.getLongExtra("product_id", 0)

        getDataTask().execute()

        //        getSupportActionBar().setTitle(Product_name);
        displayData()

        //        com.github.clans.fab.FloatingActionButton fabShare = (com.github.clans.fab.FloatingActionButton) findViewById(R.id.share);
        //        fabShare.setOnClickListener(new View.OnClickListener() {
        //            @Override
        //            public void onClick(View v) {
        //                Intent sendInt = new Intent(Intent.ACTION_SEND);
        //                sendInt.putExtra(Intent.EXTRA_SUBJECT, Product_name);
        //                sendInt.putExtra(Intent.EXTRA_TEXT, Product_description + "\n" + Product_image + "\n");
        //                sendInt.setType("text/plain");
        //                startActivity(Intent.createChooser(sendInt, getString(R.string.title_app_share)));
        //            }
        //        });

    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            android.R.id.home -> finish()
            else -> return super.onOptionsItemSelected(item)
        }
        return false
    }

    fun displayData() {
        totalCostView = findViewById<View>(R.id.total_cost_text_view) as TextView
        totalCostView!!.text = getString(R.string.total_cost) + " : " + DecimalFormat("#.##").format(totalCostDouble) + " ₮"

        totalOrderView = findViewById<View>(R.id.total_item_number) as TextView
        totalOrderView!!.text = getString(R.string.total_number) + " : " + totalOrder
    }

    fun increaseTotalCost() {
        totalOrder++
        totalCostDouble += Product_price
        displayUpdate()
    }

    fun decreaseTotalCost() {
        totalOrder = if (--totalOrder < 1) 1 else totalOrder
        totalCostDouble -= Product_price
        totalCostDouble = if (totalCostDouble < Product_price) Product_price else totalCostDouble
        displayUpdate()
    }

    fun displayUpdate() {
        totalCostView = findViewById<View>(R.id.total_cost_text_view) as TextView
        totalCostView!!.text = getString(R.string.total_cost) + " : " + DecimalFormat("#.##").format(totalCostDouble) + " ₮"

        totalOrderView = findViewById<View>(R.id.total_item_number) as TextView
        totalOrderView!!.text = getString(R.string.total_number) + " : " + totalOrder
    }

    fun addToList() {
        val productAdapter = CartTable(this)
        val item = CartProducts(Product_name, Product_description, Product_price, imageTitleString, totalCostDouble, totalOrder)
        productAdapter.addProduct(item)
        Toast.makeText(applicationContext, getString(R.string.cart_add_success), Toast.LENGTH_SHORT).show()

    }

    inner class getDataTask internal constructor() : AsyncTask<Void, Void, Void>() {

        init {
            if (!prgLoading!!.isShown) {
                prgLoading!!.visibility = View.VISIBLE
                txtAlert!!.visibility = View.VISIBLE
            }
        }

        override fun doInBackground(vararg arg0: Void): Void? {

            return null
        }

        override fun onPostExecute(result: Void) {
            prgLoading!!.visibility = View.GONE
            if (Product_name != null && IOConnect == 0) {
                coordinatorLayout!!.visibility = View.VISIBLE
                Picasso.with(applicationContext).load(TSConstants.WebURL + "/uploads/product_photos/" + Product_image).placeholder(R.drawable.loading).into(imgPreview, object : Callback {
                    override fun onSuccess() {
                        val bitmap = (imgPreview!!.drawable as BitmapDrawable).bitmap
                        Palette.from(bitmap).generate { }
                    }

                    override fun onError() {

                    }
                })

                txtText!!.text = Product_name
                txtSubText!!.text = getString(R.string.price) + " : " + Product_price + " ₮"
                txtDescription!!.loadDataWithBaseURL("", Product_description, "text/html", "UTF-8", "")
                txtDescription!!.setBackgroundColor(Color.parseColor("#ffffff"))

                txtDescription!!.settings.defaultTextEncodingName = "UTF-8"
                val webSettings = txtDescription!!.settings
                val res = resources

            } else {
                txtAlert!!.visibility = View.VISIBLE
            }
        }
    }

    override fun onBackPressed() {
        super.onBackPressed()
        finish()
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
    }
}
