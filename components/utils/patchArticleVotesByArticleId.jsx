import axios from 'axios'

export default async function patchArticleVotesByArticleId ({setVotes, article_id, updateVotes}) {  
    try {
        if (updateVotes){
                const PatchArticleQuery = await axios.patch(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}`, updateVotes)
                const response = await PatchArticleQuery.data 
                const newVotesTotal = response.article.votes 
                setVotes(newVotesTotal)
        }

    }
    catch (err){
        
           console.log(err) 
    }
}