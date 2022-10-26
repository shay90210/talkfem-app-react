import { Button, Input, Card, CardBody} from "reactstrap";
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
        <div className='audio-player'>
            <Card className='audio-card'>
                <CardBody>
                    <audio src='/'preload='metadata'></audio>

                    <div className='control-buttons'>
                        <Button className='forward-backward'>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> <span style={{ fontSize: '20px' }}>30</span>
                        </Button>

                        <Button 
                            onClick={togglePlayPause}
                            className='play-pause'
                        >
                            { isPlaying ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} /> }
                        </Button>

                        <Button className='forward-backward'>
                            <span style={{ fontSize: '20px' }}>30</span> <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </div>

                    {/* current time */}
                    <div className='current-time'>0:00</div>

                    {/* progress bar */}
                    <div className='progress-bar'>
                        <Input 
                            type='range'
                        />
                    </div>

                    {/* duration */}
                    <div className='duration'>2:49</div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AudioPlayer;