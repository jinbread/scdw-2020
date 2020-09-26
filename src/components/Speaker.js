import React from "react";
import "./Speaker.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import Arrow from "../img/Arrow.svg";
import { Page } from "./Page";
import BG1 from "../img/bg1.svg";
import BG2 from "../img/bg2.svg";
import BG3 from "../img/bg3.svg";

export function SpeakerPage({ data, myRef }) {
  return (
    <Page center={false} myRef={myRef} marginBottom={160}>
      <div className="title">
        <div className="heading-1">Program</div>
      </div>
      <div className="body-1">2주간 진행되는 다양한 세션을 들어보세요.</div>
      <SpeakerList data={data} />

      <img
        style={{
          position: "absolute",
          top: 0,
          left: -480,
          pointerEvents: "none",
          zIndex: -10
        }}
        src={BG1}
        alt={"bg3"}
      />
      <img
        style={{
          position: "absolute",
          top: 820,
          left: -800,
          pointerEvents: "none",
          zIndex: -10
        }}
        src={BG2}
        alt={"bg3"}
      />
      <img
        style={{
          position: "absolute",
          top: 440,
          left: 460,
          pointerEvents: "none",
          zIndex: -10
        }}
        src={BG3}
        alt={"bg3"}
      />
    </Page>
  );
}

export function SpeakerList({ data }) {
  return (
    <div className="speaker-list-container">
      <div className="speaker-list-left">
        {data
          .filter((x, i) => i % 2 === 0)
          .map((x, i) => {
            return (
              <NavLink to={`/${x.link}`} key={i}>
                <SpeakerCard data={x} />
              </NavLink>
            );
          })}
      </div>
      <div className="speaker-list-right">
        {data
          .filter((x, i) => i % 2 === 1)
          .map((x, i) => {
            return (
              <NavLink to={`/${x.link}`} key={i}>
                <SpeakerCard data={x} />
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

export function SpeakerCard({ data }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="speaker-card-container">
      <div className="speaker-card-bg"></div>
      <div className="speaker-card-wrapper">
        <div className="speaker-card-content">
          <div className="speaker-card-small-text-3">{data.date}</div>
          <div className="speaker-card-info">
            <div className="speaker-card-small-text-2">
              {data.speaker}, {data.company}
            </div>
            <div className="speaker-card-small-text-1">{data.title}</div>
            <div className="speaker-card-small-text-4">{data.time}</div>
          </div>
        </div>
        <div className="speaker-card-img"></div>
        <motion.div className="speaker-card-arrow" whileHover={{ x: 20 }}>
          <img src={Arrow} alt={"arrow"} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function SpeakerPageTemplate({ localData, globalData, index }) {
  return (
    <div className="content">
      <Page>
        <div className="speaker-page-wrapper">
          <div>
            <div className="speaker-card-large-text-3">{localData.date}</div>
            <div className="speaker-page-info">
              <div className="speaker-card-large-text-2">
                {localData.speaker}, {localData.company}
              </div>
              <div className="speaker-card-large-text-1">{localData.title}</div>
              <div className="speaker-card-large-text-4">{localData.time}</div>
            </div>
            <div className="btn">캘린더에 추가하기</div>
          </div>
          <div className="speaker-page-img"></div>
        </div>
        <div className="speaker-page-content-container">
          <div className="speaker-page-content-title">
            <div className="heading-3">Contents</div>
          </div>
          <div className="speaker-page-content-wrapper">
            {localData.contents.map((x, i) => {
              return (
                <div key={i}>
                  <div className="heading-2">{x.title}</div>
                  <div className="body-1">{x.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="speaker-page-nav-wrapper">
          {index !== 0 && (
            <div>
              <div className="heading-2">이전 프로그램</div>
              <NavLink to={globalData[index - 1].link}>
                <SpeakerCard data={globalData[index - 1]} />
              </NavLink>
            </div>
          )}
          {index !== globalData.length - 1 && (
            <div>
              <div className="heading-2">다음 프로그램</div>
              <NavLink to={globalData[index + 1].link}>
                <SpeakerCard data={globalData[index + 1]} />
              </NavLink>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}

export function SpeakerTest() {
  return <Router></Router>;
}
