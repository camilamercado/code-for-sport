import React, {Component } from 'react';
import SideBar from './SideBar'

class Card extends Component {
  componentDidMount(){
  }

  render() {
    
    return (
       <div>
       
       <SideBar/> 

        <div className="Card">
          <h1 className="fixed">{this.props.ActivePost.id}</h1>
          <h2 className="fixed">{this.props.ActivePost.title}</h2>
        </div>
      </div>
    );
  }
}



export default Card;




