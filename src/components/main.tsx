import { Container } from "./common/container";
import Hero from "./section/hero";
import Specials from "./section/speicals";

const Main = () => {
  return (
    <>
      <Hero />
      <Container>
        <div className="pt-[128px] flex flex-col space-y-[128px] w-full">
          <Specials />
        </div>
      </Container>
    </>
  );
};

export default Main;
