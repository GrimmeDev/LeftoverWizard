// API documentation: https://spoonacular.com/food-api/docs#Get-Recipe-Information

//example api call for getting info on a specific recipe with ID: 
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
function SearchbyRecipeID(recipeID) {
  // var recipeID = 
  const nutValues = false;
  var queryURL = "https://api.spoonacular.com/recipes/" + recipeID + "/information?includeNutrition="+ nutValues;
  $.ajax({ // Performing an AJAX request with the queryURL
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
}
module.exports = SearchbyRecipeID;