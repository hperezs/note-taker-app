import React, {Component} from 'react';

class SearchNotes extends Component{
    render(){
        return(
            <div className="input-group">
                <input type="text" className="search-bar form-control" placeholder="Search for..." onChange={e => this.props.searchNotes(e.target.value)}></input>
            </div>
        )
    }
}

export default SearchNotes;