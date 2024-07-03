import React, { useContext } from "react";
import { ProductContext } from "../Context/Productcontext";
import "./ProductsListing.css";

const ProductsListing = () => {
  const { products, onRemove, onEdit } = useContext(ProductContext);

  const renderProducts = (category) => {
    return products
      .filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
      .map((product) => (
        <li key={product.id} title="product.description">
          {product.product_name}: {product.price}INR{" "}
          <button onClick={() => onRemove(product.id)}>Remove</button>
          <button onClick={() => onEdit(product.id)}>Edit</button>
        </li>
      ));
  };
  return (
    <div className="listing">
      <h2 className="listing-h2">Products List:</h2>
      <h3>Electronics:</h3>
      <ul>{renderProducts("Electronics")}</ul>
      <h3>Health:</h3>
      <ul>{renderProducts("Health")}</ul>
      <h3>Skin Care:</h3>
      <ul>{renderProducts("Skin Care")}</ul>
    </div>
  );
};

export default ProductsListing;
