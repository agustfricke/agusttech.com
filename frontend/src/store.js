import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, 
        userRegisterReducer, 
        userDetailsReducer, 
        userUpdateProfileReducer,
        userListReducer, 
        passwordRestReducer,
        passwordConfirmReducer,
        userActivationReducer,
        userPremumReducer,
        changeEmailReducer,
} from './reducers/userReducers'

import { cursoListReducer,
        lastCursoReducer,
        cursoDetailsReducer,
        cursoDeleteReducer,
        cursoCreateReducer,
        cursoUpdateReducer,
        createReviewReducer,
        createEpisodioReducer,
        episodioUpdateReducer,
        episodioDetailsReducer,
        createCommentReducer,
        episodioAllReducer,
        episodioDeleteReducer,
} from './reducers/cursoReducers';


const reducer = combineReducers({

    // User
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    passwordRest:passwordRestReducer,
    passwordConfirm:passwordConfirmReducer,
    userActivation:userActivationReducer,
    userPremium: userPremumReducer,
    changeEmail:changeEmailReducer,

    // Curso 
    cursoList: cursoListReducer,
    lastCurso: lastCursoReducer,
    detailsCurso: cursoDetailsReducer,
    cursoDelete: cursoDeleteReducer,
    cursoCreate: cursoCreateReducer,
    cursoUpdate: cursoUpdateReducer,
    createReview: createReviewReducer,
    createEpisodio: createEpisodioReducer,
    episodioUpdate: episodioUpdateReducer,
    episodioDetails: episodioDetailsReducer,
    createComment: createCommentReducer,
    episodioAll: episodioAllReducer,
    episodioDelete:episodioDeleteReducer,

})



const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

