// document.addEventListener("DOMContentLoaded", ()=>{


// })
const baseUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
fetchingMeals()
let mealInfo= document.getElementById("card-content")


function fetchingMeals(){
    fetch (baseUrl)
    .then((response)=>response.json())
    .then ((mealsData)=>{
        console.log(mealsData.meals)
        //createMeals(meals)
        renderMealCard(mealsData.meals)
        

    })
}