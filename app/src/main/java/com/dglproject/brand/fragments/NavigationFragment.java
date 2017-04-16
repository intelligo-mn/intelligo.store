package com.dglproject.brand.fragments;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.app.AlertDialog;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import com.dglproject.brand.R;
import com.dglproject.brand.activity.ActivityWeb;
import com.dglproject.brand.adapters.AdapterList;
import com.dglproject.brand.utilities.PrefManager;

/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class NavigationFragment extends Fragment {

    public static final String ARG_PAGE = "NAV";

    PrefManager prefManager;
    ListView list;
    String[] titleId;
    String[] subtitleId;

    Integer[] imageId = {
            R.drawable.dgl_home,
            R.drawable.dgl_round,
            R.drawable.dgl_mail,
            R.drawable.dgl_technology,
            R.drawable.dgl_share,
            R.drawable.dgl_dart_board,
            R.drawable.dgl_menu
    };

    View rootView;

    public NavigationFragment() {

    }

    public static NavigationFragment newInstance(int pageNo) {

        Bundle args = new Bundle();
        args.putInt(ARG_PAGE, pageNo);
        NavigationFragment fragment = new NavigationFragment();
        fragment.setArguments(args);
        return fragment;
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        prefManager = new PrefManager(getContext());

        titleId = getResources().getStringArray(R.array.title);
        subtitleId = getResources().getStringArray(R.array.subtitle);

        rootView = inflater.inflate(R.layout.fragment_navigation, container, false);

        TextView name = (TextView)rootView.findViewById(R.id.user_profile_name);
        TextView email = (TextView)rootView.findViewById(R.id.user_profile_email);
        ImageView logout = (ImageView)rootView.findViewById(R.id.user_logout);

        name.setText(prefManager.getUserName().toString());
        email.setText(prefManager.getUserEmail().toString());

        AdapterList adapter = new AdapterList(this.getActivity(), titleId, subtitleId, imageId);
        list = (ListView) rootView.findViewById(R.id.listMenus);
        list.setAdapter(adapter);
        list.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if (position == 4) {
                    Intent sendInt = new Intent(Intent.ACTION_SEND);
                    sendInt.putExtra(Intent.EXTRA_SUBJECT, getString(R.string.app_name));
                    sendInt.putExtra(Intent.EXTRA_TEXT, getString(R.string.app_name) + "\n" + getString(R.string.share_content) + "\n" + "https://play.google.com/store/apps/details?id=" + getActivity().getPackageName());
                    sendInt.setType("text/plain");
                    startActivity(Intent.createChooser(sendInt, getString(R.string.about)));
                }
                if (position == 5) {
                    final String appName = getActivity().getPackageName();
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + appName)));
                    } catch (android.content.ActivityNotFoundException anfe) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://play.google.com/store/apps/details?id=" + appName)));
                    }
                }
                if (position == 6) {
//                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(getString(R.string.more_apps))));'
                    startActivity(new Intent(getActivity(), ActivityWeb.class));
                }
            }
        });

        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new android.app.AlertDialog.Builder(getActivity())
                        .setIcon(R.drawable.dgl_round)
                        .setTitle(getString(R.string.are_you_sure))
                        .setMessage(getString(R.string.are_you_sure))
                        .setPositiveButton(getString(R.string.yes), new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                               prefManager.setLogin(false);
                            }
                        })
                        .setNegativeButton(getString(R.string.no), null)
                        .show();
            }
        });

        return rootView;
    }
}
