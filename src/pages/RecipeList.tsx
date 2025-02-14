import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";
import { RecipeDTO } from "../types/recipe.dto";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState<RecipeDTO[]>([]);

  useEffect(() => {
    if (user) {
      const fetchRecipes = async () => {
        const response = await getRecipes(user.id);
        setRecipes(response);
        console.log(response);
      };

      fetchRecipes();
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center p-6 bg-neutral-100">
      <h2 className="self-center text-3xl text-gray-800 font-semibold">Mes Recettes</h2>

      <section className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 mx-auto my-12">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <article key={recipe.id} className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out w-full max-w-xs mx-auto">
              <figure className="space-y-2 rounded-md ">
                <img src={recipe.image} alt={recipe.title} className="object-cover rounded-sm" />
                <figcaption className="flex justify-around items-center">
                  <span className="flex  items-center gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>{recipe.prepTime} min</p>
                  </span>

                  <span className="flex items-center gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>

                    <p>{recipe.cookTime} min</p>
                  </span>
                </figcaption>
              </figure>
              <h3 className="text-lg font-semibold text-gray-700 text-center">{recipe.title}</h3>
              <span className="bg-green-200 rounded-sm border border-green-300 px-3 text-xs flex self-end">{recipe.category}</span>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default RecipeList;
