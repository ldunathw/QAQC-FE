export async function loginApi(username, password) {
  const res = await fetch("http://localhost:9000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (data.status !== "SUCCESS" || !data.data?.accessToken) {
    throw new Error("INVALID_LOGIN");
  }

  return data.data;
}
