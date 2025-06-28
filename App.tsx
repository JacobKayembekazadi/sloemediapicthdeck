
import React, { useState, useEffect, useCallback } from 'react';
import { ThreeDBackground } from './components/ThreeDBackground';
import { Navigation } from './components/Navigation';
import { Slide } from './components/Slide';
import { CheckmarkIcon, MapIcon, CogIcon, TrendingUpIcon, ArrowUpIcon, QuoteIcon, BoltIcon, DocumentIcon, SyncIcon, SloeLogoIcon } from './components/Icons';

const HighlightText = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-text">{children}</span>
);

const TimelineItem = ({ step, title, description, isLast = false }: { step: string; title: string; description: string; isLast?: boolean }) => (
    <div className="relative pl-10 pb-8">
        {!isLast && <div className="absolute left-[0.4rem] top-2 w-px h-full bg-slate-700"></div>}
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400"></div>
        <p className="text-xs text-sky-400 font-bold tracking-wider">{step}</p>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </div>
);

const App: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    
    const slides: React.ReactNode[] = [
        // Slide 1
        <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 mobile-text-4xl">The <HighlightText>AI Growth Engine</HighlightText></h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text-lg">Scalable Ad Systems That Multiply Sales — No Content Creation Required</p>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl inline-block p-4 sm:p-6 mobile-p-4">
                 <p className="text-xl sm:text-2xl font-bold text-white mb-4 mobile-text-xl">Sloe Media</p>
                 <a href="https://calendly.com/electrofyne/30min" target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block text-sm sm:text-base">
                     Book a Free Strategy Call
                 </a>
                 <p className="text-xs sm:text-sm text-slate-500 mt-4">mediasloe@gmail.com | @sloemedia</p>
            </div>
        </div>,
        // Slide 2
        <div className="max-w-5xl w-full px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 mobile-text-3xl">Engineered For Your Business Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left mobile-gap-6">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 mobile-p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mobile-text-2xl">🧢 For Product-Based Brands</h3>
                    <p className="text-slate-400 mb-4 text-sm sm:text-base mobile-text-sm">eCommerce, Fashion, Beauty, DTC</p>
                    <ul className="space-y-3 text-slate-300 text-base sm:text-lg mobile-text-base">
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>Solve low ROAS & creative burnout</span></li>
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>Optimize with UGC, retargeting & automations</span></li>
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>Focus on ROAS, Cost per Purchase, AOV</span></li>
                    </ul>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 mobile-p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mobile-text-2xl">🧠 For Service-Based Clients</h3>
                     <p className="text-slate-400 mb-4 text-sm sm:text-base mobile-text-sm">Coaches, Personal Brands, Info Products</p>
                    <ul className="space-y-3 text-slate-300 text-base sm:text-lg mobile-text-base">
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>End inconsistent income & manual lead gen</span></li>
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>Automate lead capture, qualification & closing</span></li>
                        <li className="flex items-start"><CheckmarkIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0 mt-0.5" /><span>Focus on CPL, Booking %, and CVR</span></li>
                    </ul>
                </div>
            </div>
        </div>,
        // Slide 3
        <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">AI-Powered Growth, Human-Centric Impact</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <div>
                     <h3 className="text-2xl font-bold mb-2"><HighlightText>AI for Precision & Scale</HighlightText></h3>
                     <p className="text-slate-300">Our proprietary AI systems analyze market trends, optimize ad placements, and identify high-converting audiences with unmatched speed. This allows us to rapidly prototype, test, and scale growth initiatives for you.</p>
                </div>
                 <div>
                     <h3 className="text-2xl font-bold mb-2"><HighlightText>Human for Vision & Resonance</HighlightText></h3>
                     <p className="text-slate-300">Our team of seasoned brand strategists interpret AI insights to craft compelling brand narratives, provide discerning creative direction, and design offers that genuinely connect with your audience and drive conversions.</p>
                </div>
            </div>
        </div>,
        // Slide 4
        <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Flagship Solution: <HighlightText>ScaleKit</HighlightText></h2>
            <p className="text-xl text-slate-300 mb-12">The comprehensive, done-for-you system engineered to build and accelerate your brand’s growth.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
                    <div className="bg-slate-800 p-4 rounded-full mb-4 border border-slate-700"><MapIcon className="w-10 h-10 text-sky-400" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Offers that Print</h3>
                    <p className="text-slate-400 flex-grow">We engineer irresistible hooks, bundles, and upsells, ensuring your product is positioned for maximum conversion and profitability.</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border-2 border-sky-500 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl shadow-sky-500/10">
                    <div className="bg-slate-800 p-4 rounded-full mb-4 border border-slate-700"><CogIcon className="w-10 h-10 text-sky-400" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Content that Clicks</h3>
                    <p className="text-slate-400 flex-grow">We provide precise creative direction for short-form video, UGC, and product shots optimized for paid ad performance.</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
                    <div className="bg-slate-800 p-4 rounded-full mb-4 border border-slate-700"><TrendingUpIcon className="w-10 h-10 text-sky-400" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Funnels that Convert</h3>
                    <p className="text-slate-400 flex-grow">We build and optimize the entire customer journey, from ad click to landing page to checkout, maximizing your CVR.</p>
                </div>
            </div>
        </div>,
        // Slide 5
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">ScaleKit: Included Services</h2>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-left">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 text-lg">
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />Offer Strategy & Positioning</li>
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />AI-Powered Ad Creative Direction</li>
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />Paid Ads Management (Ad Science)</li>
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />Landing Page & Funnel Optimization</li>
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />Brand Positioning Consulting</li>
                    <li className="flex items-center"><CheckmarkIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />AI-Automated Reporting Dashboards</li>
                </ul>
            </div>
        </div>,
        // Slide 6
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Our Model: The AI Growth Operator</h2>
            <div className="text-left">
                <TimelineItem step="STEP 1" title="Audit" description="Deep analysis of your product-market fit, ad performance, and funnel gaps." />
                <TimelineItem step="STEP 2" title="Strategy" description="We map out messaging angles, high-impact hooks, and provide precise creative briefs." />
                <TimelineItem step="STEP 3" title="Media Buying" description="We run, optimize, and scale paid ads across Meta, TikTok, and Google with a relentless focus on performance." />
                <TimelineItem step="STEP 4" title="Team Buildout (Optional)" description="If needed, we hire or plug in specialized freelance creators into your workflow." />
                <TimelineItem step="STEP 5" title="Reporting & Scaling" description="Weekly analytics, ROAS insights, and a clear scaling roadmap via automated dashboards." isLast={true} />
            </div>
        </div>,
        // Slide 7
        <div className="max-w-6xl w-full">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">The "No Content Creation" Advantage</h2>
             <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <h3 className="font-bold text-xl text-white mb-2">1. AI-Powered Briefs</h3>
                    <p className="text-slate-400">Our system generates data-driven creative briefs, telling us exactly what content will perform best for your offer.</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <h3 className="font-bold text-xl text-white mb-2">2. Resourceful Execution</h3>
                    <p className="text-slate-400">We direct specialized freelance creators or leverage your existing brand assets. The creative burden is on us.</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <h3 className="font-bold text-xl text-white mb-2">3. Performance-Led Scaling</h3>
                    <p className="text-slate-400">We manage hook rotations and creative testing to scale performance without requiring a constant flow of new content from you.</p>
                </div>
             </div>
             <div className="mt-12 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 inline-block">
                <p className="text-xl md:text-2xl italic text-white">“I’ll bring in the creators, you don’t need to be on camera. We systemize it for you.”</p>
             </div>
        </div>,
        // Slide 8
        <div className="max-w-6xl w-full px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 mobile-text-3xl">Our Offers</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 sm:gap-8 mobile-gap-6">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 w-full max-w-sm text-left flex flex-col mobile-p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mobile-text-2xl">🚀 ScaleKit Sprint</h3>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white my-4 mobile-text-3xl">$1,500 <span className="text-base sm:text-lg font-normal text-slate-400 mobile-text-base">/one-time</span></p>
                    <p className="text-slate-400 mb-6 flex-grow text-sm sm:text-base mobile-text-sm">A low-risk audit & strategy one-off to install the foundations and get immediate clarity.</p>
                    <ul className="space-y-3 text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base mobile-text-sm mobile-mb-6">
                         <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Complete funnel & offer audit</li>
                         <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />3x AI-powered content briefs</li>
                         <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Initial campaign structure setup</li>
                         <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Base automation rules installed</li>
                    </ul>
                     <a href="https://calendly.com/electrofyne/30min" target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-colors text-center block text-sm sm:text-base">Choose Sprint</a>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border-2 border-violet-500 rounded-3xl p-6 sm:p-8 w-full max-w-sm text-left flex flex-col relative transform lg:scale-105 mobile-p-6">
                    <div className="absolute -top-4 right-4 sm:right-6 bg-purple-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full">POPULAR</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mobile-text-2xl">📈 Full ScaleKit System</h3>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white my-4 mobile-text-3xl">$3,750 <span className="text-base sm:text-lg font-normal text-slate-400 mobile-text-base">/mo</span></p>
                    <p className="text-slate-400 mb-6 flex-grow text-sm sm:text-base mobile-text-sm">Our complete Done-For-You growth system for continuous scaling. (Packages from $2.5k-$5k)</p>
                    <ul className="space-y-3 text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base mobile-text-sm mobile-mb-6">
                        <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Weekly briefs & optimization</li>
                        <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Multi-platform ad management</li>
                        <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Advanced retargeting & automation</li>
                        <li className="flex items-center"><CheckmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />Live reporting dashboard</li>
                    </ul>
                     <a href="https://calendly.com/electrofyne/30min" target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-colors text-center block text-sm sm:text-base">Get Started</a>
                </div>
            </div>
        </div>,
        // Slide 9
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Example 30-Day Roadmap</h2>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                    <div className="md:border-r border-slate-700 md:pr-4">
                        <p className="text-sm font-bold text-sky-400">WEEK 1</p>
                        <h4 className="text-lg font-semibold text-white mt-1">Foundation</h4>
                        <p className="text-slate-400 text-sm mt-2">Audit, funnel map, and first creative brief creation.</p>
                    </div>
                     <div className="md:border-r border-slate-700 md:pr-4">
                        <p className="text-sm font-bold text-sky-400">WEEK 2</p>
                        <h4 className="text-lg font-semibold text-white mt-1">Buildout</h4>
                        <p className="text-slate-400 text-sm mt-2">Campaign setup, tracking installation, and creative delivery.</p>
                    </div>
                     <div className="md:border-r border-slate-700 md:pr-4">
                        <p className="text-sm font-bold text-sky-400">WEEK 3</p>
                        <h4 className="text-lg font-semibold text-white mt-1">Launch</h4>
                        <p className="text-slate-400 text-sm mt-2">Ad launch, data collection, and early optimization.</p>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-sky-400">WEEK 4</p>
                        <h4 className="text-lg font-semibold text-white mt-1">Analysis</h4>
                        <p className="text-slate-400 text-sm mt-2">Scale decisions, winner analysis, and automation installs.</p>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-slate-400 italic">Optional: 90-day expansion roadmaps available for larger clients.</p>
        </div>,
        // Slide 10
        <div className="max-w-4xl w-full px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 mobile-text-3xl">We Focus On Measurable Impact</h2>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 mobile-p-6">
                <div className="bg-slate-900 rounded-lg p-4 sm:p-6 border border-slate-700 mb-4 sm:mb-6 mobile-p-4 mobile-mb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-white mobile-text-lg">KPI Dashboard</h3>
                        <span className="text-xs sm:text-sm text-slate-400 mobile-text-sm">Real-Time Data</span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mobile-gap-4">
                        <div className="text-center">
                            <p className="text-xs sm:text-sm text-slate-400 mobile-text-sm">ROAS</p>
                            <p className="text-2xl sm:text-3xl font-bold text-green-400 flex items-center justify-center mobile-text-2xl">5.0x <ArrowUpIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-1" /></p>
                            <p className="text-xs text-slate-500">from 2.2x</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm text-slate-400 mobile-text-sm">Cost per Purchase</p>
                            <p className="text-2xl sm:text-3xl font-bold text-white mobile-text-2xl">$24.20</p>
                            <p className="text-xs text-slate-500">target: $25</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm text-slate-400 mobile-text-sm">Booking %</p>
                            <p className="text-2xl sm:text-3xl font-bold text-white mobile-text-2xl">15%</p>
                            <p className="text-xs text-slate-500">from leads</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm text-slate-400 mobile-text-sm">Funnel CVR</p>
                            <p className="text-2xl sm:text-3xl font-bold text-white mobile-text-2xl">4.2%</p>
                             <p className="text-xs text-slate-500">+1.8% lift</p>
                        </div>
                    </div>
                </div>
                <blockquote className="text-2xl italic text-white">“From 2.2 to <HighlightText><span className="not-italic font-semibold">5.0 ROAS</span></HighlightText> in just 21 days while lowering CPA. The system works.”</blockquote>
            </div>
        </div>,
        // Slide 11
        <div className="max-w-3xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">What Our Clients Say</h2>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative">
                <QuoteIcon className="absolute top-4 left-6 w-16 h-16 text-slate-700 opacity-50" />
                <blockquote className="text-2xl italic text-white z-10 relative">
                    “Didn’t even touch the ad manager. They built the machine, I focused on fulfillment and shipping products. This is the definition of leverage.”
                </blockquote>
                <p className="text-right mt-6 text-lg font-semibold text-slate-300">— Sarah K., Founder of Glow Skincare</p>
            </div>
        </div>,
        // Slide 12
        <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">The Sloe Media Difference</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                    <BoltIcon className="w-12 h-12 mx-auto mb-4 text-sky-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">Unrivaled Speed</h3>
                    <p className="text-slate-400">Our AI-powered systems condense traditional growth cycles, delivering accelerated results.</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                    <DocumentIcon className="w-12 h-12 mx-auto mb-4 text-sky-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">Data-Driven Precision</h3>
                    <p className="text-slate-400">Every decision is backed by predictive analytics, ensuring optimal ad spend and higher conversions.</p>
                </div>
                 <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                    <SyncIcon className="w-12 h-12 mx-auto mb-4 text-sky-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">End-to-End System</h3>
                    <p className="text-slate-400">We don't just run ads; we build and optimize the entire funnel from offer to creative to conversion.</p>
                </div>
            </div>
        </div>,
        // Slide 13
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl max-w-3xl w-full p-12 shadow-2xl shadow-sky-500/10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Let's build your<br/><HighlightText>growth engine.</HighlightText></h2>
            <p className="text-xl text-slate-300 mb-8">Book a free, no-obligation strategy call to see if we're a good fit.</p>
            <a href="https://calendly.com/electrofyne/30min" target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block text-lg">
                Book Your Free Strategy Call &rarr;
            </a>
            <div className="mt-8 text-center text-slate-400">
                <p>or contact us directly:</p>
                <p className="font-semibold text-white mt-1">mediasloe@gmail.com | IG: @sloemedia</p>
            </div>
        </div>,
        // Slide 14
        <div className="text-center">
            <SloeLogoIcon className="w-16 h-16 mx-auto mb-4 text-sky-400" />
            <h2 className="text-6xl font-bold text-white mb-2">Sloe Media</h2>
            <p className="text-xl text-slate-400">Systemized Growth. Simplified.</p>
        </div>
    ];

    const totalSlides = slides.length;

    const goToSlide = useCallback((slideNumber: number) => {
        if (slideNumber >= 1 && slideNumber <= totalSlides) {
            setCurrentSlide(slideNumber);
        }
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev < totalSlides ? prev + 1 : prev));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev > 1 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextSlide, prevSlide]);

    return (
        <>
            <ThreeDBackground />
            <div className="relative w-full h-screen overflow-hidden">
                {slides.map((slideContent, index) => (
                    <Slide key={index} isActive={currentSlide === index + 1}>
                        {slideContent}
                    </Slide>
                ))}
            </div>
            <Navigation
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onPrev={prevSlide}
                onNext={nextSlide}
                onGoTo={goToSlide}
            />
        </>
    );
};

export default App;
