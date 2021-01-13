import authHeader from "../HTTPrequests/auth-header";
import Post from "../HTTPrequests/Post";
import {HOST} from "../constants/constants";
const API_URL = `${HOST}admin/`;

class BattleService {
  async getAllBattle() {
    const res = await fetch(API_URL + "allbattles", { headers: authHeader() });
    return res;
  }
  async getRecentBattles(uid) {
    const res = await fetch(API_URL + `/users/${uid}/recentfive`, {
      headers: authHeader(),
    });
    return res;
  }
  async getBattles(uid) {
    const res = await fetch(API_URL + `/users/${uid}/battles`, {
      headers: authHeader(),
    });
    return res;
  }
  // async auth() {
  //     return await fetch(API_URL + 'auth', { headers: authHeader() });
  // }
}

export default new BattleService();
