import { connect } from "react-redux";
import Post from "./Post";



let mapStateToProps = (state) => {
    return {
        state: state.postsPage.posts
    }
}

let mapDispatchToProps = () => {
    return {
     
        }
    }

let PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post)

export default PostContainer