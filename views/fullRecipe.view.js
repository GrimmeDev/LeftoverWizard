// const e = require("express");

function viewFullRecipe(response) {
    const { title, image, sourceUrl, cookingMinutes, extendedIngredients, summary } = response;
    const steps = extendedIngredients[0].steps;
    const dispSteps = function () {
        for(let i = 0; i < steps.length;i++){
            return /*html*/`<p> ${steps[i].number}): ${steps[i].step} </p>`
        }
    }
    return /*html*/`
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
           
    `
}

module.exports = viewFullRecipe;