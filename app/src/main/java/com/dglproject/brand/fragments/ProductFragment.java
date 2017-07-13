package com.dglproject.brand.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.activity.ActivityProductDetail;
import com.dglproject.brand.activity.MainActivity;
import com.dglproject.brand.adapters.AllProductAdapter;
import com.dglproject.brand.adapters.ProductAdapter;
import com.dglproject.brand.json.JSONParser;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;

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

public class ProductFragment extends Fragment {
    public static final String ARG_PAGE = "ARG_PAGE";
    private int mPageNo;
    private static View rootView;

    GridView homeItemList;
    ProgressBar prgLoading;
    TextView txtAlert;
    private Handler mHandler;

    int IOConnect = 0;

    MainActivity mainActivity;

    String ProductService;

    SwipeRefreshLayout swipeRefreshLayout = null;

    public static ProductFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(ARG_PAGE, pageNo);
        ProductFragment fragment = new ProductFragment();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mPageNo = getArguments().getInt(ARG_PAGE);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.home_items, container, false);
        prgLoading = (ProgressBar) rootView.findViewById(R.id.homeLoading);
        homeItemList = (GridView) rootView.findViewById(R.id.homeItemList);
        txtAlert = (TextView) rootView.findViewById(R.id.homeTxtAlert);

        swipeRefreshLayout = (SwipeRefreshLayout) rootView.findViewById(R.id.swipeRefreshHome);
        swipeRefreshLayout.setColorSchemeResources(R.color.bg_screen1, R.color.bg_screen2, R.color.bg_screen3);

        mHandler = new Handler(Looper.getMainLooper());
        ProductService = Config.ProductService;

        mainActivity = new MainActivity();

        getProductList();

        homeItemList.setNumColumns(2);

        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        swipeRefreshLayout.setRefreshing(false);
                        IOConnect = 0;
                        homeItemList.invalidateViews();
                    }
                }, 3000);
            }
        });

        homeItemList.setOnScrollListener(new AbsListView.OnScrollListener() {

            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {
            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {
                boolean enable = false;
                if (homeItemList != null && homeItemList.getChildCount() > 0) {
                    boolean firstItemVisible = homeItemList.getFirstVisiblePosition() == 0;
                    boolean topOfFirstItemVisible = homeItemList.getChildAt(0).getTop() == 0;
                    enable = firstItemVisible && topOfFirstItemVisible;
                }
                swipeRefreshLayout.setEnabled(enable);
            }
        });

        return rootView;
    }

    public void getProductList () {
        prgLoading.setVisibility(View.VISIBLE);
        String uri = ProductService+"?accesskey="+String.valueOf(Config.generateAccessKey())+"&state=r";
        Log.e("Дуудсан холбоос: ", uri);
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder().url(uri).build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("Request Error ", "Алдаа:" + e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                final String res = response.body().string();
                mHandler.post(() -> {
                    try {
                        JSONObject prod = new JSONObject(String.valueOf("{product=" + res+"}"));
                        JSONArray prodItems = prod.getJSONArray("product");
                        Log.e("Response: ", prodItems + "");
                        prgLoading.setVisibility(View.GONE);
                        homeItemList.setAdapter(new ProductAdapter(getActivity(), prodItems));
                    } catch (JSONException ex){
                        ex.printStackTrace();
                    }
                });
            }
        });
    }
}

