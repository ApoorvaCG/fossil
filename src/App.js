import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import { Route, Switch } from "react-router-dom";
import SocialMediaLinks from "./components/common/SocialMedia";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Process from "./pages/Process";
import { Box } from "@material-ui/core";

const App = () => {
  return (
    <>
      <SocialMediaLinks />
      <Navbar />
      <div
        className="content"
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Home name="home" />
        <Box mb={5} />
        <Services name="services" />
        <Box mb={5} />

        <Process name="how-it-works" />

        <About name="about" />
        <Box mb={5} />

        <ContactUs name="contact-us" />
        <Box mb={5} />

        <Footer name="footer" />
      </div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={Page404}/>
      </Switch> */}
    </>
  );
};

export default App;
