// API documentation: https://spoonacular.com/food-api/docs#Get-Recipe-Information

//example api call for getting info on a specific recipe with ID: 
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

// var recipeID = 
var queryURL = " https://api.spoonacular.com/recipes/" +
        recipeID + "/information?includeNutrition=false";
      // Performing an AJAX request with the queryURL
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
    console.log(response);
    const recipeTitle = response.title;
    const recipeImage = response.image;
    const recipeSourceLink = response.sourceUrl;
    const spoonacularURL = response.spoonacularSourceUrl;
    const readyTime = response.readyInMinutes;
        
    

})

