package com.dglproject.brand.widgets.Spinner;

import android.content.Context;
import android.widget.ListAdapter;

/**
 * Created by turtuvshin on 7/31/17.
 */

public class SpinnerAdapterWrapper extends SpinnerBaseAdapter {

    private final ListAdapter baseAdapter;

    SpinnerAdapterWrapper(Context context, ListAdapter toWrap, int textColor, int backgroundSelector,
                              SpinnerTextFormatter spinnerTextFormatter) {
        super(context, textColor, backgroundSelector, spinnerTextFormatter);
        baseAdapter = toWrap;
    }

    @Override public int getCount() {
        return baseAdapter.getCount() - 1;
    }

    @Override public Object getItem(int position) {
        return baseAdapter.getItem(position >= selectedIndex ? position + 1 : position);
    }

    @Override public Object getItemInDataset(int position) {
        return baseAdapter.getItem(position);
    }
}