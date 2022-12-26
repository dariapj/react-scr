import React from 'react';
import ReactDOM from 'react-dom/client';


//const title = React.createElement('h1', null, 'Hello')
//const title = <h1 id="title">Hello</h1>
//console.log(title)

/*const content = (
  <div>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    <p>Hello world</p>
  </div>
)*/


/*const Title = () => {
  return <h1>Hello React</h1>
}*/


/*type ContentProps = {
  p1: string
  p2: string
}


/*const Title2 = () => {
  return <h1>Hello App</h1>
}*/
/*const Content = (props: ContentProps) => {
  return (
    <React.Fragment>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </React.Fragment>
  )
}
const App = () => {return (<>
<Title title="React" />
<Title title="TS" />
<Title title={10} />
<Content p1="hello world bla bla" p2="Hello 2022 world 222"/>
</>)}*/


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode></React.StrictMode>
);

