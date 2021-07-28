export interface RecipeType {
  title: string;
  category: string;
  time: string;
  image: string;
  difficulty: number;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: {
    text: string;
    image: string;
  }[];
  _id?: string;
}

class Recipe {
  title: string;
  category: string;
  time: string;
  image: string;
  difficulty: number;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: {
    text: string;
    image: string;
  }[];
  _id?: string;

  constructor(recipe: RecipeType) {
    this.title = recipe.title;
    this.category = recipe.category;
    this.time = recipe.time;
    this.image = recipe.image;
    this.difficulty = recipe.difficulty;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this._id = undefined;
  }
}

export default Recipe;
