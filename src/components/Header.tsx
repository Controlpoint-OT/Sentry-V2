import React, { useState } from 'react';
import { Shield, LogIn, PlayCircle, RocketIcon, X, Mail, Lock, User, Building2, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DemoRequestModal } from './DemoRequestModal';

export function Header() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="text-2xl font-bold text-white">Sentry</span>
            </Link>
            <nav className="flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link 
                    to="/" 
                    className={`${location.pathname === '/' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/product" 
                    className={`${location.pathname === '/product' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/threats" 
                    className={`${location.pathname === '/threats' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  >
                    Threats
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pricing" 
                    className={`${location.pathname === '/pricing' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </button>
                <button 
                  onClick={() => setShowDemoModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  <PlayCircle className="h-5 w-5" />
                  <span>Request Demo</span>
                </button>
                <Link 
                  to="/pricing"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                  <RocketIcon className="h-5 w-5" />
                  <span>Get Started</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Login/Signup Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-gray-400">
                {isLogin 
                  ? 'Our platform is still in development. Please enter your credentials to join our Beta program.'
                  : 'Join our Beta program to enhance the security of your OT environment.'}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              <div className="text-center space-y-2">
                {isLogin && (
                  <a href="#" className="text-cyan-500 hover:text-cyan-400 text-sm block">
                    Forgot your password?
                  </a>
                )}
                <button 
                  onClick={toggleForm}
                  className="text-cyan-500 hover:text-cyan-400 text-sm"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
}