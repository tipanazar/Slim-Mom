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
}) => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <Link className={logoLinkClassName} to="/">
      <LogoBig className={logoBigClassName} />
      <LogoMedium className={logoMediumClassName} />
      {isLogin ? (
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
};
