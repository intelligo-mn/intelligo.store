package com.dglproject.brand.database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.dglproject.brand.models.User;

import java.util.ArrayList;
import java.util.List;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */
public class UserTable extends DatabaseHelper {

    private static final String TAG = "UserAdapter : ";

    public static final String TABLE_USERS   = "users";
    public static final String USER_ID       = "id";
    public static final String USER_NAME     = "name";
    public static final String USER_EMAIL    = "email";
    public static final String USER_PASSWORD = "password";

    private static final int USER_ID_INDEX       = 0;
    private static final int USER_NAME_INDEX     = 1;
    private static final int USER_EMAIL_INDEX    = 2;
    private static final int USER_PASSWORD_INDEX = 3;

    private static final String[] PROJECTIONS_USERS = {USER_ID, USER_NAME, USER_EMAIL, USER_PASSWORD};

    public UserTable(Context context) {
        super(context);
    }

    public void addUser(User user) {
        if (user == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        ContentValues cv = new ContentValues();
        cv.put(USER_NAME, user.getUserName());
        cv.put(USER_EMAIL, user.getUserEmail());
        cv.put(USER_PASSWORD, user.getUserPassword());
        // Inserting Row
        db.insert(TABLE_USERS, null, cv);
        db.close();
    }

    public User getUser(int id) {
        SQLiteDatabase db = getReadableDatabase();
        if (db == null) {
            return null;
        }
        Cursor cursor = db.query(TABLE_USERS, PROJECTIONS_USERS, USER_ID + "=?",
                new String[]{String.valueOf(id)}, null, null, null, null);
        if (!cursor.moveToFirst()) {
            return null;
        }
        User user = new User(cursor.getInt(USER_ID_INDEX),
                cursor.getString(USER_NAME_INDEX),
                cursor.getString(USER_EMAIL_INDEX),
                cursor.getString(USER_PASSWORD_INDEX));
        cursor.close();
        return user;
    }

    public Cursor checkUser(String username,String password){

        SQLiteDatabase db = getReadableDatabase();

        Cursor cursor = db.query(TABLE_USERS, new String[]{USER_ID, USER_NAME, USER_EMAIL, USER_PASSWORD},
                USER_NAME + "='" + username + "' AND " +
                        USER_PASSWORD + "='" + password + "'", null, null, null, null);
        if (cursor != null){
            cursor.moveToFirst();
        }
        return cursor;
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        String selectQuery = "SELECT * FROM " + TABLE_USERS;
        SQLiteDatabase db = getReadableDatabase();
        Cursor cursor = db.rawQuery(selectQuery, null);
        if (cursor.moveToFirst()) {
            do {
                int id = cursor.getInt(USER_ID_INDEX);
                String name = cursor.getString(USER_NAME_INDEX);
                String email = cursor.getString(USER_EMAIL_INDEX);
                String password = cursor.getString(USER_PASSWORD_INDEX);
                User user = new User(id, name, email, password);
                users.add(user);
            } while (cursor.moveToNext());
        }
        cursor.close();
        return users;
    }
    public int updateUser(User user) {
        if (user == null) {
            return -1;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return -1;
        }
        ContentValues cv = new ContentValues();
        cv.put(USER_NAME, user.getUserName());
        cv.put(USER_EMAIL, user.getUserEmail());
        cv.put(USER_PASSWORD,user.getUserPassword());
        // Upating the row
        int rowCount = db.update(TABLE_USERS, cv, USER_ID + "=?",
                new String[]{String.valueOf(user.getUserId())});
        db.close();
        return rowCount;
    }

    public void deleteUser(User user) {
        if (user == null) {
            return;
        }
        SQLiteDatabase db = getWritableDatabase();
        if (db == null) {
            return;
        }
        db.delete(TABLE_USERS, USER_ID + "=?", new String[]{String.valueOf(user.getUserId())});
        db.close();
    }

    public int getUserCount() {
        String query = "SELECT * FROM  " + TABLE_USERS;
        SQLiteDatabase db = getReadableDatabase();
        Cursor cursor = db.rawQuery(query, null);
        int count = cursor.getCount();
        cursor.close();
        return count;
    }
}