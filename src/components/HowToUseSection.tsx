import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "./CTAButton";
import { Clock, Droplets, Shield, Calendar, Users, Award, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";

export const HowToUseSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const instructions = [
    {
      icon: <Clock className="w-8 h-8" />,
      step: "1º PASSO",
      title: "2 Cápsulas ao Dia",
      description: "Tome 2 cápsulas por dia, preferencialmente pela manhã",
      detail: "Para adultos a partir de 18 anos"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      step: "2º PASSO", 
      title: "Com 200ml de Água",
      description: "Ingira com água, preferencialmente antes das refeições",
      detail: "Facilita a absorção dos nutrientes"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      step: "3º PASSO",
      title: "Use por 30 Dias",
      description: "Mantenha o uso contínuo por pelo menos 30 dias",
      detail: "Para melhores resultados"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      step: "4º PASSO",
      title: "Armazenamento Correto",
      description: "Conserve ao abrigo da luz, calor e umidade",
      detail: "Após aberto, consumir em até 60 dias"
    }
  ];

  const evidences = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mais de 15.000 homens",
      subtitle: "já transformaram sua vida íntima"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Fórmula validada",
      subtitle: "cientificamente"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Padrões de qualidade",
      subtitle: "e segurança garantidos"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % instructions.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [instructions.length]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-power text-power-foreground mb-4 px-4 py-2 text-sm font-bold">
            MODO DE USO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Como Usar o <span className="text-energy">Libid Max</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-power">60 cápsulas</strong> por pote - <strong className="text-energy">30g</strong> de suplemento alimentar para 30 dias de tratamento
          </p>
        </div>

        {/* Carrossel de Instruções */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {instructions.map((instruction, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 flex justify-center items-center p-6"
                >
                  <Card className="bg-gradient-to-br from-energy/10 to-power/10 border-energy/20 max-w-2xl w-full">
                    <CardContent className="p-8 text-center">
                      <div className="bg-gradient-to-r from-energy to-power p-4 rounded-full text-white inline-flex mb-6">
                        {instruction.icon}
                      </div>
                      <div className="mb-4">
                        <Badge className="bg-energy/20 text-energy border-energy/30 mb-3">
                          {instruction.step}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {instruction.title}
                        </h3>
                        <p className="text-lg text-foreground mb-2">
                          {instruction.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {instruction.detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-6">
            {instructions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-energy scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <CTAButton variant="hero" size="xl" className="w-full md:w-auto">
            Quero Sentir Esse Poder Agora
          </CTAButton>
        </div>

        {/* Evidências e Credibilidade */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-energy">Evidências</span> que comprovam a eficácia
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {evidences.map((evidence, index) => (
              <Card key={index} className="border-power/20 bg-gradient-to-br from-power/5 to-background text-center">
                <CardContent className="p-6">
                  <div className="bg-power/10 p-4 rounded-full text-power inline-flex mb-4">
                    {evidence.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {evidence.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {evidence.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selo de Qualidade */}
          <div className="mt-12 bg-gradient-to-r from-energy/10 to-power/10 border-2 border-energy/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-energy mr-3 fill-current" />
              <Badge className="bg-energy text-energy-foreground px-4 py-2 text-base font-bold">
                QUALIDADE GARANTIDA
              </Badge>
              <Star className="w-8 h-8 text-energy ml-3 fill-current" />
            </div>
            <p className="text-lg text-foreground font-semibold mb-2">
              Produzido com selo da <span className="text-energy">ANVISA</span> e <span className="text-power">BPF</span>
            </p>
            <p className="text-muted-foreground">
              <span className="text-energy font-bold">Importante:</span> Não exceder a dose recomendada. Manter fora do alcance de crianças.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};