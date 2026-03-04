import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../../ai" 

export default function Main() {
    const [ingredient,setIngredient] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe,setRecipe] = useState("")



    function addIngredient(formData){
        const newingredient = formData.get("ingredient")
        setIngredient(prevIngredient => [...prevIngredient,newingredient])

    }

    async function getRecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredient)
        setRecipe(generatedRecipe)
           
        }
    

    
    return (
        <main>
            <form action={addIngredient}className="add-ingredient-form">
                <input type="text"
                    placeholder="e.g. Eggs"
                    aria-label="Add Ingredient"
                    name="ingredient"
                 />
                 <button>Add Ingredient</button>
            </form>
            {ingredient.length > 0 && <IngredientsList ingredient={ingredient} getRecipe={getRecipe}/>}
      
            
            {recipe && <ClaudeRecipe recipe={recipe}/>}
       
        </main>
    )
}