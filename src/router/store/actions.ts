import axiosClient from '../../axiosClient';
import { Commit } from 'vuex';

export function searchMeals({commit}: { commit: Commit }, keyword: string) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
    .catch((error) => {
        console.error(error);
    });
}