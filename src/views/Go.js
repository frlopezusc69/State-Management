import React, {Component} from 'react'

export default class Go extends Component {
    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
    }
    
    render() {
        return (
            <div>
                Here's some code about your class!
            </div>
        )
    }
}
