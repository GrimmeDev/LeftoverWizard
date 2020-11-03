// API documentation: https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients

//example api call for "what can i do with stuff in my fridge": https://api.spoonacular.com/recipes
///findByIngredients?ingredients=apples,+flour,+sugar&number=2

// var ingredients = 
var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        ingredients + "&number=2";
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
                const recipeID = results.id;
                const recipeTitle = results.title;
                const recipeImage = results.image;

                
            })

        })

