interface State {
    searchedMeals: string[]; 
}

export function setSearchedMeals(state: State, meals: string[]) {
    state.searchedMeals = meals
};