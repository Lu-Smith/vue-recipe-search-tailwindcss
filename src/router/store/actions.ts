import axiosClient from '../../axiosClient';
import { Commit } from 'vuex';

export function searchMeals({commit}: { commit: Commit }, letter: string) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
    .catch((error) => {
        console.error(error);
    });
}

export function searchMealsByLetter({commit}: { commit: Commit }, keyword: string) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMealsByLetter', data.meals)
    })
    .catch((error) => {
        console.error(error);
    });
}

export function searchMealsByIngredient({commit}: { commit: Commit }, keyword: string) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMealsByIngredient', data.meals)
    })
    .catch((error) => {
        console.error(error);
    });
}