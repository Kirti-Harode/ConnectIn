import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchUsers, fetchUser} from '../../actions/user_actions';

class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            searchResult: []
        }
    }

    updateSearchInput(){
        this.setState({searchInput: e.currentTarget.value});
    }

    handleSearch(e){
        this.setState({searchInput: e.currentTarget.value});
        let searchLetter = e.currentTarget.value;
      
        if(searchLetter === ''){
            this.setState({searchResult: []});

        }
        else{
            let filtered = this.props.allUsers.filter(user => {
                user.fname.toLowerCase().includes(searchLetter.toLowerCase());
            });

            this.setState({searchResult: filtered});
        }
    }

    render(){
        return (
            <div>
              
            
                {/* <Link to={`/users/${user.id}`} className="connected-users-link">
                    <h2>{user.fname} {user.lname}</h2>
                    <p className="connected-user-bio">{user.bio}</p>
                </Link> */}
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