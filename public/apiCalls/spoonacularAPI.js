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
            console.log(response);
            const map1 = response.map(function(response){
                const recipeID = response.id;
                const recipeTitle = response.title;
                const recipeImage = response.image;

                
            })

        })

