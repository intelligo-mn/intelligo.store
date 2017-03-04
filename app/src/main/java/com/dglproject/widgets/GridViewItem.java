package com.dglproject.widgets;

import android.graphics.drawable.Drawable;

/**
 * Created by Tortuvshin Byambaa on 3/3/2017.
 */
public class GridViewItem
{
    String title;
    Drawable image;

    public GridViewItem() {}

    public GridViewItem(String title, Drawable image)
    {
        super();
        this.title = title;
        this.image = image;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public Drawable getImage()
    {
        return image;
    }

    public void setImage(Drawable image)
    {
        this.image = image;
    }


}