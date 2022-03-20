const state = {
  // 控制侧边栏展开的状态
  sidebar: {
    opened: true,
  },
  // 控制ElementUI元素尺寸
  size: "medium",
  // 控制子系统状态
  system: "dashboard",
};
// 补充
const mutations = {
  // ...
  SET_SYSTEM: (state, system) => {
    state.system = system;
  },
};

const actions = {
  // ...
  setSystem({ commit }, system) {
    commit("SET_SYSTEM", system);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
