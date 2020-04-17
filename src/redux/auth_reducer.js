
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


            let filter = state.logins.filter(i => {
                return i.name === action.name && i.password === action.password
            })

            if (filter.length === 0) {

                return {
                    ...state,
                    error: "Неверный логин или пароль"

                }
            } else {

                return {
                    ...state,
                    isAuth: true,
                    error: false

                }
            }

        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }

        default: return state
    }
}


export const Auth = (name, password) => ({ type: AUTH, name, password })
export const logout = () => ({ type: LOGOUT })





export default auth_reducer;