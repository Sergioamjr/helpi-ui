export const fetchAIResponse = async (params) => {
  return await fetch(`/api/ai-therapy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};
