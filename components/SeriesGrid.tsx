'use client';

export default function SeriesGrid() {
  const seriesList = [
    {
      title: "EGYPT with Last to West",
      category: "Expedition Series",
      description: "Cinematic storytelling capturing the timeless landscapes and culture of Egypt.",
      tag: "1M+ Views",
      imageGradient: "from-amber-900/40 to-earth-card",
    },
    {
      title: "Mindanao Loop",
      category: "Adventure Travel",
      description: "Exploring remote regions, raw landscapes, and local communities across the Philippines.",
      tag: "Featured Series",
      imageGradient: "from-emerald-900/40 to-earth-card",
    },
    {
      title: "Casting Strangers in Mini Movies",
      category: "Social Experiment / Narrative",
      description: "Turning everyday travelers and locals encountered on the road into cinematic characters.",
      tag: "Viral Format",
      imageGradient: "from-orange-900/40 to-earth-card",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {seriesList.map((item, index) => (
        <div 
          key={index} 
          className="group relative bg-earth-card rounded-2xl overflow-hidden border border-earth-muted/20 hover:border-earth-accent/50 transition-all flex flex-col justify-between p-6 shadow-lg"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.imageGradient} opacity-50 z-0 pointer-events-none`} />
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest uppercase text-earth-accent bg-earth-dark/80 px-3 py-1 rounded-full border border-earth-muted/20">
                {item.category}
              </span>
              <span className="text-xs text-earth-muted font-medium">{item.tag}</span>
            </div>
            <h3 className="text-xl font-bold text-earth-sand group-hover:text-earth-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-earth-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-earth-muted/10 flex items-center justify-between">
            <span className="text-xs font-semibold text-earth-sand tracking-wide">Explore Series</span>
            <span className="text-earth-accent group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ))}
    </div>
  );
}