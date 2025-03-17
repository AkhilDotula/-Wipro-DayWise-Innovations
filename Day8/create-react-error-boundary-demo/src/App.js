import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import FaultyComponent from "./FaultyComponent";

function App(){
  return(
    <div className="App">
      <h1>React Error Boundary Demo</h1>
     {/* This component is wrapped inside Error Boundary*/}
     <ErrorBoundary>
      <FaultyComponent/>
     </ErrorBoundary>


     {/*Normal Component that works fine*/}
     <ErrorBoundary>
      <div>
        <h2>This is safe Component</h2>
      </div>
     </ErrorBoundary>
    </div>
  );
}

export default App;