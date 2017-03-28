package com.dglproject.brand;

import android.app.Activity;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import java.io.InputStream;
import java.io.OutputStream;

/**
 * Created by Tortuvshin Byambaa on 3/3/2017.
 */

public class DglConstants {

    public static String AdminPageURL = "http://www.dgl.toroo.info/";
    public static String CategoryAPI = "http://www.dgl.toroo.info/api/get-category.php";
    public static String ProductApi = "http://www.dgl.toroo.info/api/get-product-category-id.php";
    public static String AllProductApi = "http://www.dgl.toroo.info/api/get-all-product.php";
    public static String TaxCurrencyAPI = "http://www.dgl.toroo.info/api/get-currency.php";
    public static String ProductDetailAPI = "http://www.dgl.toroo.info/api/get-product.php";
    public static String SendDataAPI = "http://www.dgl.toroo.info/api/add-order.php";
    public static String CompanyAPI = "http://www.dgl.toroo.info/api/get-company.php";

    public static String UserService= "http://dgl.toroo.info/api/UserService.php";
    public static String BrandService= "http://dgl.toroo.info/api/BrandService.php";

    public static String AccessKey = "12345";

    public static String DBPath = "/data/data/com.dglproject/databases/";

    public static boolean isNetworkAvailable(Activity activity) {
        ConnectivityManager connectivity = (ConnectivityManager) activity
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivity == null) {
            return false;
        } else {
            NetworkInfo[] info = connectivity.getAllNetworkInfo();
            if (info != null) {
                for (int i = 0; i < info.length; i++) {
                    if (info[i].getState() == NetworkInfo.State.CONNECTED) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public static void CopyStream(InputStream is, OutputStream os)
    {
        final int buffer_size=1024;
        try
        {
            byte[] bytes=new byte[buffer_size];
            for(;;)
            {
                int count=is.read(bytes, 0, buffer_size);
                if(count==-1)
                    break;
                os.write(bytes, 0, count);
            }
        }
        catch(Exception ex){}
    }

}
