'use client';

import { ArrowUpRight, Play } from 'lucide-react';

export default function AnalyticsSection() {
  const topCountries = [
    { country: 'United Kingdom', percentage: '13.1%' },
    { country: 'United States', percentage: '11.1%' },
    { country: 'Germany', percentage: '5.6%' },
    { country: 'France', percentage: '3.6%' },
    { country: 'Italy', percentage: '3.6%' },
    { country: 'Canada', percentage: '3.2%' },
    { country: 'Poland', percentage: '3.2%' },
    { country: 'Australia', percentage: '3.0%' },
    { country: 'Brazil', percentage: '2.4%' },
    { country: 'Philippines', percentage: '2.3%' },
    { country: 'Other', percentage: '48.9%' },
  ];

  // Add your top-performing reels/posts links here
  const topReels = [
    {
      title: "Expedition through Palawan",
      views: "4.2M",
      url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE"
    },
    {
      title: "A kendama brand sponsor highlight",
      views: "25.1K Reach",
      url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE"
    },
    {
      title: "Is anyone else's jaw on the floor...",
      views: "23.5K Reach",
      url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Audience & Performance</span>
          <h2 className="text-3xl font-bold mt-2">Channel Impact (28 Days)</h2>
          <p className="text-earth-sand/80 mt-1">Verified metrics across recent global storytelling campaigns.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md text-sm text-earth-muted">
            Reporting Period: <span className="text-earth-sand font-medium">Jun 21 – Jul 18</span>
          </div>
          <a 
            href="https://www.instagram.com/jarofhibiscus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-earth-accent text-earth-dark font-medium hover:bg-earth-sand transition-colors text-sm"
          >
            <span>View Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-2">
          <p className="text-sm font-medium text-earth-muted">Post Views</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-bold text-earth-sand">16.9M</h3>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">+280.8%</span>
          </div>
          <p className="text-xs text-earth-muted">+12.5M vs previous period</p>
        </div>

        <div className="p-6 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-2">
          <p className="text-sm font-medium text-earth-muted">Total Viewers</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-bold text-earth-sand">7.7M</h3>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">+185.2%</span>
          </div>
          <p className="text-xs text-earth-muted">+5M new reach</p>
        </div>

        <div className="p-6 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-2">
          <p className="text-sm font-medium text-earth-muted">Total Likes & Shares</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-bold text-earth-sand">2.5M</h3>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">+375.2%</span>
          </div>
          <p className="text-xs text-earth-muted">76.1K community shares</p>
        </div>

        <div className="p-6 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-2">
          <p className="text-sm font-medium text-earth-muted">Profile Views</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-bold text-earth-sand">354.5K</h3>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30">+240.7%</span>
          </div>
          <p className="text-xs text-earth-muted">+250.5K conversions</p>
        </div>
      </div>

      {/* Global Audience Breakdown & Top Reels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Global Audience */}
        <div className="lg:col-span-2 p-8 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-earth-sand">Global Audience Locations (Followers)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {topCountries.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-earth-sand font-medium">{item.country}</span>
                  <span className="text-earth-muted font-semibold">{item.percentage}</span>
                </div>
                <div className="h-2 w-full bg-earth-card/80 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-earth-accent rounded-full transition-all duration-500" 
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Top Reels Links */}
        <div className="p-8 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 text-earth-sand">Top Performing Reels</h3>
            <p className="text-xs text-earth-muted mb-6">Click to watch high-impact viral storytelling moments on Instagram.</p>
            <div className="space-y-3">
              {topReels.map((reel, index) => (
                <a
                  key={index}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-earth-card/40 border border-earth-muted/10 hover:border-earth-accent/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-earth-accent/10 flex items-center justify-center text-earth-accent group-hover:bg-earth-accent group-hover:text-earth-dark transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-earth-sand group-hover:text-earth-accent transition-colors line-clamp-1">{reel.title}</h4>
                      <span className="text-xs text-earth-muted">{reel.views}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-earth-muted group-hover:text-earth-sand transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-earth-card/50 text-center">
            <span className="text-xs text-earth-muted">Managed via @jarofhibiscus analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}