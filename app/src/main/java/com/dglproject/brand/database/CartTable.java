package com.dglproject.brand.database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.dglproject.brand.models.CartProducts;
import java.util.ArrayList;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class CartTable extends DatabaseHelper{

    private static final String TAG = "===ProductAdapter===";

    public static final String TABLE_PRODUCT       = "cart_product";
    public static final String PRODUCT_ID          = "id";
    public static final String PRODUCT_TITLE       = "title";
    public static final String PRODUCT_DESCRIPTION = "description";
    public static final String PRODUCT_COST        = "cost";
    public static final String PRODUCT_IMAGE       = "image";
    public static final String PRODUCT_TOTAL_COST  = "totalcost";
    public static final String PRODUCT_TOTAL_ORDER = "totalorder";

    private static final String[] PROJECTIONS_PRODUCT = {
            PRODUCT_ID,
            PRODUCT_TITLE,
            PRODUCT_DESCRIPTION,
            PRODUCT_COST,
            PRODUCT_IMAGE,
            PRODUCT_TOTAL_COST,
            PRODUCT_TOTAL_ORDER
    };

    public CartTable(Context context) {
        super(context);
    }

    public long addProduct(CartProducts product){

        long newRowId;
        ContentValues values = new ContentValues();
        values.put(PRODUCT_TOTAL_COST, product.getTotalCost());
        values.put(PRODUCT_TOTAL_ORDER, product.getTotalOrder());
        CartProducts returnProduct = findByTitle(product.getTitle());
        SQLiteDatabase database = this.getWritableDatabase();
        if (returnProduct == null){
            values.put(PRODUCT_TITLE, product.getTitle());
            values.put(PRODUCT_DESCRIPTION, product.getDescription());
            values.put(PRODUCT_COST, product.getCost());
            values.put(PRODUCT_IMAGE, product.getImage());
            newRowId = database.insert(
                    TABLE_PRODUCT,
                    null,
                    values);
        }else{
            String selection = PRODUCT_TITLE + " = ?";
            String[] data = {product.getTitle()};
            newRowId = database.update(
                    TABLE_PRODUCT,
                    values,
                    selection,
                    data);
        }
        database.close();
        return newRowId;
    }

    public ArrayList<CartProducts> readData(){

        SQLiteDatabase db = this.getReadableDatabase();
        ArrayList<CartProducts> data = new ArrayList<CartProducts>();

        String[] projection = {
                PRODUCT_ID,
                PRODUCT_TITLE,
                PRODUCT_DESCRIPTION,
                PRODUCT_COST,
                PRODUCT_IMAGE,
                PRODUCT_TOTAL_COST,
                PRODUCT_TOTAL_ORDER
        };

        String sortOrder =
                PRODUCT_TITLE + " ASC";

        Cursor c = db.query(
                TABLE_PRODUCT,
                projection,
                null,
                null,
                null,
                null,
                sortOrder
        );

        while(c.moveToNext()){
            CartProducts product = new CartProducts(c.getString(1),c.getString(2),c.getDouble(3),c.getString(4),c.getDouble(5),c.getInt(6));
          data.add(product);
        };
        c.close();
        db.close();
        return data;
    }

    public boolean deleteProduct(String itemName) {

        boolean result = false;
        String query = "Select * FROM " + TABLE_PRODUCT ;
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor c = db.rawQuery(query, null);

        if (c.moveToNext()) {
            String[] value = {itemName};
            db.delete(TABLE_PRODUCT, PRODUCT_TITLE + " = ?" ,value);
            c.close();
            result = true;
        }
        c.close();
        db.close();
        return result;
    }

    public CartProducts findByTitle(String title){
        String query = "Select * FROM " + TABLE_PRODUCT + " WHERE " + PRODUCT_TITLE + " =  \"" + title + "\"";
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor c = db.rawQuery(query, null);
        CartProducts product ;

        if (c.moveToFirst()) {
            c.moveToFirst();
            product = new CartProducts(c.getString(1),c.getString(2),c.getDouble(4),c.getString(5),c.getDouble(6),c.getInt(7));
          c.close();
        } else {
            product = null;
        }
        db.close();
        return product;
    }
}
