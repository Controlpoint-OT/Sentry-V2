import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-400">Powered by ControlPoint</p>
        </div>
        <div className="flex justify-end space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}