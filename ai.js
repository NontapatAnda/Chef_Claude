const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make.
Format your response in markdown.
`

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await fetch("/api/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: `
                ${SYSTEM_PROMPT}
                I have ${ingredientsString}.
                Please give me a recipe you'd recommend I make!
                `
            }),
        })

        const data = await response.json()

        // HuggingFace inference API usually returns an array
        if (Array.isArray(data)) {
            return data[0].generated_text
        }

        return data.generated_text || "No response"

    } catch (err) {
        console.error(err)
        return "Error generating recipe."
    }
}