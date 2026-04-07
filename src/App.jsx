import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import NetworkError from "./components/NetworkError";
// Home loads with the main bundle so the intro text isn’t replaced by a Suspense spinner
import HomePage from "./components/HomePage/Homepage";

// Lazy load non-critical components for better initial performance
const Footer = lazy(() => import("./components/Footer/Footer"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const FloatingContact = lazy(() => import("./components/FloatingContact"));

// Lazy load other routes for code splitting
const ContactPage = lazy(() => import("./components/ContactUs/ContactPage"));
const Services = lazy(() => import("./components/Services/Services"));
const ServiceDetail = lazy(() => import("./components/Services/ServiceDetail"));
const ProjectsPage = lazy(() => import("./components/Projects/ProjectPage"));
const AboutPage = lazy(() => import("./components/AboutUs/AboutPage"));
const PrivacyPolicy = lazy(() => import("./components/Footer/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./components/Footer/TermsOfUse"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));

// Quiet fallback — avoids a spinning “activity indicator” over the layout
const LoadingFallback = () => (
  <div className="min-h-[50vh] w-full bg-white" aria-hidden />
);

function App() {
  const isOnline = useNetworkStatus();
  const location = useLocation();
  
  // Define valid routes
  const validRoutes = ["/", "/about", "/services", "/projects", "/contact", "/privacy-policy", "/terms-of-use"];
  const isServiceDetail = location.pathname.startsWith("/service/") && location.pathname.split("/").length === 3;
  const isNotFoundPage = !validRoutes.includes(location.pathname) && !isServiceDetail;
  
  // Show FloatingContact on all pages except contact page
  const showFloatingContact = location.pathname !== "/contact";

  // ✔ Show network error page when offline
  if (!isOnline) {
    return <NetworkError />;
  }

  // ✔ If ErrorPage (404), render standalone without Navbar/Footer/Background
  if (isNotFoundPage) {
    return (
      <>
        <Suspense fallback={<LoadingFallback />}>
          <ErrorPage />
        </Suspense>
        <Toaster />
      </>
    );
  }

  // ✔ When online → whole website loads normally
  return (
    <div className="relative min-h-screen bg-white text-[#1F1F1F]">
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10 bg-white">
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
      {showFloatingContact && (
        <Suspense fallback={null}>
          <FloatingContact />
        </Suspense>
      )}
      <Toaster />
    </div>
  );
}

export default App;
