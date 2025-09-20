import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap } from "lucide-react";

interface CTAButtonProps {
  variant?: "cta" | "hero" | "energy";
  size?: "default" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton = ({ 
  variant = "cta", 
  size = "lg", 
  className = "",
  children,
  onClick 
}: CTAButtonProps) => {
  const sizeClasses = {
    default: "h-10 px-3 py-2 text-sm",
    lg: "h-10 px-3 py-2 text-sm sm:h-12 sm:px-6 sm:py-3 sm:text-base md:text-lg",
    xl: "h-12 px-4 py-3 text-sm sm:h-14 sm:px-8 sm:py-4 sm:text-base md:text-lg lg:text-xl"
  };

  const defaultTexts = {
    cta: "COMPRAR AGORA",
    hero: "QUERO MELHORAR MINHA PERFORMANCE",
    energy: "RECUPERAR MINHA CONFIANÇA"
  };

  return (
    <Button
      variant={variant}
      className={`${sizeClasses[size]} ${className} uppercase hover-lift ultra-smooth font-bold`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        {variant === "cta" && <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        {variant === "hero" && <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        {variant === "energy" && <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        <span className="leading-none">{children || defaultTexts[variant]}</span>
      </div>
    </Button>
  );
};