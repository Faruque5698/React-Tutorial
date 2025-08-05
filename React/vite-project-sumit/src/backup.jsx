// import { createElement, StrictMode } from "react";
import { createRoot } from 'react-dom/client'

function TimeDate(props){
  const { name } = props;
  return <h1>Hello {name}: {new Date().toLocaleTimeString()}</h1>;
}

// react element creation
// const element =  createElement('h1', null, 'Hello, World!');
// const name = <h1>Ashaduzzaman</h1>
//rendering the element to the DOM

// setInterval(() => {

  // const dateTime = <h1>Hello Clock: {new Date().toLocaleTimeString()}</h1>;

  createRoot(document. getElementById('root')).render(<TimeDate name='Nahid' />)
// }, 1000);


