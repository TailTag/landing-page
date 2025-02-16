import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
    onClick: () => void;
}

const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => (
    <button
        onClick={onClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
        <ChevronDown className="w-8 h-8 text-purple-400" />
    </button>
);

export default ScrollIndicator