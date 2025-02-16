import GradientText from "./GradientText";
import FeatureCard from "./FeatureCard";
import { Heart, ExternalLink, Github } from 'lucide-react'
const FeaturesSection = () => (
    <section className="py-20 px-4 relative" id="features">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
                <GradientText>Powerful Features</GradientText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                    icon={Heart}
                    title="Customizable Profiles"
                    description="Design your perfect profile with custom themes, colors, and layouts that match your personality."
                />
                <FeatureCard
                    icon={ExternalLink}
                    title="Social Integration"
                    description="Connect all your social media accounts and create a central hub for your online presence."
                />
                <FeatureCard
                    icon={Github}
                    title="Open Source"
                    description="Built with transparency and community in mind. Contribute and make TailTag even better."
                />
            </div>
        </div>
    </section>
);

export default FeaturesSection