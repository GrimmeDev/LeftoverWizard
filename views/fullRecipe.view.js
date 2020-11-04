function viewFullRecipe(response){
    const {id, title, image, sourceUrl, spoonacularSourceUrl, readyInMinutes, instrctions} = response;

    return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Full Recipe</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <h2> LEFTOVER WIZARD </h2>
            </div>

            <div class="row">
                <h2> ${response.title} </h2>
            </div>

            <div class="card-deck row">
                <div class="card">
                    <img src=${response.image} class="card-img-top" alt="dish_image">
                    <div class="card-body">
                        <h5 class="card-title">${response.title}</h5>
                        <p class="card-text">Cook Time:${response.readyInMinutes} </p>
                        <p class="card-text">Instructions:${response.instructions} </p>
                        <p class="card-text"> 
                            <a href=${response.spoonacularSourceUrl} class="btn btn-primary">Go to source</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </body>
    <script src=""></script>    
    </html>
    `
}

module.exports = viewFullRecipe;