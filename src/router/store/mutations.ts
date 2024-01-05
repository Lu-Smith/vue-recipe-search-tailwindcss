interface State {
    searchedMeals: string[]; 
    searchedMealsByLetter: string[]; 
    searchedMealsByIngredient: string[]; 
}

export function setSearchedMeals(state: State, meals: string[]) {
    state.searchedMeals = meals || []
};

export function setSearchedMealsByLetter(state: State, meals: string[]) {
    state.searchedMealsByLetter = meals || []
};

export function setSearchedMealsByIngredient(state: State, meals: string[]) {
    state.searchedMealsByIngredient = meals || []
};

export function setIngredient(state: State, ingredients) {
    state.ingredients = ingredients
  }