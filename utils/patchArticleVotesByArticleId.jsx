import axios from 'axios'

export default async function patchArticleVotes ({setVotes, chosenArticleId, updateVotes}) {  
    if (updateVotes.length !== 0){
        const {article_id} = chosenArticleId
        if (updateVotes.inc_votes !== 0){
            const PatchArticleQuery = await axios.patch(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}`, updateVotes)
            const response = PatchArticleQuery.data 
            const newVotesTotal = response.article.votes 
                setVotes(newVotesTotal)
        }
    }
}