import { Badge } from "@/components/ui/badge";
import { Star, Zap } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      age: "42 anos",
      city: "São Paulo - SP",
      rating: 5,
      text: "Depois dos 40, comecei a ter problemas na hora H. O Libid Max mudou minha vida! Em 3 semanas já sentia a diferença e hoje minha esposa não para de elogiar minha performance.",
      highlight: "Resultado em 3 semanas"
    },
    {
      name: "Ricardo L.",
      age: "38 anos", 
      city: "Rio de Janeiro - RJ",
      rating: 5,
      text: "Tentei vários produtos antes, mas nada funcionava. O Libid Max foi diferente. Agora tenho ereções firmes e duradouras. Minha autoestima voltou completamente!",
      highlight: "Autoestima renovada"
    },
    {
      name: "Fernando S.",
      age: "45 anos",
      city: "Belo Horizonte - MG", 
      rating: 5,
      text: "Estava com vergonha de decepcionar minha parceira. Com o Libid Max, nossa vida íntima melhorou 1000%. Ela até comentou sobre a diferença na minha energia!",
      highlight: "Vida íntima transformada"
    },
    {
      name: "João P.",
      age: "39 anos",
      city: "Salvador - BA",
      rating: 5,
      text: "O melhor investimento que já fiz! Além da performance sexual, minha disposição durante o dia melhorou muito. Me sinto 10 anos mais jovem!",
      highlight: "Mais energia e vigor"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-energy text-energy-foreground mb-4 px-4 py-2 text-sm font-bold">
            ⭐ DEPOIMENTOS REAIS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Veja o Que Nossos <span className="text-power">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 15.000 homens já transformaram sua vida sexual com o Libid Max
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/90 transition-all duration-300 hover:scale-105"
            >
              {/* Header do depoimento */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.city}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-power text-power" />
                  ))}
                </div>
              </div>

              {/* Destaque do resultado */}
              <Badge variant="outline" className="mb-4 border-energy text-energy text-xs">
                {testimonial.highlight}
              </Badge>

              {/* Texto do depoimento */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Verificação */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Zap className="w-3 h-3 text-energy" /> Depoimento verificado
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action no final dos depoimentos */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-energy">Você Pode Ser o Próximo!</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos milhares de homens que já recuperaram sua confiança e performance sexual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-power text-power-foreground px-4 py-2">
                🔥 Últimas 23 unidades disponíveis
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};