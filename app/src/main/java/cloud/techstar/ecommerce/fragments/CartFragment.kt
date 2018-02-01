package cloud.techstar.ecommerce.fragments

import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListAdapter
import android.widget.ListView
import android.widget.SimpleAdapter
import android.widget.TextView

import cloud.techstar.ecommerce.R
import cloud.techstar.ecommerce.database.CartTable
import cloud.techstar.ecommerce.models.CartProducts

import java.text.DecimalFormat
import java.util.ArrayList
import java.util.HashMap

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
class CartFragment : Fragment() {

    internal var productAdapter: CartTable? = null
    internal var subTotalView: TextView? = null
    internal var taxView: TextView? = null
    internal var totalView: TextView? = null
    internal var subTotal: Double = 0.toDouble()
    internal var tax: Double = 0.toDouble()
    internal var total: Double = 0.toDouble()
    internal var rootView: View? = null
    internal var data: ArrayList<CartProducts>? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        rootView = inflater.inflate(R.layout.fragment_cart, container, false)

        productAdapter = CartTable(this.activity)

        data = productAdapter!!.readData()
        displayBill()
        val datas = productAdapter!!.readData()

        val listView = rootView!!.findViewById<View>(R.id.fragment_item_ordered_list_view) as ListView

        val dataList: ArrayList<HashMap<String, String>>

        dataList = ArrayList()

        for (x in datas) {
            val map = HashMap<String, String>()
            map["Title"] = x.title
            map["Image"] = x.image
            map["TotalOrder"] = getString(R.string.total) + " : " + x.totalOrder
            map["TotalCost"] = getString(R.string.total_cost) + " : " + x.getTotalCost() + " ₮"
            dataList.add(map)
        }

        val adapter = SimpleAdapter(
                this.activity,
                dataList,
                R.layout.item_cart,
                arrayOf("Title", "Image", "TotalOrder", "TotalCost"),
                intArrayOf(R.id.list_image_text_view, R.id.img, R.id.recepit_total_order_text_view, R.id.recepit_cost_text_view))

        listView.adapter = adapter

        //        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
        //            @Override
        //            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
        //                String title = dataList.get(position).get("Title");
        //                CartProducts item = productAdapter.findByTitle(title);
        //                String costString = "" + item.getCost();
        //                String totalCostString = "" + item.totalCost;
        //                String totalOrderString = "" + item.getTotalOrder();
        //                String[] transferData = {item.getTitle(), item.getDescription(), costString, totalCostString, totalOrderString, item.getImage()};
        //                Intent intent = new Intent(getActivity(), ActivityCartEdit.class);
        //                intent.putExtra(TAG, transferData);
        //                startActivity(intent);
        //            }
        //        });
        productAdapter!!.close()
        return rootView

    }

    fun calculateBill() {
        total = 0.0
        tax = total
        subTotal = tax
        for (dat in data!!) {
            subTotal += dat.getTotalCost()
        }
        tax = subTotal * 0.1
        total = tax + subTotal
    }

    fun displayBill() {
        calculateBill()
        subTotalView = rootView!!.findViewById<View>(R.id.sub_total_text_view) as TextView
        subTotalView!!.text = getString(R.string.total_cost) + " : " + DecimalFormat("#.##").format(subTotal) + " ₮"

        taxView = rootView!!.findViewById<View>(R.id.tax_text_view) as TextView
        taxView!!.text = getString(R.string.tax) + " : " + DecimalFormat("#.##").format(tax) + " ₮"

        totalView = rootView!!.findViewById<View>(R.id.total_text_view) as TextView
        totalView!!.text = getString(R.string.total) + " : " + DecimalFormat("#.##").format(total) + " ₮"
    }

    fun startPayment(view: View) {
        if (data!!.size > 0) {
            //            Intent intent = new Intent(this, ActivityOrder.class);
            //            String subTotalString = "" + subTotal;
            //            String taxString = "" + tax;
            //            String totalString = "" + total;
            //            String[] transferData = {subTotalString,taxString,totalString};
            //            intent.putExtra(TAG,transferData);
            //            startActivity(intent);
        }
    }

    companion object {

        private val TAG = "CartFragment: "

        fun newInstance(pageNo: Int): CartFragment {

            val args = Bundle()
            args.putInt(TAG, pageNo)
            val fragment = CartFragment()
            fragment.arguments = args

            return fragment
        }
    }
}
