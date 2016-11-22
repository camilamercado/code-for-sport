CODE-FOR-SPORT
------------------------------
React-Create-App / Redux / Dynamic Scroller

![alt tag](https://github.com/camilamercado/code-for-sport/blob/master/src/images/example/scroll.png)

Scrolling experiment using an autonomous react component to register, and pass scroll positions of chosen components as props.

```javascript 
const makeInviewComponent = (Component) => {
  return (
    React.createClass({
      displayName: 'scrollView',

      getInitialState() {
        return {
          inView: false,
        };
      },
```


Generates content based on which chosen element is "inView" of the window. This example is programmed to observe a "feed" of images, relatively positioned vertically down the window. Each image is slightly larger than the height of the viewport. The scrollView util monitors each image upon a scrollEvent, and provides it with a pop declaring wether or not it is in view. The parameters which declare what is "in view" are determinable by the developer. In this example it is determined by occupying more than 50% of the viewport. 

Depending on which image in the feed is inview, a redux action is called to generate a "post" based on the ID# of the inview image. 
This allows the changing of whichever image is inview to affect the data being represented accross multiple autonomous components.

```javascript

 monitor(){

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
      
  ```
for a working diagram reference http://iso-code.herokuapp.com/
![alt tag](https://github.com/camilamercado/code-for-sport/blob/master/src/images/example/diagram.png)
