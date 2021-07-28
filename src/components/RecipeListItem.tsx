// import { useState, useEffect } from 'react';
// import { listRecipes } from '../hooks/API';
// import Recipe, { RecipeType } from '../models/Recipe';
// import styled from 'styled-components';

// const RecipeListItem = styled.div`
//   background-color: black;
// `;

const RecipeListItem: React.FC<{ title: string }> = props => {
  return <h1>{props.title}</h1>;
};

export default RecipeListItem;
