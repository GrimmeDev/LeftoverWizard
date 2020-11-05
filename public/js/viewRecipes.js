// get all saved recipes from logged in user
$(document).ready(
    $.get("/api/recipes").then(recipes => {
        // recipes will be an array of objects
        // recipes[i].name and recipes[i].link are the info we need
        let list = ``;
        for (let i = 0; i < recipes.length; i++) {
            list += `<li><p>Name: ${recipes[i].name} </p><p> Link: ${recipes[i].link}</p></li>`;
        }
        var userRecipes = `
                <ol>
                    ${list}
                </ol>
            `;
        $(".card-deck").append(userRecipes);
    })
)