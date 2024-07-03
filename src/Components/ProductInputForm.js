import React, { useContext, useState, useEffect } from "react";
import "./ProductInputForm.css";
import { ProductContext } from "../Context/Productcontext";

const ProductInputForm = () => {
  const [product, setProduct] = useState({
    price: "",
    product_name: "",
    category: "",
    description: "",
  });

  const { addProduct, currentProduct } = useContext(ProductContext);

  useEffect(() => {
    if (currentProduct) {
      setProduct({
        price: currentProduct.price,
        product_name: currentProduct.product_name,
        category: currentProduct.category,
        description: currentProduct.description,
      });
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ price: "", product_name: "", category: "", description: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  return (
    <div className="container">
      <h2 className="container-h2">Add New Product:</h2>
      <form onSubmit={handleSubmit} className="input">
        <label htmlFor="price">Price:</label>{" "}
        <input
          type="number"
          id="price"
          placeholder="Enter in INR"
          value={product.price}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="product_name">Product name:</label>{" "}
        <input
          type="text"
          id="product_name"
          value={product.product_name}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="category">Category:</label>{" "}
        <select id="category" value={product.category} onChange={handleChange}>
          <option value=""></option>
          <option value="electronics">Electronics</option>
          <option value="health">Health</option>
          <option value="skin_care">Skin Care</option>
        </select>
        <br />
        <br />
        <label htmlFor="product_description">Product Description:</label>{" "}
        <textarea
          id="product_description"
          placeholder="Optional"
          value={product.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductInputForm;
