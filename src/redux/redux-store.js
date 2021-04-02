import { combineReducers, createStore } from "redux";
import { FriendsPageReducer } from "./FriendsPageReducer";
import { MessagesPageReducer } from "./MessagesPageReducer";
import { PostsPageReducer } from "./PostsPageReducer";
import { UsersPageReducer } from "./UsersPageReducer";

let reducers = combineReducers({
    //есть свойство (ветка) friendsPage, за нее отвечает FriendsPageReducer и тд...
    //по сути это и есть state
    friendsPage: FriendsPageReducer,
    messagePage: MessagesPageReducer,
    postsPage: PostsPageReducer,
    usersPage: UsersPageReducer,
})
let store = createStore(reducers)

export default store