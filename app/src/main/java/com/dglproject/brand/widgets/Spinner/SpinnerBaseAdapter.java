package com.dglproject.brand.widgets.Spinner;

import android.content.Context;
import android.os.Build;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.dglproject.brand.R;

/**
 * Created by turtuvshin on 7/31/17.
 */

@SuppressWarnings("unused")
public abstract class SpinnerBaseAdapter<T> extends BaseAdapter {

    private final SpinnerTextFormatter spinnerTextFormatter;

    private int textColor;
    private int backgroundSelector;

    int selectedIndex;

    SpinnerBaseAdapter(Context context, int textColor, int backgroundSelector,
                           SpinnerTextFormatter spinnerTextFormatter) {
        this.spinnerTextFormatter = spinnerTextFormatter;
        this.backgroundSelector = backgroundSelector;
        this.textColor = textColor;
    }

    @Override public View getView(int position, @Nullable View convertView, ViewGroup parent) {
        Context context = parent.getContext();
        TextView textView;

        if (convertView == null) {
            convertView = View.inflate(context, R.layout.item_spinner, null);
            textView = (TextView) convertView.findViewById(R.id.text_view_spinner);

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
                textView.setBackground(ContextCompat.getDrawable(context, backgroundSelector));
            }
            convertView.setTag(new ViewHolder(textView));
        } else {
            textView = ((ViewHolder) convertView.getTag()).textView;
        }

        textView.setText(spinnerTextFormatter.format(getItem(position).toString()));
        textView.setTextColor(textColor);
        return convertView;
    }

    public int getSelectedIndex() {
        return selectedIndex;
    }

    void setSelectedIndex(int index) {
        selectedIndex = index;
    }

    public abstract T getItemInDataset(int position);

    @Override public long getItemId(int position) {
        return position;
    }

    @Override public abstract T getItem(int position);

    @Override public abstract int getCount();

    static class ViewHolder {
        TextView textView;

        ViewHolder(TextView textView) {
            this.textView = textView;
        }
    }
}