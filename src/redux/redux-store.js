import { applyMiddleware, combineReducers, createStore } from "redux";
import { FriendsPageReducer } from "./FriendsPageReducer";
import { MessagesPageReducer } from "./MessagesPageReducer";
import { PostsPageReducer } from "./PostsPageReducer";
import { StatReducer } from "./StatReducer";
import { UsersPageReducer } from "./UsersPageReducer";
import { ProfilePageReducer } from "./ProfilePageReducer"
import { AuthReducer } from "./AuthReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    //есть свойство (ветка) friendsPage, за нее отвечает FriendsPageReducer и тд...
    //по сути это и есть state
    friendsPage: FriendsPageReducer,
    messagePage: MessagesPageReducer,
    postsPage: PostsPageReducer,
    usersPage: UsersPageReducer,
    statPage: StatReducer,
    ProfilePage: ProfilePageReducer,
    Auth: AuthReducer,
})
 let store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store