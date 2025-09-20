import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, AlertTriangle, TrendingDown, Trophy } from "lucide-react";

export const StorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-power/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge de História Real */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-power/10 text-power border-power/30 px-4 py-2 text-sm font-bold">
              <User className="w-4 h-4 mr-2" />
              HISTÓRIA REAL DE TRANSFORMAÇÃO
            </Badge>
          </div>

          {/* Título Principal */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-power to-energy bg-clip-text text-transparent">
                Como Carlos Venceu o Vilão da Dependência Química
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A jornada de um homem comum que recuperou sua confiança e liberdade
            </p>
          </div>

          {/* História em Cards */}
          <div className="space-y-8">
            {/* O Herói e o Obstáculo */}
            <Card className="border-destructive/20 bg-gradient-to-r from-destructive/5 to-background">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-destructive/10 p-3 rounded-full">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">O Obstáculo</h3>
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold">Carlos, 42 anos</span>, já não tinha a mesma confiança de antes. 
                      Toda vez que chegava a hora H, o medo de falhar tomava conta. 
                      <span className="text-destructive font-semibold"> Até que um dia, aconteceu de verdade. Ele não conseguiu.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* O Vilão */}
            <Card className="border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-background">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <TrendingDown className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">O Vilão Aparece</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Desesperado, Carlos tentou recorrer ao que muitos homens usam: 
                      <span className="text-orange-500 font-semibold"> pílulas azuis como Viagra e até genéricos baratos.</span> 
                      No começo, parecia a solução…
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Mas logo veio a verdade: <span className="text-destructive font-semibold">dor de cabeça forte, taquicardia</span>, 
                      e o pior, o sentimento de dependência. Ele precisava tomar um comprimido sempre escondido, 
                      com medo de ser descoberto pela esposa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* A Virada */}
            <Card className="border-energy/20 bg-gradient-to-r from-energy/5 to-background">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-energy/10 p-3 rounded-full">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">A Virada</h3>
                    <p className="text-foreground leading-relaxed">
                      Foi nesse momento que Carlos percebeu: 
                      <span className="text-destructive font-semibold"> aqueles químicos eram o verdadeiro vilão.</span> 
                      Eles só davam uma ajuda momentânea, mas tiravam sua liberdade, sua confiança e até sua saúde.
                    </p>
                    <p className="text-energy font-semibold mt-3">
                      A virada aconteceu quando ele descobriu uma fórmula natural desenvolvida especialmente 
                      para homens como ele, que queriam potência real sem riscos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* A Vitória */}
            <Card className="border-power/20 bg-gradient-to-r from-power/10 to-energy/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-power/10 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-power" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">A Vitória Completa</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      <span className="text-power font-semibold">Em poucas semanas</span>, Carlos voltou a sentir 
                      ereções firmes, desejo constante e energia no dia a dia.
                    </p>
                    <p className="text-foreground leading-relaxed font-semibold">
                      Hoje, ele não só recuperou sua vida íntima como também o respeito e admiração da esposa. 
                      <span className="text-energy"> Ele venceu o vilão — e reconquistou sua vitória.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action Inspiracional */}
          <div className="mt-12 text-center bg-gradient-to-r from-power/10 to-energy/10 border border-power/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Assim como Carlos, <span className="text-energy">você também pode vencer</span> este desafio
            </h3>
            <p className="text-lg text-muted-foreground">
              A mesma solução natural que transformou a vida de Carlos está disponível para você agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};