import React from "react";
import instaLogo from "../img/logo/Instagram.svg";
import fbLogo from "../img/logo/Facebook.svg";
import spectrumLogo from "../img/logo/Spectrum.svg";

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
