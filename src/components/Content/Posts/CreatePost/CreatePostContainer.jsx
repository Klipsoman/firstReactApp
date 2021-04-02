import PropTypes from 'prop-types'
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../../redux/PostsPageReducer'
import CreatePost from './CreatePost'
import { connect } from 'react-redux'


  let mapStateToProps = (state) => {
    return {
      posts: state.postsPage.posts,
      newTextPost: state.postsPage.newTextPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAreaChangeC: (text) => {
            dispatch(changeNewPostTextActionCreator(text))
        },
        sendNewPostC: () => {
            dispatch(addPostActionCreator())
        }
    }
}

let CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost)

  CreatePostContainer.propTypes = {
    store: PropTypes.object,
    posts: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func,
  }


export default CreatePostContainer