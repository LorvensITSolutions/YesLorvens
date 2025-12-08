import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
import HomePage from "./components/HomePage/Homepage";
import ContactPage from "./components/ContactUs/ContactPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services/Services";
import ServiceDetail from "./components/Services/ServiceDetail";
import ProjectsPage from "./components/Projects/ProjectPage";
import AboutPage from "./components/AboutUs/AboutPage";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsOfUse from "./components/Footer/TermsOfUse";
import NetworkError from "./components/NetworkError";
import ErrorPage from "./components/ErrorPage";
import CookieConsent from "./components/CookieConsent";

function App() {
  const isOnline = useNetworkStatus();
  const location = useLocation();
  
  // Disable browser scroll restoration (prevents mobile browsers from restoring scroll position)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  
  // Define valid routes
  const validRoutes = ["/", "/about", "/services", "/projects", "/contact", "/privacy-policy", "/terms-of-use"];
  const isServiceDetail = location.pathname.startsWith("/service/") && location.pathname.split("/").length === 3;
  const isNotFoundPage = !validRoutes.includes(location.pathname) && !isServiceDetail;

  // ✔ Show network error page when offline
  if (!isOnline) {
    return <NetworkError />;
  }

  // ✔ If ErrorPage (404), render standalone without Navbar/Footer/Background
  if (isNotFoundPage) {
    return (
      <>
        <ErrorPage />
        <Toaster />
      </>
    );
  }

  // ✔ When online → whole website loads normally
  return (
    <div className="min-h-screen text-[#1F1F1F] relative">
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
      <Toaster />
    </div>
  );
}

export default App;
