import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import patchArticleVotes from '../../utils/patchArticleVotesByArticleId';


export default function VotingContainer ({votes, setVotes, chosenArticleId}) {

    const [updateVotes, setUpdateVotes] = useState([])
    
    const handleUpVote =  (e) => {
        setUpdateVotes({
            inc_votes : 1
        })
        }
        
        const handleDownVote = (e) => {
            setUpdateVotes({
                inc_votes : -1
            })
        }
        
        
        useEffect(() => {
            setVotes(votes)
        },[votes])

        useEffect(() => {
             patchArticleVotes({votes, setVotes, chosenArticleId, updateVotes}) 
        },[updateVotes, setVotes, chosenArticleId])



    return (
        <>
        <div className='CurrentVotes'>
            <p> Votes: {votes + 1} </p>
        </div>
        <div className="votingContainer">
        <Button variant='success' onClick={handleUpVote}>Upvote This Article </Button>
        <Button variant='danger' onClick={handleDownVote}> Downvote This Article  </Button>
        </div>
        </>
    )
}


