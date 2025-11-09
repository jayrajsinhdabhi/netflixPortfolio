import { useState } from "react";
import { Play, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  duration: string;
}

const ProjectCard = ({ title, description, image, tags, year, duration }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer flex-shrink-0 w-80 transition-all duration-300 ease-netflix"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative rounded overflow-hidden transition-all duration-300 ${
          isHovered ? 'scale-110 shadow-card-hover z-20' : 'scale-100 shadow-card'
        }`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? 'bg-gradient-card-hover opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* Info panel that appears on hover */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-card animate-fade-in">
            {/* Action buttons */}
            <div className="flex gap-2 mb-3">
              <Button 
                size="icon" 
                className="h-9 w-9 rounded-full bg-foreground hover:bg-foreground/90 text-background"
              >
                <Play className="h-4 w-4 fill-current" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                className="h-9 w-9 rounded-full border-2 border-muted-foreground/50 hover:border-foreground"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                className="h-9 w-9 rounded-full border-2 border-muted-foreground/50 hover:border-foreground ml-auto"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-base mb-2 line-clamp-1">{title}</h3>
            
            {/* Metadata */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <span className="text-green-500 font-semibold">Featured</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>

            {/* Tags */}
            <div className="flex gap-1 flex-wrap">
              {tags.slice(0, 3).map((tag, idx) => (
                <span key={idx}>
                  <span className="text-xs text-muted-foreground">{tag}</span>
                  {idx < Math.min(tags.length, 3) - 1 && (
                    <span className="text-muted-foreground mx-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
