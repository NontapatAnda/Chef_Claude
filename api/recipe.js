export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `<s>[INST] ${prompt} [/INST]`,
          parameters: {
            max_new_tokens: 400,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();
    console.log("ENV KEY:", process.env.HF_API_KEY)

    if (!response.ok) {
      console.log("HF ERROR:", data);
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}