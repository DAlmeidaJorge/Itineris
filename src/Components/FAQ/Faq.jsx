import React, { useState } from 'react';
import "./Faq.css";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question: "What if I want a room to myself?",
      answer: "We offer the “My Own Room” option on most of our tours, which guarantees you a room of your own for a modest additional fee. Cost and details of “My Own Room” vary according to the specific trip, so be sure to consult our trip summary pages for full details. On some tours, a single room may not be available at certain overnight stops, depending on the style of accommodation.",
    },
    {
      question: "What are the best destinations for solo travelers?",
      answer: "Ideal destinations for solo travelers encompass a wide array of choices, from breathtaking natural wonders like serene mountains, pristine beaches, and lush rainforests, to culturally rich regions offering unique experiences, historical sites, and vibrant local communities.",
    },
    {
      question: "What's the age range of a group trip?",
      answer: "Our groups often experience a good mix of ages, everything from travellers in their early-20s to those aged 60 and over. We sort all of our trips into Travel Styles, which guarantee that you’ll be travelling with people who share the same interests you do. Over the years, we’ve found that a good range of ages within a group often adds to the experience.",
    },
    {
      question: "What happens in the evenings?",
      answer: "On most evenings, your Chief Experience Officer (CEO) will organize a group meal. It’s pretty flexible; you can choose to dine with the group or head off and do your own thing. Other nights, your CEO may recommend a few nearby restaurants you can try. Again, you determine whether you want to stick with the group or go it alone.",
    },
    {
      question: "Are single travelers mainly women or men?",
      answer:  "Most of our trips split pretty evenly down gender lines. For every trip in Itineris we average roughly 50:50 female-to-male, so you don't have to worry because you will never feel outnumbered.",
    },
    {
      question: "How can I find out ahead of time who is in my group?",
      answer: "On most Itineris journeys, the ratio of solo travelers to others (couples, friends traveling together, etc.) is approximately 40:60. In respect of privacy, we are unable to provide information about your future travel companions in advance. Our tours captivate an eclectic mix of adventurous individuals from various corners of the globe, all driven by a shared passion to explore our planet at its grassroots level. Itineris tours are conducted primarily in English and attract travelers hailing from North America, the United Kingdom, Australia, New Zealand, and Europe.",
    },
  ];
  
  return (
    <div>
      <div className='color-container'>
      <h2 className='faq-title'>Frequently Asked Questions</h2>
      <p className='faq-para'>
        Never traveled solo or gone as part of a group before? We can get you sorted. Check out some of our most frequently asked questions, or get in touch with us any time.
       </p>

      {faqData.map((faq, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <FaChevronDown className={`accordion-icon ${activeIndex === index ? 'rotate' : ''}`} />
          </button>
          <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Faq;