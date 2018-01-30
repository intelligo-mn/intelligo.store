package cloud.techstar.ecommerce.database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import cloud.techstar.ecommerce.models.Company;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tortuvshin Byambaa on 7/17/2017.
 */

public class CompanyTable extends DatabaseHelper{

    private static final String TAG = CompanyTable.class.getSimpleName();

    public static final String TABLE_COMPANY = "companys";
    public static final String COMPANY_ID     = "companyId";
    public static final String COMPANY_NAME    = "companyName";
    public static final String COMPANY_IMAGE    = "companyImage";
    public static final String COMPANY_DESCRIPTION    = "companyDesc";

    private static final String[] PROJECTIONS_COMPANYS = {COMPANY_ID, COMPANY_NAME, COMPANY_IMAGE, COMPANY_DESCRIPTION};

    private static final int COMPANY_ID_INDEX      = 0;
    private static final int COMPANY_NAME_INDEX     = 1;
    private static final int COMPANY_IMAGE_INDEX     = 2;
    private static final int COMPANY_DESC_INDEX     = 3;

    public CompanyTable(Context context) {
        super(context);
    }

    public void addBrand(Company company) {
        if (company == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        ContentValues cv = new ContentValues();
        cv.put(COMPANY_ID, company.getBrandId());
        cv.put(COMPANY_NAME, company.getBrandName());
        cv.put(COMPANY_IMAGE, company.getBrandImage());
        cv.put(COMPANY_DESCRIPTION, company.getBrandDescription());

        db.insert(TABLE_COMPANY, null, cv);
        db.close();
    }

    public Company getBrands(String id) {
        SQLiteDatabase db = getReadableDatabase();
        if (db == null) {
            return null;
        }
        Cursor cursor = db.query(TABLE_COMPANY, PROJECTIONS_COMPANYS, COMPANY_NAME + "=?",
                new String[]{String.valueOf(id)}, null, null, null, null);
        if (!cursor.moveToFirst()) {
            return null;
        }
        Company company = new Company(cursor.getLong(COMPANY_ID_INDEX),
                cursor.getString(COMPANY_NAME_INDEX),
                cursor.getString(COMPANY_IMAGE_INDEX),
                cursor.getString(COMPANY_DESC_INDEX));
        cursor.close();
        return company;
    }

    public Cursor checkBrand(String companyName){

        SQLiteDatabase db = getReadableDatabase();

        Cursor cursor = db.query(TABLE_COMPANY, new String[]{COMPANY_ID, COMPANY_NAME,COMPANY_IMAGE, COMPANY_DESCRIPTION},
                COMPANY_NAME +    "='" +companyName +"'",null,null,null,null);
        if (cursor != null){
            cursor.moveToFirst();
        }
        return cursor;
    }

    public List<Company> getAllBrands() {
        List<Company> companies = new ArrayList<>();
        String selectQuery = "SELECT * FROM " + TABLE_COMPANY +" ORDER BY " +COMPANY_NAME+" DESC";
        SQLiteDatabase db = getReadableDatabase();
        Cursor cursor = db.rawQuery(selectQuery, null);
        if (cursor.moveToFirst()) {
            do {
                long id = cursor.getLong(COMPANY_ID_INDEX);
                String name = cursor.getString(COMPANY_NAME_INDEX);
                String image = cursor.getString(COMPANY_IMAGE_INDEX);
                String desc = cursor.getString(COMPANY_DESC_INDEX);
                Company company1 = new Company(id,name,image,desc);
                companies.add(company1);
            } while (cursor.moveToNext());
        }

        Log.d(TAG, "" + companies);
        cursor.close();
        return companies;
    }

    public int updateBrand(Company company) {
        if (company == null) {
            return -1;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return -1;
        }
        ContentValues cv = new ContentValues();
        cv.put(COMPANY_ID, company.getBrandId());
        cv.put(COMPANY_NAME, company.getBrandName());
        cv.put(COMPANY_IMAGE, company.getBrandImage());
        cv.put(COMPANY_DESCRIPTION, company.getBrandDescription());

        int rowCount = db.update(TABLE_COMPANY, cv, COMPANY_NAME + "=?",
                new String[]{String.valueOf(company.getBrandName())});
        db.close();
        return rowCount;
    }

    public void deleteBrand(Company company) {
        if (company == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        db.delete(TABLE_COMPANY, COMPANY_NAME + "=?", new String[]{String.valueOf(company.getBrandName())});
        db.close();
    }
}