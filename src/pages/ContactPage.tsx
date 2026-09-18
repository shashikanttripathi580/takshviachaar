import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';


export const ContactPage: React.FC = () => {
  const { showToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Form Incomplete', 'Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitted(true);
    showToast(
      'Message Received! 🙏',
      'Thank you for reaching out to Takshvi Achaar. Our kitchen team will respond within 24 hours.',
      'success'
    );
    setForm({
      name: '',
      email: '',
      phone: '',
      topic: 'General Inquiry',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const faqs = [
    {
      q: 'Why do you use cold-pressed mustard oil instead of refined oil?',
      a: 'Authentic Indian pickling has relied on Kachi Ghani (cold-pressed) mustard oil for thousands of years. It possesses natural allyl isothiocyanate—a potent anti-microbial agent that acts as nature’s preservative, preventing spoilage without needing chemical sodium benzoate. Furthermore, its pungent aroma gives North Indian pickles their signature kick.',
    },
    {
      q: 'How should I preserve the pickle once the glass jar is opened?',
      a: 'Keep the jar tightly capped in a cool and dry pantry. Never use a wet spoon or touch with damp hands. For oil-based pickles, gently tap the sides so that the fruit pieces remain coated in oil. Sunlight-fermented pickles thrive at ambient room temperature and do not need refrigeration unless specified.',
    },
    {
      q: 'What is the shelf life of Takshvi Achaar pickles?',
      a: 'Most of our oil-based pickles (Aam, Mirchi, Mix, Lahsun) have a guaranteed shelf life of 12 months from manufacturing. Our oil-free sun-cured Nimbu Achaar has a shelf life of 18+ months—in fact, traditional lemon pickle gets richer, darker, and more therapeutic with time!',
    },

    {
      q: 'How do you ensure the glass jars don’t break during shipping?',
      a: 'We take packaging very seriously! Every glass jar is wrapped in multi-layer biodegradable honeycomb protective sleeves, sealed in airtight bubble chambers, and placed in heavy-duty corrugated cartons tested for impact. In the rare event of transit damage, we offer 100% free immediate replacement.',
    },
    {
      q: 'Do you offer custom corporate gifting or wedding favours?',
      a: 'Yes! We frequently customize miniature gift hampers, wooden crates, and festive terracotta sets for Diwali, corporate rewards, and Indian wedding favours. Please select "Bulk / Wedding Gifting" in our contact form or ping us on WhatsApp.',
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7] min-h-screen animate-fade-in space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-[#8B1E1E] tracking-widest uppercase bg-[#8B1E1E]/10 px-3.5 py-1.5 rounded-full">
          We’d Love To Hear From You
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold text-[#2B2118]">
          Contact Takshvi Achaar
        </h1>
        <p className="text-base text-[#6B5E51] max-w-xl mx-auto">
          Whether you have a query about a recipe, your order shipment, or custom festive gifting, our family is here to assist you.
        </p>
      </div>

      {/* Main Grid: Support Cards & Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Kitchen Workshop */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Card */}
            <a
              href="https://wa.me/919009624621"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-6 flex items-start gap-4 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Instant Support
                </span>
                <h3 className="font-serif-heading text-lg font-bold text-[#2B2118]">
                  Chat with Us on WhatsApp
                </h3>
                <p className="text-xs text-[#6B5E51]">
                  Available Monday – Saturday, 9:00 AM – 7:00 PM IST for instant ordering assistance.
                </p>
                <span className="text-xs font-bold text-emerald-700 underline block pt-1">
                  9009624621 →
                </span>
              </div>
            </a>

            {/* Email & Phone Cards */}
            <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 space-y-5 shadow-xs">
              <h3 className="font-serif-heading text-lg font-bold text-[#2B2118] border-b border-[#EADCC9] pb-3">
                Customer Care Channels
              </h3>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#2B2118] block">Email Us</span>
                  <a
                    href="mailto:productbyhap@gmail.com"
                    className="text-xs text-[#8B1E1E] font-medium hover:underline"
                  >
                    productbyhap@gmail.com
                  </a>
                  <p className="text-[11px] text-stone-400 mt-0.5">Responses within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#2B2118] block">Direct Helpline</span>
                  <a
                    href="tel:9009624621"
                    className="text-xs text-[#8B1E1E] font-medium hover:underline"
                  >
                    9009624621
                  </a>
                  <p className="text-[11px] text-stone-400 mt-0.5">Mon – Sat, 10 AM to 6 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#2B2118] block">Kitchen Workshop & Dispatch</span>
                  <p className="text-xs text-[#6B5E51] leading-relaxed">
                    MR-9, Mechanic Nagar, Indore, Madhya Pradesh - 452010
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#EADCC9] p-6 sm:p-10 shadow-xs space-y-6">
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#2B2118]">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E51] mt-1">
                  Have feedback or question about our pickles? Fill the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                      Subject Topic
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Order Tracking & Shipping</option>
                      <option>Bulk / Wedding Gifting</option>
                      <option>Recipe Feedback / Praise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2118] uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your query or feedback here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6F0] border border-[#EADCC9] rounded-xl focus:outline-none focus:border-[#8B1E1E] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-[#8B1E1E] hover:bg-[#731818] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  <span>{isSubmitted ? 'Message Sent! 🙏' : 'Send Message'}</span>
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2B2118]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EADCC9] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-heading text-base font-bold text-[#2B2118] hover:text-[#8B1E1E] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#8B1E1E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#6B5E51] leading-relaxed border-t border-[#EADCC9]/50 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
