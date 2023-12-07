import authApi from "@/apis/auth.api";

const state = {
    user: null
}

const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
};
  
const actions = {
    // async Register({dispatch}, form) {
    //   await axios.post('register', form)
    //   const UserForm = new FormData()
    //   UserForm.append('username', form.username)
    //   UserForm.append('password', form.password)
    //   await dispatch('LogIn', UserForm)
    // },
  
    async LogIn({commit}, user: {username: string, password: string}) {
        await authApi.login(user)
        await commit("setUser", user.username);
    },
  
    async LogOut({ commit }) {
        const user = null;
        commit("logout", user);
    },
};
  
const mutations = {
    setUser(state, username) {
        state.user = username;
    },
    logout(state, user) {
        state.user = user;
    },
};
  
export default {
    state,
    getters,
    actions,
    mutations,
};