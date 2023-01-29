import './App.css';
import React from "react";
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Counter delta={ 100 }/>
        {/* <Message/> */}
        <Greet name="Bruce" heroName="Batman">
          <p>This is children for the props</p>
        </Greet>
        <Greet name="Clark" heroName="Spiderman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>
      </div>
    );
  }
}


export default App;
