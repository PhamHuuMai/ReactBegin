import React, { Component } from 'react';
import Post from '../components/Post';
import Comment from '../components/CommentContainer';
class Center extends Component {


    render() {
        var posts = [
            {
                id: 1,
                title: "hehehehehe",
                tag: ["heheheheh","heheheheh"],
                time: "yyyyMMddsssss",
                content: "ssssssssssssssssssssssssss",
            }, {
                id: 2,
                title: "hehehehehe",
                tag: ["heheheheh"],
                time: "yyyyMMddsssss",
                content: "ssssssssssssssssssssssssss",
            },
            {
                id: 3,
                title: "hehehehehe",
                tag: ["heheheheh"],
                time: "yyyyMMddsssss",
                content: "ssssssssssssssssssssssssss",
            }
        ];
        const listPost = posts.map((post) =>
            <Post key={post.id}
                id={post.id}
                title={post.title}
                tags={post.tag}
                content={post.content}
                time={post.time}></Post>
        );
        return (
            <div>
                <div className="col-sm-9">
                    <h4><small>RECENT POSTS</small></h4>
                    {listPost}
                </div>
            </div>
        );
    }
}

export default Center;