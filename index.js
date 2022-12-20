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
        card.innerHTML=`
        <div class="card">
        <img src= "${meal.strMealThumb}" class="card-img-top" alt="Corba">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      `
            mealInfo.appendChild(card)
       })
}