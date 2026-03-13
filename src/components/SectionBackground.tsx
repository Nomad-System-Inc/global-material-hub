import { ReactNode } from "react";

interface SectionBackgroundProps {
  children: ReactNode;
  pattern?: string;
  imageSrc?: string;
  imageOpacity?: number;
  imagePosition?: string;
  overlay?: string;
  className?: string;
  bleedTop?: boolean;
  bleedBottom?: boolean;
}

const SectionBackground = ({
  children,
  pattern = "",
  imageSrc,
  imageOpacity = 0.1,
  imagePosition = "center",
  overlay,
  className = "",
  bleedTop = true,
  bleedBottom = true,
}: SectionBackgroundProps) => {
  const bleedClasses = `${bleedTop ? "-mt-16 pt-16" : ""} ${bleedBottom ? "-mb-16 pb-16" : ""}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background image layer — extends beyond section for wave blending */}
      {imageSrc && (
        <div
          className={`absolute pointer-events-none ${bleedTop ? "-top-24" : "top-0"} ${bleedBottom ? "-bottom-24" : "bottom-0"} left-0 right-0 bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: imagePosition,
            opacity: imageOpacity,
          }}
        />
      )}

      {/* Overlay gradient */}
      {overlay && (
        <div
          className={`absolute pointer-events-none ${bleedTop ? "-top-24" : "top-0"} ${bleedBottom ? "-bottom-24" : "bottom-0"} left-0 right-0`}
          style={{ background: overlay }}
        />
      )}

      {/* Pattern layer */}
      {pattern && (
        <div className={`absolute inset-0 pointer-events-none ${pattern}`} />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
