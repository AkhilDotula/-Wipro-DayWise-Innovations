import React,{Component} from "react";

class CountDownTimer extends Component{
    constructor(props){
        super(props);
        this.state = {count:10} // Initialize the count down value
    }

    //start the timer when component mounts
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState((prevState) => ({count:prevState.count-1}));
        },1000);
    }
   //stop the timer when component reaches 0
   componentDidUpdate(){
    if(this.timer.count ==0){
        clearInterval(this.timer);
    }
   }

   //clear the timer when component is removed

   componentWillUnmount(){
    clearInterval(this.timer);
   }
   render(){
    return (
        <div>
            <h1>Demo 1 of Count down Timer using class Component</h1>
        <h2>{this.state.count>0 ? this.state.count: "Time is up!"}</h2>
            </div>
    );
   }
}
export default CountDownTimer;