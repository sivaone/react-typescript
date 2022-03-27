import React, {Component} from 'react';
import './App.css';
import Message from "./component/Message";

class App extends Component<any> {

    constructor(props: any) {
        super(props);
        console.log("In constructor")
    }

    componentDidMount() {
        console.log("In post constructor");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Message />
                </header>
            </div>
        );
    }
}

export default App;
