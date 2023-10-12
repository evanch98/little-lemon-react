import Button from "../common/button";

const Specials = () => {
  return (
    <div className="flex flex-col space-y-[48px] items-center justify-center w-full text-[#333333]">
      <div className="flex items-center justify-between md:w-[900px] w-full">
        <h1 className="text-[4rem] markazi-text">This week's specials</h1>
        <Button>
          <p className="font-bold karla text-lg">Online Menu</p>
        </Button>
      </div>
    </div>
  );
};

export default Specials;
