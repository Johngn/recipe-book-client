import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, RecipeActions } from '../action-types';
import RecipeType from '../models/Recipe';

export const getAllRecipes = () => {
  return async (dispatch: Dispatch<RecipeActions>) => {
    dispatch({
      type: ActionType.GET_ALL_RECIPES_START,
    });

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}`);

      dispatch({
        type: ActionType.GET_ALL_RECIPES_SUCCESS,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_ALL_RECIPES_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const addRecipe =
  (newRecipe: RecipeType) => async (dispatch: Dispatch<RecipeActions>) => {
    dispatch({
      type: ActionType.ADD_RECIPE_START,
    });

    console.log(newRecipe);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}`, newRecipe, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: ActionType.ADD_RECIPE_SUCCESS });
    } catch (error) {
      dispatch({ type: ActionType.ADD_RECIPE_FAILURE });
    }
  };
