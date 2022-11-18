import { Button, Input, Card, CardBody} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faPlayCircle,
    faPauseCircle
} from "@fortawesome/free-solid-svg-icons";
import testSound from '../../src/mp3/bensound-rustleofleaves.mp3';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        changeRange();
    }

    return (
        <div className='audioPlayer'>
            <Card className='audio-card'>
                <CardBody>
                    <audio 
                        src={testSound} 
                        ref={audioPlayer} 
                        preload='metadata'
                    >
                    </audio>

                    <div className='controlButtons'>
                        <Button 
                            className='forwardBackward' 
                            onClick={backThirty}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> 
                                    <span style={{ fontSize: '20px' }}>30</span>
                        </Button>

                        <Button 
                            onClick={togglePlayPause}
                            className='playPause'
                        >
                            { isPlaying ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} /> }
                        </Button>

                        <Button className='forwardBackward' onClick={forwardThirty}>
                            <span style={{ fontSize: '20px' }}>30</span> 
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </div>

                    {/* current time */}
                    <div className='currentTime'>{calculateTime(currentTime)}</div>

                    {/* progress bar */}
                    <div className='progressBar'>
                        <Input 
                            type='range'
                            defaultValue='0'
                            ref={progressBar}
                            onChange={changeRange}
                        />
                    </div>

                    {/* duration */}
                    <div className='duration'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                </CardBody>
            </Card>
        </div>
    );
}

export default AudioPlayer;