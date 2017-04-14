package com.dglproject.brand.widgets;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.app.Activity;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.database.Cursor;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.speech.RecognizerIntent;
import android.support.v4.content.ContextCompat;
import android.support.v4.view.ViewCompat;
import android.text.Editable;
import android.text.InputType;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.FilterQueryProvider;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import com.dglproject.brand.BuildConfig;
import com.dglproject.brand.R;
import com.dglproject.brand.adapters.SearchAdapter;
import com.dglproject.brand.database.HistoryContract;
import com.dglproject.brand.utilities.AnimationUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/**
 * Created by Tortuvshin Byambaa on 3/7/2017.
 */
public class MaterialSearchView extends FrameLayout {

    private static final String LOG_TAG = MaterialSearchView.class.getSimpleName();

    private static final int MAX_RESULTS = 1;

    public static final int REQUEST_VOICE = 42;

    private static int MAX_HISTORY = BuildConfig.MAX_HISTORY;

    private boolean mOpen;

    private Context mContext;

    private boolean mShouldAnimate;

    private boolean mShouldCloseOnTintClick;

    private boolean mShouldKeepHistory;

    private boolean mClearingFocus;

    private String mHintPrompt;

    private View mTintView;

    private FrameLayout mRoot;

    private LinearLayout mSearchBar;

    private EditText mSearchEditText;

    private ImageButton mBack;

    private ImageButton mVoice;

    private ImageButton mClear;

    private ListView mSuggestionsListView;

    private SearchAdapter mAdapter;

    private CharSequence mOldQuery;

    private CharSequence mCurrentQuery;

    private OnQueryTextListener mOnQueryTextListener;

    private SearchViewListener mSearchViewListener;

    private OnVoiceClickedListener mOnVoiceClickedListener;

    public MaterialSearchView(Context context) {
        this(context, null);
    }

    public MaterialSearchView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public MaterialSearchView(Context context, AttributeSet attributeSet, int defStyleAttributes) {
        super(context, attributeSet);

        this.mContext = context;
        this.mShouldAnimate = true;
        this.mShouldKeepHistory = true;

        init();

        initStyle(attributeSet, defStyleAttributes);
    }

