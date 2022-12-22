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
        //let mealsArray= searchMeal(mealsData.meals)

        renderMealCard(mealsData.meals)
        
    })
}

function renderMealCard(meals) {
    meals.forEach((meal)=>{

      let likes=0; 

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
      <div class="likes-section">
      <span id= "likes-number" class="likes">0 Likes</span>
      <button id= "click-like" class="like-button">♥</button>
    </div>
      `

    
        // console.log(likesCounter)
      const likeButton = card.querySelector('#click-like')
      let likesCounter= card.querySelector('#likes-number')
  
      
      
      likeButton.addEventListener("click", ()=>{ 

       
        likes ++
        console.log(likes)
        likesCounter.innerText=`${likes} likes `
        // let likes=parseInt(event.target.value)
        // let currentLikes=parseInt(likeButton.textContent)
        // let newLikes= (likes+=currentLikes)
        


      })


            mealInfo.appendChild(card)
       })
}

// function incrementLikes(){
//   let likes=0
//   let newLikes=likes + 1
  

// }
// incrementLikes()
let searchInput=document.getElementById("search")
let searchButton=document.getElementById("show-meal")
let searchedMeal=document.getElementById("your-meal")

searchInput.addEventListener("change", ()=>{

  
})
