import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

// Usar as imagens dos assets que existem
const joaoImage = "/src/assets/testimonials/joao.png";
const marcosImage = "/src/assets/testimonials/marcos.png";
const andreImage = "/src/assets/testimonials/andre.png";
const eduardoImage = "/src/assets/testimonials/eduardo.png";
const patriciaImage = "/src/assets/testimonials/patricia.png";

export const TestimonialsCarouselSection = () => {
  const testimonials = [
    {
      name: "João",
      age: 39,
      city: "Belo Horizonte/MG",
      text: "Antes eu evitava até momentos íntimos porque tinha medo de falhar. Depois do Libid Max, minha confiança voltou e minha esposa até comunicou que pareço outro homem.",
      image: joaoImage
    },
    {
      name: "Marcos", 
      age: 45,
      city: "São Paulo/SP",
      text: "Eu cheguei em casa sempre cansado e sem energia. Hoje tenho disposição para treinar, trabalhar e ainda curtir minha esposa. É outro nível de vitalidade.",
      image: marcosImage
    },
    {
      name: "André",
      age: 28,
      city: "Recife/PE", 
      text: "Eu queria mais disposição no treino e ganhei muito mais que isso. Ereções fortes, desejo intenso e uma energia que parece não acabar.",
      image: andreImage
    },
    {
      name: "Eduardo",
      age: 50, 
      city: "Curitiba/PR",
      text: "Já tinha tentado aqueles comprimidos azuis, mas só me deixou com dor de cabeça. O Libid Max foi diferente: firmeza, desejo e sem nenhum efeito colateral.",
      image: eduardoImage
    },
    {
      name: "Patrícia",
      age: 36,
      city: "Esposa do Rogério (42)",
      text: "Nosso casamento estava frio, mas em poucas semanas vi o Rogério voltar a ser o homem cheio de energia que conheci. Nossa relação mudou completamente.",
      image: patriciaImage
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-power/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Título centralizado */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-power to-energy bg-clip-text text-transparent">
                O Que Nossos Clientes estão Dizendo
              </span>
            </h2>
          </div>

          {/* Carrossel de depoimentos */}
          <div className="mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-1">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full border-power/20 bg-gradient-to-br from-background/80 to-power/5 backdrop-blur-sm">
                        <CardContent className="p-6">
                          {/* Estrelas */}
                          <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-energy text-energy" />
                            ))}
                          </div>
                        
                        {/* Aspas de abertura */}
                        <div className="text-4xl text-power/30 font-bold leading-none mb-2">"</div>
                        
                        {/* Texto do depoimento */}
                        <p className="text-foreground leading-relaxed mb-4 text-sm md:text-base">
                          {testimonial.text}
                        </p>
                        
                        {/* Aspas de fechamento */}
                        <div className="text-4xl text-power/30 font-bold leading-none text-right mb-4">"</div>
                        
                        {/* Informações do cliente */}
                        <div className="border-t border-border/40 pt-4">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full border-2 border-power/30">
                              <img 
                                src={testimonial.image} 
                                alt={`Foto de ${testimonial.name}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground text-sm">
                                {testimonial.name}, {testimonial.age} anos
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {testimonial.city}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Badge de verificação */}
                        <div className="mt-4 flex justify-center">
                          <Badge className="bg-energy/10 text-energy border-energy/30 text-xs">
                            ✓ Depoimento verificado
                          </Badge>
                        </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Controles do carrossel */}
              <CarouselPrevious className="-left-12 hidden md:flex" />
              <CarouselNext className="-right-12 hidden md:flex" />
            </Carousel>
          </div>

          {/* CTA visual abaixo do carrossel */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-power/20 to-energy/20 border border-power/30 rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
              <p className="text-foreground font-semibold text-base md:text-lg">
                <span className="bg-gradient-to-r from-power to-energy bg-clip-text text-transparent">
                  ⚡ Esses são apenas alguns dos resultados que nossos clientes relatam…
                </span>
              </p>
            </div>
          </div>

          {/* Chamada final em destaque */}
          <div className="text-center bg-gradient-to-r from-power/10 to-energy/10 border border-power/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-power to-energy bg-clip-text text-transparent">
                Veja como você também pode ter essa transformação
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};