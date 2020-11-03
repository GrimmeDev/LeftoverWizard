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
      })
        // After data comes back from the request
        .then(function(response) {
            var results = response.data;
            console.log(results);
            const map1 = results.map(function(results){
                const recipeTitle = results.title;
                const recipeImage = results.image;
                const recipeSourceLink = results.sourceUrl;
                const spoonacularURL = results.spoonacularSourceUrl;
                const readyTime = results.readyInMinutes;
                
            })

        })

