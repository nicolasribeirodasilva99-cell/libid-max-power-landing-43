import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export const NutritionalInfoSection = () => {
  const vitamins = [
    { name: "Vitamina A", amount: "Dose otimizada" },
    { name: "Vitamina B1", amount: "Dose otimizada" },
    { name: "Vitamina B2", amount: "Dose otimizada" },
    { name: "Vitamina B3", amount: "Dose otimizada" },
    { name: "Vitamina B5", amount: "Dose otimizada" },
    { name: "Vitamina C", amount: "Dose otimizada" },
    { name: "Vitamina B12", amount: "Dose otimizada" }
  ];

  const minerals = [
    { name: "Ferro", amount: "10 mg" },
    { name: "Manganês", amount: "2,3 mg" }
  ];

  const compounds = [
    { name: "Cafeína", amount: "120 mg" },
    { name: "Arginina", amount: "100 mg" },
    { name: "Beta-alanina", amount: "100 mg" }
  ];

  const ingredients = [
    "Vitaminas e minerais selecionados",
    "Aminoácidos essenciais",
    "Celulose microcristalina",
    "Estearato de magnésio",
    "Dióxido de silício"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-energy text-energy-foreground mb-4 px-4 py-2 text-sm font-bold">
            INFORMAÇÃO NUTRICIONAL
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Composição <span className="text-power">Científica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informações nutricionais por porção de <strong className="text-energy">2 cápsulas</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vitaminas */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-energy mb-4 text-center">
                Complexo Vitamínico
              </h3>
              <div className="space-y-3">
                {vitamins.map((vitamin, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-foreground font-medium">{vitamin.name}</span>
                    <span className="text-power text-sm">{vitamin.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Minerais e Compostos */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-power mb-4 text-center">
                Minerais & Compostos
              </h3>
              <div className="space-y-3">
                {minerals.map((mineral, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-foreground font-medium">{mineral.name}</span>
                    <span className="text-energy font-bold">{mineral.amount}</span>
                  </div>
                ))}
                <div className="pt-2">
                  {compounds.map((compound, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-foreground font-medium">{compound.name}</span>
                      <span className="text-energy font-bold">{compound.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredientes */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Ingredientes
              </h3>
              <div className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start py-2">
                    <span className="text-energy mr-2">•</span>
                    <span className="text-foreground text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-energy" />
                  <span className="text-foreground font-semibold">Não contém glúten</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};