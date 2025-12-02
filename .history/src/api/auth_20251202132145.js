export async function loginApi(username, password) {
  const res = await fetch("http://localhost:9000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("NETWORK_ERROR");
  }

  const json = await res.json();

  if (json.status !== "SUCCESS" || !json.data?.accessToken) {
    throw new Error("INVALID_LOGIN");
  }

  return json.data;
}
