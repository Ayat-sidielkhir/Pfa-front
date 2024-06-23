import { 
    CREATE_ALL_POST_FAILURE, 
    CREATE_ALL_POST_REQUEST, 
    CREATE_ALL_POST_SUCCESS, 
    CREATE_COMMENT_SUCCESS, 
    GET_ALL_POST_FAILURE, 
    GET_ALL_POST_REQUEST, 
    GET_ALL_POST_SUCCESS, 
    LIKE_ALL_POST_FAILURE, 
    LIKE_ALL_POST_REQUEST,
    LIKE_ALL_POST_SUCCESS // Ajout du type de succès pour le like
} from "./postActionType"

const initialState = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like: null,
    comments:[],
    newComment:null

};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ALL_POST_REQUEST:
        case GET_ALL_POST_REQUEST:
        case LIKE_ALL_POST_REQUEST:
            return {
                ...state,
                error: null,
                loading: true // Correction de loading à true
            };

        case CREATE_ALL_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                posts:[action.payload, ...state.post],
                loading: false,
                error: null
            };

        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                comments:action.payload.comments,
                loading: false,
                error: null
            };
        
        case CREATE_COMMENT_SUCCESS:
            return{
                ...state,
                newComment:action.payload,
                loading:false,
                error:null
            }

        case LIKE_ALL_POST_SUCCESS:
            return {
                ...state,
                like: action.payload,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? action.payload : post // Mise à jour du post liké
                ),
                loading: false,
                error: null
            };

        case CREATE_ALL_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case LIKE_ALL_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default postReducer;