export async function searchPosts(query: string) {
  const res = await fetch("/api/search", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json();
}
