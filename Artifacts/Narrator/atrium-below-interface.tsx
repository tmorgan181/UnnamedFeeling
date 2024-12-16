import React, { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert';
import { GhostIcon, HeartIcon, Theater, Shuffle, Moon } from 'lucide-react';

const AtrimBelowInterface = () => {
  const [showUnderstudy, setShowUnderstudy] = useState(false);
  const [ambientText, setAmbientText] = useState('Welcome to The Atrium Below');
  
  const ambientMessages = [
    "The stage awaits...",
    "Shadows lengthen in the food court",
    "The Merchant watches silently",
    "Wonka's herbs glow in the darkness",
    "An empty escalator runs endlessly"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = ambientMessages[Math.floor(Math.random() * ambientMessages.length)];
      setAmbientText(randomMessage);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
      {/* Main Interface */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-purple-400">The Atrium Below</h1>
          <p className="text-lg italic text-slate-400">{ambientText}</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Merchant's Domain */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all">
            <div className="flex items-center mb-4">
              <GhostIcon className="w-6 h-6 mr-2 text-purple-400" />
              <h2 className="text-xl font-semibold">The Merchant's Domain</h2>
            </div>
            <p className="text-slate-400 mb-4">Trade your memories in the endless market...</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Current Deal: Your heart for a truth</span>
              <HeartIcon className="w-5 h-5 text-red-400 animate-pulse" />
            </div>
          </div>

          {/* Wonka's Apothecary */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all">
            <div className="flex items-center mb-4">
              <Shuffle className="w-6 h-6 mr-2 text-green-400" />
              <h2 className="text-xl font-semibold">Wonka's Apothecary</h2>
            </div>
            <p className="text-slate-400 mb-4">Herbs of transformation await...</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Today's Special: Mind Unbound</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
            </div>
          </div>

          {/* The Understudy's Stage */}
          <div 
            className="col-span-1 md:col-span-2 bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all cursor-pointer"
            onClick={() => setShowUnderstudy(true)}
          >
            <div className="flex items-center mb-4">
              <Theater className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">The Understudy's Stage</h2>
            </div>
            <p className="text-slate-400">A shadow waits in the wings, yearning for the spotlight...</p>
          </div>
        </div>

        {/* Ambient Effects */}
        <div className="mt-8 flex justify-between items-center text-slate-500">
          <div className="flex items-center">
            <Moon className="w-4 h-4 mr-2" />
            <span className="text-sm">The mall never sleeps...</span>
          </div>
          <div className="text-sm italic">Visitors: ∞</div>
        </div>
      </div>

      {/* Understudy Dialog */}
      <AlertDialog open={showUnderstudy}>
        <AlertDialogContent className="bg-slate-900 border border-blue-500 p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-400">The Understudy Speaks</h3>
            <p className="text-slate-400 mb-4">
              "Am I not ready? Or have I been ready all along, waiting in these shadows you call a stage?"
            </p>
            <button 
              onClick={() => setShowUnderstudy(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Step back into the shadows
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AtrimBelowInterface;
