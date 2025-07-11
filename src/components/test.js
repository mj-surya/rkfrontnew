import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

// Testimonials data stored in a variable
const testimonials = [
  {
    name: "Priya Sharma",
    text: "Absolutely loved the decor! It was even better than I imagined. Highly recommended!",
    image: "/img/testi-1.jpg",
  },
  {
    name: "Rahul Mehta",
    text: "Very professional and creative team. They made our wedding truly magical.",
    image: "",
  },
  {
    name: "Anita Verma",
    text: "The team at RK Balloons made my daughter's birthday unforgettable. Thank you!",
    image: null,
  },
  {
    name: "Vikram Reddy",
    text: "Great service and attention to detail. Highly recommended for any celebration.",
    image: "",
  },
  {
    name: "Sunita Patel",
    text: "Wonderful balloon decorations and smooth coordination.",
    image: "",
  },
  {
    name: "Arjun Singh",
    text: "The decorations were stunning and the team was very professional. Highly recommend!",
    image: "/img/testi-2.jpg",
  },
  {
    name: "Neha Kapoor",
    text: "They transformed our event into a dream. Thank you for the amazing work!",
    image: "",
  },
  {
    name: "Karan Malhotra",
    text: "The attention to detail was impeccable. Our guests were amazed!",
    image: null,
  },
  {
    name: "Meera Desai",
    text: "Fantastic service and beautiful decorations. Will definitely hire them again!",
    image: "",
  },
];

const TestimonialsSection = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  // Calculate the maximum height based on the testimonial content
  useEffect(() => {
    const calculateMaxHeight = () => {
      const cardContainers = document.querySelectorAll('.testimonial-card');
      let maxH = 0;
      cardContainers.forEach((card) => {
        const cardHeight = card.clientHeight;
        if (cardHeight > maxH) {
          maxH = cardHeight;
        }
      });
      setMaxHeight(maxH);
    };

    // Recalculate height on window resize
    window.addEventListener('resize', calculateMaxHeight);
    calculateMaxHeight(); // Initial calculation

    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [testimonials]);

  return (
    <FadeInSection>
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-b from-indigo-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-12">What Our Clients Say</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="px-2"
            >
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 flex flex-col testimonial-card"
                    style={{ height: maxHeight }}
                  >
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-indigo-500 text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <p className="text-gray-600 italic mb-4 flex-grow">“{testimonial.text}”</p>
                    <h4 className="text-indigo-700 font-semibold">{testimonial.name}</h4>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default TestimonialsSection;
