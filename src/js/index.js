//d2cd7cc4c6b0d4015b3dcd17615e410a
//https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import axios from 'axios';

async function getResults(query) {
    const key = 'd2cd7cc4c6b0d4015b3dcd17615e410a';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error){
        alert(error);
    }
}

getResults('tomato pasta');