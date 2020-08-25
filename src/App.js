import React from "react";
import typewriter from "./typewriter";
import Me from "./me.jpg";
import Richmond from "./richmond.jpg";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          AMIN<span style={headingStyle}>.</span>
        </h1>
        <nav>
          <a className="navAnchor" href="#work">Work</a>
          <a className="navAnchor" href="#about">About</a>
          <a className="navAnchor" href="">Contact</a>
        </nav>
      </header>
      <div className="main">
        <div className="container py-5">
          <div className="output" id="output">
            <h2 className="cursor"></h2>
            <br />
            <h3></h3>
          </div>
          <br />
          <div className="arrow-1">
            <a href="#work">
              <i className="arrow down"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="work" className="work">
        <div className="rvc">
          <div className="img-placeholder-1">
            <img src="" />
          </div>
          <div className="textbox-1">
            <p>
              <h2>An app designed to give users the ability to fork and clone their
              own versions of popular recipes.</h2>
              <div style={textStyle}>
                HTML | React | Node | CSS | Redux | Express | PostgreSQL
              </div>
              <ul>
                <li>
                  React was used for hooks and functional components for
                  reusable components.
                </li>
                <li>
                  Redux and Redux-Thunk were used for state management and
                  asynchronous actions respectively.
                </li>
                <li>Used Axios for API requests for CRUD operations.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="openBank">
          <div className="textbox-2">
            <p>
              <h2>An app that connects and manages users’ bank account details and
              transactions.</h2>
              <div style={textStyle}>
                HTML | React | Node | CSS | Redux | Express | MongoDB
              </div>
              <ul>
                <li>
                  Used MERN stack as well as Material-UI styling for clean,
                  fullstack login/auth and banking capability.
                </li>
                <li>
                  Used Plaid’s API to link and retrieve user’s open banking
                  details and view transactions.
                </li>
                <li>
                  MongoDB was used for a schema-less database and deep
                  query-ability.
                </li>
              </ul>
            </p>
          </div>
          <div className="img-placeholder-2">
            <img src="" />
          </div>
        </div>
        <br />
        <div className="arrow-2">
          <a href="#about">
            <i className="arrow down"></i>
          </a>
        </div>
      </div>

      <div id="about" className="about">
        <div >
          <img className="cover" src={Richmond} />
        </div>
        <div >
          <img className="profile" src={Me} />
        </div>
        <div className="bio">
          <h2>Hi there 👋</h2>
          <p>
            I'm a British-Arab living in London, UK with a passion for London
            property and architecture. I'm most excited where property,
            architecture, urban cities and their histories intersect with and
            are illuminated by technology, business and design. I love dining
            out and exploring a city's local and hospitality scene. Fintech,
            decentralised finance, and open banking are some of my other
            interests.
            <br />
            <br /> I started my career facilitating debt factoring services to
            small businesses for 5 years in the wake of the global financial
            crisis and economic downturn. Since then I spent 7 years managing a
            portfolio of prime property in London for HNWIs. I've been a company
            director and co-founder since 2007 so I'm very familiar and
            passionate about start-up culture and working in agile team-based
            environments.
            <br />
            <br /> I transitioned into tech in 2019 when I joined Lambda School
            - a coding bootcamp with a unique educational model centered around
            competence and learning how to learn, where I built up a mastery of
            subjects in full stack software development and computer science
            (such as hooks and functional components, CRUD and RESTful APIs,
            state management, data structures, OOP vs functional programming, to
            name a few...).
            <br />
            <br /> I am now seeking new opportunities as a fullstack software
            developer. Connect with me on LinkedIn.
            <br />
            <br /> I love to code and I like to keep in touch with technology by
            building projects to learn new languages and tools. Currently, I'm
            enjoying JavaScript and Python.
            <br />
            <br /> Follow me: Twitter
            <br />
          </p>
          <h2>🎙 I also run The Junior Developer Podcast...</h2>
          <p>
            A podcast to chronicle other developers’ journey into coding. It’s
            no secret that the primary purpose of this podcast is to network
            with other developers to better understand their motivations, work
            ethic, and journey in software development. I’m hoping this will
            interest a lot of other people who can identify with this journey,
            especially at this time.
            <br />
            <ul>
              <li><a href="https://anchor.fm/amin-hasan/episodes/The-Resilient-Russian-eh33p6">The Resilient Russian</a></li>
              <li><a href="https://anchor.fm/amin-hasan/episodes/Code--Game--Repeat-egpn75">Code. Game. Repeat.</a></li>
              <li><a href="https://anchor.fm/amin-hasan/episodes/From-Bootcamp-To-Senior-Dev-No-Degree-egftn4">From Bootcamp To Senior Dev (No Degree)</a></li>
              <li><a href="https://anchor.fm/amin-hasan/episodes/Catalunian-Dreams-egcbkk">Catalunian Dreams</a></li>
              <li><a href="https://anchor.fm/amin-hasan/episodes/Breaking-into-tech-in-Africa-efrtr9">Breaking into tech in Africa</a></li>
              <li><a href="https://anchor.fm/amin-hasan/episodes/To-Bootcamp-and-Beyond-efeuv3">To Bootcamp and Beyond</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

var headingStyle = {
  color: "RGB(146, 139, 97)",
};

var textStyle = {
  "text-align": "center",
};

export default App;
