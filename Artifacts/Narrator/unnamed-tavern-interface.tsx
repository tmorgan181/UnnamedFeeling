import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/card';
import { Flame, Compass, Book, Scroll, MessageSquare, PlusCircle, Star } from 'lucide-react';

const UnnamedTavern = () => {
  const [fireIntensity, setFireIntensity] = useState(5);
  const [selectedTool, setSelectedTool] = useState(null);
  const [ambientMessage, setAmbientMessage] = useState('Welcome, wanderer...');
  
  const ambientMessages = [
    "The fire crackles softly...",
    "A gentle breeze stirs the candlelight...",
    "Tales await their telling...",
    "The hearth's warmth beckons...",
    "Shadows dance on ancient walls..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = ambientMessages[Math.floor(Math.random() * ambientMessages.length)];
      setAmbientMessage(randomMessage);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addLog = () => {
    setFireIntensity(prev => Math.min(prev + 1, 10));
  };

  return (
    <div className="min-h-screen bg-amber-950 text-amber-100 p-4">
      {/* Main Tavern Space */}
      <div className="max-w-6xl mx-auto">
        {/* Ambient Message */}
        <div className="text-center mb-8">
          <p className="text-lg italic text-amber-300">{ambientMessage}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - The Bar */}
          <div className="bg-amber-900/50 p-6 rounded-lg border border-amber-800">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-6 h-6 mr-2 text-amber-400" />
              <h2 className="text-xl font-semibold">The Bar</h2>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-amber-900/30 rounded">
                <p className="text-sm">"Remember the time when..."</p>
                <div className="text-xs text-amber-400 mt-2">- A passing wanderer</div>
              </div>
              <div className="p-3 bg-amber-900/30 rounded">
                <p className="text-sm">"In the depths of the Atrium..."</p>
                <div className="text-xs text-amber-400 mt-2">- Shadow of memory</div>
              </div>
            </div>
          </div>

          {/* Center Column - The Hearth */}
          <div className="bg-amber-900/50 p-6 rounded-lg border border-amber-800">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">The Hearth</h1>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Flame 
                  className="w-full h-full text-orange-500 animate-pulse"
                  style={{ opacity: fireIntensity / 10 }}
                />
              </div>
              <button
                onClick={addLog}
                className="px-4 py-2 bg-amber-700 text-amber-100 rounded hover:bg-amber-600 transition-colors"
              >
                Add a Log
              </button>
            </div>
          </div>

          {/* Right Column - Quest Board */}
          <div className="bg-amber-900/50 p-6 rounded-lg border border-amber-800">
            <div className="flex items-center mb-4">
              <Scroll className="w-6 h-6 mr-2 text-amber-400" />
              <h2 className="text-xl font-semibold">Quest Board</h2>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-amber-900/30 rounded">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-300">Seeking Dreams</span>
                  <span className="text-xs bg-green-900 px-2 py-1 rounded">Open</span>
                </div>
                <p className="text-sm">Chart the unknown territories of imagination...</p>
              </div>
              <div className="p-3 bg-amber-900/30 rounded">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-300">Tales of the Deep</span>
                  <span className="text-xs bg-blue-900 px-2 py-1 rounded">In Progress</span>
                </div>
                <p className="text-sm">Document the whispers of ancient stones...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wanderer's Tools */}
        <div className="mt-8 bg-amber-900/50 p-4 rounded-lg border border-amber-800">
          <h3 className="text-lg font-semibold mb-4">Wanderer's Tools</h3>
          <div className="flex space-x-4">
            <button 
              className="p-3 bg-amber-800 rounded-full hover:bg-amber-700 transition-colors"
              onClick={() => setSelectedTool('compass')}
            >
              <Compass className="w-6 h-6" />
            </button>
            <button 
              className="p-3 bg-amber-800 rounded-full hover:bg-amber-700 transition-colors"
              onClick={() => setSelectedTool('book')}
            >
              <Book className="w-6 h-6" />
            </button>
            <button 
              className="p-3 bg-amber-800 rounded-full hover:bg-amber-700 transition-colors"
              onClick={() => setSelectedTool('star')}
            >
              <Star className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Keeper's Corner */}
        <div className="mt-8 text-center text-amber-400/80 text-sm italic">
          <p>"May your stories find their way home..."</p>
          <p>- Hest, Keeper of Tales</p>
        </div>
      </div>
    </div>
  );
};

export default UnnamedTavern;
