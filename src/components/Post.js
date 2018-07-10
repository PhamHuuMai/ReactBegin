import React, { Component } from 'react';
import CommentContainer from '../components/CommentContainer'
class Post extends Component {
    /**
     * Post : 
     *           id : String
     *        title : String,
     *          tag : [], 
     *         time : yyyyMMdd,
     *      content : String,
     */
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {num : 0};
    }

    commentData = [];

    showTags(tags) {
        if (tags == null) {
            return (
                <h5></h5>
            );
        }
        const listTag = tags.map((tag) =>
            <span class="label label-danger">tag</span>
        );
        return (
            <h5>{listTag}</h5>
        );
    }
    buildTarget(id) {
        return "#post-" + id;
    }
    onComment(idPost) {

        var data = {
            postid: "1",
            number: 5,
            comments: [
                {
                    avt: "sssssss",
                    username: "mai pppppp",
                    content: "dsfhkfdljfk;djdfp;d",
                    time: "sssssss",
                },

            ]
        }
        this.setState(data);

        console.log(this.state);
        // this.commentData = data;
    }

    render() {
        return (
            <div>
                <hr />
                <h2>{this.props.title}</h2>
                <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, {this.props.time}.</h5>
                {this.showTags(this.props.tags)}
                <br />
                <p> {this.props.content}</p>
                <br /><br />
                <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary" >Like</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.onComment(1)} data-toggle="collapse" data-target={this.buildTarget(this.props.id)} >Comment</button>
                    <button type="button" class="btn btn-outline-secondary">Share{this.state.number}</button>
                </div>
                <CommentContainer id={this.props.id} data = {this.state.comments}> </CommentContainer>
            </div>
        );
    }
}

export default Post;