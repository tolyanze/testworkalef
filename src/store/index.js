import { createStore } from 'vuex'

export default createStore({
    state: {
        names: '',
        ages: '',
        childs: []
    },
    getters: {
        getName: state => state.names,
        getAge: state => state.ages,
        childs: state => state.childs,
    },
    actions: {
        addName({ commit }, name) {
            commit('ADD_NAME', name)
        },
        addAge({ commit }, name) {
            commit('ADD_AGE', name)
        },
        addChilds({ commit }, name) {
            commit('ADD_CHILDS', name)
        }
    },
    mutations: {
        ADD_NAME(state, name) {
            state.names = name
        },
        ADD_AGE(state, name) {
            state.ages = name
        },
        ADD_CHILDS(state, name) {
            state.childs = name
        }
    },

    modules: {}
})