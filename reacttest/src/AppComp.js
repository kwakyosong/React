import { Component } from "react"
import './App.css';

class Dog{
    constructor(name) {
        this.name = name;
    }

    say() { 
        return this.name + ' : 멍멍';
    }
}

class AppComp extends Component {
    render() { 
        const dog = new Dog('흰둥이');
        const name = dog.say();
        return <div className='App-header'>{name}</div>
    }
}

export default AppComp;