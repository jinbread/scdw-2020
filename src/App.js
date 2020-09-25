import React from "react";
import "./styles.css";
import MainVideo from "./img/MainVideo.png";

import spectrumSymbol from "./img/spectrum_symbol.svg";
import spectrumTypo from "./img/spectrum_typo.svg";
import SCDWlogo from "./img/logo/SCDW.svg";
import instaLogo from "./img/logo/Instagram.svg";
import fbLogo from "./img/logo/Facebook.svg";
import spectrumLogo from "./img/logo/Spectrum.svg";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Page>
          <img className="main-video" src={MainVideo} alt={"video goes here"} />
        </Page>
        <Page>
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

export function Page({ children }) {
  return (
    <div className="container-page">
      <div>{children}</div>
    </div>
  );
}
