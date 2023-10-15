import Button from "../common/button";

const About = () => {
  return (
    <div className="bg-[#495E57] text-[#EDEFEE] flex items-center justify-between md:justify-center md:space-x-[280px] py-[32px] md:px-[266px] px-[16px]">
      <div className="max-w-[328px] flex flex-col items-center justify-center space-y-[24px]">
        <div className="w-full flex flex-col items-start justify-center -space-y-[20px]">
          <h1 className="text-[#F4CE14] markazi-text text-[4rem]">
            Little Lemon
          </h1>
          <p className="text-6xl markazi-text">Chicago</p>
        </div>
        <div className="w-full flex flex-col items-start justify-center space-y-[16px]">
          <p className="karla text-lg">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>
            <p className="text-[#333333] font-bold karla text-lg">
              Reserve a table
            </p>
          </Button>
        </div>
      </div>
      <div className="h-full rounded-2xl overflow-hidden">
        <img
          src="assets/restauranfood.jpg"
          alt="RestaurantImage"
          width={200}
          height={350}
        />
      </div>
    </div>
  );
};

export default About;
