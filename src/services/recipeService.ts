import api from "./api";
import { RecipeDTO } from "../types/recipe.dto";

export const getRecipes = async (id: number) => {
  try {
    const response = await api.post<RecipeDTO[]>("/api/recipes", {
      userId: id,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("❌ Impossible de récupérer les recettes");
  }
};
