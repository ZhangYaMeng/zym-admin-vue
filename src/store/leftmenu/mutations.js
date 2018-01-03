import * as types from './mutations_types'

export default {
    [types.SET_MENU_OPEN](state) {
        state.width = '200px'
        state.menu_flag = true
    },
    [types.SET_MENU_CLOSE](state) {
        state.width = '0px'
        state.menu_flag = false
    }
}