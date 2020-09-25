import { getUser, getAddressList } from "../api";
import { GET_USERINFO, SAVE_ADDRESS } from "./mutation-types";

export default {
  async getUserInfo({ commit }) {
    let res = await getUser();
    commit(GET_USERINFO, res);
  },
  async saveAddress({ commit, state }) {
    if (state.removeAddress.length > 0) return;

    let addres = await getAddressList(state.userInfo.user_id);
    commit(SAVE_ADDRESS, addres);
  },
};
