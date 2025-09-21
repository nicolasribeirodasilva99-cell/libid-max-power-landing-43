import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/CTAButton";
interface OfferCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  currentPrice: number;
  originalPrice?: number | null;
  discount?: string | null;
  ctaText?: string;
  isPopular?: boolean;
  imageQuantity: number;
  href?: string;
}
const OfferCard = ({
  title,
  subtitle,
  description,
  currentPrice,
  originalPrice,
  discount,
  ctaText,
  isPopular,
  imageQuantity,
  href
}: OfferCardProps) => {
  const getProductImage = () => {
    switch (imageQuantity) {
      case 1:
        return "/lovable-uploads/02839a20-cd24-4578-bf16-e199125d5f1f.png";
      case 3:
        return "/lovable-uploads/04fc3ea9-4707-46fd-8998-7128f3b928a8.png";
      case 5:
        return "/lovable-uploads/38d72069-ff3e-4052-be3f-4397400a9e31.png";
      default:
        return "/lovable-uploads/02839a20-cd24-4578-bf16-e199125d5f1f.png";
    }
  };
  return <Card className={`relative bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover-lift ultra-smooth animate-scale-in ${isPopular ? 'border-energy shadow-energy/20 animate-glow' : 'border-border'} flex flex-col h-full`}>
      {isPopular && <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-energy text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold animate-bounce-soft">
          MAIS POPULAR
        </Badge>}

      <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-muted-foreground mb-4">{subtitle}</p>}

        {/* Descrição */}
        {description && (
          <div className="mb-4 text-left">
            {description.split('\n').map((line, index) => (
              <p key={index} className="text-xs sm:text-sm text-muted-foreground mb-1">{line}</p>
            ))}
          </div>
        )}

        {/* Imagem promocional */}
        <div className="relative mb-4 sm:mb-6">
          <div className="flex justify-center items-center mb-3 sm:mb-4">
            <img src={getProductImage()} alt={`Libid Max - ${imageQuantity} ${imageQuantity === 1 ? 'pote' : 'potes'}`} className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover-lift" />
          </div>
        </div>

         {/* Preços */}
         <div className="mb-4 sm:mb-6">
           {originalPrice && (
             <div className="text-sm text-muted-foreground line-through mb-1">
               De R$ {originalPrice.toFixed(2).replace('.', ',')}
             </div>
           )}
           <div className="text-2xl sm:text-3xl font-bold text-energy mb-2">
             R$ {currentPrice.toFixed(2).replace('.', ',')}
           </div>
           {discount && (
             <div className="text-sm font-bold text-energy">
               {discount}
             </div>
           )}
         </div>

        {/* Botão de compra */}
        <div className="mt-auto">
          <CTAButton 
            variant="cta" 
            size="lg" 
            className="w-full animate-pulse-soft"
            href={href}
          >
            QUERO RECEBER !
          </CTAButton>
        </div>
      </CardContent>
    </Card>;
};
export const OfferCards = () => {
  const offers = [{
    title: "1 POTE",
    subtitle: "1 mês de tratamento",
    description: "💡 Ideal para experimentar ou para quem busca resultados iniciais.",
    currentPrice: 149.99,
    originalPrice: null,
    discount: null,
    ctaText: "QUERO RECEBER !",
    imageQuantity: 1,
    href: "https://eondigital.com.br/new_agendar_pedido?ofe=2566&ref=6693"
  }, {
    title: "3 POTES",
    subtitle: "3 meses de tratamento",
    description: "🚀 Melhor custo-benefício → 20% OFF\n💡 Resultados consistentes, progresso visível em energia e desempenho.",
    currentPrice: 249.99,
    originalPrice: 312.49,
    discount: "20% OFF",
    ctaText: "QUERO RECEBER !",
    isPopular: true,
    imageQuantity: 3,
    href: "https://eondigital.com.br/new_agendar_pedido?ofe=2572&ref=6693"
  }, {
    title: "5 POTES",
    subtitle: "5 meses de tratamento",
    description: "🚀 Transformação total + continuidade para saúde e energia.\n💡 Resultados sólidos e duradouros.",
    currentPrice: 399.99,
    originalPrice: 600,
    discount: "47% OFF",
    ctaText: "QUERO RECEBER !",
    imageQuantity: 5,
    href: "https://eondigital.com.br/new_agendar_pedido?ofe=2575&ref=6693"
  }];
  return <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Quanto vale recuperar sua <span className="text-energy">potência</span>, sua <span className="text-energy">confiança</span> e até salvar seu relacionamento?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">Sem depender de químicos perigosos ou gastar fortunas em consultas, o Libid Max Power oferece resultados reais, seguros e acessíveis para você decidir hoje.</p>
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 px-2">
            <span className="text-xl sm:text-2xl">👉</span>
            <p className="text-lg sm:text-xl font-semibold text-foreground">
              Com <span className="text-energy">Libid Max</span> você tem 3 opções inteligentes:
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto animate-slide-up">
          {offers.map((offer, index) => <OfferCard key={index} {...offer} />)}
        </div>

      </div>
    </section>;
};