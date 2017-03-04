package com.dglproject;

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
    public static String CategoryAPI = "http://www.dgl.toroo.info/api/get-all-category-data.php";
    public static String MenuAPI = "http://www.dgl.toroo.info/api/get-menu-data-by-category-id.php";
    public static String TaxCurrencyAPI = "http://www.dgl.toroo.info/api/get-tax-and-currency.php";
    public static String MenuDetailAPI = "http://www.dgl.toroo.info/api/get-menu-detail.php";
    public static String SendDataAPI = "http://www.dgl.toroo.info/api/add-reservation.php";

    public static String AccessKey = "12345";

    static String DBPath = "/data/com.dglproject/databases/";

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