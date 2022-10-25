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
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> 30
                        </Button>

                        <Button onClick={togglePlayPause}>
                            { isPlaying ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} /> }
                        </Button>

                        <Button className='forward-backward'>
                            30 <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </div>

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
                </CardBody>
            </Card>
        </div>
    )
}

export default AudioPlayer;