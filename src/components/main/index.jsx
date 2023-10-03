{/*}
import Features from "../features";
import Hero from "../hero";
import bgImage from "../../public/bg.png";

export default function Main() {
  return (
    <main className="bg-tertiary-300">
      <Hero />
      <Features />
    </main>
  );
}
*/}

import Features from "../features";
import Hero from "../hero";
import NavBar from "../navbar";
import bgImage from "../../bg.png"; // Import the background image

export default function Main() {
  return (
    <main
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Set the background image
      }}
    >
      <NavBar />
      <Hero />
      <Features />
    </main>
  );
}