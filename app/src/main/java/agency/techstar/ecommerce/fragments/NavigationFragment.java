package agency.techstar.ecommerce.fragments;

import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import com.techstar.ecommerce.R;
import agency.techstar.ecommerce.activity.ActivityAbout;
import agency.techstar.ecommerce.activity.ActivityUserSettings;
import agency.techstar.ecommerce.activity.ActivityWeb;
import agency.techstar.ecommerce.adapters.AdapterList;
import agency.techstar.ecommerce.utilities.PrefManager;

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
            R.drawable.ic_account,
            R.drawable.ic_settings_black,
            R.drawable.ic_payment,
            R.drawable.ic_translate_black,
            R.drawable.ic_agreement,
            R.drawable.ic_round,
            R.drawable.ic_app
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
                if (position == 0) {

                } else if (position == 1) {
                    startActivity(new Intent(getActivity(), ActivityUserSettings.class));
                } else if (position == 2) {
                    Intent payment = new Intent(getActivity(), ActivityWeb.class);
                    payment.putExtra("web_name", getString(R.string.menu_payment));
                    payment.putExtra("web_url", "https://www.dglproject.com/index.php/pricing");
                    startActivity(payment);
                } else if (position == 3) {
                    Intent sendInt = new Intent(Intent.ACTION_SEND);
                    sendInt.putExtra(Intent.EXTRA_SUBJECT, getString(R.string.app_name));
                    sendInt.putExtra(Intent.EXTRA_TEXT, getString(R.string.app_name) + "\n" + "https://play.google.com/store/apps/details?id=" + getActivity().getPackageName());
                    sendInt.setType("text/plain");
                    startActivity(Intent.createChooser(sendInt, getString(R.string.about)));
                }else if (position == 4) {
                    final String appName = getActivity().getPackageName();
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + appName)));
                    } catch (android.content.ActivityNotFoundException anfe) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://play.google.com/store/apps/details?id=" + appName)));
                    }
                } else if (position == 5) {
                    Intent help = new Intent(getActivity(), ActivityWeb.class);
                    help.putExtra("web_name", getString(R.string.menu_help));
                    help.putExtra("web_url", "https://www.dglproject.com/index.php/help");
                    startActivity(help);
                } else if (position == 6) {
                    Intent about = new Intent(getActivity(), ActivityAbout.class);
                    startActivity(about);
                }
            }
        });

        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new android.app.AlertDialog.Builder(getActivity())
                        .setIcon(R.drawable.ic_round)
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
