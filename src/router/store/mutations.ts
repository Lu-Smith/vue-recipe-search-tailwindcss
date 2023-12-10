interface State {
    setSearchedMeals: string[]; 
}

export function setSearchedMeals(state: State, meals: string[]) {
    state.setSearchedMeals = meals
};