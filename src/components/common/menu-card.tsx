import Button from "./button";

const MenuCard = () => {
  return (
    <div className="flex flex-col bg-[#EDEFEE]">
      <img src="/assets/greek salad.jpg" height={274} width={424} alt="Dish" />
      <div className="w-full flex flex-col p-[24px] space-y-[32px] text-[#333333]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold karla text-lg">Greek Salad</h2>
          <p className="font-bold karla text-lg text-[#EE9972]">$12.99</p>
        </div>
        <p className="w-[375px] opacity-75 font-medium">
          The famous Greek salad of crispy lettuce, peppers, olives, and our
          Chicago feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <Button>
          <p className="text-[#333333] font-bold karla text-lg">
            Order a Delivery
          </p>
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
