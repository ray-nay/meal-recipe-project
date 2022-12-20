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

function renderMealCard(meals) {
    meals.forEach((meal)=>{
        let card= document.createElement("div")
        card.className="col-12 col-md-6 col-lg-4"
      
       
       })
}