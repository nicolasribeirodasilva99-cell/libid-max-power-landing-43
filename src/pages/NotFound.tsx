import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Página não encontrada</p>
        <Button onClick={() => navigate("/")} variant="default">
          Voltar para o início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;