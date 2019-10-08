//d2cd7cc4c6b0d4015b3dcd17615e410a
//https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import Search from './modules/Search';

//global state  of the app

const state = {}

const constrolSearch = async () =>{
    //1) get query from view
    const query ='pizza' //TODO

    if(query) {
        // 2) new search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results

        // 4) search for recipes
        await state.search.getResults();

        //5) render results on UI
        console.log(state.search.result);
    }
}
document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    constrolSearch();
})

// search.getResults();