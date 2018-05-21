const INITIAL_STATE = {
    authUser: null,
    authLoading: true
};

const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser
});

const applySetAuthLoading = (state, action) => ({
    ...state,
    authLoading: action.authLoading
});

function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_AUTH_USER' : {
            return applySetAuthUser(state, action);
        }
        case 'SET_AUTH_LOADING' : {
            return applySetAuthLoading(state, action);
        }
        default : return state;
    }
}

export default userReducer;
