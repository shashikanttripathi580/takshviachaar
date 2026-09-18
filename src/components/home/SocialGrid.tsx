import React from 'react';
import { Heart } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const SocialGrid: React.FC = () => {
  const posts = [
    {
      image: '/images/dates-pickle-container.jpg',
      tag: '#DatesAchaar',
      likes: '1.4k',
    },
    {
      image: '/images/garlic-pickle-container.jpg',
      tag: '#LahsunAchaar',
      likes: '1.2k',
    },
    {
      image: '/images/lemon-mitha-container.jpg',
      tag: '#LemonMitha',
      likes: '1.5k',
    },
    {
      image: '/images/lemon-khatta-container.jpg',
      tag: '#LemonKhatta',
      likes: '1.1k',
    },
    {
      image: '/images/mango-pickle-container.jpg',
      tag: '#AamKaAchaar',
      likes: '2.3k',
    },
    {
      image: '/images/combo-pickle-containers.jpg',
      tag: '#TakshviAchaar',
      likes: '1.9k',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] border-t border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-bold text-[#8B1E1E] uppercase tracking-wider mb-1">
              <InstagramIcon className="w-4 h-4 text-[#D97706]" />
              <span>@takshviachaar</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
              Follow The Taste
            </h2>
            <p className="text-sm text-[#6B5E51] mt-1">
              Tag us in your paratha breakfasts and thali spreads with #TakshviAchaar
            </p>

          </div>

          <a
            href="https://instagram.com/takshviachaar"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-[#8B1E1E] text-[#8B1E1E] hover:text-white border-2 border-[#8B1E1E] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>


        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-200 border border-[#EADCC9] cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.tag}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                <InstagramIcon className="w-6 h-6 mb-1 text-amber-300" />
                <span className="text-xs font-bold">{post.tag}</span>
                <div className="flex items-center gap-1 text-[11px] text-stone-200 mt-1">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <span>{post.likes}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
