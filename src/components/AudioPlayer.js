import { Button, Input } from "reactstrap";

const AudioPlayer = () => {

    return (
        <div>
            <audio src='/'preload='metadata'></audio>

            <Button>back 30</Button>
            <Button>play / pause</Button>
            <Button>forward 30</Button>

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