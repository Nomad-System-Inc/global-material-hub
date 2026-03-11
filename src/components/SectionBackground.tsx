import { ReactNode } from "react";

interface SectionBackgroundProps {
  children: ReactNode;
  pattern?: string;
  imageSrc?: string;
  imageOpacity?: number;
  imagePosition?: string;
  overlay?: string;
  className?: string;
}

const SectionBackground = ({
  children,
  pattern = "",
  imageSrc,
  imageOpacity = 0.06,
  imagePosition = "center",
  overlay,
  className = "",
}: SectionBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background image layer */}
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none"
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
          className="absolute inset-0 pointer-events-none"
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
