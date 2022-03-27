import React, {Component} from 'react';
import './App.css';
import Message from "./component/Message";

const initialState = {
    name: 'Siva',
    message: 'How are you?'
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {

    readonly state: State = initialState;

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
                    <Message name={this.state.name} message={this.state.message}/>
                </header>
            </div>
        );
    }
}

export default App;
