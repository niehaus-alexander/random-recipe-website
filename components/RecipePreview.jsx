import React from "react";

const RecipePreview = ({ recipe }) => {
  return (
    <ul>
      <li>Name: {recipe.name}</li>
      <li>Ingredients: {recipe.ingredients}</li>
      <li>Description: {recipe.description}</li>
    </ul>
  );
};

export default RecipePreview;
