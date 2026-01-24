import { Camera } from "lucide-react";

interface TeamPhotoPlaceholderProps {
  name: string;
  className?: string;
}

const TeamPhotoPlaceholder = ({ name, className = "" }: TeamPhotoPlaceholderProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer frame with decorative border */}
      <div className="w-40 h-48 mx-auto rounded-xl bg-gradient-to-br from-cream via-burgundy-100 to-cream border-2 border-burgundy-100 shadow-sm overflow-hidden">
        {/* Inner content area */}
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          {/* Camera icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Camera className="w-8 h-8 text-primary/50" />
          </div>
          
          {/* Name and "Photo coming soon" */}
          <p className="font-display font-semibold text-sm text-primary/70 text-center mb-1">
            {name}
          </p>
          <p className="font-body text-xs text-muted-foreground/60 text-center">
            Photo coming soon
          </p>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-500/30 rounded-tl" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-500/30 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-500/30 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-500/30 rounded-br" />
      </div>
    </div>
  );
};

export default TeamPhotoPlaceholder;
