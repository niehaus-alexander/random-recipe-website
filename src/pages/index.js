import RecipeList from "../../components/RecipeList";

const recipes = [
  {
    id: "1",
    name: "brokkoli with potatos",
    ingredients: ["brokkoli", "potatoes", "tomatoes"],
    description: "cut potatoes and fry them with oil and salt",
  },
  {
    id: "2",
    name: "pasta",
    ingredients: ["pasta", "pesto", "tomatoes"],
    description: "cut tomatoes and mix with pesto",
  },
  {
    id: "3",
    name: "tomato soup",
    ingredients: ["tomatoes", "basil", "onions"],
    description: "mix tomatoes with water i guess",
  },
];

export default function Home() {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
}
