// document.addEventListener("DOMContentLoaded", ()=>{


// })

//variable to store the baseUrl
const baseUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
fetchingMeals()

//variable to store the parent div for the cards 
let mealInfo= document.getElementById("card-content")


//function to fetch the meals from the public api.
function fetchingMeals(){
    fetch (baseUrl)
    .then((response)=>response.json())
    .then ((mealsData)=>{
        console.log(mealsData.meals)
        
      //hoisting the function to render the meals to the browser.
      //mealsData is an array and to access the specific meal, dot notation is used i.e mealsData.meals.
        renderMealCard(mealsData.meals)
        
    })
}


//function to render the meals to the browser.
//we loop through each meal using forEach to render all 25 meals on the landing page.
function renderMealCard(meals) {
    meals.forEach((meal)=>{

      //initializing the variable likes.
      let likes=0; 
      let mealRecipe=meal.strInstructions
      //initializing the recipe variable.
      //let recipe=`${meal.strInstructions}`

        let card= document.createElement("div")
        card.className="col-12 col-md-6 col-lg-4"
        card.innerHTML=`
        <div class="card">
        <img src= "${meal.strMealThumb}" class="card-img-top" alt="Corba">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Wanna make some ${meal.strMeal}? </p>
          <button id= "click-recipe" class="recipe-button">View Recipe</button>
          
        </div>
      </div>
      <div class="likes-section">
      <span id= "likes-number" class="likes">0 Likes</span>
      <button id= "click-like" class="like-button">♥</button>
    </div>
      `

    
        //creating a variable to store the selected classes of the like button and number of likes.
      const likeButton = card.querySelector('#click-like')
      let likesCounter= card.querySelector('#likes-number')
      const recipeButton = card.querySelector('#click-recipe')
      const viewRecipe=mealInfo.querySelector("#view-recipe")
      
    



      recipeButton.addEventListener("click", ()=>{
        //document.body.innerHTML=``
        mealInfo.innerHTML=`
        <img src= "${meal.strMealThumb}" class="card-img-top" alt="Corba">
        <h5 class="card-title">${meal.strMeal}</h5>
        <span id= "view-recipe" class="recipe">${meal.strInstructions} </span>
        <span id= "view-ingredients" class="ingredients"> Ingredients:
        ${meal.strIngredient1},
        ${meal.strIngredient2},
        ${meal.strIngredient3},
        ${meal.strIngredient4},
        ${meal.strIngredient5},
        ${meal.strIngredient6}.

        
        
        
        
        </span>
        
        <input type="text" id="comment-box" placeholder="Enter comment">
        <button button id="comment-button"style='font-size:24px'>Leave a comment <i class='far fa-comment-dots'></i></button>
        <span id= "comments-section" class="your-comments"></span>
        `
        fetch (baseUrl)
        .then((response)=>response.json())
        .then ((mealsData)=>{
            //console.log(meal.strInstructions)
            //viewRecipe.textContent= meal.strInstructions
            // let mealsRecipe=renderRecipe(mealsData.meals)
            // console.log(mealsRecipe)



           // renderMealCard(meal.strInstructions)


        })
      
      })
   

      
  
      
      //adding an event listener that will listen for a click to the like button.
      likeButton.addEventListener("click", ()=>{ 

       //incrementing on the likes variable.
        likes ++
        console.log(likes)

        //displaying on the browser the number of likes.
        likesCounter.innerText=`${likes} likes `
        
      })
            //appending the child card to its parent mealInfo.
            mealInfo.appendChild(card)
       })
     
     
}

//creating variables to store the search input and button. 
let searchInput=document.getElementById("search")
let searchButton=document.getElementById("show-meal")
let searchedMeal=document.getElementById("your-meal")

//adding an event listener that will listen for a change in value in the search input.
searchInput.addEventListener("change", ()=>{

  //clearing the innerHTML contents in order to display only the searched items.
  mealInfo.innerHTML= ``

  //fetching mealsData from the public api after the search is performed.
  fetch (baseUrl)
  .then((response)=>response.json())
  .then ((mealsData)=>{
      console.log(mealsData.meals)
      
      //storing the searchMeal function in the variable mealsArray.
      //passing the parameter mealsData.meals to the function searchMeal.
      let mealsArray= searchMeal(mealsData.meals)
      console.log(mealsArray)

      //calling the render  MealCard function while giving it the parameter mealsArray.
      renderMealCard(mealsArray)
      
  })
console.log(searchInput.value)
})

//declaring the searchMeal function.
function searchMeal(mealsData){

 //filter through the mealsData to find a match for the searchInput.value.
 //store desired result in variable called mealResult.
  let mealResult=mealsData.filter(meal=> meal.strMeal.toLowerCase().includes(searchInput.value.toLowerCase()))
  return mealResult

}
// const comment= mealInfo.querySelector("#comment-button");
// comment.addEventListener("click",()=>{
//  let commentBoxValue= document.getElementById("comment-box").value;
//  
//  let li = document.createElement("li");
//  let text = document.createTextNode(commentBoxValue);
//  li.appendChild(text);
//  document.getElementById("unordered").appendChild(li);
//  
// });







