import React from 'react';
import ReactDOM from 'react-dom/client';

//const title = React.createElement('h1', null, 'Hello')
const title = <h1 id="title">Hello</h1>
console.log(title)

const content = (
  <div>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    <p>Hello world</p>
  </div>
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>{title}</React.StrictMode>
);

