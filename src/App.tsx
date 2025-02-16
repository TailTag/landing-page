import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RoadmapSection from '@/components/RoadmapSection';
import './App.css'

const App = () => {
  const scrollToFeatures = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-purple-950 text-white">
      <HeroSection onScrollClick={scrollToFeatures} />
      <FeaturesSection />
      <RoadmapSection />
    </div>
  );
};

export default App;