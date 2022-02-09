import React, { useEffect, useState } from "react";
import Stack from "../../sdk/entry";
import Header from "../home/Header";
import Hero from "./HeroSection";
import Footer from "../home/Footer";

const Home = () => {
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();
  const [hero, setHero] = useState();

  useEffect(async () => {
    try {
      const header = await Stack.getEntryByUrl({
        contentTypeUid: "header_si14",
        entryUrl: "/header-si14",
      });

      setHeader({
        logoUrl: header[0].logo.url,
        menu: header[0].menu,
      });

      const footer = await Stack.getEntryByUrl({
        contentTypeUid: "footer_si14",
        entryUrl: "/footer-si14",
      });

      setFooter({
        logoUrl: footer[0].footer_logo.url,
        copyrightText: footer[0].copyright_text,
        menu: footer[0].footer_menu,
      });

      const heroSection = await Stack.getEntryByUrl({
        contentTypeUid: "section_si14",
        entryUrl: "/section-si14",
      });

      setHero({
        button: heroSection[0].button,
        heading: heroSection[0].heading,
        paragraph: heroSection[0].paragraph,
        SecionImage: heroSection[0].file.url,
      });

      console.log("Header ----->", header);
      console.log("Section----->", heroSection);
      console.log("Footer ----->", footer);
    } catch (error) {
      // fail silently
      console.log(error);
    }
  }, []);

  return (
    <div className="wrapper">
      <Header header={header} />
      <Hero hero={hero} />
      <Footer footer={footer} />
    </div>
  );
};

export default Home;

// 1.write two section html
// 2.create 2 enttries
// 3.fetch data and useState
// 4.put dymic data

// ami gelam cll me on wht app
