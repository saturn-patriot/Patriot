import Header from "@/components/Header/Header";
import LastedEvents from "@/components/LastedEvents/LastedEvents";

import "./page.scss"
import PopulEvents from "@/components/PopulEvents/PopulEvents";

export default function Home() {
  return (
  <div>
    <Header />
    <div className="home__container">
      <LastedEvents />
      <PopulEvents />
    </div>
  </div>  
  );
}
