import React from 'react'
import RepoItem from './RepoItem';

let Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};




export default Repos;