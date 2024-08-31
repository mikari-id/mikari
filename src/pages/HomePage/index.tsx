import CustomerSupport from "./CustomerSupport";
import Home from "./Home";
import Services from "./Services";
import Teams from "./Teams";

export default function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <CustomerSupport />
      <Teams />
    </>
  );
}
