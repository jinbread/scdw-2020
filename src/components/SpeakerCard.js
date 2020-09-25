import React from "react";
import { motion } from "framer-motion";
import Arrow from "../img/Arrow.svg";

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
        return <SpeakerCard data={x} key={i} />;
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
      <div
        style={{
          position: "absolute",
          width: 480,
          height: 260,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          left: 0,
          top: 18,
          backdropFilter: "blur(100px)"
        }}
      ></div>
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
