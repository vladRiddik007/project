import React, {Component, Fragment} from 'react';



export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <Fragment>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </Fragment>
        )
    }
}