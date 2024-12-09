import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import "./SearchBox.css";
/**
 * Author: Bonaparte Albert
 * Date: 2024/12/08
 * component for Search Box
 */
class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = "";
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert('Sorry, We are out of service!');
    }
    render() {
        return (
            <div>
                <form action='' method='get' onSubmit={this.handleSubmit}>
                    <input type='text' className={this.props.className}
                        placeholder={this.props.placeholder}
                        onChange={e => this.onChange(e)}
                        value={this.state.value}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

SearchBox.propTypes = {

}

export default SearchBox