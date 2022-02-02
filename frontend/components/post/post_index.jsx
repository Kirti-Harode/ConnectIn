import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { fetchPosts, deletePost } from "../../actions/post_actions";
import {fetchComments} from '../../actions/comment_actions';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchComments();
    }

    render(){
        return(
            <div>
                {this.props.posts.map(post => (
                    <PostIndexItem 
                        post={post} 
                        key={post.id} 
                        author={post.author} 
                        currentUser={this.props.currentUser} 
                        deletePost={this.props.deletePost}
                    />
                ))}

                {/* <h2>this is from postindex</h2> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    closeModal: () => dispatch(closeModal())
});
const PostIndexConatiner = connect(mapStateToProps, mapDispatchToProps)(PostIndex);
export default PostIndexConatiner;