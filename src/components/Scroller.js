import React, {Component } from 'react';
import './Scroller.css';
import Card from './Card'
import Page from './Page'
import Deck from './Deck'
let flipState = true

class Scroller extends Component {

   componentWillUpdate (nextProps) {
    if(!this.props.app.activePost.id){
      return
    }
    if (this.props.app.activePost.id !== nextProps.app.activePost.id) {
     this.props.history.pushState(null, "/"+nextProps.app.activePost.id+"/"+ nextProps.app.pageType)
    }
    if(this.props.app.pageType !== nextProps.app.pageType){
      this.props.history.pushState(null, "/"+ nextProps.app.activePost.id +"/"+ nextProps.app.pageType)
    }
  }

  pageFlip = () => {


    if (this.props.app.pageType === "A") {
      this.props.actions.setPageType("B")
    } else if (this.props.app.pageType === "B"){
      this.props.actions.setPageType("A")
    }

  }

  A_Style () {
    return {
      right : "0px"
    }
  }

  B_Style () {
    return {
      right : "99.9%"
    }
  }


  render() {

    console.log(this.props.app.activePost)

    let float_style ={ right : "0px" }
    if (this.props.app.pageType === 'A'){
      float_style = this.A_Style()
    }
    if (this.props.app.pageType === 'B'){
      float_style = this.B_Style()
    }

  
  	var deck = this.props.app.dataObj.map((item, index) => {
	    return <Deck item={item} 
                   app={this.props.app}
                   actions={this.props.actions}
                   index={index} 
                   key={index} 
                   routeParams={this.props.routeParams} 
                   PageSet={this.pageSet}/>
   })


    return (
       <div className="Projects" style={float_style} onClick = {() => this.pageFlip()}>
       <div className="Cover">
          <Card ActivePost={this.props.app.activePost}/>
        </div> 

        <div className="Page">
          <Page ActivePost={this.props.app.activePost}/>
        </div>

        <div className="Deck">
          {deck}
        </div>
      
      
      
      </div>
    );
  }
}


export default Scroller;
