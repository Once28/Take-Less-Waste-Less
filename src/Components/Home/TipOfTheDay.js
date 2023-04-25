import React from "react"; //import React Component
import "../../index.css";

// The component that holds content of the Home Page including how we rank, our mission statement and tips.
export function TipOfTheDay() {
  return (
    <div className="light-green">
      <section aria-label="Explanation for our rankings, our mission, and our contacts">
        <div className="secondaryInfo">
          <h1 className="labels mt-5">Rankings Explained</h1>
          <p className="descriptions">
            Each school’s rank is determined by their percentage reduction of
            waste each week. Each district’s rank is determined by the percent
            reduction of waste from all its schools each week.
          </p>
          <h1 className="labels">Our Mission Statement</h1>
          <p className="descriptions">
            Our mission is to help motivate schools to reduce food waste in
            cafeterias, improving the environment and cities as a whole. We like
            to go by, <em className="motto">"Take Less, Waste Less."</em>
          </p>
          <h1 className="reduceWaste">
            How can schools help reduce food waste?
          </h1>
          <ul className="tips" aria-label="tips on how to reduce food waste">
            <li>
              Let students vote on new menu items to let you know if they liked
              it or not
            </li>
            <li>Educate your students about menu items</li>
            <li>
              Generate excitement among students with cooking demos or classes
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
