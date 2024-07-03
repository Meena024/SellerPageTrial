import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: Date.now() },
    ]);
    // console.log(products);
  };

  const onRemove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const onEdit = (id) => {
    const editProduct = products.find((product) => product.id === id);
    if (editProduct) {
      setCurrentProduct(editProduct);
      onRemove(id);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        onRemove,
        onEdit,
        currentProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
