import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import NavbarLayout from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home";
import ArticleItemPage from "./pages/ArticleItemPage";
import Articles from "./pages/Articles";
import Contact from "./pages/contact";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
});
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App" id="app">
            <NavbarLayout />
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={ArticleItemPage} />
            <Route path="/articles" component={Articles} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
