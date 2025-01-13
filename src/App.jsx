import React from "react";
import Hero from "./Components/Hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure the correct CSS file is imported

const App = () => {
  React.useEffect(() => {
    // Initialize AOS
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    // Refresh AOS on component mount to apply animations properly
    return () => {
      Aos.refresh(); // Cleanup for AOS if needed
    };
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default App;
