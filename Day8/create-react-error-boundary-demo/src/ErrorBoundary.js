import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(error){
     //updating state to render fallback to UI
          return{hasError : true};
    }
    
    static componentDidCatch(error, info){
        console.error("Error caught in Error Boundary: ", error, info);
    }
    render(){
        if(this.state.hasError){
            return <h2>Something went wrong!! Please try again later</h2>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;