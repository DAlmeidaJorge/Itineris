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
      answer: "Wherever your heart takes you! Just about any place worth exploring is a good spot to venture out on your own.",
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
      answer: "Most of our trips split pretty evenly down gender lines. We average roughly 60:40 female-to-male, so you’ll never feel outnumbered.",
    },
    {
      question: "How can I find out ahead of time who is in my group?",
      answer: "On most G Adventures tours, the ratio of solo travelers to others (couples, friends travelling together, etc) is roughly 40:60. For privacy reasons, we can’t share information about your soon-to-be travelling companions ahead of time. Our tours appeal to a wide cross-section of adventurous people from all over the world united by a desire to experience our planet from a grassroots level. Our tours are conducted in English and tend to attract travellers from North America, the United Kingdom, Australia, New Zealand, and Europe.",
    },
  ];
  
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <p>
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
  );
}

export default Faq;