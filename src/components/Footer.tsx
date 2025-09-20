export const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Nome */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-power">Libid Max</h3>
              <p className="text-sm text-muted-foreground">
                A solução natural para sua performance sexual
              </p>
            </div>
            
            {/* Suporte */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
              <h4 className="text-power font-bold mb-2">Atendimento e Suporte</h4>
              <a 
                href="mailto:suporte@healthmakerss.com.br" 
                className="text-energy hover:text-energy/80 transition-colors font-semibold"
              >
                suporte@healthmakerss.com.br
              </a>
            </div>
          </div>

          {/* Avisos legais */}
          <div className="max-w-4xl mx-auto space-y-4 text-sm text-muted-foreground">
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">⚠️ AVISO IMPORTANTE</h4>
              <p className="leading-relaxed">
                Os resultados podem variar de pessoa para pessoa. Este produto não se destina a 
                diagnosticar, tratar, curar ou prevenir qualquer doença. Mantenha fora do alcance 
                de crianças. Não exceda a dose recomendada.
              </p>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">📋 RESPONSABILIDADE</h4>
              <p className="leading-relaxed">
                Se você tem alguma condição médica ou está tomando medicamentos, consulte seu 
                médico antes de usar este produto. Não recomendado para menores de 18 anos.
              </p>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">🔒 PRIVACIDADE</h4>
              <p className="leading-relaxed">
                Respeitamos sua privacidade. Todas as informações são tratadas com total 
                confidencialidade e suas compras são processadas de forma 100% discreta.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-secondary/20">
            <p className="text-xs text-muted-foreground">
              © 2024 Libid Max. Todos os direitos reservados. | 
              Este site é protegido por reCAPTCHA e aplicam-se a Política de Privacidade e os Termos de Serviço do Google.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};