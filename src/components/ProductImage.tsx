

interface ProductImageProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ProductImage = ({ className = "", size = "md" }: ProductImageProps) => {
  const sizeClasses = {
    sm: "w-40 h-40",
    md: "w-60 h-60 md:w-80 md:h-80",
    lg: "w-80 h-80 md:w-96 md:h-96"
  };

  return (
    <div className={`relative ${className}`}>
      <img 
        src="/lovable-uploads/82b52440-c6a1-47a6-b0eb-678e14ff66a2.png" 
        alt="Libid Max - Cápsulas Naturais para Performance Masculina"
        className={`${sizeClasses[size]} object-cover rounded-lg shadow-2xl`}
      />
    </div>
  );
};