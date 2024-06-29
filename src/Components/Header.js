import React from "react";
import ProductInputForm from "./ProductInputForm";
import ProductsListing from "./ProductsListing";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <h1>Seller Access Page</h1>
      <ProductInputForm></ProductInputForm>
      <ProductsListing></ProductsListing>
    </React.Fragment>
  );
};

export default Header;
