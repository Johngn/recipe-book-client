import { ActionType, RecipeActions } from '../action-types';
import { RecipeType } from '../models/Recipe';

interface RecipeState {
  loading: boolean;
  error: string;
  recipeList: RecipeType[];
}

const initialState = {
  loading: false,
  error: '',
  recipeList: [],
};

const watchlistReducer = (
  state: RecipeState = initialState,
  action: RecipeActions
): RecipeState => {
  switch (action.type) {
    case ActionType.GET_ALL_RECIPES_START:
      return {
        ...state,
        loading: true,
      };

    case ActionType.GET_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipeList: action.payload,
      };

    case ActionType.GET_ALL_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default watchlistReducer;
