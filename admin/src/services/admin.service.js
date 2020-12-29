import authHeader from "../HTTPrequests/auth-header";
import Post from "../HTTPrequests/Post";
const API_URL = "http://localhost:1337/admin/";

class AccountService {
  async getAllUser() {
    const res = await fetch(API_URL + "alluser", { headers: authHeader() });
    return res;
  }

  // async auth() {
  //     return await fetch(API_URL + 'auth', { headers: authHeader() });
  // }
}

export default new AccountService();
