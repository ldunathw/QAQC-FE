import http from "./http";

export async function loginApi(username, password) {
  const res = await http.post("/auth/login", { username, password });

  const json = res.data;

  if (json.status !== "SUCCESS") {
    throw new Error("LOGIN_FAILED");
  }

  return json.data; // chứa accessToken, refreshToken
}
