document.addEventListener("DOMContentLoaded", ()=>{
fetchingMeals()

})

const baseUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

function fetchingMeals(){
    fetch (baseUrl)
    .then((response)=>response.json())
    .then ((meals)=>{
        //console.log(meals)
        //createMeals(meals)
    })
}

function createMeals(meal) {
    const mealSummary= meals.map((meal) => meal.strMeal)
    console.log (createMeals(meal))
}