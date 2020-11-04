const e = require("express");

function viewFullRecipe(response) {
    const { title, image, sourceUrl, cookingMinutes, extendedIngredients, summary } = response;
    const steps = extendedIngredients[0].steps;
    const dispSteps = function () {
        for(let i = 0; i < steps.length;i++){
            return /*html*/`<p> ${steps[i].number}): ${steps[i].step} </p>`
        }
    }
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
                <div class="jumbotron-fluid">
                    <h2> ${title} </h2>
                    <img src=${image} class="card-img-top" alt="dish_image">
                    <p class="card-text">Cook Time:${cookingMinutes} </p>
                    <p class="card-text">Instructions:</p>
                    ${dispSteps}
                    <p class="card-text"> 
                        <a href=${sourceUrl} class="btn btn-primary">Go to source</a>
                    </p>
                </div>       
            </div>
        </div>
    </body>
    <script src=""></script>    
    </html>
    `
}

module.exports = viewFullRecipe;