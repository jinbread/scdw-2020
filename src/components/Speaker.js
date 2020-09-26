import React from "react";
import { motion } from "framer-motion";
import Arrow from "../img/Arrow.svg";
import { Page } from "./Page";
import BG1 from "../img/bg1.svg";
import BG2 from "../img/bg2.svg";
import BG3 from "../img/bg3.svg";

import { BrowserRouter as NavLink } from "react-router-dom";

export function SpeakerPage({ data }) {
  return (
    <Page center={false}>
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
    <div
      style={{
        marginTop: 80,
        display: "grid",
        gridRowGap: 72,
        gridTemplateColumns: "max-content max-content",
        gridColumnGap: 120,
        marginBottom: 80
      }}
    >
      {data.map((x, i) => {
        return (
          <NavLink to={x.link} key={i}>
            <SpeakerCard data={x} />
          </NavLink>
        );
      })}
    </div>
  );
}

export function SpeakerCard({ data }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        position: "relative",
        height: 278
      }}
    >
      <div className="speaker-card-bg"></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 185px",
          width: 500,
          position: "relative"
        }}
      >
        <div style={{ marginTop: 40, marginLeft: 30 }}>
          <div className="speaker-card-small-text-3">{data.date}</div>
          <div
            style={{
              display: "grid",
              gridGap: 4,
              marginTop: 30
            }}
          >
            <div className="speaker-card-small-text-2">
              {data.speaker}, {data.company}
            </div>
            <div className="speaker-card-small-text-1">{data.title}</div>
            <div className="speaker-card-small-text-4">{data.time}</div>
          </div>
        </div>
        <div style={{ width: 185, height: 185, backgroundColor: "#999" }}></div>
        <motion.div
          style={{
            position: "absolute",
            width: 72,
            height: 72,
            // backgroundColor: "blue",
            right: 0,
            top: 164
          }}
          whileHover={{ x: 20 }}
        >
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
        <NavLink to="/">
          <div className="heading-1">{localData.speaker}</div>
        </NavLink>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "max-content max-content",
            gridGap: 120
          }}
        >
          {index !== 0 && (
            <div>
              <div className="heading-2">이전 프로그램</div>
              <NavLink to={`/${globalData[index - 1].link}`}>
                <SpeakerCard data={globalData[index - 1]} />
              </NavLink>
            </div>
          )}
          {index !== globalData.length - 1 && (
            <div>
              <div className="heading-2">다음 프로그램</div>

              <NavLink to={`/${globalData[index + 1].link}`}>
                <SpeakerCard data={globalData[index + 1]} />
              </NavLink>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}
