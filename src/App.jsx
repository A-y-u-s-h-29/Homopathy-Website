// App.jsx
import React, { useState, useEffect } from 'react';
import video1 from "./assets/v1.mp4";
import video2 from "./assets/v2.mp4";
import video3 from "./assets/v3.mp4";
import video4 from "./assets/v4.mp4";
import video5 from "./assets/v5.mp4";
import video6 from "./assets/v6.mp4";
import video7 from "./assets/v7.mp4";
import video8 from "./assets/v8.mp4";

import { 
  Phone, MapPin, Clock, Mail, Star, Award, 
  Users, Shield, Calendar, ChevronRight, 
  Quote, Stethoscope, Heart, Brain, 
  Bone, Activity, Droplets, Thermometer,
  Wind, Baby, Smartphone,
  Wifi, Accessibility,
  Droplet, Moon, FlaskConical,
  CheckCircle, Sparkles, ThumbsUp,
  Share2, Heart as HeartIcon, MessageCircle,
  Menu, X, Facebook, Twitter, Instagram,
  Youtube, Linkedin, ArrowRight,
  ExternalLink, Globe, Navigation,
  Home as HomeIcon, User, PhoneCall,
  Map, Target, Zap, Cloud,
  Thermometer as ThermometerIcon, Wind as WindIcon,
  Sunrise, Sunset, Trees, Flower, Leaf,
  Sprout, Package, Truck, Gift,
  Search, Filter, Sliders,
  Lock, Key, Video, Camera,
  Play, Volume2, Monitor, Printer,
  Database, Cpu, BatteryCharging, Power,
  Cloud as CloudIcon, CloudRain, CloudSnow,
  CloudLightning, Haze, Snowflake, CloudFog,
  CloudSun, Compass, Mountain, Carrot,
  Fish, Egg, Milk, ChefHat,
  ShoppingCart, CreditCard, TrendingUp,
  BarChart, PieChart, Bell as BellIcon,
  Eye, FileText, Microscope, Syringe,
  AlertCircle, Coffee, Cake, Wine,
  Beer, Utensils, ShoppingBag, Box,
  Tag, Percent, LineChart, List,
  Layout, Sidebar, ToggleLeft, ToggleRight,
  EyeOff, Unlock, UserCheck, UserPlus,
  UserMinus, UserX, Mic, Headphones,
  Music, Pause, SkipBack, SkipForward,
  Volume, VolumeX, Volume1, Radio, Tv,
  Tablet, Laptop, Server, HardDrive,
  MemoryStick, Router, Satellite, Signal,
  Battery, Sun as SunIcon, Moon as MoonIcon,
  CloudOff, Droplets as DropletsIcon,
  ThermometerSun, ThermometerSnowflake,
  Tornado, CloudDrizzle,
  CloudMoon, Apple, Beef, Wheat,
  Candy, Coffee as CoffeeIcon, Truck as TruckIcon,
  Plus, Minus, ChevronLeft, ChevronDown,
  ArrowUpRight, Download, Upload,
  RefreshCw, RotateCw, ZoomIn,
  ZoomOut, Maximize, Minimize,
  XCircle, CheckSquare, Square,
  Circle, HelpCircle, Info,
  ChevronUp
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('All');
  const [activeReview, setActiveReview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  // Handle scroll for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${section}`) {
                link.classList.add('text-cyan-600', 'font-semibold', 'bg-cyan-50');
                link.classList.remove('text-gray-600', 'bg-transparent');
              } else {
                link.classList.remove('text-cyan-600', 'font-semibold', 'bg-cyan-50');
                link.classList.add('text-gray-600', 'bg-transparent');
              }
            });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // VideoCard Component
  const VideoCard = ({ video, index, title, quote }) => {
    const handleVideoPlay = (e) => {
      e.preventDefault();
      const videoElement = e.currentTarget.querySelector('video');
      
      if (videoElement.paused) {
        videoElement.play();
        const playButton = e.currentTarget.querySelector('.play-button-overlay');
        if (playButton) {
          playButton.style.opacity = '0';
        }
      } else {
        videoElement.pause();
        const playButton = e.currentTarget.querySelector('.play-button-overlay');
        if (playButton) {
          playButton.style.opacity = '1';
        }
      }
    };

    const handleVideoEnd = (e) => {
      const container = e.target.closest('.video-container');
      const playButton = container?.querySelector('.play-button-overlay');
      if (playButton) {
        playButton.style.opacity = '1';
      }
    };

    const handleVideoPause = (e) => {
      const container = e.target.closest('.video-container');
      const playButton = container?.querySelector('.play-button-overlay');
      if (playButton) {
        playButton.style.opacity = '1';
      }
    };

    const handleVideoPlayEvent = (e) => {
      const container = e.target.closest('.video-container');
      const playButton = container?.querySelector('.play-button-overlay');
      if (playButton) {
        playButton.style.opacity = '0';
      }
    };

    const openFullScreen = (e) => {
      e.stopPropagation();
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl">
          <video src="${video}" controls autoplay class="w-full rounded-lg"></video>
          <button class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;
      modal.querySelector('button').onclick = () => modal.remove();
      document.body.appendChild(modal);
    };

    return (
      <div className="video-item">
        <div 
          className="relative overflow-hidden rounded-xl lg:rounded-2xl mb-4 video-container group cursor-pointer"
          onClick={handleVideoPlay}
        >
          <video 
            src={video}
            className="w-full h-full object-cover aspect-video"
            poster={`https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&ix=${index}`}
            preload="metadata"
            onClick={(e) => e.stopPropagation()}
            onEnded={handleVideoEnd}
            onPause={handleVideoPause}
            onPlay={handleVideoPlayEvent}
            controls={false}
          >
            Your browser does not support the video tag.
          </video>
          <div className="play-button-overlay absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-[12px] lg:border-t-[14px] border-b-[12px] lg:border-b-[14px] border-l-[20px] lg:border-l-[24px] border-t-transparent border-b-transparent border-l-cyan-600 ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm font-medium">{title}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">"{quote}"</p>
          <button 
            className="mt-2 text-xs text-cyan-600 hover:text-cyan-700 font-medium"
            onClick={openFullScreen}
          >
            Open in full screen
          </button>
        </div>
      </div>
    );
  };

  // All services data
  const allServices = [
    "Asthma", "Chronic Pain", "Digestive", "Erectile Dysfunction", 
    "Homeo Medicine Store", "Infertility", "Insomnia", "Orthopaedic",
    "Dermatology", "Paediatrics", "Respiratory", "Gynaecology",
    "Male sexual problems", "Acidity", "Allergies", "Anxiety",
    "Arthritis", "Chronic diseases", "Constipation", "Corn",
    "COVID-19", "Diabetes", "Eczema", "Female infertility",
    "Gerd", "Gall bladder stone", "Gout", "Hair loss",
    "Hairfall", "Hyperpigmentation", "Blood pressure", "Hypothyroidism",
    "Injury", "Kidney stone", "Pcod", "Psoriasis",
    "Vitiligo", "Warts"
  ];

  // Group services by category
  const servicesByCategory = {
    "Paediatric Care": ["Enlarged Adenoids", "Recurrent Infections", "Tonsillitis ", "Allergies, Asthma ","Constipation","Bedwetting","Boosting Immunity"],
    "Women’s Health": ["PCOD & PCOS", "Ovarian Cysts", "Uterine Fibroid", "Leucorrhoea", "Irregular & Painful Periods","Menopausal Support","Infertility"],
    "Digestive & Gut Healing": ["Acidity & Heartburn", "Gastric/Peptic Ulcers", "Anal fissures", "Piles", "IBS (Irritable Bowel Syndrome)","Constipation & Bowel Irregularities","Ulcerative Colitis","Fatty liver","Gastritis"],
    "Resporatory Health": ["Asthma", "Allergic Rhinitis", "Bronchitis", "Sinusitis", "Chronic Cough", "Copd", "Nasal Polyps","Seasonal & Environmental Allergies"],
    "Musculo-skeletal Care": ["Arthritis", "Backache", "Sciatica", "Cervical Spondylosis","Frozen shoulder","Knee Pain","Heel Pain","Gout"],
    "Skin & Hair": ["Acne", "Alopecia Aerata","Dermatitis","Eczema","Psoriasis","Hairfall","Vitiligo (Leucoderma)","Urticaria","Herpes","Ringworm (Fungal Infections)"],
    "Sexual Wellness": ["Erectile Dysfunction", "Premature Ejaculation","Low Sexual Drive","Performance Anxiety","Spermatorrhea","Emotional Stress Affecting Sexual Health"]
  };

  // Reviews data
 const reviews = [
  {
    name: "Nishant Sharma",
    rating: 5,
    date: "7 months ago",
    content: "Dr. Vikas is a good, sincere and a learned doctor. Also, he is a good listener who gives his patients due time to explain their issues. He has treated me and my parents for different issues, thus, making him our go to family doctor now. As far as clinic is concerned, I have always found it clean & hygienic.",
    likes: 12,
    response: "Thank you so much for taking the time to share your positive experience.",
    reviewsCount: "4 reviews"
  },
  {
    name: "Shipra Wal",
    rating: 5,
    date: "a year ago",
    content: "Best Doctor I've Ever Had! Dr. Vikas is truly exceptional. From the moment I walked into the clinic, I felt welcomed and cared for. They take the time to listen, explain everything clearly, and never make you feel rushed. Their knowledge, professionalism, and genuine compassion set them apart from others. I felt completely confident in their diagnosis and treatment plan. I’m so grateful to have found such a dedicated and trustworthy doctor. Highly recommend!",
    likes: 8,
    response: "Thanks so much for taking the time to share your positive experience. We are grateful for your review.",
    reviewsCount: "3 reviews"
  },
  {
    name: "Kunal Yadav",
    rating: 5,
    date: "5 months ago",
    content: "Had consulted Dr Tonger when my kid was diagnosed with Dengue. He was the only one who was calm and confidant that she will recover very soon. Even monitored her progress very professionally , the only homeopathic doctor I have seen who give this kind of personal attention to their patients. Never offended and replied every call even at mid night. Keep up the good work Dr Vikas Tonger. These are the doctors who would take homeopathy to a next level and it will not remain an alternative healing practise , but will go hand in hand with allopathy. Kudos for his team.",
    likes: 10,
    response: "",
    reviewsCount: "7 reviews"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    date: "2 months ago",
    content: "Dr. Vikas Garg is a very humble and caring doctor. He explains everything clearly and ensures the patient is comfortable. The clinic is well-maintained and staff is cooperative.",
    likes: 6,
    response: "Thank you for your kind words.",
    reviewsCount: "2 reviews"
  },
  {
    name: "Rohit Verma",
    rating: 5,
    date: "1 year ago",
    content: "Experienced and trustworthy doctor. He doesn’t prescribe unnecessary medicines and focuses on genuine recovery. Our family has been visiting him for years.",
    likes: 4,
    response: "",
    reviewsCount: "1 review"
  },
  {
    name: "Neha Gupta",
    rating: 5,
    date: "8 months ago",
    content: "Dr. Vikas is very professional and compassionate. He listens carefully and gives practical advice along with medication. The clinic is hygienic and well-organized.",
    likes: 9,
    response: "We appreciate your feedback!",
    reviewsCount: "5 reviews"
  }
];

  // Stats data
  const stats = [
    { number: "18+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "500+", label: "Patients Treated", icon: <Users className="w-8 h-8" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Heart className="w-8 h-8" /> },
    { number: "40+", label: "Conditions Treated", icon: <Stethoscope className="w-8 h-8" /> }
  ];

  // Amenities data
  const amenities = [
    { icon: <Droplet className="w-5 h-5" />, text: "Wheelchair-accessible car park" },
    { icon: <Accessibility className="w-5 h-5" />, text: "Wheelchair-accessible entrance" },
    { icon: <Droplet className="w-5 h-5" />, text: "Restroom" },
    { icon: <Users className="w-5 h-5" />, text: "LGBTQ+ friendly" },
    { icon: <Calendar className="w-5 h-5" />, text: "Appointment required" },
    { icon: <Calendar className="w-5 h-5" />, text: "Appointments recommended" }
  ];

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },

  ];

  // Contact details
  const contactInfo = {
    address: "Aesthederm Homeopathy Clinic, Shop no- 24 & 25, First Floor, Amrapali Icon Leisure Valley, Noida Extension, Greater Noida, 201306",
    phone: "9953745006",
    website: "Aesthederm Homeopathy Clinic",
    hours: "Tuesday - Sunday 10am-2pm & 5pm-9pm Monday Closed"
  };

  // Google Maps iframe
  const mapIframe = `
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4254613792386!2d77.43769940000001!3d28.5870105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef057619b181%3A0xa053c7aeea24fd84!2sVikas%20Homeopathy%20Centre!5e0!3m2!1sen!2sin!4v1766585098917!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
`;

  // Video data
  const videoFiles = [video1, video2, video3, video4, video5 ,video6,video7,video8];
  const videoTitles = [
  "Case of Onychomycosis",
  "Case of Polycystic or PCOS - related",
  "Case of Psoriasis",
  "Case of Vitiligo",
  "Case of Atopic Dermatitis",
  "Case of Psoriasis",
  "Child Saved from Adenoid Surgery",
  "Case of Vocal Cord Nodule Where Surgery Was Recommended, Treated with Homeopathy",
];

