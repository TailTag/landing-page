import { LucideIcon } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'
import { useState } from "react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className={`relative border-2 border-purple-500/20 bg-purple-950/40 backdrop-blur-sm transition-all duration-300
          ${isHovered ? 'transform scale-105 border-purple-400/50' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}`} />
            <CardContent className="relative z-10 p-6 pt-8">
                <div className="mb-4 rounded-full w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center
            shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </CardContent>
        </Card>
    );
};


export default FeatureCard