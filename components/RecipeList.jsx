import React from "react";
import RecipePreview from "./RecipePreview";
import Link from "next/link";

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <>
            <br />
            <Link href={""}>
              <RecipePreview recipe={recipe} />
            </Link>
          </>
        );
      })}
    </>
  );
};

export default RecipeList;
