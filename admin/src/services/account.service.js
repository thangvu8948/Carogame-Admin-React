import authHeader from "../HTTPrequests/auth-header";
import Post from "../HTTPrequests/Post";
const API_URL = "http://localhost:1337/";

class AccountService {
  async login(username, password) {
    const res = await Post(
      API_URL + "login",
      {
        Username: username,
        Password: password,
      },
      { "Content-Type": "application/json" }
    );
    console.log(res);
    localStorage.setItem("token", res.token?.toString());
    localStorage.setItem("verify", res.IsVeryfied?.toString());
    return res;
  }

  logout() {
    localStorage.removeItem("token");
  }

  async register(data) {
    return await Post(API_URL + "register", data, {
      "Content-Type": "application/json",
    });
  }

  getCurrentUser() {
    try {
      const tokens = localStorage.getItem("token").split(".");
      const data = JSON.parse(atob(tokens[1]));
      return data;
    } catch (e) {
      return "";
    }
  }

  async auth(token) {
    return await fetch(API_URL + "user/auth", { headers: authHeader(token) });
  }
}

export default new AccountService();
