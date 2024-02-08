
export default function Topicslist ( {topics,setChosenTopic}){

    if (topics){
     return topics.map((topic) => {
        const {slug, description} = topic
        return (
                <li key={`${slug} + ${description}`}>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setChosenTopic(slug)
                    }}>{slug}</button>
                </li>
        )
    })}
}