import React,{ Component } from 'react';
import RouterWrap from './router';
// import { Scrollbars } from 'react-custom-scrollbars'

// import '.App.css';

class App extends Component{
    render(){
        return(
            <div className="App">
              
                <RouterWrap/>
                  
            </div>
        )
    }
}
export default App