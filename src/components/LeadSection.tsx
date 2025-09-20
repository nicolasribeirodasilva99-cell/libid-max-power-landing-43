import { Badge } from "@/components/ui/badge";
import { AlertCircle, Heart } from "lucide-react";
export const LeadSection = () => {
  const questions = ["Você já sentiu aquele medo de falhar bem na hora que mais importa?", "Já evitou o momento íntimo por falta de energia ou confiança?", "Ou ficou em dúvida se sua parceira ainda está satisfeita com você?"];
  return <section className="py-16 md:py-20 bg-gradient-to-br from-destructive/5 via-background to-energy/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de Alerta */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-destructive/10 text-destructive border-destructive/20 px-4 py-2 text-sm font-bold">
              <AlertCircle className="w-4 h-4 mr-2" />
              MOMENTO DA VERDADE
            </Badge>
          </div>

          {/* Perguntas Provocativas */}
          <div className="space-y-8 mb-12">
            {questions.map((question, index) => <div key={index} className="bg-card/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  {question}
                </h3>
              </div>)}
          </div>

          {/* Call to Action Emocional */}
          <div className="bg-gradient-to-r from-destructive/10 to-energy/10 border border-energy/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              
              <span className="text-2xl">👉</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Se respondeu <span className="text-energy">sim</span> a qualquer uma dessas perguntas,{" "}
              <span className="text-destructive">você sabe o peso</span> que isso traz para sua vida íntima e para sua autoestima.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A boa notícia é que <span className="text-energy font-semibold">você não está sozinho</span> e{" "}
              <span className="text-power font-semibold">existe uma solução natural</span> que já transformou a vida de milhares de homens.
            </p>
          </div>
        </div>
      </div>
    </section>;
};