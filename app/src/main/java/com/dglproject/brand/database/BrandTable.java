package com.dglproject.brand.database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.dglproject.brand.models.Brand;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tortuvshin Byambaa on 7/17/2017.
 */

public class BrandTable extends DatabaseHelper{

    private static final String TAG = BrandTable.class.getSimpleName();

    public static final String TABLE_BRAND = "brands";
    public static final String BRAND_ID     = "brandId";
    public static final String BRAND_NAME    = "brandName";
    public static final String BRAND_IMAGE    = "brandImage";
    public static final String BRAND_DESCRIPTION    = "brandDesc";

    private static final String[] PROJECTIONS_BRANDS = {BRAND_ID, BRAND_NAME, BRAND_IMAGE, BRAND_DESCRIPTION};

    private static final int BRAND_ID_INDEX      = 0;
    private static final int BRAND_NAME_INDEX     = 1;
    private static final int BRAND_IMAGE_INDEX     = 2;
    private static final int BRAND_DESC_INDEX     = 3;

    public BrandTable(Context context) {
        super(context);
    }

    public void addBrand(Brand brand) {
        if (brand == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        ContentValues cv = new ContentValues();
        cv.put(BRAND_ID, brand.getBrandId());
        cv.put(BRAND_NAME, brand.getBrandName());
        cv.put(BRAND_IMAGE, brand.getBrandImage());
        cv.put(BRAND_DESCRIPTION, brand.getBrandDescription());

        db.insert(TABLE_BRAND, null, cv);
        db.close();
    }

    public Brand getBrands(String id) {
        SQLiteDatabase db = getReadableDatabase();
        if (db == null) {
            return null;
        }
        Cursor cursor = db.query(TABLE_BRAND, PROJECTIONS_BRANDS, BRAND_NAME + "=?",
                new String[]{String.valueOf(id)}, null, null, null, null);
        if (!cursor.moveToFirst()) {
            return null;
        }
        Brand brand = new Brand(cursor.getLong(BRAND_ID_INDEX),
                cursor.getString(BRAND_NAME_INDEX),
                cursor.getString(BRAND_IMAGE_INDEX),
                cursor.getString(BRAND_DESC_INDEX));
        cursor.close();
        return brand;
    }

    public Cursor checkBrand(String brandName){

        SQLiteDatabase db = getReadableDatabase();

        Cursor cursor = db.query(TABLE_BRAND, new String[]{BRAND_ID, BRAND_NAME,BRAND_IMAGE, BRAND_DESCRIPTION},
                BRAND_NAME +    "='" +brandName +"'",null,null,null,null);
        if (cursor != null){
            cursor.moveToFirst();
        }
        return cursor;
    }

    public List<Brand> getAllBrands() {
        List<Brand> brands = new ArrayList<>();
        String selectQuery = "SELECT * FROM " + TABLE_BRAND +" ORDER BY " +BRAND_NAME+" DESC";
        SQLiteDatabase db = getReadableDatabase();
        Cursor cursor = db.rawQuery(selectQuery, null);
        if (cursor.moveToFirst()) {
            do {
                long id = cursor.getLong(BRAND_ID_INDEX);
                String name = cursor.getString(BRAND_NAME_INDEX);
                String image = cursor.getString(BRAND_IMAGE_INDEX);
                String desc = cursor.getString(BRAND_DESC_INDEX);
                Brand brand1 = new Brand(id,name,image,desc);
                brands.add(brand1);
            } while (cursor.moveToNext());
        }

        Log.d(TAG, "" + brands);
        cursor.close();
        return brands;
    }

    public int updateBrand(Brand brand) {
        if (brand == null) {
            return -1;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return -1;
        }
        ContentValues cv = new ContentValues();
        cv.put(BRAND_ID, brand.getBrandId());
        cv.put(BRAND_NAME, brand.getBrandName());
        cv.put(BRAND_IMAGE, brand.getBrandImage());
        cv.put(BRAND_DESCRIPTION, brand.getBrandDescription());

        int rowCount = db.update(TABLE_BRAND, cv, BRAND_NAME + "=?",
                new String[]{String.valueOf(brand.getBrandName())});
        db.close();
        return rowCount;
    }

    public void deleteBrand(Brand brand) {
        if (brand == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        db.delete(TABLE_BRAND, BRAND_NAME + "=?", new String[]{String.valueOf(brand.getBrandName())});
        db.close();
    }
}