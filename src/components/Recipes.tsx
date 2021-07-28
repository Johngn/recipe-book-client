import React, { useState, useEffect } from 'react';
import { listRecipes } from '../hooks/API';
import Recipe, { RecipeType } from '../models/Recipe';
import styled from 'styled-components';

import RecipeListItem from './RecipeListItem';

const RecipeContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    (async () => {
      const recipes = await listRecipes();
      setRecipes(recipes.data);
    })();
  }, []);

  return (
    <>
      This is the list of recipes
      <RecipeContainer>
        {recipes.map(recipe => (
          <RecipeListItem key={recipe._id} title={recipe.title} />
        ))}
      </RecipeContainer>
    </>
  );
};

export default Recipes;
