import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { operations } from '../../../state/artists';
import { Search } from '../../components/Search';

class Home extends Component {
    static propTypes = {};

    state = {
        value: '',
    };

    handleChange = e => {
        const { search } = this.props;

        this.setState({ value: e.target.value });
        search(e.target.value);
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
    debouncedSearch: query => dispatch(operations.debouncedSearch(query)),
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export { Home, ConnectedHome };
