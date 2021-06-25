import React from 'react'
import {Link} from 'react-router-dom';

 const UserItem=(props)=>{
    
        const {login,avatar_url} = props.users;

        return (
            <div className="card text-center">
               <img 
                src={avatar_url} 
                alt="" className="round-img" 
                style={{width:'60px'}} 
                />
                <h3>{login}</h3>
                <div>
                    {/* <a href= {html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a> */}
                    <Link to= {`/user/${login}`} className="btn btn-dark btn-sm my-1">
                        More
                    </Link>

                </div>

            </div>
        )
    
        }


export default UserItem;