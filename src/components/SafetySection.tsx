import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Users, Baby } from "lucide-react";
export const SafetySection = () => {
  const warnings = [{
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Não é Medicamento",
    description: "Este é um suplemento alimentar, não substitui uma alimentação equilibrada"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Dose Recomendada",
    description: "Não exceder a dose recomendada de 2 cápsulas ao dia"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Fora do Alcance",
    description: "Manter sempre fora do alcance de crianças"
  }, {
    icon: <Baby className="w-6 h-6" />,
    title: "Restrições de Uso",
    description: "Não deve ser consumido por gestantes, lactantes e crianças"
  }];
  return <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-destructive text-destructive-foreground mb-4 px-4 py-2 text-sm font-bold">
            SEGURANÇA E AVISOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Uso <span className="text-energy">Responsável</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informações importantes para o uso seguro do Libid Max
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {warnings.map((warning, index) => <div key={index} className="bg-card/80 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 hover:bg-card/90 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-destructive/10 p-3 rounded-lg text-destructive">
                  {warning.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {warning.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {warning.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Indicação de Idade */}
        <div className="bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-energy">Indicação:</span> Adultos a partir de <span className="text-power">18 anos</span>
          </h3>
          <p className="text-lg text-muted-foreground">Desenvolvido para homens que querem melhorar desempenho e energia de forma natural e segura.</p>
        </div>
      </div>
    </section>;
};