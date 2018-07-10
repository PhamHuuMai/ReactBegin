import React, { Component } from 'react';

class SearchField extends Component {


    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" class="form-control" placeholder="Search Blog.." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchField;