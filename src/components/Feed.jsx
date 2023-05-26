import { useState, useEffect } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { Dna } from  'react-loader-spinner'
import Navbar from "./Navbar";


const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        const fetchedVideos = await fetchFromAPI(currentPage - 1);
        // console.log(fetchedVideos.data.posts[0]);
        setVideos(fetchedVideos);
        setIsFetched(true);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    fetchVideosData();
}, [currentPage]);
console.log(videos);

  return (
    <div className="flex justify-center items-center flex-col">
        {isFetched ? <Videos videos={videos} /> : 
        <div className="mt-28">

        <Dna
            
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
        </div>
            }
        {isFetched && (
            <div className="flex justify-center items-center pl-9 pr-9 overflow-hidden">
            <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
            />
            </div>
        )}

    </div>
  );
};

export default Feed;
