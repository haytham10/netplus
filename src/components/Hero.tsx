import { ArrowRight, Shield, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-24 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-[45%_50%] gap-6 sm:gap-12 lg:gap-20 items-start lg:items-center lg:pl-16">
          <div className="text-white space-y-6 sm:space-y-12 lg:space-y-16 animate-fade-in lg:pl-8">
            {/* Trust badges */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 sm:gap-8 pt-4 sm:pt-0">
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-red/5 to-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors group">
                <Shield className="w-6 h-6 text-brand-red group-hover:text-brand-blue transition-colors" />
                <span className="text-base font-medium">Agréé toutes assurances</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-red/5 to-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors group">
                <Clock className="w-6 h-6 text-brand-red group-hover:text-brand-blue transition-colors" />
                <span className="text-base font-medium">Intervention 24h/24</span>
              </div>
            </div>

            {/* Main content */}
            <div className="space-y-3 sm:space-y-6 lg:space-y-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold !leading-[1.15] tracking-tight animate-fade-in [animation-delay:200ms]">
                Expert en réparation de pare-brise à{' '}
                <span className="relative">
                  <span className="relative z-10 text-brand-red">Besançon</span>
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-brand-red/10 -skew-x-6 transform"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-50/90 max-w-2xl !leading-relaxed font-normal animate-fade-in [animation-delay:400ms]">
                Intervention rapide et professionnelle pour la réparation et le 
                remplacement de votre pare-brise. Service garanti sur votre lieu 
                de travail ou à domicile.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2 sm:gap-8 sm:flex-row pt-3 sm:pt-8 animate-fade-in [animation-delay:600ms]">
              <Button asChild size="lg" className="w-full sm:w-auto group text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                <a href="#contact" className="px-6 sm:px-8 py-5 sm:py-6">
                  Devis gratuit
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto group text-base sm:text-lg backdrop-blur-md hover:bg-white/15 transition-all duration-300">
                <a href="tel:0665343415" className="px-6 sm:px-8 py-5 sm:py-6">
                  06 65 34 34 15
                  <Phone className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop image section */}
          <div className="hidden lg:block relative animate-fade-in [animation-delay:1000ms] pt-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent z-10"></div>
              <img 
                src="a1-01386bd6d8e0.jpg" 
                alt="Réparation de pare-brise professionelle"
                className="w-full h-[600px] object-cover object-center"
              />
              {/* Floating stats */}
              <div className="absolute bottom-12 left-12 right-12 z-20 grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-blue-100">Années d'expérience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-100">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}