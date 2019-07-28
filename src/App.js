import React from 'react';
import User from "./containers/user";
import Song from "./containers/song";
class App extends React.Component{
  render(){
    return(
     <div> <User/> 
      <Song/> </div>
    );
  }
}
export default App;
