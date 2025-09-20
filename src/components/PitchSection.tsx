import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProductImage } from "./ProductImage";
import { Zap, Heart, Battery, Shield, CheckCircle, Award } from "lucide-react";

export const PitchSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ereções firmes e duradouras",
      description: "Recupere a potência que você tinha antes"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Libido elevada, como quando tinha 20 anos",
      description: "Desperte o desejo intenso novamente"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Energia e disposição diária",
      description: "Sinta-se revigorado em todas as áreas"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Autoestima e confiança renovadas",
      description: "Reconquiste sua segurança interior"
    }
  ];

  const differentials = [
    "Fórmula exclusiva com Tribulus, Maca, Ginseng, L-Arginina, Zinco e Magnésio",
    "100% natural, vegano, sem glúten, sem lactose, sem açúcar",
    "Produzido com selo da Anvisa e BPF",
    "Discreto, seguro e sem risco de dependência"
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-energy/10 via-background to-power/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge Principal */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-energy text-energy-foreground px-6 py-3 text-base font-bold animate-pulse">
              <Award className="w-5 h-5 mr-2" />
              FÓRMULA REVOLUCIONÁRIA
            </Badge>
          </div>

          {/* Título Principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-energy to-power bg-clip-text text-transparent">
                Libid Max Power
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-foreground max-w-4xl mx-auto leading-relaxed">
              O suplemento natural <span className="text-energy">mais avançado já criado</span> para performance masculina
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo - Produto */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <ProductImage size="lg" />
              </div>
              
              {/* Explosion Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-energy to-power text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <span className="text-2xl mr-2">💥</span>
                  O que você vai sentir:
                </div>
              </div>
            </div>

            {/* Lado Direito - Benefícios */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-energy/20 bg-gradient-to-r from-energy/5 to-background hover:from-energy/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-energy/10 p-3 rounded-full text-energy">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <span className="text-power">Diferenciais</span> que fazem toda a diferença
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {differentials.map((differential, index) => (
                <Card key={index} className="border-power/20 bg-gradient-to-r from-power/5 to-background">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-power/10 p-2 rounded-full">
                        <CheckCircle className="w-5 h-5 text-power" />
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">
                        {differential}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="mt-12 text-center bg-gradient-to-r from-energy/10 to-power/10 border-2 border-energy/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              <span className="text-energy">A mesma fórmula</span> que transformou a vida do Carlos{" "}
              <span className="text-power">está disponível para você</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Chegou a hora de reconquistar sua confiança e performance
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-energy to-power text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl animate-pulse">
              <span className="text-2xl mr-3">🚀</span>
              Transforme sua vida agora mesmo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};