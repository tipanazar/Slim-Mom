import { useMediaQuery } from "react-responsive";

export const useDevice = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletAndDesktop = useMediaQuery({ minWidth: 768 });

  return {
    isMobileDevice,
    isTabletAndDesktop,
  };
};
