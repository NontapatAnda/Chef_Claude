import { useState } from "react"

export default function Main() {
    const [ingredient,addIngredient] = useState([])


    const ingredientLists = ingredient.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>


    ))

    function handleSubmit(event){

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newingredient = formData.get("ingredient")
        addIngredient(prevIngredient => [...prevIngredient,newingredient])

    }



    return (
        <main>
            <form onSubmit={handleSubmit}className="add-ingredient-form">
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