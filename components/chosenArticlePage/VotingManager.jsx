import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import patchArticleVotes from '../../utils/patchArticleVotesByArticleId';


export default function VotingContainer ({votes, setVotes, article_id}) {

    const [updateVotes, setUpdateVotes] = useState()
    
    const handleVote = (e) => {
        const voteAmedment= e.target.innerText
        if (voteAmedment === "Upvote This Article")
        setUpdateVotes({
            inc_votes : 1
        })
        else {
            setUpdateVotes({
                inc_votes : -1
            })

        }
        }
        
        useEffect(() => {
            setVotes(votes)
        },[])

        useEffect(() => {
             patchArticleVotes({votes, setVotes, article_id, updateVotes}) 
        },[updateVotes])



    return (
        <>
        <div className='CurrentVotes'>
            <p> Votes: {votes + 1} </p>
        </div>
        <div className="votingContainer">
        <Button variant='success' onClick={handleVote}>Upvote This Article </Button>
        <Button variant='danger' onClick={handleVote}> Downvote This Article  </Button>
        </div>
        </>
    )
}


