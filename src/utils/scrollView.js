import React from 'react';
import {findDOMNode} from 'react-dom';

const makeInviewComponent = (Component) => {
  return (
    React.createClass({
      displayName: 'scrollView',

      getInitialState() {
        return {
          inView: false,
        };
      },

      componentDidMount() {
        this._isMounted = true
        window.addEventListener('scroll', () => this.register())

        this.unregister = this.register()
      },

      componentWillUnmount() {
        this._isMounted = false;
        this.unregister()
      },

      viewHeight() {
		  if (typeof window !== 'undefined')
		    return window.innerHeight
		    return document.documentElement.clientHeight ||
		    document.getElementsByTagName('body')[0].clientHeight
		},

      register(){

        const element = findDOMNode(this)
        const win = this.viewHeight()
      	const {top, bottom} = element.getBoundingClientRect()
  		  let height = element.offsetHeight
        let position = (top + bottom)

        if (position >= (height / 2) && position <= (height * 2)){
        	this.update(true)
        } else {
          this.update(false)
        }

      },

      update(bool) {
        if (!this._isMounted) return;

        this.setState({
          inView: bool,
        });
      },

      render() {
        if (!Component) return null
        else return <Component {...this.props} {...this.state} />
      }
    })
  );
}

export default makeInviewComponent;
