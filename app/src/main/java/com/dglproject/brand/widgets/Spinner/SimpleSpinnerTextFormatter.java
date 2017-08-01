package com.dglproject.brand.widgets.Spinner;

import android.text.Spannable;
import android.text.SpannableString;
/**
 * Created by turtuvshin on 7/31/17.
 */

public class SimpleSpinnerTextFormatter implements SpinnerTextFormatter {

    @Override public Spannable format(String text) {
        return new SpannableString(text);
    }
}