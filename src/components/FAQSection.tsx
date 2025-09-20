import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQSection = () => {
  const faqs = [{
    question: "Estimulantes naturais realmente funcionam?",
    answer: "Sim — muitos homens relatam melhora com ingredientes como maca, ginseng, Tribulus e L-arginina. Os resultados são progressivos, não instantâneos como Viagra."
  }, {
    question: "Quando vou sentir os efeitos?",
    answer: "Alguns notam energia nos primeiros 3–5 dias. Ereções mais firmes e desejo aparecem em 2–4 semanas, com consolidação em 2–3 meses."
  }, {
    question: "Existem riscos ou efeitos colaterais?",
    answer: "Não. Por ser 100% natural e seguro, não há riscos como nos químicos. Não causa dependência."
  }, {
    question: "Preciso consultar um médico?",
    answer: "Sempre recomendamos, especialmente se você usa outros medicamentos ou tem condições crônicas."
  }, {
    question: "Por que não usar Viagra ou Cialis?",
    answer: "Eles oferecem efeito imediato, mas geram dependência, efeitos colaterais e constrangimento. O Libid Max é natural, discreto e de resultado consistente."
  }, {
    question: "Quais ingredientes realmente fazem diferença?",
    answer: "Tribulus, Maca Peruana, Ginseng, Zinco, Magnésio e L-Arginina — todos comprovados para melhorar circulação, libido e energia."
  }];
  return <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-energy text-energy-foreground mb-4 px-4 py-2 text-sm font-bold">
            ❓ DÚVIDAS FREQUENTES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Tire Todas as Suas <span className="text-power">Dúvidas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre o Libid Max
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 hover:bg-card/90 transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-energy transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-energy/10 to-power/10 border border-energy/20 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ainda tem dúvidas? <span className="text-energy">Sua decisão não pode esperar!</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Milhares de homens já estão mudando sua vida íntima com o Libid Max Power, não deixe a insegurança atrasar a sua transformação.</p>
            <Badge className="bg-power text-power-foreground px-4 py-2">
              ⚡ Últimas unidades com desconto especial
            </Badge>
          </div>
        </div>
      </div>
    </section>;
};