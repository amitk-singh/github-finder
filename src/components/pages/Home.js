import React  from 'react';

import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => {
    return (
        <div >

            <div className="grid-2">
                <img className="Search_img p2" src="github_img.png" style={{ maxWidth: "55vh" }} alt="" />
                <Search />

            </div>



            <Users />

        </div>

    )
}


export default Home;