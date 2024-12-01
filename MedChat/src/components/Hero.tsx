import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { ChatInterface } from './hero/ChatInterface';
import { HeroBackground } from './hero/HeroBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroContent />
          <ChatInterface />
        </div>
      </div>
    </section>
  );
}