import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gif */}
      {categories?.map((category, i) => (
        <GifGrid key={`category-${i}`} category={category} />
      ))}
    </>
  );
};
