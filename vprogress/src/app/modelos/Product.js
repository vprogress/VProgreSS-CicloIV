import React from "react";
class Product {
    constructor(id, name, description, stock, value, image) {
        this._id = id;
        this.productName = name;
        this.productDescription = description;
        this.productStock = stock;
        this.productValue = value;
        this.productImage = image;
    }
}

export default Product;