interface RoadmapItemProps {
  phase: string;
  title: string;
  items: string[];
  isActive: boolean;
}

const RoadmapItem = ({ phase, title, items, isActive }: RoadmapItemProps) => (
  <div className={`border-l-2 ${isActive ? 'border-purple-500' : 'border-gray-700'} pl-6 pb-8`}>
    <div className={`-ml-[27px] h-12 w-12 rounded-full ${isActive ? 'bg-purple-500' : 'bg-gray-800'} 
        flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]`}>
      {phase}
    </div>
    <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <div className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-purple-500' : 'bg-gray-700'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default RoadmapItem