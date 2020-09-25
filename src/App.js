import React from "react";
import "./styles.css";

import MainVideo from "./img/MainVideo.png";
import SCDWlogo from "./img/logo/SCDW.svg";
import instaLogo from "./img/logo/Instagram.svg";
import fbLogo from "./img/logo/Facebook.svg";
import spectrumLogo from "./img/logo/Spectrum.svg";

import { SpeakerList } from "./components/SpeakerCard";

export default function App() {
  const test = [
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    },
    {
      date: "11/23",
      speaker: "김지홍",
      company: "디자인 스펙트럼",
      title: "디자인 위크 2020",
      time: "18:00-20:00",
      link: "url"
    }
  ];
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Page center={true}>
          <img className="main-video" src={MainVideo} alt={"video goes here"} />
        </Page>
        <Page center={true}>
          <div className="title">
            <div className="heading-1">
              Spectrum Con <br />
              Design Week 2020
            </div>
          </div>
          <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
          <div className="body-1">
            디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는 여러
            각도에서의 자극과 탐구가 필요합니다. <br />
            그것이 온라인이든 오프라인이든 상관없이 디자이너들이 이러한 필요를
            느낄 때 자유롭게 찾아와서 이야기할 수 있는 <br />
            기회와 공간이 필요하다고 생각했습니다.
          </div>
        </Page>
        <Page center={false}>
          <div className="title">
            <div className="heading-1">Program</div>
          </div>
          <div className="body-1">2주간 진행되는 다양한 세션을 들어보세요.</div>
          <SpeakerList data={test} />
        </Page>
      </div>
      <Footer />
    </div>
  );
}

export function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <div>
          <img src={SCDWlogo} alt="Spectrum Con Design Week 2020" />
        </div>
        <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <img src={spectrumLogo} alt="Design Spectrum" />
        <img src={instaLogo} alt="Design Spectrum Instagram link" />
        <img src={fbLogo} alt="Design Spectrum Facebook link" />
      </div>
    </div>
  );
}

export function Page({ children, center }) {
  return (
    <div className={center ? "container-center-page" : "container-full-page"}>
      <div>{children}</div>
    </div>
  );
}
