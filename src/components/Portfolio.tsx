import { Camera, MonitorCog } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Portfolio = () => {
  const urlPhotogrphy = "https://ediklecio-foto.lovable.app";
  const urlSystems = "https://ediklecio.github.io/porfolio";

  const handleNavigate = (url: string = urlSystems) => {
    window.open(url, '');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50 rounded-full blur-3xl scale-150"></div>

        {/* Mobile Layout (default) */}
        <div className="relative z-10 flex flex-col items-center space-y-8 md:hidden">
          {/* Name and titles */}
          <div className="text-center space-y-3 animate-fade-in">
            <h1 className="text-4xl font-light text-primary tracking-wider">
              Ediklecio
            </h1>
            <div className="space-y-1">
              <p className="text-lg text-muted-foreground font-light">
                Desenvolvedor de Sistemas
              </p>
              <p className="text-lg text-muted-foreground font-light">
                Fotógrafo
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in-delayed">
            <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20 scale-110"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-icon">
              <img
                src={profileImage}
                alt="Ediklecio - Desenvolvedor de Sistemas e Fotógrafo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full animate-float"></div>
          </div>

          {/* Connection Lines and Icons - Mobile */}
          <div className="flex flex-col items-center space-y-2">
            {/* Connection line */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-draw-line origin-top"></div>

            {/* Link Icon */}
            <div className="animate-fade-in-delayed-3" onClick={() => handleNavigate()} >
              <div className="group relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <button className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-icon hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                  <MonitorCog className="w-8 h-8 text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Connection line */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-draw-line origin-top"></div>

            {/* Camera Icon */}
            <div className="animate-fade-in-delayed-2" onClick={() => handleNavigate(urlPhotogrphy)} >
              <div className="group relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <button className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-icon hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                  <Camera className="w-8 h-8 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center space-x-24 mb-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-6xl font-light text-primary tracking-wider">
              Ediklecio
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground font-light">
                Desenvolvedor de Sistemas
              </p>
              <p className="text-xl text-muted-foreground font-light">
                Fotógrafo
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-24">
          {/* Left Side - Link Icon */}
          <div className="flex flex-line items-center space-x-8 animate-fade-in-delayed-2" onClick={() => handleNavigate()} >
            <div className="group relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <button className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-icon hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <MonitorCog className="w-8 h-8 text-primary-foreground" />
              </button>
            </div>
            {/* Connection line */}
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent animate-draw-line origin-right mt-0"></div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Profile Image */}
            <div className="relative animate-scale-in-delayed">
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20 scale-110"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-icon">
                <img
                  src={profileImage}
                  alt="Ediklecio - Desenvolvedor de Sistemas e Fotógrafo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-float"></div>
            </div>
          </div>

          {/* Right Side - Camera Icon */}
          <div className="flex flex-line items-center space-x-8 animate-fade-in-delayed-3" onClick={() => handleNavigate(urlPhotogrphy)} >
            {/* Connection line */}
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent animate-draw-line origin-left"></div>

            <div className="group relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <button className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-icon hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Camera className="w-10 h-10 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;