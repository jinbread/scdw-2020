import * as THREE from "three";
import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import contentData from "./data";

import { SpeakerPageTemplate } from "./components/Speaker";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./page/Home";

const scrollToRef = (ref) => {
  window.scrollTo({ top: ref.current.offsetTop - 120, behavior: "smooth" });
};

export default function App() {
  const aboutRef = React.useRef(null);
  const speakerRef = React.useRef(null);
  const cocRef = React.useRef(null);
  const FAQRef = React.useRef(null);

  const aboutScroll = () => scrollToRef(aboutRef);
  const speakerScroll = () => scrollToRef(speakerRef);
  const cocScroll = () => scrollToRef(cocRef);
  const FAQScroll = () => scrollToRef(FAQRef);

  return (
    <Router>
      <div className="App">
        <Header>
          <motion.div className="heading-2" onClick={aboutScroll}>
            About
          </motion.div>
          <motion.div className="heading-2" onClick={speakerScroll}>
            Program
          </motion.div>
          <motion.div className="heading-2" onClick={cocScroll}>
            CoC
          </motion.div>
          <motion.div className="heading-2" onClick={FAQScroll}>
            FAQ
          </motion.div>
        </Header>
        <Switch>
          <Route exact path="/">
            <Home
              data={contentData}
              aboutRef={aboutRef}
              speakerRef={speakerRef}
              cocRef={cocRef}
              FAQRef={FAQRef}
            />
          </Route>
          {contentData.map((x, i) => {
            return (
              <Route exact path={`/${x.link}`} key={i}>
                <SpeakerPageTemplate
                  localData={x}
                  globalData={contentData}
                  index={i}
                />
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
