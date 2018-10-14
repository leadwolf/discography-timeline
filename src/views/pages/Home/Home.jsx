import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div>
                <Search value={value} handleChange={this.handleChange} />
            </div>
        );
    }
}

export { Home };
