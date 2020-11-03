// var ingredients = 

var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        ingredients + "&number=5";
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