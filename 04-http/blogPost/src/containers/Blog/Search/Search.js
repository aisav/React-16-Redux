import React, {Component} from 'react';

class Search extends Component {

    searchHandler = () => {
        let searchText = this.refs.searchText.value
        this.props.onSearch(searchText)
    }
    render() {
        // this.searchHandler = this.searchHandler.bind(this)
        return (
                <input type="search" ref="searchText" onChange={this.searchHandler}/>
        )
    }

};

export default Search;