export default function Topicslist ( {topics}){
            const topicsArr = topics.topics
            if (topicsArr){
             return topicsArr.map((topic) => {
                const {slug, description} = topic
                return (
                        <li key={`${slug} + ${description}`}>
                            {slug}
                        </li>
                )
            })}
        }
