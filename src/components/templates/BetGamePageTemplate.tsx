import { Header } from "@organisms/Layout/Header";
import { BetLogger } from "@molecules/Notifications/BetLogger";
import { BetForm } from "@organisms/BetForm";

const BetGamePageTemplate = () => {
  return (
    <main>
      <Header />
      <BetLogger />
      <BetForm />
    </main>
  );
};
export default BetGamePageTemplate;
