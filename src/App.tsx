import React, { useState } from 'react';
import {
  Brain,
  MessageSquare,
  Target,
  Zap,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Mic,
  User,
  Edit3,
  Send
} from 'lucide-react';



function App() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      try {
        const url = "https://script.google.com/macros/s/AKfycbyLuRMrp_zGUimDVAI8koBwPAsZoV1_97eFD4s3qXZ-2bM86d2ob6DhDpVAP6kKY3sZXA/exec";

        console.log(url);
        if (!url) {
          throw new Error('Missing REACT_APP_SHEET_WEB_APP_URL');
        }
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email }),
        });
        const json = await res.json();
        if (json.result === 'success') {
          setIsSubmitted(true);
          setTimeout(() => { setIsSubmitted(false); setEmail('') }, 3000);
        } else {
          alert('Submission error: ' + (json.msg || res.status));
        }
      } catch (err) {
        console.error(err);
        alert('Network error.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/pingoLogo.png" alt="Pingo Logo" className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-slate-200 transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-400 hover:text-slate-200 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('waitlist')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-slate-200 transition-colors w-full text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-slate-400 hover:text-slate-200 transition-colors w-full text-left">How It Works</button>
                <button onClick={() => scrollToSection('waitlist')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300 w-full">
                  Join Waitlist
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Launching Soon
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Your LinkedIn
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Twin</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Stop sounding generic. Pingo creates your digital twin and writes
              <span className="font-semibold text-slate-800"> hyper-personalized LinkedIn content</span> that sounds like you on your best day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Get Premium Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex items-center text-slate-600">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                <span>No generic ChatGPT content</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">30min</div>
                <div className="text-slate-600">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">100%</div>
                <div className="text-slate-600">Your Voice</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">0</div>
                <div className="text-slate-600">Generic Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Brain className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-4xl font-bold text-slate-800 mb-6">What is a Digital Twin?</h2>
            </div>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              It's not a clone. It's <span className="font-semibold text-slate-800">your voice, your stories, your experiences</span>—captured once and then recreated infinitely.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                "Just speak into Pingo. Answer a few deep, intentional questions.
                We'll transcribe and train your Digital Twin in minutes. The result?
                <span className="font-semibold"> Content that sounds like you on your best day—with none of the effort.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">What Pingo Can Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for people who hate content that sounds like ChatGPT wrote it.
              Pingo doesn't give you templates—it gives you yourself, amplified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Hyper-Personalized Posts</h3>
              <p className="text-slate-600">Write LinkedIn posts that capture your unique voice and perspective perfectly.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Capture Your Tone</h3>
              <p className="text-slate-600">Learn your journey, experiences, and unique point of view automatically.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Goal-Focused Content</h3>
              <p className="text-slate-600">Build content around your goals—visibility, credibility, and lead generation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Gets Smarter</h3>
              <p className="text-slate-600">The more you use Pingo, the better it becomes at understanding your style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Who It's For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Founders</h3>
              <p className="text-slate-600">Tired of sounding generic and want authentic voice</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Edit3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Creators</h3>
              <p className="text-slate-600">With no time to post but need consistent content</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Consultants</h3>
              <p className="text-slate-600">Coaches and operators building in public</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Professionals</h3>
              <p className="text-slate-600">Who want to sound smart without spending hours writing</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four simple steps to get your digital twin creating amazing LinkedIn content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Talk to Pingo</h3>
              <p className="text-slate-600">Answer a set of guided voice prompts about your experience and style</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-purple-600">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Train Your Twin</h3>
              <p className="text-slate-600">Our AI listens, learns, and stores your unique writing style and voice</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-green-600">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Get Your Posts</h3>
              <p className="text-slate-600">Pingo generates LinkedIn posts based on exactly what you would say</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-orange-600">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Edit & Publish</h3>
              <p className="text-slate-600">You're in complete control. Edit, publish, or schedule as you prefer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Amplify Your Voice?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join the waitlist and get premium access when we launch.
              No more generic content—just you, amplified.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-slate-800 text-lg placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Added!
                    </div>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Premium early access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Launch notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <img src="/pingoLogoNoBG.png" style={{ "width": "100%", "height": "100%" }} alt="Pingo Logo" className="w-10 h-10 text-white" />
              </div>
              <span className="text-xl font-bold">Pingo Labs</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-300 mb-2">
                Built for people who hate generic content
              </p>
              <p className="text-slate-400 text-sm">
                © 2025 Pingo. All rights reserved.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              Pingo doesn't give you templates. It gives you yourself, amplified.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;