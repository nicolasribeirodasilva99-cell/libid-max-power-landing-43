import { Badge } from "@/components/ui/badge";
import { Zap, Target, Heart, Shield } from "lucide-react";
import { useState, useEffect } from "react";
export const BenefitsSection = () => {
  const benefits = [{
    icon: <Zap className="w-8 h-8" />,
    title: "+ Energia",
    description: "Aumento significativo dos níveis de energia com vitaminas B1, B2, B3, B5, B12 e cafeína",
    highlight: "Mais disposição"
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "+ Desempenho",
    description: "Melhora da performance com arginina, beta-alanina e complexo vitamínico completo",
    highlight: "Performance otimizada"
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: "+ Vigor",
    description: "Fortalecimento com ferro, manganês e aminoácidos essenciais para o vigor masculino",
    highlight: "Vigor renovado"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Natural",
    description: "Fórmula com ingredientes naturais, sem glúten e clinicamente testados",
    highlight: "Seguro e eficaz"
  }];
  const [currentBenefit, setCurrentBenefit] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit(prev => (prev + 1) % benefits.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [benefits.length]);
  return <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge className="bg-power text-power-foreground mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold">
            BENEFÍCIOS COMPROVADOS
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 px-2">
            Por Que <span className="text-energy">Milhares de Homens</span> Escolhem o{" "}
            <span className="text-power">Libid Max?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Resultados reais que transformam a vida sexual masculina definitivamente
          </p>
        </div>

        {/* Carrossel de Benefícios */}
        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="relative h-72 sm:h-80 overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{
            transform: `translateX(-${currentBenefit * 100}%)`
          }}>
              {benefits.map((benefit, index) => <div key={index} className="w-full flex-shrink-0 flex justify-center px-2 sm:px-4">
                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl w-full shadow-2xl hover:shadow-energy/20 transition-all duration-500 hover-lift">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8">
                      <div className="bg-gradient-to-br from-energy via-power to-energy p-4 sm:p-6 rounded-2xl text-white shadow-lg animate-float">
                        <div className="w-6 h-6 sm:w-8 sm:h-8">
                          {benefit.icon}
                        </div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">{benefit.title}</h3>
                          <Badge className="bg-energy/10 text-energy border-energy/30 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1">
                            {benefit.highlight}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center space-x-3 mt-8">
            {benefits.map((_, index) => <button key={index} onClick={() => setCurrentBenefit(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBenefit ? 'bg-energy shadow-lg shadow-energy/50 scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />)}
          </div>
        </div>

        {/* Destaque Extra */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-xl p-6 sm:p-8 text-center hover-lift animate-scale-in">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            <span className="text-energy">100% Natural</span> e{" "}
            <span className="text-power">Sem Riscos</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">Libid Max foi desenvolvido com ingredientes naturais clinicamente testados,
sem químicos prejudiciais, sem risco de dependência, sem efeitos colaterais.
Apenas resultados reais, potentes e duradouros, com total segurança para o seu corpo e sua vida sexual.
        </p>
        </div>
      </div>
    </section>;
};