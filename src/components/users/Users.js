import React, { useContext } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


import GithubContext from '../../context/github/githubContext';


 let Users=()=> {
   let githubContext= useContext(GithubContext);

   let {loading, users} = githubContext;


    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
              {users.map(users=>(
                  <UserItem 
                      key={users.id} 
                      users={users}>  
                  </UserItem>  
              ))} 
            </div>
        )
    }
        
    
};

// Users.prototype={
//     users:PropTypes.array.isRequired,
//     loading:PropTypes.bool.isRequired
// }
const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}


export default Users;