import { Button, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faPlayCircle,
    faPauseCircle
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div cLassName='audio-player'>
            <audio src='/'preload='metadata'></audio>

            <Button><FontAwesomeIcon icon={faArrowAltCircleLeft} /> 30</Button>

            <Button onClick={togglePlayPause}>
                { isPlaying ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} /> }
            </Button>

            <Button>30 <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>

            {/* current time */}
            <div>0:00</div>

            {/* progress bar */}
            <div>
                <Input 
                    type='range'
                />
            </div>

            {/* duration */}
            <div>2:49</div>
        </div>
    )
}

export default AudioPlayer;