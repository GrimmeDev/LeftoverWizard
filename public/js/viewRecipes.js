// get all saved recipes from logged in user
$(document).ready(
    $.get("/api/recipes").then(recipes => {
        // recipes will be an array of objects
        // recipes[i].name and recipes[i].link are the info we need
        let list = ``;
        for (let i = 0; i < recipes.length; i++) {
            list += `<div class="grid-item"><p>Name: ${recipes[i].name} </p><p> Link: ${recipes[i].link}</p></div>`;
        }
        var userRecipes = `
                <div class="row grid-container">
                    ${list}
                </div>
            `;
        $(".card-deck").append(userRecipes);
    })
)