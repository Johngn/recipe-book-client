import RecipeType from '../models/Recipe';

export enum ActionType {
  ADD_RECIPE_START = 'ADD_RECIPE_START',
  ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS',
  ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE',
  GET_ALL_RECIPES_START = 'GET_ALL_RECIPES_START',
  GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS',
  GET_ALL_RECIPES_FAILURE = 'GET_ALL_RECIPES_FAILURE',
  GET_RECIPE_START = 'GET_RECIPE_START',
  GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS',
  GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE',
  UPDATE_RECIPE_START = 'UPDATE_RECIPE_START',
  UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS',
  UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE',
  DELETE_RECIPE_START = 'DELETE_RECIPE_START',
  DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS',
  DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE',
}

interface GetAllRecipesStartAction {
  type: ActionType.GET_ALL_RECIPES_START;
}

interface GetAllRecipesSuccessAction {
  type: ActionType.GET_ALL_RECIPES_SUCCESS;
  payload: RecipeType[];
}

interface GetAllRecipesFailureAction {
  type: ActionType.GET_ALL_RECIPES_FAILURE;
  payload: string;
}

interface GetRecipeStartAction {
  type: ActionType.GET_RECIPE_START;
}

interface GetRecipeSuccessAction {
  type: ActionType.GET_RECIPE_SUCCESS;
  payload: RecipeType;
}

interface GetRecipeFailureAction {
  type: ActionType.GET_RECIPE_FAILURE;
  payload: string;
}

interface AddRecipeStartAction {
  type: ActionType.ADD_RECIPE_START;
}

interface AddRecipeSuccessAction {
  type: ActionType.ADD_RECIPE_SUCCESS;
}

interface AddRecipeFailureAction {
  type: ActionType.ADD_RECIPE_FAILURE;
}

export type RecipeActions =
  | GetAllRecipesStartAction
  | GetAllRecipesSuccessAction
  | GetAllRecipesFailureAction
  | GetRecipeStartAction
  | GetRecipeSuccessAction
  | GetRecipeFailureAction
  | AddRecipeStartAction
  | AddRecipeSuccessAction
  | AddRecipeFailureAction;
