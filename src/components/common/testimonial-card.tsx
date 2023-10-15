interface TestimonialCardProps {
  imgUrl?: string;
  name?: string;
  feedback?: string;
}

const TestimonialCard = ({ imgUrl, name, feedback }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-start items-start p-6 bg-[#EDEFEE] space-y-[24px] text-[1.125rem]  karla">
      <div className="flex items-center justify-center space-x-[32px]">
        <img
          src={imgUrl}
          width={100}
          height={100}
          className="rounded-full overflow-hidden"
          alt="Profile"
        />
        <p className="font-bold">{name}</p>
      </div>
      <p className="text-[#333333] opacity-75 w-[265px]">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
