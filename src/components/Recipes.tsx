import { useEffect } from 'react';
import styled from 'styled-components';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

import RecipeListItem from './RecipeListItem';

const RecipeContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;

const Recipes: React.FC = () => {
  const loading = useTypedSelector(state => state.recipes.loading);
  const recipeList = useTypedSelector(state => state.recipes.recipeList);

  const { getAllRecipes } = useActions();

  useEffect(() => {
    getAllRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      This is the list of recipes
      {loading && <h1>Loading</h1>}
      {!loading && (
        <RecipeContainer>
          {recipeList.map(recipe => (
            <RecipeListItem key={recipe._id} title={recipe.title} />
          ))}
        </RecipeContainer>
      )}
    </>
  );
};

export default Recipes;
