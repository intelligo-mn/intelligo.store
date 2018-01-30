package cloud.techstar.ecommerce.models;
/**
 * Author: Tortuvshin Byambaa.
 * Project: TechstarShop
 * URL: https://www.github.com/tortuvshin
 */
public class User {
    private int userId;
    private String userName;
    private String userEmail;
    private String userPassword;
    private byte[] avatar;

    public User(int userId, String userName, String userEmail, String userPassword, byte[] avatar) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.avatar = avatar;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public byte[] getAvatar() {
        return avatar;
    }

    public void setAvatar(byte[] avatar) {
        this.avatar = avatar;
    }
}