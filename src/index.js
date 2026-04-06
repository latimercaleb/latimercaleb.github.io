// // Entry point, should contain containers
import React from "react";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Grid from '@material-ui/core/Grid';
// import Sidebar from "../components/sidebar/sidebar";
// import MainWindow from "../components/main-window/main-window";

// export default () => (
//   <p>Blank page</p>
//   // <Grid container
//   //       spacing={8}
//   //       direction="row">
//   //   <Sidebar title="Home" />
//   //   <MainWindow>
//   //     <Card raised>
//   //       <CardContent>
//   //         <p>I graduated from Wayne State University with my Bachelor's of Science and Engineering in Computer Science. I'm interested in Web, and mobile development with a fascination for UI, UX and XR development and currently a Software Engineer with RevSpring.</p>
//   //         <p>Have a closer look at some of the things I've worked on by clicking the links on the left or scrolling through the page.</p>
//   //       </CardContent>
//   //     </Card>
//   //   </MainWindow>
//   // </Grid>
// )

// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
