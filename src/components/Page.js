import React, {Component } from 'react';

class Page extends Component {
  componentDidMount(){
  }

  render() {
    
    return (
       <div className="content" >

          <div className="left-page">
              <div className="software-logo">
                <div className="circle" id="A"></div>
                <div className="circle" id="B"></div>
              </div>
              <h2 className="fixed">{this.props.ActivePost.title}</h2>
              <img width="300" height="auto"src={this.props.ActivePost.img}/>       
          </div>
          
          <div className="right-page">
            <div className="text">
              {this.props.ActivePost.subtext}
            </div>
          </div>

        </div>
    );
  }
}



export default Page;




