
import { Link } from "react-router-dom";


const Videos = ({videos}) => {
    // console.log(videos.data.posts);
    if (videos === null) {
        return <div>Loading...</div>;
      }
    
      const data = videos.data.posts;
  return (
    <div className="flex gap-3 flex-wrap justify-center p-3">
        

    {
        
        
        data.map((item)=>(
        <div key={item.postId} className="bg-gray-100 w-56 h-72 flex-col rounded-lg">
        <Link to={`/video/${encodeURIComponent(item.submission.mediaUrl)}`}>
            <img src={item.submission.thumbnail} alt="Video Thumbnail" className="w-full h-3/4 rounded-t-lg" />
        </Link>

        <header>
            <div className="mt-2 text-sm font-medium pl-2 text-black">
                {item.submission.title}
            </div>
            <div className="flex items-center ml-2 mt-1">
            <img src={item.creator.pic} alt="Creator Profile Picture" className="w-6 h-6 rounded-full"/>
            <p className="mt-2 text-sm text-black pl-2">{item.creator.name}</p>
            </div>
        </header>
      </div>
        ))
    }



    </div>
  )
}

export default Videos
