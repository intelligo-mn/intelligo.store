package com.dglproject.brand.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * Created by Tortuvshin Byambaa on 3/7/2017.
 */
public class HistoryDbHelper extends SQLiteOpenHelper{

    private static final int DB_VERSION = 1;

    private static final String DB_NAME = "SearchHistory.db";

    public HistoryDbHelper(Context context) {
        super(context, DB_NAME, null, DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        addHistoryTable(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        dropAllTables(db);
        onCreate(db);
    }

    @Override
    public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        dropAllTables(db);
        onCreate(db);
    }

    private void addHistoryTable(SQLiteDatabase db) {
        db.execSQL(
                "CREATE TABLE " + HistoryContract.HistoryEntry.TABLE_NAME + " (" +
                        HistoryContract.HistoryEntry._ID + " INTEGER PRIMARY KEY," +
                        HistoryContract.HistoryEntry.COLUMN_QUERY + " TEXT NOT NULL," +
                        HistoryContract.HistoryEntry.COLUMN_INSERT_DATE + " INTEGER DEFAULT 0," +
                        HistoryContract.HistoryEntry.COLUMN_IS_HISTORY + " INTEGER NOT NULL DEFAULT 0," +
                        "UNIQUE (" + HistoryContract.HistoryEntry.COLUMN_QUERY + ") ON CONFLICT REPLACE);"
        );
    }

    private void dropAllTables(SQLiteDatabase db) {
        db.execSQL("DROP TABLE IF EXISTS " + HistoryContract.HistoryEntry.TABLE_NAME);
    }
}
