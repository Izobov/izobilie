import e from "cors"
import { AuthAPIStitch } from "../api/stitch"

let AUTH = "AUTH"
let LOGOUT = 'LOGOUT'






let InitialState = {
    logins: [{ name: 'triton', password: '1026567i' }],
    isAuth: false,
    error: false

}

const auth_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: true,
                error: false

            }


        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }

        default: return state
    }
}


export const Auth = () => ({ type: AUTH })
export const logoutActionCreator = () => ({ type: LOGOUT })
export const loginThuk = (email, password) => async (dispatch) => {
    let res = await AuthAPIStitch.Login(email, password)
    if (res.id.toString() === "5ebd53ff197003ddb11dc1a1") {
        dispatch(Auth())

    }
}
export const iniAuth = () => async (dispatch) => {
    let res = await AuthAPIStitch.iniAuth()
    if (res) { dispatch(Auth()) }

    else return




}

export const logout = () => async (dispatch) => {

    let res = await AuthAPIStitch.Logout()
    dispatch(logoutActionCreator())
}


export default auth_reducer;