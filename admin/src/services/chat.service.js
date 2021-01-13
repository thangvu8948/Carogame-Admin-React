import authHeader from "../HTTPrequests/auth-header";
import Post from "../HTTPrequests/Post";
import {HOST} from "../constants/constants";
const API_URL = `${HOST}admin/`;

class ChatService {
  async getChats(btid) {
    const res = await fetch(API_URL + `/battles/${btid}/chat`, {
      headers: authHeader(),
    });
    return res;
  }
  // async auth() {
  //     return await fetch(API_URL + 'auth', { headers: authHeader() });
  // }
}

export default new ChatService();