    private void init() {

        LayoutInflater.from(mContext).inflate(R.layout.search_view, this, true);


        mRoot = (FrameLayout) findViewById(R.id.search_layout);
        mTintView = mRoot.findViewById(R.id.transparent_view);
        mSearchBar = (LinearLayout) mRoot.findViewById(R.id.search_bar);
        mBack = (ImageButton) mRoot.findViewById(R.id.action_back);
        mSearchEditText = (EditText) mRoot.findViewById(R.id.et_search);
        mVoice = (ImageButton) mRoot.findViewById(R.id.action_voice);
        mClear = (ImageButton) mRoot.findViewById(R.id.action_clear);
        mSuggestionsListView = (ListView) mRoot.findViewById(R.id.suggestion_list);

        mBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                closeSearch();
            }
        });

        mVoice.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                onVoiceClicked();
            }
        });

        mClear.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                mSearchEditText.setText("");
            }
        });

        mTintView.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mShouldCloseOnTintClick) {
                    closeSearch();
                }
            }
        });

        displayVoiceButton(true);

        initSearchView();

        mAdapter = new SearchAdapter(mContext,getHistoryCursor(),0);
        mAdapter.setFilterQueryProvider(new FilterQueryProvider() {
            @Override
            public Cursor runQuery(CharSequence constraint) {
                String filter = constraint.toString();

                if (filter.isEmpty()) {
                    return getHistoryCursor();
                }
                else {
                    return mContext.getContentResolver().query(
                            HistoryContract.HistoryEntry.CONTENT_URI,
                            null,
                            HistoryContract.HistoryEntry.COLUMN_QUERY + " LIKE ?",
                            new String[]{"%" + filter + "%"},
                            HistoryContract.HistoryEntry.COLUMN_IS_HISTORY + " DESC, " +
                                    HistoryContract.HistoryEntry.COLUMN_QUERY
                    );
                }
            }
        });
        mSuggestionsListView.setAdapter(mAdapter);
        mSuggestionsListView.setTextFilterEnabled(true);
    }

    private void initStyle(AttributeSet attributeSet, int defStyleAttribute) {
        TypedArray typedArray = mContext.obtainStyledAttributes(attributeSet, R.styleable.MaterialSearchView, defStyleAttribute, 0);

        if(typedArray != null) {
            if(typedArray.hasValue(R.styleable.MaterialSearchView_searchBackground)) {
                setBackground(typedArray.getDrawable(R.styleable.MaterialSearchView_searchBackground));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_android_textColor)) {
                setTextColor(typedArray.getColor(R.styleable.MaterialSearchView_android_textColor,
                        ContextCompat.getColor(mContext,R.color.black)));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_android_textColorHint)) {
                setHintTextColor(typedArray.getColor(R.styleable.MaterialSearchView_android_textColorHint,
                        ContextCompat.getColor(mContext,R.color.gray_50)));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_android_hint)) {
                setHint(typedArray.getString(R.styleable.MaterialSearchView_android_hint));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_searchVoiceIcon)) {
                setVoiceIcon(typedArray.getDrawable(R.styleable.MaterialSearchView_searchVoiceIcon));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_searchCloseIcon)) {
                setClearIcon(typedArray.getDrawable(R.styleable.MaterialSearchView_searchCloseIcon));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_searchBackIcon)) {
                setBackIcon(typedArray.getDrawable(R.styleable.MaterialSearchView_searchBackIcon));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_searchSuggestionBackground)) {
                setSuggestionBackground(typedArray.getResourceId(R.styleable.MaterialSearchView_searchSuggestionBackground, R.color.search_layover_bg));
            }

            if(typedArray.hasValue(R.styleable.MaterialSearchView_android_inputType)) {
                setInputType(typedArray.getInteger(R.styleable.MaterialSearchView_android_inputType, InputType.TYPE_CLASS_TEXT));
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_searchBarHeight)) {
                setSearchBarHeight(typedArray.getDimensionPixelSize(R.styleable.MaterialSearchView_searchBarHeight, getAppCompatActionBarHeight()));
            } else {
                setSearchBarHeight(getAppCompatActionBarHeight());
            }

            if (typedArray.hasValue(R.styleable.MaterialSearchView_voiceHintPrompt)) {
                setVoiceHintPrompt(typedArray.getString(R.styleable.MaterialSearchView_voiceHintPrompt));
            }
            else {
                setVoiceHintPrompt(mContext.getString(R.string.hint_prompt));
            }

            ViewCompat.setFitsSystemWindows(this, typedArray.getBoolean(R.styleable.MaterialSearchView_android_fitsSystemWindows, false));

            typedArray.recycle();
        }
    }

    private void initSearchView() {
        mSearchEditText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {

                onSubmitQuery();
                return true;
            }
        });

        mSearchEditText.addTextChangedListener(new TextWatcher() {

            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                // When the text changes, filter
                mAdapter.getFilter().filter(s.toString());
                mAdapter.notifyDataSetChanged();
                MaterialSearchView.this.onTextChanged(s);
            }

            @Override
            public void afterTextChanged(Editable s) { }
        });

        mSearchEditText.setOnFocusChangeListener(new OnFocusChangeListener() {
            @Override
            public void onFocusChange(View v, boolean hasFocus) {
                // If we gain focus, show keyboard and show suggestions.
                if (hasFocus) {
                    showKeyboard(mSearchEditText);
                    showSuggestions();
                }
            }
        });
    }

    private void showKeyboard(View view) {
        if(Build.VERSION.SDK_INT <= Build.VERSION_CODES.GINGERBREAD_MR1 && view.hasFocus()) {
            view.clearFocus();
        }

        view.requestFocus();

        if (!isHardKeyboardAvailable()) {
            InputMethodManager inputMethodManager = (InputMethodManager) view.getContext().getSystemService(Context.INPUT_METHOD_SERVICE);
            inputMethodManager.showSoftInput(view, 0);
        }
    }

    private boolean isHardKeyboardAvailable() {
        return mContext.getResources().getConfiguration().keyboard != Configuration.KEYBOARD_NOKEYS;
    }

    private void displayVoiceButton(boolean display) {

        if(display && isVoiceAvailable()) {
            mVoice.setVisibility(View.VISIBLE);
        } else {
            mVoice.setVisibility(View.GONE);
        }
    }

    private void displayClearButton(boolean display) {
        mClear.setVisibility(display ? View.VISIBLE : View.GONE);
    }

    private void showSuggestions() {
        mSuggestionsListView.setVisibility(View.VISIBLE);
    }

    public void openSearch() {

        if(mOpen) {
            return;
        }

        mSearchEditText.setText("");
        mSearchEditText.requestFocus();

        if(mShouldAnimate) {
            if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                mRoot.setVisibility(View.VISIBLE);
            }
            else {
            }

        } else {
            mRoot.setVisibility(View.VISIBLE);
        }

        if(mSearchViewListener != null) {
            mSearchViewListener.onSearchViewOpened();
        }

        mOpen = true;
    }

    private void dismissSuggestions() {
        mSuggestionsListView.setVisibility(View.GONE);
    }

    private void hideKeyboard(View view) {
        InputMethodManager inputMethodManager =
                (InputMethodManager) view.getContext().getSystemService(Context.INPUT_METHOD_SERVICE);

        inputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), 0);
    }

    public void closeSearch() {

        if(!mOpen) {
            return;
        }

        mSearchEditText.setText("");

        dismissSuggestions();
        clearFocus();

        if (mShouldAnimate) {
            final View v = mRoot;

            AnimatorListenerAdapter listenerAdapter = new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                    super.onAnimationEnd(animation);

                    v.setVisibility(View.GONE);
                }
            };

            if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                AnimationUtils.circleHideView(mSearchBar, listenerAdapter);
            }
            else {
                AnimationUtils.fadeOutView(mRoot);
            }
        }
        else {

            mRoot.setVisibility(View.GONE);
        }

        if(mSearchViewListener != null) {
            mSearchViewListener.onSearchViewClosed();
        }

        mOpen = false;
    }

    private void onTextChanged(CharSequence newText) {

        mCurrentQuery = mSearchEditText.getText();

        if(!TextUtils.isEmpty(mCurrentQuery)) {
            displayVoiceButton(false);
            displayClearButton(true);
        } else {
            displayClearButton(false);
            displayVoiceButton(true);
        }

        if(mOnQueryTextListener != null) {
            mOnQueryTextListener.onQueryTextChange(newText.toString());
        }

        mOldQuery = mCurrentQuery;
    }

    private void onSubmitQuery() {

        CharSequence query = mSearchEditText.getText();

        if(query != null && TextUtils.getTrimmedLength(query) > 0) {

            if(mOnQueryTextListener == null || !mOnQueryTextListener.onQueryTextSubmit(query.toString())) {

                if (mShouldKeepHistory) {
                    saveQueryToDb(query.toString(),System.currentTimeMillis());
                }

                refreshAdapterCursor();

                closeSearch();
                mSearchEditText.setText("");
            }
        }
    }


    private void onVoiceClicked() {

        if(mOnVoiceClickedListener != null) {
            mOnVoiceClickedListener.onVoiceClicked();
        } else {
            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            intent.putExtra(RecognizerIntent.EXTRA_PROMPT, mHintPrompt);
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
            intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, MAX_RESULTS); // Quantity of results we want to receive

            if(mContext instanceof Activity) {
                ((Activity) mContext).startActivityForResult(intent, REQUEST_VOICE);
            }
        }
    }

    public void setOnQueryTextListener(OnQueryTextListener mOnQueryTextListener) {
        this.mOnQueryTextListener = mOnQueryTextListener;
    }

    public void setSearchViewListener(SearchViewListener mSearchViewListener) {
        this.mSearchViewListener = mSearchViewListener;
    }

    public void setOnItemClickListener(AdapterView.OnItemClickListener listener) {
        mSuggestionsListView.setOnItemClickListener(listener);
    }

    public void setOnItemLongClickListener(AdapterView.OnItemLongClickListener listener) {
        mSuggestionsListView.setOnItemLongClickListener(listener);
    }

    public void setCloseOnTintClick(boolean shouldClose) {
        mShouldCloseOnTintClick = shouldClose;
    }

    public void setShouldAnimate(boolean mShouldAnimate) {
        this.mShouldAnimate = mShouldAnimate;
    }

    public void setShouldKeepHistory(boolean keepHistory) {
        this.mShouldKeepHistory = keepHistory;
    }

    public static void setMaxHistoryResults(int maxHistory) {
        MAX_HISTORY = maxHistory;
    }

    public void setQuery(CharSequence query, boolean submit) {
        mSearchEditText.setText(query);

        if (query != null) {
            mSearchEditText.setSelection(mSearchEditText.length());
            mCurrentQuery = query;
        }

        if (submit && !TextUtils.isEmpty(query)) {
            onSubmitQuery();
        }
    }

    @Override
    public void setBackground(Drawable background) {

        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            mSearchBar.setBackground(background);
        } else {
            mSearchBar.setBackgroundDrawable(background);
        }
    }
    @Override
    public void setBackgroundColor(int color) {
        mSearchBar.setBackgroundColor(color);
    }

    public void setTintColor(int color) {
        mTintView.setBackgroundColor(color);
    }

    public void setTintAlpha(int alpha) {
        if (alpha < 0 || alpha > 255) return;

        Drawable d = mTintView.getBackground();

        if (d instanceof ColorDrawable) {
            ColorDrawable cd = (ColorDrawable) d;
            int color = cd.getColor();
            int newColor = Color.argb(alpha, Color.red(color), Color.green(color), Color.blue(color));

            setTintColor(newColor);
        }
    }

    public void adjustTintAlpha(float factor) {
        if (factor < 0 || factor > 1.0) return;

        Drawable d = mTintView.getBackground();

        if (d instanceof ColorDrawable) {
            ColorDrawable cd = (ColorDrawable) d;
            int color = cd.getColor();

            color = adjustAlpha(color,factor);

            mTintView.setBackgroundColor(color);
        }
    }

    private int adjustAlpha(int color, float factor) {
        if (factor < 0) return color;

        int alpha = Math.round(Color.alpha(color) * factor);

        return Color.argb(alpha,Color.red(color),Color.green(color),Color.blue(color));
    }

    public void setTextColor(int color) {
        mSearchEditText.setTextColor(color);
    }

    public void setHintTextColor(int color) {
        mSearchEditText.setHintTextColor(color);
    }

    public void setHint(CharSequence hint) {
        mSearchEditText.setHint(hint);
    }

    public void setVoiceIcon(Drawable drawable) {
        mVoice.setImageDrawable(drawable);
    }

    public void setClearIcon(Drawable drawable) {
        mClear.setImageDrawable(drawable);
    }

    public void setBackIcon(Drawable drawable) {
        mBack.setImageDrawable(drawable);
    }

    public void setSuggestionBackground(int resource) {
        if (resource > 0) {
            mSuggestionsListView.setBackgroundResource(resource);
        }
    }

    public void setInputType(int inputType) {
        mSearchEditText.setInputType(inputType);
    }

    public void setOnVoiceClickedListener(OnVoiceClickedListener listener) {
        this.mOnVoiceClickedListener = listener;
    }

    public void setSearchBarHeight(final int height) {
        mSearchBar.setMinimumHeight(height);
        mSearchBar.getLayoutParams().height = height;
    }

    public void setVoiceHintPrompt(final String hintPrompt) {
        if (!TextUtils.isEmpty(hintPrompt)) {
            mHintPrompt = hintPrompt;
        }
        else {
            mHintPrompt = mContext.getString(R.string.hint_prompt);
        }
    }

    private int getAppCompatActionBarHeight(){
        TypedValue tv = new TypedValue();
        getContext().getTheme().resolveAttribute(R.attr.actionBarSize, tv, true);
        return getResources().getDimensionPixelSize(tv.resourceId);
    }

    public SearchAdapter getAdapter() {
        return mAdapter ;
    }

    public boolean isOpen() {
        return mOpen;
    }

    public String getCurrentQuery() {
        if (!TextUtils.isEmpty(mCurrentQuery)) {
            return mCurrentQuery.toString();
        }
        return "";
    }

    private boolean isVoiceAvailable() {

        PackageManager packageManager = mContext.getPackageManager();

        List<ResolveInfo> activities = packageManager.queryIntentActivities(new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH), 0);

        return activities.size() > 0;
    }

    public String getSuggestionAtPosition(int position) {
        if(position < 0 || position >= mAdapter.getCount()) {
            return "";
        } else {
            return mAdapter.getItem(position).toString();
        }
    }

    @Override
    public void clearFocus() {
        this.mClearingFocus = true;
        hideKeyboard(this);
        super.clearFocus();
        mSearchEditText.clearFocus();
        this.mClearingFocus = false;
    }

    @Override
    public boolean requestFocus(int direction, Rect previouslyFocusedRect) {
        return !(mClearingFocus || !isFocusable()) && mSearchEditText.requestFocus(direction, previouslyFocusedRect);
    }

