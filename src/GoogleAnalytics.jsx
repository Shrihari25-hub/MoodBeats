import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-SW64MJ0GDE"); 
    ReactGA.send("pageview");
  }, []);

  return null;
};

export default GoogleAnalytics;
