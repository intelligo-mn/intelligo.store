package com.dglproject.brand.fragments;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.brand.R;
import com.dglproject.brand.activity.ActivityBrandProduct;
import com.dglproject.brand.adapters.CategoryAdapter;
import com.dglproject.brand.utilities.DGLConstants;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class CategoryFragment extends Fragment {

    public static final String TAG = CategoryFragment.class.getSimpleName();
    private int mPageNo;
    private static View rootView;

    GridView listCategory;
    ProgressBar prgLoading;
    TextView txtAlert;
    SwipeRefreshLayout swipeRefreshLayout = null;

    private Handler mHandler;
    int IOConnect = 0;

    public static CategoryFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(TAG, pageNo);
        CategoryFragment fragment = new CategoryFragment();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPageNo = getArguments().getInt(TAG);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.fragment_category, container, false);

        prgLoading = (ProgressBar) rootView.findViewById(R.id.prgLoading);
        listCategory = (GridView) rootView.findViewById(R.id.listCategory);
        txtAlert = (TextView) rootView.findViewById(R.id.txtAlert);

        swipeRefreshLayout = (SwipeRefreshLayout) rootView.findViewById(R.id.swipeRefreshCat);
        swipeRefreshLayout.setColorSchemeResources(R.color.bg_screen1, R.color.bg_screen2, R.color.bg_screen3);

        mHandler = new Handler(Looper.getMainLooper());
        listCategory.setVisibility(View.VISIBLE);

        getCategoryList();
        listCategory.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {
                Intent iMenuList = new Intent(getActivity(), ActivityBrandProduct.class);
                startActivity(iMenuList);
            }
        });

        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        swipeRefreshLayout.setRefreshing(false);
                        IOConnect = 0;
                        listCategory.invalidateViews();
                    }
                }, 3000);
            }
        });
        return  rootView;
    }

    private void getCategoryList() {
        prgLoading.setVisibility(View.VISIBLE);
        String uri = DGLConstants.CategoryService+"?state=r";

        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(uri)
                .build();
        Log.e(TAG,request.toString());
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e(TAG, e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                final String res = response.body().string();
                mHandler.post(() -> {
                    try {
                        JSONObject category = new JSONObject(String.valueOf("{category="+res+"}"));
                        JSONArray catItems = category.getJSONArray("category");
                        prgLoading.setVisibility(View.GONE);
                        listCategory.setAdapter(new CategoryAdapter(getActivity(), catItems));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                });
            }
        });

    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }

}
