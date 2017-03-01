package com.dglproject.database;

import android.content.ContentValues;
import android.content.Context;
import android.content.res.Resources;
import android.content.res.XmlResourceParser;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.text.TextUtils;
import android.util.Log;

import com.dglproject.R;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;

/**
 * Created by Tortuvshin Byambaa on 3/1/2017.
 */

public class DatabaseHelper extends SQLiteOpenHelper {

    private Context myContext;

    private static final String TAG = "DatabaseHandler : ";
    private static final int    DATABASE_VERSION = 1;
    private static final String DATABASE_NAME    = "dgl.db";

    private static final String CREATE_TABLE_USERS = "CREATE TABLE users (" +
            UserAdapter.USER_ID + " INTEGER PRIMARY KEY," +
            UserAdapter.USER_NAME + " TEXT," +
            UserAdapter.USER_EMAIL + " TEXT," +
            UserAdapter.USER_PASSWORD + " TEXT)";

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        myContext = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL(CREATE_TABLE_USERS);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        dropTable(UserAdapter.TABLE_USERS);
        onCreate(db);
    }

    public void dropTable(String tableName) {
        SQLiteDatabase db = getWritableDatabase();
        if (db == null || TextUtils.isEmpty(tableName)) {
            return;
        }
        db.execSQL("DROP TABLE IF EXISTS " + UserAdapter.TABLE_USERS);
    }
}