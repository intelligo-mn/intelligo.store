package agency.techstar.ecommerce.models;

/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class Brand {

    private long brandId;
    private String brandName;
    private String brandImage;
    private String brandDescription;

    public Brand(long brandId, String brandName, String brandImage, String brandDescription) {
        this.brandId = brandId;
        this.brandName = brandName;
        this.brandImage = brandImage;
        this.brandDescription = brandDescription;
    }

    public long getBrandId() {
        return brandId;
    }

    public void setBrandId(long brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getBrandImage() {
        return brandImage;
    }

    public void setBrandImage(String brandImage) {
        this.brandImage = brandImage;
    }

    public String getBrandDescription() {
        return brandDescription;
    }

    public void setBrandDescription(String brandDescription) {
        this.brandDescription = brandDescription;
    }
}