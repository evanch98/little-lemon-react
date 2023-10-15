import TestimonialCard from "../common/testimonial-card";

const testimonials = [
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

const Testimonials = () => {
  return (
    <div className="flex flex-col space-y-[48px] items-center justify-center w-full text-[#333333]">
      <div className="flex items-center justify-center md:w-[900px] w-full">
        <h1 className="text-[4rem] markazi-text">Testimonials</h1>
      </div>
      <div className="w-full flex items-center justify-center space-x-[20px]">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            imgUrl="/assets/c1.svg"
            name="Emily Stone"
            feedback="It's a great experience. The ambiance is very welcoming and charming.."
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
