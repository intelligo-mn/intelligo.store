package com.dglproject.brand.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.text.TextUtils;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class DatabaseHelper extends SQLiteOpenHelper {

    private Context myContext;

    private static final String TAG = "===DatabaseHandler===";
    private static final int    DATABASE_VERSION = 1;
    private static final String DATABASE_NAME    = "dglbrand.db";

    private static final String CREATE_TABLE_PRODUCTS = "CREATE TABLE "+CartTable.TABLE_PRODUCT +" ("+
            CartTable.PRODUCT_ID       + " INTEGER PRIMARY KEY," +
            CartTable.PRODUCT_TITLE    + " TEXT,"+
            CartTable.PRODUCT_DESCRIPTION    + " TEXT,"+
            CartTable.PRODUCT_COST    + " TEXT,"+
            CartTable.PRODUCT_IMAGE    + " TEXT,"+
            CartTable.PRODUCT_TOTAL_COST    + " TEXT,"+
            CartTable.PRODUCT_TOTAL_ORDER    + " TEXT)";

    private static final String CREATE_TABLE_BRAND = "CREATE TABLE "+BrandTable.TABLE_BRAND +" ("+
            BrandTable.BRAND_ID + " INTEGER PRIMARY KEY," +
            BrandTable.BRAND_NAME + " TEXT,"+
            BrandTable.BRAND_IMAGE + " TEXT,"+
            BrandTable.BRAND_DESCRIPTION + " TEXT)";

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        myContext = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL(CREATE_TABLE_PRODUCTS);
        db.execSQL(CREATE_TABLE_BRAND);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        dropTable(CartTable.TABLE_PRODUCT);
        dropTable(BrandTable.TABLE_BRAND);
        onCreate(db);
    }
    public void dropTable(String tableName) {
        SQLiteDatabase db = getWritableDatabase();
        if (db == null || TextUtils.isEmpty(tableName)) {
            return;
        }
        db.execSQL("DROP TABLE IF EXISTS " + CartTable.TABLE_PRODUCT);
        db.execSQL("DROP TABLE IF EXISTS " + BrandTable.TABLE_BRAND);
    }
}
