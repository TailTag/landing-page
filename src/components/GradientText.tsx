import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

const GradientText = ({ children, className = "" }: GradientTextProps) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${className}`}>
        {children}
    </span>
);

export default GradientText