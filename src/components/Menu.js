import React, { Component } from 'react';

class Menu extends Component {


    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#section1">Home</a></li>
                    <li><a href="#section2">Friends</a></li>
                    <li><a href="#section3">Family</a></li>
                    <li><a href="#section3">Photos</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;