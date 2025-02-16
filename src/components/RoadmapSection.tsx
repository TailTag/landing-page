import GradientText from "./GradientText";
import RoadmapItem from "./RoadmapItem";

const RoadmapSection = () => (
    <section className="py-20 px-4 relative bg-purple-950/20" id="roadmap">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
                <GradientText>Project Roadmap</GradientText>
            </h2>
            <div className="space-y-8">
                <RoadmapItem
                    phase="1"
                    title="Project Setup"
                    items={[
                        "Finalize project scope and technical stack",
                        "Set up project repository and documentation",
                        "Define database schema and API structure"
                    ]}
                    isActive={true}
                />
                <RoadmapItem
                    phase="2"
                    title="Backend Development"
                    items={[
                        "Implement Keycloak authentication",
                        "Build user profile and storage APIs",
                        "Set up Hetzner Object Storage"
                    ]}
                    isActive={true}
                />
                <RoadmapItem
                    phase="3"
                    title="Frontend Development"
                    items={[
                        "Design and develop UI components",
                        "Create profile page rendering",
                        "Implement the profile editor"
                    ]}
                    isActive={false}
                />
            </div>
        </div>
    </section>
);

export default RoadmapSection