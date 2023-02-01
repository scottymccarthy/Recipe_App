import React from "react";

function RecipeView({deleteRecipe,  recipe}){
    return(
        <tr key={recipe}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img alt={recipe.name} name="photo" src={recipe.photo}/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
}

export default RecipeView;
