import axios from 'axios'

import Swal from 'sweetalert2'

export default async function deleteCommentFromArticle (comment_id){

    if (comment_id){
    try {
        const deleteCommentQuery = await axios.delete(`https://be-nc-news-famm.onrender.com/api/comments/${comment_id}`)
        Swal.fire({
            title: 'success!',
            text: 'comment deleted :)',
            icon: 'success',
          })
    } catch {
        Swal.fire({
            title: 'error!',
            text: 'comment not deleted :(',
            icon: 'error',
          })
    }
}

}