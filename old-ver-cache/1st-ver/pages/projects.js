import React from "react"
import Sidebar from "../components/sidebar/sidebar"
import MainWindow from "../components/main-window/main-window";
import Grid from '@material-ui/core/Grid';
export default () => (
  <Grid container
        spacing={8}
        direction="row">
    <Sidebar title="Projects" />
    <MainWindow>
      <p>Projects</p>
    </MainWindow>
  </Grid>
)
