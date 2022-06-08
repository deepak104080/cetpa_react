import React from 'react';
import './css/timerball.css';

class TimerBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0, x:0, y:0
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.triggerKeyFn, false);
    }

    componentDidUpdate() {
        console.log('state - ', this.state);
        if(this.state.x === 250 && this.state.y === 250) {
            console.log('game done...');
            clearInterval(this.timerVal);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.triggerKeyFn, false);
        clearInterval(this.timerVal);
    }

    startFn = () => {
        console.log('started....');
        this.timerVal = setInterval(()=> {
            console.log('1 more second....');
            this.setState({
                timer: this.state.timer + 1,
                x:this.state.x,
                y:this.state.y
            })
        }, 1000)
    }

    triggerKeyFn = (event) => {
        console.log(event.key);
        if(this.state.timer > 0) {
            if(event.key === 'ArrowUp') {
                this.setState({
                    ...this.state,
                    y: this.state.y - 10
                })
            }
            if(event.key === 'ArrowDown') {
                this.setState({
                    ...this.state,
                    y: this.state.y + 10
                })
            }
            if(event.key === 'ArrowLeft') {
                this.setState({
                    ...this.state,
                    x: this.state.x - 10
                })
            }
            if(event.key === 'ArrowRight') {
                this.setState({
                    ...this.state,
                    x: this.state.x + 10
                })
            }
        }
    }

    render() {
        return(
            <>
                <span className='ballOne' style={{'top': this.state.y, 'left': this.state.x}}></span>
                <span className='ballFinal'></span>
                <h2 className='timer-div'>{this.state.timer}</h2>
                <button className='start-button btn btn-primary' onClick={this.startFn}>Start</button>
            </>
        )
    }
}


export default TimerBall;






// handling keys
// timer
// movement of ball
// lifecycle concepts