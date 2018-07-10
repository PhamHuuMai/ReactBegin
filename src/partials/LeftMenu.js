import React, { Component } from 'react';
import SearchField from '../components/SearchField';
import Menu from '../components/Menu';

class LeftMenu extends Component {


    render() {
        return (
            <div>
                <div className="col-sm-3 sidenav">
                    <h4>Tao là Mai ! OK </h4>
                    <Menu></Menu>
                    <br/>
                    <SearchField></SearchField>
                </div>
            </div>
        );
    }
}

export default LeftMenu;