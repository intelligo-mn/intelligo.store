package agency.techstar.ecommerce.activity;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.techstar.ecommerce.R;

public class ActivityWeb extends AppCompatActivity {

    private WebView dglWeb;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);
        Intent iGet = getIntent();
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setTitle(iGet.getStringExtra("web_name"));
        dglWeb = (WebView)findViewById(R.id.dglWeb);
        WebSettings settings = dglWeb.getSettings();
        CookieManager.setAcceptFileSchemeCookies(true);
        settings.setJavaScriptEnabled(true);
        dglWeb.setScrollBarStyle(View.SCROLLBARS_OUTSIDE_OVERLAY);
        dglWeb.setScrollBarStyle(View.SCROLLBARS_OUTSIDE_OVERLAY);
        dglWeb.getSettings().setJavaScriptEnabled(true);

        dglWeb.setWebViewClient(new WebViewClient() {

            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.i("WebContent", "Navigating to " + url);
                view.loadUrl(url);
                return true;
            }

            public void onPageFinished(WebView view, String url) {
                Log.i("WebContent", "Finished loading of " + url);
            }

            public void onReceivedError(WebView view, int errorCode, String errorDescription, String errorUrl) {
                Log.e("Programmer", "ERR AT   -> " + errorUrl);
                Log.e("WebContent", "ERR CODE -> " + errorCode);
                Log.e("WebContent", "ERR MSG  -> " + errorDescription);
                //new Spawner().spawnView(WebContent.this, Offline.class); //TODO: Replace the offline-activity with an server-offline-activity
            }
        });
        dglWeb.loadUrl(iGet.getStringExtra("web_url"));
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }
}
