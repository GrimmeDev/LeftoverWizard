// get all saved recipes from logged in user
$(document).ready(
    $.get("/api/recipes").then(recipes => {
        // recipes will be an array of objects
        // recipes[i].name and recipes[i].link are the info we need
        let list = ``;
        for (let i = 0; i < recipes.length; i++) {
            list += `<li>Name: ${recipes[i].name} - Link: ${recipes[i].link}</li>`;
        }
        var userRecipes = `
                <ol>
                    ${list}
                </ol>
            `;
        $(".card-deck").append(userRecipes);
    })
)