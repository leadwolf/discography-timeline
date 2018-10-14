import './home.scss';

import React, { Component } from 'react';

import { Search } from '../../components/Search';

class Home extends Component {
    static propTypes = {};

    state = {
        value: '',
    };

    handleChange = e => this.setState({ value: e.target.value });

    render() {
        const { value } = this.state;

        return (
            <div className="page-home-container">
                <div>
                    <Search value={value} handleChange={this.handleChange} />
                </div>
                <div className="page-home-content-container">todo</div>
            </div>
        );
    }
}

export { Home };
