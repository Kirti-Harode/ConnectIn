import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { FaSearch } from "react-icons/fa";

class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            searchResult: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSearch(e){
        this.setState({searchInput: e.currentTarget.value});
        let searchLetter = e.currentTarget.value;
        
        if(searchLetter === ''){
            this.setState({searchResult: []});
        }
        else{
            let filtered = []
            this.props.allUsers.map(user => {
                if (user.fname.toLowerCase().includes(searchLetter.toLowerCase())){
                    filtered.push(user)
                }
            });
            this.setState({searchResult: filtered});
        }
    }

    handleClick(){
        this.setState({ 
            searchInput: '',
            searchResult: []
        })
       
    }
    render(){
       
        let result;
        if (this.state.searchResult.length !== 0){
            result = this.state.searchResult.slice(0,4).map((user, idx) => (
                <div key={idx} className="search-result-user">
                    <img className="search-user-pic" src={user.profilePhotoUrl || window.defaultProfile}/>   
                    <Link to={`/users/${user.id}`} className="search-user-link" onClick={this.handleClick}>
                        <h2 className="search-user-name">{user.fname} {user.lname}</h2>
                        <p className="search-user-bio">{user.bio}</p>
                    </Link>
                </div>
            ));
        }
        else if (this.state.searchInput !== '' || this.state.searchResult.length === 0){
            result = (
                <div className="search-no-result">
                    <p> No results found </p>
                </div>
            )
        }
        return (
            <div>
                <div className='search-container'>
                    <div className='search-input-div'>
                        <input className='search-input' type="text" value={this.state.searchInput} placeholder='Search' onChange={this.handleSearch}></input>
                    </div>
                    <FaSearch className='search-icon'/>
                </div>
                <div className={this.state.searchInput === '' ? "hide-search-result" : "reveal-search-result"}>
                    {result}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    allUsers: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);