import { useState } from "react"

export default function Main() {
    const [ingredient,setIngredient] = useState([])


    const ingredientLists = ingredient.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>


    ))

    function addIngredient(formData){
        const newingredient = formData.get("ingredient")
        setIngredient(prevIngredient => [...prevIngredient,newingredient])

    }

    
    return (
        <main>
            <form action={addIngredient}className="add-ingredient-form">
                <input type="text"
                    placeholder="e.g. Omelette"
                    aria-label="Add Ingredient"
                    name="ingredient"
                 />
                 <button>Add Ingredients</button>
            </form>
            <ul>
                {ingredientLists}
            </ul>
       
        </main>
    )
}