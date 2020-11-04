// API documentation: https://spoonacular.com/food-api/docs#Get-Recipe-Information

//example api call for getting info on a specific recipe with ID: 
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
async function SearchbyRecipeID(recipeID, API) {
  const nutValues = false;
  let queryURL = `https://api.spoonacular.com/recipes/${recipeID}/information?includeNutrition=${nutValues}&apiKey=${API}`;
  // var queryURL = "https://api.spoonacular.com/recipes/" + recipeID + "/information?includeNutrition="+ nutValues+ "&apiKey=" + API;
  return await $.ajax({ // Performing an AJAX request with the queryURL
    url: queryURL,
    method: "GET"
  })
}