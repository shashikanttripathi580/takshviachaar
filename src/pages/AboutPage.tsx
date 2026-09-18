import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Heart, ArrowRight, History } from 'lucide-react';


export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  const processSteps = [
    {
      step: '01',
      title: 'Orchard Hand-Plucking',
      hindi: 'बगीचों से ताजे फल',
      desc: 'We partner directly with family farms in Uttar Pradesh and Maharashtra for tart Ramkela mangoes and thin-skin Kagzi lemons.',
      image: '/images/mango-pickle-container.jpg',
    },
    {
      step: '02',
      title: 'Sun-Drying on Cotton Sheets',
      hindi: 'धूप में सुखाई',
      desc: 'Freshly cut fruits are salted and spread on unbleached muslin sheets on rooftops to naturally release excess moisture.',
      image: '/images/lemon-mitha-container.jpg',
    },
    {
      step: '03',
      title: 'Hand-Pounded Spices',
      hindi: 'कुटे हुए खड़े मसाले',
      desc: 'Whole fenugreek, yellow mustard, fennel, and hing are gently dry-roasted in heavy iron kadhais and coarsely stone-ground.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    },
    {
      step: '04',
      title: '21-Day Barni Aging',
      hindi: 'बरनी में प्राकृतिक फर्मेंटेशन',
      desc: 'Packed into glazed ceramic martabans with pure cold-pressed mustard oil, basking in the sun until flavours harmonize.',
      image: '/images/dates-pickle-container.jpg',
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7] min-h-screen animate-fade-in space-y-16 sm:space-y-24">
      {/* Hero Narrative */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#8B1E1E]/10 text-[#8B1E1E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <History className="w-3.5 h-3.5" />
          <span>Four Decades of Culinary Devotion</span>
        </div>

        <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2118] tracking-tight leading-tight">
          Reviving The Soul of <br />
          <span className="text-[#8B1E1E]">Indian Pickle-Making</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6B5E51] leading-relaxed max-w-3xl mx-auto">
          In every Indian family, there is an unspoken truth: nothing completes a hot paratha or a humble bowl of dal-chawal like a spoonful of homemade achaar. Takshvi Achaar was born from our burning desire to protect this timeless culinary heritage from commercial shortcuts.
        </p>

      </section>

      {/* Origin Story with Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85"
                alt="Traditional Indian Spice Grinding and Kitchen Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8B1E1E] text-white p-6 rounded-3xl shadow-xl hidden sm:block max-w-xs border-2 border-amber-300">
              <p className="font-serif-heading text-xl font-bold text-amber-300">Dadi’s Terrace</p>
              <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                Where glazed barnis sat in neat rows under white muslin cloths throughout the warm Indian summer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#D97706] tracking-widest uppercase">
              The Heritage Behind The Jar
            </span>

            <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
              Why Real Achaar Takes Time
            </h2>

            <p className="text-sm sm:text-base text-[#6B5E51] leading-relaxed">
              Commercial supermarkets are flooded with industrial pickles made in factories within 24 hours. They use synthetic acetic acid (chemical vinegar) to mimic sourness and artificial preservatives to extend shelf life.
            </p>

            <p className="text-sm text-[#6B5E51] leading-relaxed">
              At <strong>Takshvi Achaar</strong>, we refuse to cut corners. Natural pickling requires patience. It requires 100% pure cold-pressed Kachi Ghani mustard oil, which acts as nature’s most potent antioxidant and preservative. It requires stone-ground spices roasted on gentle heat. And most importantly, it requires weeks of warm sunshine for the fruit peels to absorb the masala to the bone.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-[#8B1E1E] pl-4">
                <span className="font-serif-heading text-2xl font-bold text-[#8B1E1E]">100%</span>
                <p className="text-xs text-[#6B5E51] mt-0.5">Cold-Pressed Mustard Oil</p>
              </div>
              <div className="border-l-2 border-[#8B1E1E] pl-4">
                <span className="font-serif-heading text-2xl font-bold text-[#8B1E1E]">0%</span>
                <p className="text-xs text-[#6B5E51] mt-0.5">Chemicals or Vinegar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Process Grid */}
      <section className="bg-[#FAF6F0] py-16 sm:py-20 border-y border-[#EADCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8B1E1E] uppercase tracking-wider bg-[#8B1E1E]/10 px-3 py-1 rounded-full">
              Parampara • The Sacred Process
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118] mt-3">
              How We Craft Every Batch
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E51] mt-2">
              An unhurried journey from organic orchard trees to your dining table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-[#EADCC9] overflow-hidden shadow-xs hover:shadow-lg transition-all"
              >
                <div className="aspect-4/3 overflow-hidden bg-stone-100">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-heading text-2xl font-extrabold text-[#D97706]">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8B1E1E] bg-[#8B1E1E]/10 px-2 py-0.5 rounded">
                      {step.hindi}
                    </span>
                  </div>
                  <h4 className="font-serif-heading text-base font-bold text-[#2B2118]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#6B5E51] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Kitchen Pledge */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#8B1E1E]/10 flex items-center justify-center text-[#8B1E1E] mx-auto">
          <Heart className="w-7 h-7 fill-[#8B1E1E]" />
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#2B2118]">
          "We only bottle what we proudly feed our own children."
        </h2>

        <p className="text-sm sm:text-base text-[#6B5E51] leading-relaxed max-w-2xl mx-auto">
          Every batch is personally taste-tested by our mother and master picklers before sealing. If the sourness isn’t just right, or the mustard aroma doesn't sing, it doesn't leave our workshop. That is our promise to you.
        </p>

        <div className="pt-4">
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Taste The Difference (Shop Now)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
