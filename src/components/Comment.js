import React, { Component } from 'react';

class Comment extends Component {
    /*
      avt :
      username :
      time :
      content :
    */
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div >
                <div class="col-sm-2 text-center">
                    <img src={this.props.avt} class="img-circle" height="65" width="65" alt="Avatar" />
                </div>
                <div class="col-sm-10">
                    <h4>{this.props.username} <small>{this.props.time}</small></h4>
                    <p>{this.props.content}</p>
                    <br />
                </div>
            </div>
        );
    }
}

export default Comment;