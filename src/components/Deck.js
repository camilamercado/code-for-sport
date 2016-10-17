import React from 'react'
import scrollView from '../utils/scrollView'

class Deck extends React.Component {
  static displayName = 'Deck'

  static propTypes = {
    routeParams: React.PropTypes.object,
    PageSet: React.PropTypes.func,
    item: React.PropTypes.object,
    index: React.PropTypes.number,
    inView: React.PropTypes.bool,
   
  }

  componentWillReceiveProps (nextProps) {
    console.log("receiving props")
    if (!this.props.inView && nextProps.inView ) {
      this.props.actions.setActivePost(this.props.item)
      console.log("receiving inview props!")
    }
  }

  componentDidMount(){
    //let curr = this.props.routeParams.currentpost
    //this.props.actions.setCurrentPost(curr)
    //console.log(this.props)
    let currentidVar = String(this.props.index + 1)
    this._match = false

    if(!this.props.routeParams){
      return
    }

    if(this.props.routeParams.currentpost === String(this.props.index + 1) ){
      //console.log("TRUE!")
      this._match = true
    }

  }

  imageLoaded = () => {
    
    if (this._match){
      let offsetTop = this.domNode.getBoundingClientRect()
      window.scrollTo(0, offsetTop.top)
      //this.props.PageSet()
    }

  }
 
  render () {
    //console.log(this.props)
    const {item, index} = this.props
    return (
        <div className="gCard" 
             id={index}  
             ref={(node)=> {this.domNode= node}}>
           <div className="flow">
               <img onLoad={this.imageLoaded} 
                    src={item.img} 
                    width="100%" 
                    min-height="800px"/> 
            </div>
          </div> 
      )
  }
}

export default scrollView(Deck)
