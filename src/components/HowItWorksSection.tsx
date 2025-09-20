import { Badge } from "@/components/ui/badge";
import { Calendar, Zap, Target, Trophy } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      day: "1-7 DIAS",
      icon: <Calendar className="w-6 h-6" />,
      title: "Absorção e Ativação",
      description: "Seus ingredientes naturais começam a ser absorvidos pelo organismo, iniciando o processo de revitalização sexual.",
      color: "text-energy"
    },
    {
      day: "8-15 DIAS", 
      icon: <Zap className="w-6 h-6" />,
      title: "Aumento da Energia",
      description: "Você começará a sentir mais disposição sexual e energia. A libido começa a ser reativada naturalmente.",
      color: "text-power"
    },
    {
      day: "16-23 DIAS",
      icon: <Target className="w-6 h-6" />,
      title: "Performance Melhorada", 
      description: "Ereções mais firmes e duradouras. Sua confiança na hora H começa a ser restaurada completamente.",
      color: "text-energy"
    },
    {
      day: "24-30 DIAS",
      icon: <Trophy className="w-6 h-6" />,
      title: "Resultados Completos",
      description: "Performance sexual otimizada! Você se torna o homem confiante que sempre quis ser na intimidade.",
      color: "text-power"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Como o <span className="text-power">Libid Max</span> Funciona no Seu Corpo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Fórmula natural cientificamente desenvolvida para resultados gradualmente visíveis
          </p>
        </div>

        {/* Timeline dos resultados */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-energy to-power transform md:-translate-x-px"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Ícone na timeline */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gradient-to-r from-energy to-power rounded-full flex items-center justify-center text-white transform md:-translate-x-4 z-10">
                  {step.icon}
                </div>
                
                {/* Conteúdo */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/90 transition-all duration-300 hover:scale-105">
                    <Badge className={`bg-gradient-to-r from-energy/20 to-power/20 text-energy border-energy/30 mb-3`}>
                      {step.day}
                    </Badge>
                    <h3 className={`text-xl font-bold mb-3 ${step.color}`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de ingredientes */}
        <div className="mt-16 bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-energy">Ingredientes</span>{" "}
            <span className="text-power">100% Naturais</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Tribulus Terrestris",
                benefit: "Aumenta naturalmente os níveis de testosterona"
              },
              {
                name: "Maca Peruana", 
                benefit: "Melhora a libido e energia sexual"
              },
              {
                name: "Ginseng Coreano",
                benefit: "Fortalece a circulação sanguínea"
              }
            ].map((ingredient, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-foreground mb-2">{ingredient.name}</h4>
                <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};