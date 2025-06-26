import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FaQ = () => {
  const faqs = [
    {
      question: "Are these recipes beginner-friendly?",
      answer:
        "Yes! Each recipe comes with step-by-step instructions and cooking tips suitable for beginners.",
    },
    {
      question: "Do I need to sign up to see recipes?",
      answer:
        "No, you can browse and view all recipes freely. But creating an account lets you see recipe details and submit your own recipe!",
    },
    {
      question: "Can I submit my own recipes?",
      answer:
        "Absolutely! If you're logged in, you'll find an 'Add Recipe' option in your dashboard.",
    },
    {
      question: "Are the ingredients available locally?",
      answer:
        "We prioritize using easily available and affordable ingredients. Substitution tips are provided when possible.",
    },
    {
      question: "Is every cuisine available?",
      answer:
        "We regularly update our recipe collection and include a wide variety of cuisines. You can explore Chinese, Indian, Mexican, Italian, and more. If a cuisine is missing, feel free to suggest it!",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "RecipeBook | FaQ";
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl text-orange-800 font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            data-aos="zoom-in-up"
            key={index}
            className="collapse collapse-arrow border border-green-400 bg-base-100 rounded-box"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium text-gray-800">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-600">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaQ;
