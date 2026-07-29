import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/footer/Footer';
import { ChatBubble } from './components/ui/ChatBubble';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CommunityPage } from './pages/CommunityPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { InsightsPage } from './pages/InsightsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AiGuidesPage } from './pages/AiGuidesPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { FreeAiToolsPage } from './pages/FreeAiToolsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { CareerHubPage } from './pages/CareerHubPage';
import { InterviewPrepPage } from './pages/InterviewPrepPage';
import { ResumeResourcesPage } from './pages/ResumeResourcesPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLenis } from './hooks/useLenis';
import { setNavigate } from './routerBridge';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-white"
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center gap-5">
        <img
          src="/avatar3.png"
          alt="Metawaves AI mascot"
          className="loader-logo h-100 w-auto object-contain sm:h-100"
        />
        <img src="/logo-navy.png" alt="Metawaves AI" className="h-8 w-auto object-contain sm:h-6" />
        <div className="loader-track" />
      </div>
    </motion.div>
  );
}

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

function App() {
  useLenis();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courseQuery, setCourseQuery] = useState('');

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const handleCourseSearchSubmit = () => {
    if (window.location.pathname !== '/') {
      navigate('/#courses');
      return;
    }
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-text-primary">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>

      <ScrollToTopOnRouteChange />
      <AnnouncementBar />
      <Navbar query={courseQuery} onQueryChange={setCourseQuery} onSearchSubmit={handleCourseSearchSubmit} />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage query={courseQuery} onQueryChange={setCourseQuery} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/learning-paths" element={<LearningPathsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<BlogDetailPage />} />
          <Route path="/ai-guides" element={<AiGuidesPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/free-ai-tools" element={<FreeAiToolsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/career-hub" element={<CareerHubPage />} />
          <Route path="/interview-prep" element={<InterviewPrepPage />} />
          <Route path="/resume-resources" element={<ResumeResourcesPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <ScrollToTopButton />
      <ChatBubble />
    </div>
  );
}

export default App;
