interface TestimonialCardProps {
  imgUrl?: string;
  name?: string;
  feedback?: string;
}

const TestimonialCard = ({ imgUrl, name, feedback }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col p-6 bg-[#EDEFEE] space-y-[24px]">
      <div className="flex items-center justify-between w-full space-x-[32px]">
        <img
          src={imgUrl}
          width={100}
          height={100}
          className="rounded-full overflow-hidden"
          alt="Profile"
        />
        <p className="text-[1.125rem] font-bold">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
