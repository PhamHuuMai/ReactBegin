import React, { Component } from 'react';
import Comment from '../components/Comment'
class CommentContainer extends Component {

    /**
     *     postid :
     *     number : 
     *     
     *     comments : [
     *        {
     *            
     *        }
     *     ]
     */

    constructor(props) {
        super(props);
        
        console.log(props);
        this.state = {}; 
        this.setState(this.props.data);
    }
    listComment(comments){
        if(comments==null)
            return(
                <div></div>
            ); 
        const listCmt = comments.map((comment) =>
            <Comment avt = {comment.avt}
                     username = {comment.username}
                     time = {comment.time}
                     content = {comment.content} ></Comment>
        );
        return (
            {listCmt}
        );
        return    
    }
    render() {
        alert("2");
        return (
            <div id = {"post-"+this.state}>
                <h4>Leave a Comment:</h4>
                <form role="form">
                    <div class="form-group">
                        <textarea class="form-control" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
                <br /><br />

                <p><span class="badge">{this.state.number}</span> Comments:</p>
                <br />
                <div class="row">
                   {this.listComment(this.state.comments)}
                </div>
            </div>
        );
    }
}

export default CommentContainer;