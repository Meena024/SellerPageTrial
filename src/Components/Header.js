import React from "react";
import ProductInputForm from "./ProductInputForm";
import ProductsListing from "./ProductsListing";
import "../Context/Productcontext";
import "./Header.css";
import { ProductProvider } from "../Context/Productcontext";

const Header = () => {
  return (
    <ProductProvider>
      <h1>Seller Access Page</h1>
      <ProductInputForm></ProductInputForm>
      <ProductsListing></ProductsListing>
    </ProductProvider>
  );
};

export default Header;
