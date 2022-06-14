import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import PropTypes from "prop-types";

import { getIsLogin } from "../../../redux/userAccount/userAccount-selectors";

import { LogoSmall } from "./svgComponents";
import { LogoMedium } from "./svgComponents";
import { LogoBig } from "./svgComponents";
import headerLogo from "../../../images/header/headerLogo.png";

const Logo = ({
  logoLinkClassName,
  logoBigClassName,
  logoMediumClassName,
  logoSmallClassName,
  logoImg,
  closeModal,
}) => {
  const [pageWidth, setPageWidth] = useState(0);
  const isLogin = useSelector(getIsLogin, shallowEqual);

  useEffect(() => setPageWidth(window.innerWidth), []);
  window.addEventListener("resize", () => setPageWidth(window.innerWidth));

  return (
    <Link className={logoLinkClassName} to="/diary" onClick={closeModal}>
      <LogoBig className={logoBigClassName} />
      <LogoMedium className={logoMediumClassName} />
      {isLogin || pageWidth >= 400 ? (
        <LogoSmall className={logoSmallClassName} />
      ) : (
        <img className={logoImg} src={headerLogo} alt="Logo" />
      )}
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  logoLinkClassName: PropTypes.string,
  logoBigClassName: PropTypes.string,
  logoMediumClassName: PropTypes.string,
  logoSmallClassName: PropTypes.string,
  logoImg: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};
