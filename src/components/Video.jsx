import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";

const Video = () => {
  const { mediaUrl } = useParams();

  return (
    <div className="absolute">
    <Link to="/">
      <img src={backArrow} alt="Back Arrow" className="relative w-11 h-7 -top-11 left-0"/>
    </Link>
      <ReactPlayer url={decodeURIComponent(mediaUrl)} controls playing width="100vw" height="90vh" />
    </div>
  );
};

export default Video;