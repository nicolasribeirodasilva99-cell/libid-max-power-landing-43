import { CTAButton } from "./CTAButton";
import { ProductImage } from "./ProductImage";
import { Badge } from "@/components/ui/badge";
export const HeroSection = () => {
  const benefits = ["⚡ Ereções firmes e duradouras — segurança e firmeza total na hora H.", "⚡ Energia e disposição de sobra — para transar, trabalhar e treinar.", "⚡ Desejo renovado e tesão intenso — pronto para qualquer hora."];
  return <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-[center_20%] sm:bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/71edc1c1-e351-4568-9a7f-8ed06c5e1c72.png)`
    }}>
        {/* Degradê direcionado - mais escuro nas laterais e na base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Seção Superior - Badge e Headlines */}
        <div className="flex-1 container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-16">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {/* Badge de Urgência */}
            <div className="flex justify-center">
              <Badge className="bg-energy text-energy-foreground px-4 py-2 text-sm font-bold animate-pulse">
                🔥 OFERTA LIMITADA - ÚLTIMAS UNIDADES
              </Badge>
            </div>

            {/* Headline Principal */}
            <div className="space-y-3 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className="bg-gradient-to-r from-energy to-power bg-clip-text text-transparent">Potência sexual e aumento de energia constante de volta ao auge.
              </span>
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-energy px-2">Surpreenda na cama, tenha disposição intensa e uma vida sexual fora do comum.
            </h2>
            </div>
          </div>
        </div>

        {/* Seção Central - Imagem do Produto */}
        <div className="flex-1 flex justify-center items-center py-4 sm:py-6">
          <div className="animate-float">
            <ProductImage size="lg" />
          </div>
        </div>

        {/* Benefícios - Lista Vertical */}
        <div className="container mx-auto px-3 sm:px-4 pb-6">
          <div className="max-w-4xl mx-auto space-y-3">
            {benefits.map((benefit, index) => <div key={index} className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg p-3 sm:p-4 hover-lift ultra-smooth">
                <p className="text-foreground font-bold text-sm sm:text-base md:text-lg text-center">
                  {benefit}
                </p>
              </div>)}
          </div>
        </div>

        {/* Seção Inferior - CTA */}
        <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <CTAButton variant="cta" size="lg" className="w-full max-w-md mx-auto animate-glow hover-lift text-xs sm:text-sm" />
            
            
            <p className="text-xs sm:text-sm text-muted-foreground">✔ Pagamento só na entrega  ✔ Envio 100% discreto  ✔ Garantia total de 30 dias
          </p>
          </div>
        </div>
      </div>
    </section>;
};
