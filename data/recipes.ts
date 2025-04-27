import type { Recipe } from "./recipes.d";

// Importation statique des recettes
import recipe1 from "./recipes/1-limonade-de-coco/recipe.json";
import recipe2 from "./recipes/2-tarte-au-thon/recipe.json";
import recipe3 from "./recipes/3-salade-cesar/recipe.json";
import recipe4 from "./recipes/4-tiramisu/recipe.json";
import recipe5 from "./recipes/5-ratatouille/recipe.json";
import recipe6 from "./recipes/6-tarte-aux-pommes/recipe.json";
import recipe7 from "./recipes/7-soupe-a-loignon/recipe.json";
import recipe8 from "./recipes/8-poulet-au-curry/recipe.json";

// Création d'un mapping pour les recettes et les images
const recipeData = [
    {
        recipe: recipe1,
        image: require("./recipes/1-limonade-de-coco/image.jpg")
    },
    {
        recipe: recipe2,
        image: require("./recipes/2-tarte-au-thon/image.jpg")
    },
    {
        recipe: recipe3,
        image: require("./recipes/3-salade-cesar/image.jpg")
    },
    {
        recipe: recipe4,
        image: require("./recipes/4-tiramisu/image.jpg")
    },
    {
        recipe: recipe5,
        image: require("./recipes/5-ratatouille/image.jpg")
    },
    {
        recipe: recipe6,
        image: require("./recipes/6-tarte-aux-pommes/image.jpg")
    },
    {
        recipe: recipe7,
        image: require("./recipes/7-soupe-a-loignon/image.jpg")
    },
    {
        recipe: recipe8,
        image: require("./recipes/8-poulet-au-curry/image.jpg")
    },
];

// Combiner les données pour créer le tableau final
export const recipes: Recipe[] = recipeData.map(item => ({
    ...item.recipe,
    image: item.image
}));
