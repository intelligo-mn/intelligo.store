package com.dglproject.brand.widgets.Spinner;

import android.content.Context;

import java.util.List;

/**
 * Created by turtuvshin on 7/31/17.
 */

public class SpinnerAdapter<T> extends SpinnerBaseAdapter {

    private final List<T> items;

    SpinnerAdapter(Context context, List<T> items, int textColor, int backgroundSelector,
                       SpinnerTextFormatter spinnerTextFormatter) {
        super(context, textColor, backgroundSelector, spinnerTextFormatter);
        this.items = items;
    }

    @Override public int getCount() {
        return items.size() - 1;
    }

    @Override public T getItem(int position) {
        if (position >= selectedIndex) {
            return items.get(position + 1);
        } else {
            return items.get(position);
        }
    }

    @Override public T getItemInDataset(int position) {
        return items.get(position);
    }
}