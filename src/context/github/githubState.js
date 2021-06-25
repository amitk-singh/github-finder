import React,{useReducer} from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS  
} from '../types';

const GithubState = props =>{
    const initialState ={
        users:[],
        user:{},
        repos:[],
        loading:false
    }
 const [state, dispatch] = useReducer(GithubReducer, initialState);
 
// Search Users

let  searchUsers= async text=>{
    setLoading();
    const user = await Axios.get(`https://api.github.com/search/users?q=${text}`);
  
    // setUsers(user.data.items);
    // setLoading(false);
    dispatch({
        type:SEARCH_USERS,
        payload:user.data.items
    });
  };

// Get User
let getUser = async (username) =>{
    setLoading();

      const user = await Axios.get(`https://api.github.com/users/${username}`);
    
      dispatch({
          type: GET_USER,
          payload: user.data
      });
     
    };

// Get Repos
let getUserRepos = async (username) =>{
    setLoading();

      const user = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&`);
      //this.setState({ repos: user.data, loading:false })

    //   setRepos(user.data);
    //   setLoading(false);
    dispatch({
        type: GET_REPOS,
        payload: user.data
    });
  };

// Clear Users
let clearUsers=()=> dispatch({ type:CLEAR_USERS});

// Set Loading
const setLoading =()=> dispatch({type:SET_LOADING})

return <GithubContext.Provider
    value ={{
        users: state.users,
        user: state.user,
        repos:state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}
 >
     {props.children}   
</GithubContext.Provider>
};

export default GithubState;