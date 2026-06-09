import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    // Dynamically update document title (title bar)
    switch (pathname) {
      case "/":
        document.title = "DZ Infotech | Building Smart Digital Solutions";
        break;
      case "/services":
        document.title = "Services | DZ Infotech";
        break;
      case "/product":
        document.title = "ConTrack - Product | DZ Infotech";
        break;
      case "/careers":
        document.title = "Careers | DZ Infotech";
        break;
      case "/about":
        document.title = "About Us | DZ Infotech";
        break;
      case "/partner":
        document.title = "Partner With Us | DZ Infotech";
        break;
      default:
        document.title = "DZ Infotech | Smart Digital Solutions";
    }
  }, [pathname]);

  return null;
}
