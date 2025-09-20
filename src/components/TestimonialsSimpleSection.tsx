import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const TestimonialsSimpleSection = () => {
  const testimonials = [
    {
      text: "Minha esposa disse que pareço outro homem. Nunca mais falhei.",
      author: "Ricardo",
      age: "38 anos"
    },
    {
      text: "Recuperei minha confiança. Hoje vivo sem medo da hora H.",
      author: "João", 
      age: "45 anos"
    },
    {
      text: "Voltei a ter desejo todos os dias. Energia de sobra!",
      author: "Felipe",
      age: "39 anos"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-power/5 via-background to-energy/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-energy text-energy-foreground mb-4 px-4 py-2 text-sm font-bold">
              📢 DEPOIMENTOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-energy to-power bg-clip-text text-transparent">
                Veja o que nossos clientes estão dizendo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de homens que transformaram suas vidas
            </p>
          </div>

          {/* Depoimentos Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-energy/20 bg-gradient-to-br from-energy/5 to-background hover:from-energy/10 transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-6 relative z-10">
                  {/* Aspas decorativas */}
                  <div className="absolute top-4 left-4 opacity-10">
                    <Quote className="w-12 h-12 text-energy" />
                  </div>
                  
                  {/* Estrelas */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-energy fill-current" />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <blockquote className="text-foreground font-medium text-lg leading-relaxed mb-6 text-center relative z-10">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Autor */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-energy to-power rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <p className="font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age}
                    </p>
                  </div>
                </CardContent>

                {/* Background Effect */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-energy/10 to-transparent rounded-full -mr-12 -mb-12"></div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              <span className="text-energy">Seja o próximo</span> a transformar sua vida íntima
            </h3>
            <p className="text-lg text-muted-foreground">
              Junte-se aos milhares de homens que já recuperaram sua confiança
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};