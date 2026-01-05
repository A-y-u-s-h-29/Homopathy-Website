// App.jsx
import React, { useState, useEffect } from 'react';
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
  Tornado,  CloudDrizzle,
  CloudMoon, Apple, Beef, Wheat,
  Candy, Coffee as CoffeeIcon, Truck as TruckIcon,
  Plus, Minus, ChevronLeft, ChevronDown,
  ArrowUpRight, Download, Upload,
  RefreshCw, RotateCw, ZoomIn,
  ZoomOut, Maximize, Minimize,
  XCircle, CheckSquare, Square,
  Circle, HelpCircle, Info
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('All');
  const [activeReview, setActiveReview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
    "Respiratory & Allergies": ["Asthma", "Allergies", "COVID-19", "Respiratory"],
    "Orthopaedic & Pain": ["Chronic Pain", "Arthritis", "Orthopaedic", "Injury", "Gout"],
    "Digestive Issues": ["Digestive", "Acidity", "Constipation", "Gerd", "Gall bladder stone"],
    "Skin & Dermatology": ["Dermatology", "Eczema", "Psoriasis", "Vitiligo", "Warts", "Hyperpigmentation", "Corn"],
    "Women's Health": ["Gynaecology", "Female infertility", "Pcod", "Infertility"],
    "Men's Health": ["Male sexual problems", "Erectile Dysfunction"],
    "Hair Problems": ["Hair loss", "Hairfall"],
    "Chronic Diseases": ["Chronic diseases", "Diabetes", "Blood pressure", "Hypothyroidism", "Kidney stone"],
    "Mental Health": ["Anxiety", "Insomnia"],
    "Paediatrics": ["Paediatrics"],
    "Homeopathic Store": ["Homeo Medicine Store"]
  };

  // Reviews data
  const reviews = [
    {
      name: "Rishabh Jauhari",
      rating: 5,
      date: "7 months ago",
      content: "Dr Vikas is a really good doctor. He has great knowledge on various issues. I have had really bad knee pain and several other issues. He took time to understand the issue fully and then prescribed the medicines accordingly which helped tremendously.",
      likes: 12,
      response: "Thank you so much for taking the time to share your positive experience.",
      reviewsCount: "4 reviews"
    },
    {
      name: "Bharti Moudgill",
      rating: 5,
      date: "a year ago",
      content: "Dr. Vikas is an excellent doctor. We consult him for our kids as well. He is caring for his patients and tries to find the root of the problem rather than just working on the symptoms superficially.",
      likes: 8,
      response: "Thanks so much for taking the time to share your positive experience. We are grateful for your review.",
      reviewsCount: "3 reviews"
    },
    {
      name: "Richa Kumari",
      rating: 5,
      date: "a year ago",
      content: "Dr.Vikas is a very good, humble and polite doctor. He provides good treatment along with counselling and management. His dedication towards patient is appreciable.",
      likes: 5,
      response: "",
      reviewsCount: "1 review"
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
    { label: 'Book Now', href: '#appointment', isHighlighted: true }
  ];

  // Contact details
  const contactInfo = {
    address: "First floor, icon, extension, Techzone 4, Amrapali Leisure Valley, Noida, Greater Noida, Uttar Pradesh 201318",
    phone: "096507 87854",
    website: "vikashomeopathy.com",
    hours: "Open · Closes 9 PM"
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

      {/* Enhanced Hero Section - Mobile optimized */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
        {/* Background Elements - Mobile adjusted */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-10 right-10 lg:top-20 lg:right-20 w-40 h-40 lg:w-72 lg:h-72 bg-cyan-300/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-48 h-48 lg:w-96 lg:h-96 bg-blue-300/10 rounded-full blur-2xl lg:blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8  lg:gap-12 items-center">
            {/* Left Text Content */}
            <div className="space-y-6 lg:space-y-8 order-1 ">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-2xl border border-cyan-200">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600" />
                <span className="font-semibold text-gray-700 text-xs lg:text-sm">Trusted by 500+ Patients Since 2005</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight -mt-4 lg:-mt-6">
                Your Family’s 
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Trusted Homeopathy Clinic
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl -mt-3 lg:-mt-5">
                Safe, gentle homeopathy for all ages by Dr Vikas Tonger. Root cause treatment for lasting releif.
              </p>
              
              {/* Stats - Mobile grid */}
             
              {/* CTA Buttons - Mobile stacked */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6">
                <button 
                  onClick={() => scrollToSection('appointment')}
                  className="group px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl lg:rounded-2xl font-semibold shadow-lg lg:shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 text-sm lg:text-base"
                >
                  <Calendar className="w-4 h-4 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 border-2 border-cyan-200 rounded-xl lg:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:border-cyan-400 hover:scale-105 transition-all duration-300 text-sm lg:text-base"
                >
                  View Our Services
                </button>
              </div>
            </div>

            {/* Right Image Content - Mobile adjusted */}
            <div className="relative order-2  mb-8 lg:mb-0 p-5">
              {/* Main Image Container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 h-100 ">
              <img src='/images/ok.avif' className='object-cover h-100 w-full'/> 
            
              </div>

              {/* Floating Elements - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-2 -right-2 lg:top-2 lg:-right-4 bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-cyan-100">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-green-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs lg:text-sm">No Side Effects</div>
                    <div className="text-xs text-gray-600">100% Natural</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-2 -right-2 lg:-bottom-2 lg:-right-6 bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-cyan-100">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <Heart className="w-4 h-4 lg:w-6 lg:h-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs lg:text-sm">Personalized Care</div>
                    <div className="text-xs text-gray-600">Individual Treatment</div>
                  </div>
                </div>
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
            
            <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-0">
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-cyan-100">
                  <div className="text-2xl lg:text-4xl font-bold text-cyan-600 mb-1 lg:mb-2">5000+</div>
                  <div className="text-sm lg:text-base text-gray-700">Patients Treated Successfully</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-blue-100">
                  <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">40+</div>
                  <div className="text-sm lg:text-base text-gray-700">Health Conditions Treated</div>
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                <div className="bg-gradient-to-br from-cyan-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-cyan-100">
                  <div className="text-2xl lg:text-4xl font-bold text-cyan-600 mb-1 lg:mb-2">18+</div>
                  <div className="text-sm lg:text-base text-gray-700">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-blue-100">
                  <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">98%</div>
                  <div className="text-sm lg:text-base text-gray-700">Patient Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile optimized */}
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

          {/* Services Grid - Mobile adjusted */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
            {Object.entries(servicesByCategory).map(([category, items], index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 p-4 lg:p-8 border border-cyan-100 hover:border-cyan-300 cursor-pointer hover:scale-[1.02]"
              >
                <div className="mb-4 lg:mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Stethoscope className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">{category}</h3>
                </div>
                
                <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                  {items.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 lg:space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm lg:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                  {items.length > 4 && (
                    <li className="text-cyan-600 font-medium text-sm lg:text-base">
                      + {items.length - 4} more conditions
                    </li>
                  )}
                </ul>
                
                <div className="pt-4 lg:pt-6 border-t border-cyan-100">
                  <button className="text-cyan-600 font-semibold flex items-center space-x-1 lg:space-x-2 group-hover:text-cyan-700 text-sm lg:text-base">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Badge */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">40+ Health Conditions Treated</h3>
              <p className="mb-4 lg:mb-6 text-cyan-100 text-sm lg:text-base">
                From acute illnesses to chronic conditions, we provide comprehensive homeopathic care
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {allServices.slice(0, 6).map((service, index) => (
                  <span key={index} className="px-3 py-1 lg:px-4 lg:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs lg:text-sm">
                    {service}
                  </span>
                ))}
                <span className="px-3 py-1 lg:px-4 lg:py-2 bg-white/30 backdrop-blur-sm rounded-full text-xs lg:text-sm font-semibold">
                  + {allServices.length - 6} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Mobile optimized */}
      <section id="reviews" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
            <div className="inline-flex items-center space-x-2 text-cyan-600 mb-3 lg:mb-4">
              <div className="w-1.5 h-6 lg:w-2 lg:h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              <span className="font-semibold text-xs lg:text-sm">PATIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              What Our 
              <span className="text-cyan-600"> Patients</span> Say
            </h2>
            <p className="text-base lg:text-lg text-gray-600 px-4">
              Real stories from people who found healing through our homeopathic care
            </p>
          </div>

          {/* Reviews Grid - Mobile stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-cyan-50 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-8 border border-cyan-100 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4 lg:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm lg:text-lg">{review.name}</h4>
                      <p className="text-xs lg:text-sm text-gray-500">{review.reviewsCount}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                {/* Review Content */}
                <div className="relative mb-4 lg:mb-6">
                  <Quote className="absolute -top-1 -left-1 lg:-top-2 lg:-left-2 w-6 h-6 lg:w-8 lg:h-8 text-cyan-200" />
                  <p className="text-sm lg:text-base text-gray-600 italic pl-4">"{review.content}"</p>
                </div>
                
                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 lg:pt-6 border-t border-cyan-100">
                  <span className="text-xs lg:text-sm text-gray-500">{review.date}</span>
                  <div className="flex items-center space-x-3 lg:space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-cyan-600 transition-colors">
                      <ThumbsUp className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span className="text-xs lg:text-sm">{review.likes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-cyan-600 transition-colors">
                      <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Doctor Response */}
                {review.response && (
                  <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-cyan-100 bg-cyan-50/50 rounded-lg lg:rounded-xl p-3 lg:p-4">
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs lg:text-sm font-semibold text-gray-900 mb-1">Response from Dr. Vikas</p>
                        <p className="text-xs lg:text-sm text-gray-600">{review.response}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8 lg:mt-12">
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-cyan-600 font-semibold hover:text-cyan-700 text-sm lg:text-base"
            >
              <span>View All Reviews on Google</span>
              <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
            </a>
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
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: mapIframe }}
                />
                {/* Overlay Button */}
                <div className="absolute bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2">
                  <a 
  href="https://www.google.com/maps/place/Aesthederm+Homeopathy+Clinic--Homeopathy+Doctor/@28.5875894,77.4379428,17z"
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
                {/* Address */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-cyan-50 to-white rounded-xl lg:rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-colors group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base lg:text-lg">Address</h4>
                    <p className="text-sm lg:text-base text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl lg:rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base lg:text-lg">Phone Number</h4>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="text-lg lg:text-xl font-bold text-gray-900 hover:text-cyan-600 transition-colors block"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">Call for appointment or consultation</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-gradient-to-r from-cyan-50 to-white rounded-xl lg:rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-colors group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-cyan-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base lg:text-lg">Clinic Hours</h4>
                    <p className="text-sm lg:text-base text-gray-600 font-semibold">{contactInfo.hours}</p>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs lg:text-sm">
                      <div className="text-gray-600">Monday - Friday</div>
                      <div className="font-semibold">10 AM - 9 PM</div>
                      <div className="text-gray-600">Saturday</div>
                      <div className="font-semibold">10 AM - 9 PM</div>
                      <div className="text-gray-600">Sunday</div>
                      <div className="font-semibold">Emergency Only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA Section - Mobile optimized */}
      <section id="appointment" className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-5 left-5 lg:top-10 lg:left-10 w-40 h-40 lg:w-64 lg:h-64 bg-white/10 rounded-full blur-xl lg:blur-3xl"></div>
          <div className="absolute bottom-5 right-5 lg:bottom-10 lg:right-10 w-48 h-48 lg:w-80 lg:h-80 bg-white/10 rounded-full blur-xl lg:blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 px-4">Ready to Start Your Healing Journey?</h2>
            <p className="text-base lg:text-xl text-cyan-100 mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              Book your appointment today and take the first step towards natural, holistic healing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20 hover:bg-white/20 transition-colors">
                <PhoneCall className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">Call Now</h3>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-xl lg:text-3xl font-bold hover:text-cyan-100 transition-colors block"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20 hover:bg-white/20 transition-colors">
                <Calendar className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">Walk-in Visit</h3>
                <p className="text-sm lg:text-lg">Monday - Saturday</p>
                <p className="text-xl lg:text-2xl font-bold">10 AM - 9 PM</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20 hover:bg-white/20 transition-colors">
                <Video className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">Online Consultation</h3>
                <p className="text-sm lg:text-lg">Video Call Available</p>
                <p className="text-xl lg:text-2xl font-bold">Book Online</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 px-4">
              <button 
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                className="px-6 py-4 lg:px-12 lg:py-6 bg-white text-cyan-600 rounded-xl lg:rounded-2xl font-bold text-base lg:text-xl shadow-xl lg:shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 mx-auto group w-full max-w-md"
              >
                <Phone className="w-4 h-4 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
                <span>Call for Immediate Appointment</span>
                <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-cyan-100/80 text-xs lg:text-sm">
                Emergency consultations available outside clinic hours
              </p>
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
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-xs lg:text-sm">{contactInfo.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-cyan-400 text-xs lg:text-sm">
                    {contactInfo.phone}
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
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">10 AM - 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">10 AM - 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-white">Emergency Only</span>
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