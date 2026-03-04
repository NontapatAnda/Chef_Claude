export async function getRecipeFromLlama(ingredientsArr) {
  try {
    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsArr,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API ERROR:", errorText);
      return "Server error";
    }

    const data = await response.json();

    return data.choices?.[0]?.message?.content || "No response";
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return "Error generating recipe.";
  }
}