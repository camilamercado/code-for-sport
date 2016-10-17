import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import data from '../database/sporting-heroes.js'


let cardStyle = {opacity: 0.6}
let intervals = []
let currentImg = "page"
import './Example.css';


class Example extends React.Component {

 PropTypes = {
    actions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }


  componentDidMount(){
    this.props.actions.initialize(true)
    //this.props.actions.setGSheetData()
    this.loadInitialPosts()
  }

  loadInitialPosts () {
    this.props.actions.postData(data.dataObj)
  }


  mouseOver = () => {
    intervals.push(setInterval(this.inView, 400))
  }

  inView = () => {

    let cards = document.querySelectorAll(".card"), i
    let feed = document.querySelector(".feed")
    let frame = document.querySelector(".x")

    
      for (i = 0; i < cards.length; ++i){
        let top = cards[i].getBoundingClientRect().top 
        let feedTop = cards[0].getBoundingClientRect().top
        let frameTop = frame.getBoundingClientRect().top
        let frameBottom = frame.getBoundingClientRect().bottom 
      if (top > frameTop && top < (frameBottom - frameTop) ){
        cards[i].style.opacity=1
         this.props.actions.setCurrentPost(i + 1)
      } if (top < frameTop || top > (frameBottom - frameTop)){
        cards[i].style.opacity=0.6
      } else if (feedTop < 120 && feedTop > 115){
        intervals.forEach(clearInterval)
      }    
    }
  }

   render () {
   
    return (
      <div className="Example">
      <div className="Viewport">
        
        <div className="title">CURRENT POST = {this.props.app.currentPost}</div>
          <div className="isometric">

           <div className="yGuide">
              <div className="downArrow"></div>
            </div>

            <div className="xGuide">
              <div className="leftArrow"></div>
            </div>
            
            <div className="feed" onMouseOver={this.mouseOver}
           >LOW LEVEL 
            
              <div className="card" id="a" style={cardStyle}></div>
              <div className="card" id="b" style={cardStyle}></div>
              <div className="card" id="c" style={cardStyle}></div>
              <div className="card" id="d" style={cardStyle}></div>

            </div>

            <div className="x">TOP LEVEL
              <div className="cover">
                <span>{this.props.app.currentPost}</span>
              </div>
              <div className="page" id={"X"+this.props.app.currentPost}></div>
            </div>
         
          </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    'app' : state.app
  }
}

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(appActions, dispatch)}

}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
