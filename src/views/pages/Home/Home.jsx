import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { operations } from '../../../state/artists';
import { Search } from '../../components/Search';

const debounce = require('lodash.debounce');

class Home extends Component {
    static propTypes = {};

    state = {
        value: '',
    };

    debouncedSearch = debounce(this.props.search, 400, { leading: true });

    handleChange = e => {
        this.setState({ value: e.target.value });
        this.debouncedSearch(e.target.value);
    };

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

const mapStateToProps = state => ({
    artists: state.artists,
});

const mapDispatchToProps = dispatch => ({
    search: query => dispatch(operations.search(query)),
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export { Home, ConnectedHome };
