import ScrollIndicator from "./ScrollIndicator";
import GradientText from "./GradientText";
import MarketingText from "./MarketingText";
import { Button } from "./ui/button";
import { ChevronRight, Github } from "lucide-react";
interface HeroSectionProps {
    onScrollClick: () => void;
}

const HeroSection = ({ onScrollClick }: HeroSectionProps) => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-purple-950 to-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8 space-y-8">
                <h1 className="text-6xl md:text-7xl font-bold mb-6">
                    Welcome to <GradientText>TailTag</GradientText>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    Your digital identity, beautifully organized in one place.
                    Share your story with a stunning profile that's uniquely you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white
                shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
                    >
                        Get Started <ChevronRight className="ml-2" />
                    </Button>
                    <Button
                        size="lg"
                        className="bg-gray-900 text-white border-2 border-purple-500/50 hover:border-purple-400
                shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                transition-all duration-300"
                        onClick={() => window.open('https://github.com/tailtag', '_blank')}
                    >
                        <Github className="mr-2" /> View on GitHub
                    </Button>
                </div>
                <MarketingText />
            </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
        bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <ScrollIndicator onClick={onScrollClick} />
    </div>
);

export default HeroSection