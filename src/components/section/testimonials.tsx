import TestimonialCard from "../common/testimonial-card";

const testimonials = [
  {
    imgUrl: "/assets/c1.svg",
    name: "Emily Stone",
    feedback:
      "It's a great experience. The ambiance is very welcoming and charming..",
  },
  {
    imgUrl: "/assets/c2.svg",
    name: "John Doe",
    feedback:
      "It's a great experience. The ambiance is very welcoming and charming.",
  },
  {
    imgUrl: "/assets/c3.svg",
    name: "Tiara Clark",
    feedback:
      "It's a great experience. The ambiance is very welcoming and charming.",
  },
  {
    imgUrl: "/assets/c4.svg",
    name: "Vivian Lee",
    feedback:
      "It's a great experience. The ambiance is very welcoming and charming.",
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
            imgUrl={testimonial.imgUrl}
            name={testimonial.name}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
