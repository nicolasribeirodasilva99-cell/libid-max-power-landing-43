import { Badge } from "@/components/ui/badge";
import { CTAButton } from "./CTAButton";
// import naturalBanner from "@/assets/libid-max-natural.png";
import { Shield, Package, Lock, Clock, Zap } from "lucide-react";

export const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de 30 Dias",
      description: "Se não ver resultados em 30 dias, devolvemos 100% do seu dinheiro. Sem perguntas."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Entrega Discreta",
      description: "Embalagem totalmente discreta. Ninguém saberá o que você está recebendo."
    },
    {
      icon: <Lock className="w-8 h-8" />, 
      title: "Compra Segura",
      description: "Seus dados estão protegidos com certificado SSL de segurança máxima."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Receba em casa em até 7 dias úteis para todo o Brasil."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-power text-power-foreground mb-4 px-4 py-2 text-sm font-bold">
            🛡️ GARANTIAS TOTAIS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Compre com <span className="text-energy">Total Segurança</span> e{" "}
            <span className="text-power">Discrição</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sua privacidade e satisfação são nossa prioridade número 1
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-energy to-power p-3 rounded-lg text-white mx-auto w-fit mb-4">
                {guarantee.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner 100% Natural */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-energy/20 to-power/20 border-2 border-energy/30 rounded-xl p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-energy mb-2">100% NATURAL</h3>
            <p className="text-foreground font-semibold">Sem Risco para Sua Saúde</p>
          </div>
        </div>

        {/* Destaque especial para pagamento */}
        <div className="bg-gradient-to-r from-energy/20 to-power/20 border border-energy/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-energy">PAGUE APENAS</span>{" "}
            <span className="text-power">QUANDO RECEBER</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">💳 SEM CARTÃO DE CRÉDITO</h4>
              <p className="text-muted-foreground">
                Não precisa de cartão de crédito ou dados bancários. 
                Você paga direto na entrega para o entregador.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">🏠 PAGAMENTO NA ENTREGA</h4>
              <p className="text-muted-foreground">
                Receba primeiro, avalie o produto e pague apenas 
                se estiver satisfeito com a qualidade.
              </p>
            </div>
          </div>

          <CTAButton variant="cta" size="xl" className="mb-4">
            QUERO RECEBER EM CASA AGORA
          </CTAButton>
          
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-energy" /> Entrega em até 7 dias úteis</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-energy" /> Embalagem discreta</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-energy" /> Sem riscos</span>
          </p>
        </div>
      </div>
    </section>
  );
};