const videoQuotes = [
  "Nail infection healed naturally without surgery.",
  "Hormonal balance restored and cycles improved naturally.",
  "Severe psoriasis relieved after years of struggle.",
  "Visible skin repigmentation with long-term improvement.",
  "Chronic itching and flare-ups controlled effectively.",
  "Recurring psoriasis managed with lasting results.",
  "Child avoided surgery and recovered safely with homeopathy.",
  "Voice restored without surgery through homeopathic care.",
];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 font-sans scroll-smooth overflow-x-hidden">
      {/* Enhanced Header/Navigation - Fixed for mobile */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-white lg:bg-transparent py-4 lg:py-4 shadow-sm lg:shadow-none'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo - Mobile optimized */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <FlaskConical className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-gray-800 leading-tight">Aesthederm Homeopathy Clinic</h1>
                <p className="text-xs lg:text-sm text-cyan-600 font-medium hidden sm:block">Holistic Healing</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl px-2 py-2 shadow-sm">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className={`nav-link px-5 py-2.5 rounded-xl transition-all duration-300 text-sm lg:text-base ${item.isHighlighted 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105' 
                    : 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm text-cyan-600 hover:bg-cyan-50 shadow-sm transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 border border-cyan-100 animate-slideDown">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                    }}
                    className={`px-4 py-3 rounded-xl text-left transition-all text-sm md:text-base ${item.isHighlighted 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section - Mobile optimized - Centered */}
<section id="home" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
  {/* Background Elements - Mobile adjusted */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
  <div className="absolute top-10 right-10 lg:top-20 lg:right-20 w-40 h-40 lg:w-72 lg:h-72 bg-cyan-300/10 rounded-full blur-2xl lg:blur-3xl"></div>
  <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-48 h-48 lg:w-96 lg:h-96 bg-blue-300/10 rounded-full blur-2xl lg:blur-3xl"></div>
  
  <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-5 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-2xl border border-cyan-200 mb-6 lg:mb-8">
        <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
        <span className="font-semibold text-gray-700 text-xs lg:text-sm">Trusted by 500+ Patients Since 2005</span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
        Your Family's 
        <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Trusted Homeopathy Clinic
        </span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 lg:mb-8">
        Safe, gentle homeopathy for all ages by Dr Vikas Tonger. Root cause treatment for lasting relief.
      </p>
      
      {/* CTA Buttons - Centered */}
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-4 lg:pt-6">
        <a
          href="tel:09650787854"
          className="group px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl lg:rounded-2xl font-semibold shadow-lg lg:shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 text-sm lg:text-base"
        >
          <Calendar className="w-4 h-4 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
          <span>Book Appointment</span>
          <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
        </a>

        <button 
          onClick={() => scrollToSection('services')}
          className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 border-2 border-cyan-200 rounded-xl lg:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:border-cyan-400 hover:scale-105 transition-all duration-300 text-sm lg:text-base"
        >
          View Our Services
        </button>
      </div>
    </div>
  </div>
</section>

{/* About Dr Section */}
<section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Doctor's Image - Left Side */}
      <div className="relative">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src='/images/img.jpeg' 
            className='w-full h-auto object-cover' 
            alt="Dr. Vikas Tonger - Homeopathy Specialist"
          />
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 lg:p-5 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl">
          <div className="text-center">
            <div className="font-bold text-lg lg:text-xl">15+ Years</div>
            <div className="text-xs lg:text-sm opacity-90">Clinical Experience</div>
          </div>
        </div>
      </div>

      {/* Doctor's Info - Right Side */}
      <div className="space-y-6 lg:space-y-8">
        {/* Section Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-2xl border border-cyan-200">
          <User className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
          <span className="font-semibold text-gray-700 text-xs lg:text-sm">Meet Our Specialist</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          About
          <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Dr. Vikas Tonger
          </span>
        </h2>
        
        {/* Description */}
        <div className="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed">
          <p>
            Dr. Vikas Tonger is a trusted homeopathy specialist dedicated to holistic, root-cause–based healing. 
            He follows a practical, patient-focused approach designed for quick improvement and lasting results.
          </p>
          <p>
            With extensive clinical experience, Dr. Tonger treats a wide range of conditions including childhood 
            disorders, respiratory and digestive problems, women's health issues (such as PCOD, ovarian cysts, 
            uterine fibroids, and endometriosis), skin and hair conditions, joint pain, migraine, and other 
            chronic health concerns. His treatment approach is safe, personalised, and non-invasive.
          </p>
          <p>
            Based in Noida Extension, Dr. Tonger offers both in-clinic and online consultations, making quality 
            homeopathic care accessible to patients across India.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="bg-white p-4 rounded-xl lg:rounded-2xl border border-cyan-100 shadow-sm text-center">
            <div className="font-bold text-2xl lg:text-3xl text-cyan-600">5000+</div>
            <div className="text-sm text-gray-600 mt-1">Patients Treated</div>
          </div>
          <div className="bg-white p-4 rounded-xl lg:rounded-2xl border border-cyan-100 shadow-sm text-center">
            <div className="font-bold text-2xl lg:text-3xl text-cyan-600">100%</div>
            <div className="text-sm text-gray-600 mt-1">Natural</div>
          </div>
          <div className="bg-white p-4 rounded-xl lg:rounded-2xl border border-cyan-100 shadow-sm text-center">
            <div className="font-bold text-2xl lg:text-3xl text-cyan-600">15+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="bg-white p-4 rounded-xl lg:rounded-2xl border border-cyan-100 shadow-sm text-center">
            <div className="font-bold text-2xl lg:text-3xl text-cyan-600">∞</div>
            <div className="text-sm text-gray-600 mt-1">Online Support</div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="tel:9953745006"
            className="inline-flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl lg:rounded-2xl font-semibold shadow-lg lg:shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Consult Dr. Vikas Today</span>
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Section - Mobile optimized */}
      <section id="about" className="py-12 lg:py-20 bg-white p-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-cyan-600 mb-4 lg:mb-6">
                <div className="w-1.5 h-6 lg:w-2 lg:h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <span className="font-semibold text-xs lg:text-sm">ABOUT OUR CENTRE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Where Healing Meets 
                <span className="text-cyan-600"> Compassion</span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                At Dr Vikas Homeopathy, we believe in treating the person, not just the disease. 
                Our holistic approach combines traditional homeopathic wisdom with modern medical 
                understanding to provide comprehensive care.
              </p>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Root Cause Treatment</h4>
                    <p className="text-sm lg:text-base text-gray-600">We focus on identifying and treating the underlying cause of illness rather than just suppressing symptoms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Family Health Care</h4>
                    <p className="text-sm lg:text-base text-gray-600">Providing comprehensive care for all family members, from infants to seniors, with personalized treatment plans.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-2xl lg:text-4xl font-bold text-cyan-600 mb-1 lg:mb-2">5000+</div>
                <div className="text-sm lg:text-base text-gray-700">Patients treated successfully</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-blue-100">
                <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">100+</div>
                <div className="text-sm lg:text-base text-gray-700">Children Saved From Adenoid Surgery</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-2xl lg:text-4xl font-bold text-cyan-600 mb-1 lg:mb-2">500+</div>
                <div className="text-sm lg:text-base text-gray-700">Women Treated For Gynaecology Problems (Pcos, Ovarian Cyst, Uterine Fibroid, Leucorrhea, Infertility etc.)</div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Reviews & Testimonials Section - Enhanced UI */}
      <section id="reviews" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
            <div className="inline-flex items-center justify-center space-x-2 text-cyan-600 mb-3 lg:mb-4">
              <div className="w-1.5 h-6 lg:w-2 lg:h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              <span className="font-semibold text-xs lg:text-sm tracking-wider">PATIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Success Stories That 
              <span className="text-cyan-600"> Inspire Hope</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600">
              Real experiences from patients who found relief through our holistic approach
            </p>
          </div>

          {/* Video Testimonials Section */}
          <div className="mb-12 lg:mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Video Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {videoFiles.map((video, index) => (
                // Show only first 3 videos initially, or all if showAllVideos is true
                (showAllVideos || index < 3) && (
                  <VideoCard 
                    key={index}
                    video={video}
                    index={index}
                    title={videoTitles[index]}
                    quote={videoQuotes[index]}
                  />
                )
              ))}
            </div>
            
            {/* Show All Videos Button - Only show if there are more than 3 videos */}
            {!showAllVideos && videoFiles.length > 3 && (
              <div className="text-center mt-8 lg:mt-12">
                <button 
                  className="px-6 lg:px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center space-x-2 mx-auto"
                  onClick={() => setShowAllVideos(true)}
                >
                  <Video className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Show All Videos </span>
                </button>
              </div>
            )}
            
            {/* Show Less Button - When all videos are shown */}
            {showAllVideos && (
              <div className="text-center mt-8 lg:mt-12">
                <button 
                  className="px-6 lg:px-8 py-3 border border-cyan-600 text-cyan-600 font-medium rounded-xl hover:bg-cyan-50 transition-all duration-300 flex items-center space-x-2 mx-auto"
                  onClick={() => setShowAllVideos(false)}
                >
                  <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Show Less Videos</span>
                </button>
              </div>
            )}
          </div>

          {/* Text Reviews Section */}
          <div className="mb-8 lg:mb-12">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Patient Reviews</h3>
            
            {/* Compact Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl lg:rounded-xl shadow-md p-4 lg:p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-cyan-100"
                >
                  {/* Compact Review Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs lg:text-sm truncate max-w-[120px]">{review.name}</h4>
                        <p className="text-xs text-gray-400">{review.reviewsCount}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Compact Review Content */}
                  <div className="mb-3">
                    <p className="text-xs lg:text-sm text-gray-600 line-clamp-3">"{review.content}"</p>
                  </div>
                  
                  {/* Compact Review Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{review.date}</span>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-cyan-600 transition-colors">
                        <ThumbsUp className="w-3 h-3" />
                        <span className="text-xs">{review.likes}</span>
                      </button>
                      <button className="text-gray-400 hover:text-cyan-600 transition-colors">
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Doctor Response - Smaller */}
                  {review.response && (
                    <div className="mt-3 pt-3 border-t border-cyan-50 bg-cyan-50/30 rounded-lg p-2">
                      <div className="flex items-start space-x-1">
                        <MessageCircle className="w-3 h-3 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-gray-900 mb-0.5">Dr. Vikas</p>
                          <p className="text-xs text-gray-600 line-clamp-2">{review.response}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          
          {/* Stats Banner */}
          <div className="mt-12 lg:mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-700 mb-1">4.9★</div>
                <div className="text-xs lg:text-sm text-gray-600">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-700 mb-1">{videoFiles.length}</div>
                <div className="text-xs lg:text-sm text-gray-600">Video Testimonials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-700 mb-1">2K+</div>
                <div className="text-xs lg:text-sm text-gray-600">Text Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-700 mb-1">98%</div>
                <div className="text-xs lg:text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Services Section - Full Width Vertical Layout */}
<section id="services" className="py-12 lg:py-20 bg-gradient-to-b from-white to-cyan-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-16">
      <div className="inline-flex items-center space-x-2 text-cyan-600 mb-3 lg:mb-4">
        <div className="w-1.5 h-6 lg:w-2 lg:h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
        <span className="font-semibold text-xs lg:text-sm">OUR SERVICES</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
        Comprehensive 
        <span className="text-cyan-600"> Homeopathic</span> Care
      </h2>
      <p className="text-base lg:text-lg text-gray-600 px-4">
        We offer holistic treatment for a wide range of acute and chronic conditions, 
        focusing on restoring your body's natural balance.
      </p>
    </div>

    {/* Services Vertical Stack - Compact */}
<div className="space-y-6 lg:space-y-8 max-w-6xl mx-auto">
  {Object.entries(servicesByCategory).map(([category, items], index) => (
    <div 
      key={index}
      className="group bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 lg:p-8 border border-cyan-100 hover:border-cyan-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
        {/* Left Section - Category Title */}
        <div className="lg:w-1/4">
          <div className="mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">{category}</h3>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-cyan-600" />
              </div>
              <span className="text-sm text-gray-500">{items.length} conditions</span>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span>Get Treatment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section - Service Items */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-cyan-50 transition-colors duration-200">
                <div className="w-1.5 h-1.5 mt-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <button 
        onClick={() => scrollToSection('contact')}
        className="inline-flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl lg:rounded-2xl font-semibold shadow-lg lg:shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>Book Consultation for Any Condition</span>
        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  </div>
</section>

      

      {/* Contact & Map Section - Mobile optimized */}
<section id="contact" className="py-12 lg:py-20 bg-gradient-to-br from-cyan-50 to-blue-50 p-4 lg:p-5">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
      <div className="inline-flex items-center space-x-2 text-cyan-600 mb-3 lg:mb-4">
        <div className="w-1.5 h-6 lg:w-2 lg:h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
        <span className="font-semibold text-xs lg:text-sm">VISIT US</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
        Get In
        <span className="text-cyan-600"> Touch</span>
      </h2>
      <p className="text-base lg:text-lg text-gray-600 px-4">
        Visit our clinic for personalized consultation or contact us for more information
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Map Section - Left */}
      <div className="bg-white rounded-xl lg:rounded-3xl shadow-lg lg:shadow-2xl overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center">
              <Map className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">Our Location</h3>
              <p className="text-xs lg:text-sm text-gray-600">Find us easily on Google Maps</p>
            </div>
          </div>
        </div>
        <div className="h-[300px] lg:h-[500px] relative">
          {/* 地图嵌入代码已根据提供的链接更新 */}
          <div className="w-full h-[400px] lg:h-[500px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.291230197526!2d77.43753759121178!3d28.587409214066454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef005a40bee3%3A0x29e7ff58ed949a3a!2sAesthederm%20Homeopathy%20Clinic--Homeopathy%20Doctor!5e0!3m2!1sen!2sin!4v1767961312258!5m2!1sen!2sin"
    className="w-full h-full rounded-xl"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          {/* Overlay Button */}
          <div className="absolute bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2">
            <a
              href="https://maps.app.goo.gl/2XPEhcsqAWtsDtGK9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl shadow-lg font-semibold text-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base"
            >
              <Navigation className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Details - Right */}
      <div className="bg-white rounded-xl lg:rounded-3xl shadow-lg lg:shadow-2xl p-4 lg:p-8">
        <div className="mb-6 lg:mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
          <p className="text-sm lg:text-base text-gray-600">Reach out to us for appointments or inquiries</p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {/* Address - 根据地图列表更新 */}
          <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-cyan-50 to-white rounded-xl lg:rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-colors group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 text-base lg:text-lg">Clinic Address</h4>
              {/* 此处使用了地图列表中的地址，实际完整地址可能需要在Google后台查看 */}
              <p className="text-sm lg:text-base text-gray-600">
                 Aesthederm Homeopathy Clinic, Shop no- 24 & 25, First Floor, Amrapali Icon Leisure Valley, Noida Extension, Greater Noida, 201306
              </p>
            </div>
          </div>

          {/* Phone - 根据地图列表更新 */}
          <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl lg:rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
            </div>
            <div>
  <h4 className="font-bold text-gray-900 mb-3 text-base lg:text-lg">
    Phone Number
  </h4>

  {/* Call Button */}
  <a
    href="tel:+919953745006"
    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-sm lg:text-base font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-3"
  >
    <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
    <span className="font-bold">+91 99537 45006</span>
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919953745006"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm lg:text-base font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
    <span>Chat on WhatsApp</span>
  </a>

  <p className="text-xs lg:text-sm text-gray-500 mt-3 text-center">
    Call or WhatsApp for appointment or consultation
  </p>
</div>
          </div>

          {/* Hours - 根据地图列表更新 */}
          <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-cyan-50 to-white rounded-xl lg:rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-colors group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 text-base lg:text-lg">Clinic Hours</h4>
              <p className="text-sm lg:text-base text-gray-600 font-semibold">Open · Closes 9:00 PM</p>
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs lg:text-sm">
                <div className="text-gray-600">Tuesday - Sunday</div>
                <div className="font-semibold">10 AM - 2 PM & 5 PM - 9 PM</div>
                <div className="text-gray-600">Monday</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* Enhanced Footer - Mobile optimized */}
      <footer className="bg-gray-900 text-white pt-12 lg:pt-16 pb-6 lg:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg lg:rounded-xl flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h3 className="text-base lg:text-xl font-bold">Aesthederm Homeopathy Clinic</h3>
                  <p className="text-xs lg:text-sm text-cyan-400">Holistic Healing Since 2005</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6">
                Providing natural, holistic homeopathic treatment for complete wellness. 
                Your health is our priority.
              </p>
              <div className="flex space-x-3 lg:space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-6 sm:mt-0">
              <h4 className="text-base lg:text-lg font-bold mb-4 lg:mb-6 text-white">Quick Links</h4>
              <ul className="space-y-2 lg:space-y-3">
                {navItems.slice(0, -1).map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className="text-gray-400 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base"
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <h4 className="text-base lg:text-lg font-bold mb-4 lg:mb-6 text-white">Contact Info</h4>
              <ul className="space-y-3 lg:space-y-4">
                <p className='text-gray-400 text-xs lg:text-sm'>Aesthederm Homeopathy Clinic, Shop no- 24 & 25, First Floor, Amrapali Icon Leisure Valley, Noida Extension, Greater Noida, 201306</p>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-cyan-400 text-xs lg:text-sm">
                    Mob- 9953745006
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
                  <span className="text-gray-400 text-xs lg:text-sm">{contactInfo.hours}</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <h4 className="text-base lg:text-lg font-bold mb-4 lg:mb-6 text-white">Clinic Hours</h4>
              <div className="space-y-2 lg:space-y-3 text-gray-400 text-xs lg:text-sm">
                <div className="flex justify-between">
                  <span>Tuesday - Sunday</span>
                  <span className="font-semibold text-white">10am - 2pm & 5pm - 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-semibold text-white">Close</span>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 lg:pt-8 text-center">
            <p className="text-gray-500 text-xs lg:text-sm">
              © {new Date().getFullYear()} Vikas Homeopathy Centre. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs lg:text-sm mt-2">
              Designed with ❤️ for holistic healing and wellness
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Mobile adjusted */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl hover:shadow-xl lg:hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 transform -rotate-90" />
      </button>
    </div>
  );
};

export default App;