import Button from "../common/button";
import MenuCard from "../common/menu-card";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Desert",
    price: "$4.99",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  return (
    <div className="flex flex-col space-y-[48px] items-center justify-center w-full text-[#333333]">
      <div className="flex items-center justify-between md:w-[900px] w-full">
        <h1 className="text-[4rem] markazi-text">This week's specials</h1>
        <Button>
          <p className="font-bold karla text-lg">Online Menu</p>
        </Button>
      </div>
      <div className="w-full flex items-center justify-center space-x-[20px]">
        {specials.map((special) => (
          <MenuCard
            key={special.name}
            name={special.name}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
