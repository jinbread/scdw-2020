import React from "react";
import { Page } from "../components/Page";
import CoCData from "../data/coc";

export function CoCPage({ myRef }) {
  return (
    <Page center={false} myRef={myRef} marginBottom={160}>
      <div className="title">
        <div className="heading-1">Code of Conduct</div>
      </div>
      <div style={{ display: "grid", gridGap: 40, maxWidth: 940 }}>
        <div className="heading-2">{CoCData.descA}</div>
        <div className="body-1">{CoCData.descB}</div>
        <div>
          <div className="heading-2">{CoCData.guidelinesTitle}</div>
          <div className="body-1">{CoCData.guidelinesDesc}</div>
          <ul>
            {CoCData.guidelines.map((x, i) => {
              return (
                <li style={{ marginBottom: 24 }} key={i}>
                  <div className="heading-2">{x.title}</div>
                  <div className="body-1">{x.text}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Page>
  );
}
