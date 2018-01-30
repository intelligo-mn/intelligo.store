package cloud.techstar.ecommerce.widgets;

import android.graphics.drawable.Drawable;
/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
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