import { Shield, Truck } from "lucide-react";

export const AgreementSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8 text-energy" />,
      title: "Garantia Total",
      description: "30 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro."
    },
    {
      icon: <Truck className="w-8 h-8 text-energy" />,
      title: "Entrega Discreta",
      description: "Enviamos em embalagem totalmente discreta. Ninguém saberá o que é."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-energy/20 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Você não tem <span className="text-energy">nada a perder</span> — só a <span className="text-energy">ganhar</span>.
            </p>
            <p className="text-lg text-muted-foreground">
              Esta é sua chance de recuperar sua confiança sem nenhum risco.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-energy/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {guarantee.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
            <p className="text-lg font-semibold text-destructive mb-2">
              ⚠ Mas atenção: por ser 100% natural e de alta demanda, a produção é limitada.
            </p>
            <p className="text-lg font-semibold text-destructive mb-4">
              ⚠ As ofertas especiais expiram a qualquer momento.
            </p>
            <p className="text-xl font-bold text-foreground">
              É simples: ou você age <span className="text-energy">agora</span> e recupera sua potência, ou continua preso às mesmas frustrações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};