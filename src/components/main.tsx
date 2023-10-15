import { Container } from "./common/container";
import About from "./section/about";
import Hero from "./section/hero";
import Specials from "./section/speicals";
import Testimonials from "./section/testimonials";

const Main = () => {
  return (
    <>
      <Hero />
      <Container>
        <div className="pt-[128px] flex flex-col space-y-[128px] w-full">
          <Specials />
          <Testimonials />
        </div>
      </Container>
      <About />
    </>
  );
};

export default Main;
