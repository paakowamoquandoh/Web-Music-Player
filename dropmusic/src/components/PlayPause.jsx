import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";



const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => 
(isPlaying && activeSong?.title === song.title ? 
  (<FaPauseCircle size={50} className="text-gray-300" onClick={handlePause}/>) 
: (<FaPlayCircle size={50} className="text-gray-300" onClick={handlePlay}/>));

export default PlayPause;
