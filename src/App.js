import React from "react";
import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import testData from "./data";
import FAQData from "./data/faq";
import CoCData from "./data/coc";

import SCDWlogo from "./img/logo/SCDW.svg";
import instaLogo from "./img/logo/Instagram.svg";
import fbLogo from "./img/logo/Facebook.svg";
import spectrumLogo from "./img/logo/Spectrum.svg";

import { SpeakerPage, SpeakerPageTemplate } from "./components/Speaker";
import { Page } from "./components/Page";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home data={testData} />
          </Route>
          {testData.map((x, i) => {
            return (
              <Route exact path={`/${x.link}`} key={i}>
                <SpeakerPageTemplate
                  localData={x}
                  globalData={testData}
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

export function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <div>
          <NavLink to="/">
            <img src={SCDWlogo} alt="Spectrum Con Design Week 2020" />
          </NavLink>
        </div>
        {/* <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div> */}
        <div
          style={{
            display: "grid",
            gridGap: 48,
            gridTemplateColumns: "repeat(4, max-content)"
          }}
        >
          <div className="heading-2">About</div>
          <div className="heading-2">Program</div>
          <div className="heading-2">CoC</div>
          <div className="heading-2">FAQ</div>
        </div>
        <div className="btn" style={{ justifySelf: "end" }}>
          참가신청
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <svg
          width="120"
          height="56"
          viewBox="0 0 120 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M15.8853 32.8252L18.0858 32.2063C18.5672 34.8195 21.0428 36.9513 23.7936 36.9513C26.338 36.9513 28.8136 35.6447 28.8136 32.894C28.8136 30.2808 26.4755 29.2493 24.8251 28.9054L21.8681 28.2865C20.8365 28.0802 19.2549 27.5301 18.0858 26.361C17.1918 25.467 16.5042 24.2292 16.5042 22.51C16.5042 18.7278 19.8738 16.2521 23.5873 16.2521C28.401 16.2521 30.464 19.2092 30.9454 21.616L28.8136 22.3037C28.401 20.7221 26.9569 18.4527 23.5185 18.4527C21.1116 18.4527 18.8423 20.0344 18.8423 22.4413C18.8423 24.0917 19.805 25.5358 22.0744 25.9484L24.8938 26.4986C26.4755 26.7736 27.9884 27.3238 29.2262 28.4241C30.7391 29.8682 31.1517 31.5874 31.1517 32.5501C31.1517 36.5387 27.9196 39.0831 23.7248 39.0831C19.3924 39.1519 16.1603 35.9885 15.8853 32.8252Z"
              fill="black"
            />
            <path
              d="M32.802 27.8739C32.802 21.0659 37.9596 16.3897 44.0112 16.3897C50.1315 16.3897 53.2261 20.6533 53.9825 23.7479L51.7132 24.5731C51.3693 23.1289 49.4438 18.659 43.9424 18.659C39.1974 18.659 35.2089 22.3725 35.2089 27.7364C35.2089 33.0315 38.9223 36.9513 44.0112 36.9513C49.3751 36.9513 51.2318 32.8252 51.8507 30.9685L54.12 31.7937C53.2948 34.5444 50.4066 39.2206 43.9424 39.2206C37.7533 39.2206 32.802 34.6132 32.802 27.8739Z"
              fill="black"
            />
            <path
              d="M63.6102 16.596C70.5557 16.596 75.4383 21.4097 75.4383 27.7364C75.4383 34.4069 70.2119 38.9456 63.6102 38.9456L56.9397 38.9456L56.9397 16.596L63.6102 16.596ZM63.5414 36.745C69.1804 36.745 72.9626 33.0315 72.9626 27.8052C72.9626 22.6476 69.3179 18.7966 63.4726 18.7966L59.2778 18.7966L59.2778 36.745L63.5414 36.745Z"
              fill="black"
            />
            <path
              d="M75.5071 16.596L77.9827 16.596L83.828 35.5759L83.8968 35.5759L89.8108 16.596L92.4927 16.596L98.338 35.6447L98.4068 35.6447L104.252 16.596L106.59 16.596L99.5758 38.9456L96.9627 38.9456L90.9799 19.7593L84.997 38.9456L82.4526 38.9456L75.5071 16.596Z"
              fill="black"
            />
            <path
              d="M60.0344 56C44.149 56 29.1576 53.1805 17.8797 48.0917C6.32665 42.9341 -8.77735e-07 35.9198 -1.20538e-06 28.4241C-1.53303e-06 20.9284 6.32664 13.914 17.8109 8.75645C29.0888 3.66762 44.0802 0.848135 59.9656 0.848134C75.851 0.848134 90.8424 3.66762 102.12 8.75644C113.605 13.9828 119.931 20.9284 119.931 28.4241C119.931 35.9198 113.605 42.9341 102.12 48.0917C90.9112 53.1805 75.9198 56 60.0344 56ZM60.0344 2.56733C44.3553 2.56733 29.639 5.31805 18.5673 10.3381C7.702 15.2206 1.7192 21.6848 1.7192 28.4241C1.7192 35.1633 7.70201 41.6275 18.5673 46.51C29.639 51.5301 44.3553 54.2808 60.0344 54.2808C75.7135 54.2808 90.4298 51.5301 101.501 46.51C112.367 41.6275 118.281 35.1633 118.281 28.4241C118.281 21.6848 112.298 15.2206 101.501 10.3381C90.4298 5.31804 75.7135 2.56733 60.0344 2.56733Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="55.1519"
                height="120"
                fill="white"
                transform="translate(0 56) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>

        <img src={instaLogo} alt="Design Spectrum Instagram link" />
        <img src={fbLogo} alt="Design Spectrum Facebook link" />
      </div>
    </div>
  );
}

export function SponsorPage() {
  return (
    <Page center={true}>
      <div className="title">
        <div className="heading-1">Sponsor</div>
      </div>
    </Page>
  );
}

export function CoCPage() {
  return (
    <Page center={false}>
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

export function FAQPage() {
  return (
    <Page center={false}>
      <div className="title">
        <div className="heading-1">FAQ</div>
      </div>
      <div style={{ display: "grid", gridGap: 40, maxWidth: 940 }}>
        {FAQData.map((x, i) => {
          return (
            <div key={i}>
              <div className="heading-2">{x.title}</div>
              <div className="body-1">{x.text}</div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}

export function Home({ data }) {
  return (
    <div className="content">
      <Page center={true}>
        <div
          className="heading-1"
          style={{
            textAlign: "center"
          }}
        >
          SPECTRUM CON 2020 <br /> DESIGN WEEK <br /> A WHOLE NEW WORLD <br />
          SPECTRUM CON 2020 <br />
          DESIGN WEEK <br />A WHOLE NEW WORLD
        </div>

        {/* <img className="main-video" src={MainVideo} alt={"video goes here"} /> */}
      </Page>
      <Page center={true}>
        <div className="title">
          <div className="heading-1">
            Spectrum Con <br />
            Design Week 2020
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto max-content",
            gridGap: 95
          }}
        >
          <div>
            <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
            <div className="body-1">
              디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는 여러
              각도에서의 자극과 탐구가 필요합니다. <br />
              그것이 온라인이든 오프라인이든 상관없이 디자이너들이 이러한 필요를
              느낄 때 자유롭게 찾아와서 이야기할 수 있는 <br />
              기회와 공간이 필요하다고 생각했습니다.
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <svg width="314" height="113" viewBox="0 0 314 113" fill="none">
              <rect width="157.863" height="89.7637" fill="#06ACFF" />
              <rect
                x="34.5054"
                y="9.65204"
                width="224.286"
                height="93.6245"
                fill="#06ACFF"
              />
              <rect
                x="69.011"
                y="19.304"
                width="244.989"
                height="93.6245"
                fill="#06ACFF"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                className="ticket"
              >
                BUY EARLY BIRD
              </text>
            </svg>
          </div>
        </div>
      </Page>
      <SpeakerPage data={data} />
      <SponsorPage />
      <CoCPage />
      <FAQPage />
    </div>
  );
}