//    public void activityPaused() {
//        Cursor cursor = ((CursorAdapter)mAdapter).getCursor();
//        if (cursor != null && !cursor.isClosed()) {
//            cursor.close();
//        }
//    }

    public void activityResumed() {
        refreshAdapterCursor();
    }

    public synchronized void saveQueryToDb(String query, long ms) {
        if (!TextUtils.isEmpty(query) && ms > 0) {
            ContentValues values = new ContentValues();

            values.put(HistoryContract.HistoryEntry.COLUMN_QUERY, query);
            values.put(HistoryContract.HistoryEntry.COLUMN_INSERT_DATE, ms);
            values.put(HistoryContract.HistoryEntry.COLUMN_IS_HISTORY,1); // Saving as history.

            mContext.getContentResolver().insert(HistoryContract.HistoryEntry.CONTENT_URI,values);
        }
    }

    public synchronized void addSuggestion(String suggestion) {
        if (!TextUtils.isEmpty(suggestion)) {
            ContentValues value = new ContentValues();
            value.put(HistoryContract.HistoryEntry.COLUMN_QUERY, suggestion);
            value.put(HistoryContract.HistoryEntry.COLUMN_INSERT_DATE, System.currentTimeMillis());
            value.put(HistoryContract.HistoryEntry.COLUMN_IS_HISTORY,0); // Saving as suggestion.


            mContext.getContentResolver().insert(
                    HistoryContract.HistoryEntry.CONTENT_URI,
                    value
            );
        }
    }

    public synchronized void removeSuggestion(String suggestion) {
        if (!TextUtils.isEmpty(suggestion)) {
            mContext.getContentResolver().delete(
                    HistoryContract.HistoryEntry.CONTENT_URI,
                    HistoryContract.HistoryEntry.TABLE_NAME +
                            "." +
                            HistoryContract.HistoryEntry.COLUMN_QUERY +
                            " = ? AND " +
                            HistoryContract.HistoryEntry.TABLE_NAME +
                            "." +
                            HistoryContract.HistoryEntry.COLUMN_IS_HISTORY +
                            " = ?"
                    ,
                    new String[]{suggestion,String.valueOf(0)}
            );
        }
    }

    public synchronized void addSuggestions(List<String> suggestions) {
        ArrayList<ContentValues> toSave = new ArrayList<>();
        for (String str : suggestions) {
            ContentValues value = new ContentValues();
            value.put(HistoryContract.HistoryEntry.COLUMN_QUERY, str);
            value.put(HistoryContract.HistoryEntry.COLUMN_INSERT_DATE, System.currentTimeMillis());
            value.put(HistoryContract.HistoryEntry.COLUMN_IS_HISTORY,0); // Saving as suggestion.

            toSave.add(value);
        }

        ContentValues[] values = toSave.toArray(new ContentValues[toSave.size()]);

        mContext.getContentResolver().bulkInsert(
                HistoryContract.HistoryEntry.CONTENT_URI,
                values
        );
    }

    public void addSuggestions(String[] suggestions) {
        ArrayList<String> list = new ArrayList<>(Arrays.asList(suggestions));
        addSuggestions(list);
    }

    private Cursor getHistoryCursor() {
        return mContext.getContentResolver().query(
                HistoryContract.HistoryEntry.CONTENT_URI,
                null,
                HistoryContract.HistoryEntry.COLUMN_IS_HISTORY + " = ?",
                new String[]{"1"},
                HistoryContract.HistoryEntry.COLUMN_INSERT_DATE + " DESC LIMIT " + MAX_HISTORY
        );
    }

    private void refreshAdapterCursor() {
        Cursor historyCursor = getHistoryCursor();
        mAdapter.changeCursor(historyCursor);
    }

    public synchronized void clearSuggestions() {
        mContext.getContentResolver().delete(
                HistoryContract.HistoryEntry.CONTENT_URI,
                HistoryContract.HistoryEntry.COLUMN_IS_HISTORY + " = ?",
                new String[]{"0"}
        );
    }

    public synchronized void clearHistory() {
        mContext.getContentResolver().delete(
                HistoryContract.HistoryEntry.CONTENT_URI,
                HistoryContract.HistoryEntry.COLUMN_IS_HISTORY + " = ?",
                new String[]{"1"}
        );
    }

    public synchronized void clearAll() {
        mContext.getContentResolver().delete(
                HistoryContract.HistoryEntry.CONTENT_URI,
                null,
                null
        );
    }

    public interface OnQueryTextListener {

        boolean onQueryTextSubmit(String query);

        boolean onQueryTextChange(String newText);
    }

    public interface SearchViewListener {
        void onSearchViewOpened();

        void onSearchViewClosed();
    }

    public interface OnVoiceClickedListener {
        void onVoiceClicked();
    }
}