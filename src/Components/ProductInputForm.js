import React, { useContext, useState, useEffect } from "react";
import "./ProductInputForm.css";
import { ProductContext } from "../Context/Productcontext";

const ProductInputForm = () => {
  const [price, setPrice] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { addProduct, currentProduct } = useContext(ProductContext);

  useEffect(() => {
    if (currentProduct) {
      setPrice(currentProduct.price);
      setProduct_name(currentProduct.product_name);
      setCategory(currentProduct.category);
      setDescription(currentProduct.description);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_product = { price, product_name, category, description };
    addProduct(new_product);
    setPrice("");
    setProduct_name("");
    setCategory("");
    setDescription("");
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="product_name">Product name:</label>{" "}
        <input
          type="text"
          id="product_name"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="category">Category:</label>{" "}
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductInputForm;
