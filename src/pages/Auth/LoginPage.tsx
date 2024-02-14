import Typography from "@/components/ui/Typography/typography";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-80 max-w-96 p-4 mx-4">
        <div className="w-full pb-4 flex items-start justify-center gap-2">
          <FontAwesomeIcon
            icon={faMoneyBill}
            size={"2x"}
            className="text-emerald-600"
          />
          <Typography className="text-center" variant="title3">
            finance
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" type="password" />
          <Button className="bg-emerald-600 hover:bg-emerald-800">
            Entrar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
