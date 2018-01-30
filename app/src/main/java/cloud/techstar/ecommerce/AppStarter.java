package cloud.techstar.ecommerce;

import android.app.Application;

import cloud.techstar.ecommerce.utilities.DialogUtils;

/**
 * Created by turtuvshin on 8/1/17.
 */
public class AppStarter extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        DialogUtils.init();
    }
}