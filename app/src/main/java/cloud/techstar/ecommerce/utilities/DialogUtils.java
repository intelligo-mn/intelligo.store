package cloud.techstar.ecommerce.utilities;

import android.app.ProgressDialog;
import android.content.Context;

/**
 * Created by turtuvshin on 8/1/17.
 */

public class DialogUtils {

    private static ProgressDialog dialog;
    private static DialogUtils instance;

    private DialogUtils() {

    }

    public static void init() {
        instance = new DialogUtils();
    }

    public static DialogUtils getInstance() {
        return instance;
    }

    public void startProgress(Context context, String message) {
        dialog = new ProgressDialog(context);
        dialog.setMessage(message);
        dialog.setCanceledOnTouchOutside(false);
        dialog.setCancelable(false);
        dialog.setIndeterminate(true);
        dialog.show();
    }

    public void stopProgress() {
        dialog.dismiss();
    }
}