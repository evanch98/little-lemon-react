import Button from "./button";

interface MenuCardProps {
  name: string;
  price: string;
  description: string;
}

const MenuCard = ({ name, price, description }: MenuCardProps) => {
  return (
    <div className="flex flex-col bg-[#EDEFEE]">
      <img src="/assets/greek salad.jpg" height={274} width={424} alt="Dish" />
      <div className="w-full flex flex-col p-[24px] space-y-[32px] text-[#333333]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold karla text-lg">{name}</h2>
          <p className="font-bold karla text-lg text-[#EE9972]">{price}</p>
        </div>
        <p className="w-[375px] opacity-75 font-medium">{description}</p>
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
