import { useState } from 'react';

const ConceptMap = () => {
  const [activeNode, setActiveNode] = useState('');
  const [notes, setNotes] = useState('');

  // Node data for tooltips and interactions
  const nodeInfo = {
    unnamed: "Central concept representing the unexplainable sensation",
    paradox: "Exploring contradictions and dualities",
    resonance: "Patterns of harmony and connection",
    technology: "Integration of artificial and natural",
    consciousness: "Awareness and perception studies",
    religious: "Spiritual and faith-based perspectives",
    ai: "Artificial Intelligence implications",
    time: "Temporal aspects - yet to be fully explored",
    creation: "Creative expression and manifestation"
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 text-white min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Conceptual Framework Map</h1>
        <p className="text-gray-400">Hover over nodes to explore connections</p>
      </div>
      
      <div className="relative">
        <svg viewBox="0 0 1000 800" className="w-full max-w-4xl">
          {/* Definitions */}
          <defs>
            <pattern id="dots" width="6" height="1" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="0.5" r="0.5" fill="#4299e1"/>
            </pattern>
          </defs>

          {/* Central Hub */}
          <circle 
            cx="500" 
            cy="400" 
            r="60" 
            fill={activeNode === 'unnamed' ? '#2c5282' : '#1a365d'}
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setActiveNode('unnamed')}
            onMouseLeave={() => setActiveNode('')}
          />
          <text x="500" y="395" textAnchor="middle" fill="white" fontSize="14">The Unnamed</text>
          <text x="500" y="415" textAnchor="middle" fill="white" fontSize="14">Feeling</text>

          {/* Primary Nodes */}
          {[
            { x: 300, y: 250, label: 'Paradox', id: 'paradox' },
            { x: 700, y: 250, label: 'Resonance', id: 'resonance' },
            { x: 300, y: 550, label: 'Technology', id: 'technology' },
            { x: 700, y: 550, label: 'Consciousness', id: 'consciousness' }
          ].map(node => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="50"
                fill={activeNode === node.id ? '#4299e1' : '#2c5282'}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode('')}
              />
              <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="12">
                {node.label}
              </text>
            </g>
          ))}

          {/* Connections */}
          <path d="M 450,360 L 330,280" stroke="#4299e1" strokeWidth="2"/>
          <path d="M 550,360 L 670,280" stroke="#4299e1" strokeWidth="2"/>
          <path d="M 450,440 Q 375,495 330,530" stroke="#4299e1" strokeWidth="2" strokeDasharray="4,4"/>
          <path d="M 550,440 L 670,530" stroke="#4299e1" strokeWidth="2"/>

          {/* Secondary Nodes */}
          {[
            { x: 150, y: 350, label: 'Religious', id: 'religious' },
            { x: 450, y: 650, label: 'AI', id: 'ai' }
          ].map(node => (
            <g key={node.id} opacity="0.6">
              <circle
                cx={node.x}
                cy={node.y}
                r="30"
                fill={activeNode === node.id ? '#63b3ed' : '#4299e1'}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode('')}
              />
              <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="10">
                {node.label}
              </text>
            </g>
          ))}

          {/* Undiscovered Nodes */}
          {[
            { x: 850, y: 400, label: 'Time', id: 'time' },
            { x: 150, y: 450, label: 'Creation', id: 'creation' }
          ].map(node => (
            <g key={node.id} opacity="0.2">
              <circle
                cx={node.x}
                cy={node.y}
                r="30"
                fill={activeNode === node.id ? '#718096' : '#718096'}
                className="cursor-pointer"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode('')}
              />
              <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="10">
                {node.label}
              </text>
            </g>
          ))}

          {/* Notes Section */}
          <rect 
            x="800" 
            y="100" 
            width="150" 
            height="100" 
            rx="10" 
            fill="#2d3748" 
            stroke="#4299e1"
            className="cursor-pointer"
            onClick={() => {
              const newNote = prompt('Add a note:');
              if (newNote) setNotes(prev => prev + '\n' + newNote);
            }}
          />
          <text x="875" y="150" textAnchor="middle" fill="white" fontSize="12">
            Click to Add Notes
          </text>
        </svg>

        {/* Info Panel */}
        {activeNode && (
          <div className="absolute top-4 left-4 bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-lg font-semibold mb-2 capitalize">{activeNode}</h3>
            <p className="text-gray-300">{nodeInfo[activeNode]}</p>
          </div>
        )}
      </div>

      {/* Notes Display */}
      {notes && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg max-w-xl w-full">
          <h2 className="text-xl font-bold mb-2">Notes</h2>
          <pre className="whitespace-pre-wrap text-gray-300">{notes}</pre>
        </div>
      )}
    </div>
  );
};

export default ConceptMap;
