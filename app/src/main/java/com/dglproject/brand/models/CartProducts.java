package com.dglproject.brand.models;

/**
 * Created by Tortuvshin Byambaa on 3/13/2017.
 */

public class CartProducts {
    long id;
    String title;
    String description;
    double cost;
    String image;
    public double totalCost;
    int totalOrder;

    public CartProducts(String title, String description, double cost, String image, double totalCost, int totalOrder) {
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.image = image;
        this.totalCost = totalCost;
        this.totalOrder = totalOrder;
    }

    public CartProducts(String title, String description, double cost, String image) {
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.image = image;
        this.totalCost = cost;
        this.totalOrder = 1;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public int getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(int totalOrder) {
        this.totalOrder = totalOrder;
    }

}