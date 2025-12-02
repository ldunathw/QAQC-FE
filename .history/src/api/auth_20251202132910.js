export async function loginApi(username, password) {
  const res = await fetch("http://localhost:9000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const json = await res.json();

  if (json.status !== "SUCCESS") {
    throw new Error("LOGIN_FAILED");
  }

  return {
    accessToken: json.data.accessToken,
    refreshToken: json.data.refreshToken,
    expiresIn: json.data.expiresIn
  };
}
