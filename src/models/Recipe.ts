export interface IngredientType {
  name: string;
  amount: number;
  unit: string;
}

export interface InstructionType {
  text: string;
  image: string;
}

export interface RecipeType {
  title: string;
  category: string;
  time: string;
  image: string;
  difficulty: number;
  ingredients: IngredientType[];
  instructions: InstructionType[];
  _id?: string;
}

class Recipe {
  title: string;
  category: string;
  time: string;
  image: string;
  difficulty: number;
  ingredients: IngredientType[];
  instructions: InstructionType[];
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
