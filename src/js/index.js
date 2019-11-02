//d2cd7cc4c6b0d4015b3dcd17615e410a
//https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import Search from './modules/Search';
import Recipe from './modules/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base'
//global state  of the app

const state = {}

//seach controller
const constrolSearch = async () =>{
    //1) get query from view
    const query = searchView.getInput(); //TODO
    // const query = 'pizza'
    // console.log(query);

    if(query) {
        // 2) new search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        // 4) search for recipes
        await state.search.getResults();

        //5) render results on UI
        // console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}
elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    constrolSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
} )
// search.getResults();

//recipe controller

const r = new Recipe(46956);
r.getRecipe();
console.log(r);