package com.dglproject.brand.fragments;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.daimajia.slider.library.Animations.DescriptionAnimation;
import com.daimajia.slider.library.SliderLayout;
import com.daimajia.slider.library.SliderTypes.BaseSliderView;
import com.daimajia.slider.library.SliderTypes.TextSliderView;
import com.dglproject.brand.Config;
import com.dglproject.brand.R;
import com.dglproject.brand.activity.ActivityProductList;
import com.dglproject.brand.adapters.BrandAdapter;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class BrandFragment extends Fragment {

    public static final String ARG_PAGE = "ARG_PAGE";
    private int mPageNo;
    private static View rootView;

    GridView listBrand;
    ProgressBar bLoading;
    TextView bAlert;
    SwipeRefreshLayout swipeRefreshLayout = null;

    BrandAdapter brandAdapter;

    public static ArrayList<Long> Brand_ID = new ArrayList<Long>();
    public static ArrayList<String> Brand_name = new ArrayList<String>();
    public static ArrayList<String> Brand_image = new ArrayList<String>();
    public static ArrayList<String> Brand_description = new ArrayList<String>();

    String BrandService;
    int IOConnect = 0;

    private SliderLayout homeSliderLayout;

    public static BrandFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(ARG_PAGE, pageNo);
        BrandFragment fragment = new BrandFragment();
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
        rootView = inflater.inflate(R.layout.fragment_brand, container, false);

        bLoading = (ProgressBar) rootView.findViewById(R.id.bLoading);
        listBrand = (GridView) rootView.findViewById(R.id.listBrand);
        bAlert = (TextView) rootView.findViewById(R.id.bAlert);
        swipeRefreshLayout = (SwipeRefreshLayout) rootView.findViewById(R.id.swipeRefreshBrand);
        swipeRefreshLayout.setColorSchemeResources(R.color.bg_screen1, R.color.bg_screen2, R.color.bg_screen3);
        homeSliderLayout = (SliderLayout) rootView.findViewById(R.id.slider);

        HashMap<String,String> url_maps = new HashMap<String, String>();
        url_maps.put("DGL Project", "http://www.powerpointhintergrund.com/uploads/blue-lights-blurry-background-9.jpg");

        for(String name : url_maps.keySet()){
            TextSliderView textSliderView = new TextSliderView(getContext());
            // initialize a SliderLayout
            textSliderView
                    .description(name)
                    .image(url_maps.get(name))
                    .setScaleType(BaseSliderView.ScaleType.Fit);
//                    .setOnSliderClickListener(this);

            //add your extra information
            textSliderView.bundle(new Bundle());
            textSliderView.getBundle()
                    .putString("extra",name);

            homeSliderLayout.addSlider(textSliderView);
        }
        homeSliderLayout.setPresetTransformer(SliderLayout.Transformer.Accordion);
        homeSliderLayout.setPresetIndicator(SliderLayout.PresetIndicators.Center_Bottom);
        homeSliderLayout.setCustomAnimation(new DescriptionAnimation());
        homeSliderLayout.setDuration(4000);

        brandAdapter = new BrandAdapter(getActivity());

        BrandService = Config.BrandService+"?accesskey="+ Config.generateAccessKey();

        new getDataTask().execute();

        listBrand.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            public void onItemClick(AdapterView<?> arg0, View arg1, int position,
                                    long arg3) {
                Intent brands = new Intent(getActivity(), ActivityProductList.class);
                brands.putExtra("brand_id", Brand_ID.get(position));
                brands.putExtra("brand_name", Brand_name.get(position));
                startActivity(brands);
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
                        listBrand.invalidateViews();
                        clearData();
                        new getDataTask().execute();
                    }
                }, 3000);
            }
        });

        listBrand.setOnScrollListener(new AbsListView.OnScrollListener() {

            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {
            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {
                boolean enable = false;
                if (listBrand != null && listBrand.getChildCount() > 0) {
                    boolean firstItemVisible = listBrand.getFirstVisiblePosition() == 0;
                    boolean topOfFirstItemVisible = listBrand.getChildAt(0).getTop() == 0;
                    enable = firstItemVisible && topOfFirstItemVisible;
                }
                swipeRefreshLayout.setEnabled(enable);
            }
        });
        return  rootView;
    }


    void clearData(){
        Brand_ID.clear();
        Brand_name.clear();
        Brand_image.clear();
    }

    public class getDataTask extends AsyncTask<Void, Void, Void> {

        getDataTask(){
            if(!bLoading.isShown()){
                bLoading.setVisibility(0);
                bAlert.setVisibility(8);
            }
        }

        @Override
        protected Void doInBackground(Void... arg0) {
            parseJSONData();
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {
            bLoading.setVisibility(8);

            if((Brand_ID.size() > 0) && (IOConnect == 0)){
                listBrand.setVisibility(0);
                listBrand.setAdapter(brandAdapter);
            }else{
                bAlert.setVisibility(0);
            }
        }
    }

    public void parseJSONData(){

        clearData();

        try {

            HttpClient client = new DefaultHttpClient();
            HttpConnectionParams.setConnectionTimeout(client.getParams(), 15000);
            HttpConnectionParams.setSoTimeout(client.getParams(), 15000);
            HttpUriRequest request = new HttpGet(BrandService+"?accesskey="+String.valueOf(Config.generateAccessKey())+"&state=r");
            HttpResponse response = client.execute(request);
            InputStream atomInputStream = response.getEntity().getContent();
            BufferedReader in = new BufferedReader(new InputStreamReader(atomInputStream));

            String line;
            String str = "";
            while ((line = in.readLine()) != null){
                str += line;
            }

            JSONObject json = new JSONObject("{brand="+str+"}");
            JSONArray data = json.getJSONArray("brand");

            for (int i = 0; i < data.length(); i++) {

                Brand_ID.add(data.getJSONObject(i).getLong("id"));
                Brand_name.add(data.getJSONObject(i).getString("name"));
                Brand_image.add(data.getJSONObject(i).getString("folder")+"/"+data.getJSONObject(i).getString("icon_image"));
                Brand_description.add(data.getJSONObject(i).getString("description"));
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            IOConnect = 1;
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onConfigurationChanged(final Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
    }
}
