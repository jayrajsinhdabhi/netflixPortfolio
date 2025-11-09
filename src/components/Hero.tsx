import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
// Use the public/ path so the static asset is served directly by the host.
const VideoBackground = () => (
  <video
    src="/video/B999Final.mp4"
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
);

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {/* Importing local video asset so Vite can bundle/serve it */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <VideoBackground />
        {/* Multi-layer gradients for Netflix-style vignette */}
        <div className="absolute inset-0 bg-gradient-hero-bottom" />
        <div className="absolute inset-0 bg-gradient-hero-sides" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 z-20 relative">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Small badge/metadata */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-bebas text-base tracking-wider text-primary">
              2025
            </span>
            <span>•</span>
            <span>AVAILABLE FOR HIRE</span>
            <span>•</span>
            <span>REMOTE / HYBRID / ON-SITE</span>
          </div>

          {/* Main Title - Netflix H1 style: 48px, bold */}
          <h1 className="font-bebas text-7xl leading-none tracking-tight">
            Jayrajsinh Dabhi
          </h1>

          {/* Subtitle - Netflix H2 style: 36px */}
          <h2 className="text-3xl font-semibold text-foreground">
            Doom Scroller
          </h2>

          {/* Description - Netflix body: 16-18px */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Computer engineering student who accidentally ships production
            features and treats messy legacy code as a personal puzzle. I make
            slow systems stop whining, write tests so future me doesn’t rage,
            and automate the boring parts so humans can do the fun stuff..
          </p>

          {/* Action Buttons - Netflix button style: 14px uppercase */}
          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm uppercase tracking-wider px-8 h-12 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              View Resume
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-foreground font-semibold text-sm uppercase tracking-wider px-8 h-12 backdrop-blur-sm transition-all duration-300"
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
