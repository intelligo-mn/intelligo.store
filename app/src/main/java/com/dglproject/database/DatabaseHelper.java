package com.dglproject.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.text.TextUtils;

/**
 * Created by Tortuvshin Byambaa on 3/12/2017.
 */
public class DatabaseHelper extends SQLiteOpenHelper {

    private Context myContext;

    private static final String TAG = "===DatabaseHandler===";
    private static final int    DATABASE_VERSION = 1;
    private static final String DATABASE_NAME    = "dglbrand.db";

    private static final String CREATE_TABLE_PRODUCTS = "CREATE TABLE "+CartProductsAdapter.TABLE_PRODUCT +" ("+
            CartProductsAdapter.PRODUCT_ID       + " INTEGER PRIMARY KEY," +
            CartProductsAdapter.PRODUCT_TITLE    + " TEXT,"+
            CartProductsAdapter.PRODUCT_DESCRIPTION    + " TEXT,"+
            CartProductsAdapter.PRODUCT_RATING    + " TEXT,"+
            CartProductsAdapter.PRODUCT_COST    + " TEXT,"+
            CartProductsAdapter.PRODUCT_IMAGE    + " TEXT,"+
            CartProductsAdapter.PRODUCT_TOTAL_COST    + " TEXT,"+
            CartProductsAdapter.PRODUCT_TOTAL_ORDER    + " TEXT)";


    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        myContext = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL(CREATE_TABLE_PRODUCTS);

    }
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        dropTable(CartProductsAdapter.TABLE_PRODUCT);
        onCreate(db);
    }
    public void dropTable(String tableName) {
        SQLiteDatabase db = getWritableDatabase();
        if (db == null || TextUtils.isEmpty(tableName)) {
            return;
        }
        db.execSQL("DROP TABLE IF EXISTS " + CartProductsAdapter.TABLE_PRODUCT);
    }
}
