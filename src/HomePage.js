import React from "react";
import myImage from "./abc.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpeg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import img13 from "./1mg13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import img17 from "./img17.jpg";
import img18 from "./img18.jpg";
import img19 from "./img19.jpg";
import img20 from "./img20.jpg";
import img21 from "./img21.jpg";
import img22 from "./img22.jpg";
import img23 from "./img23.jpg";
import img24 from "./img24.jpg";
import { Navbar } from "./Navbar";
import { ExtraInfo } from "./ExtraInfo";
import { Parallax } from "./Parallax";
import { SplitInfo } from "./SplitInfo";
import Entertainment from "./Entertainment";
import Footer from "./Footer";
import Logo from "./logo.png";

export default function HomePage() {
  const newsData = [
    {
      label:
        "Panchayat polls: Bengal poll panel chief seeks fresh date hours after Governor CV Ananda Bose summons him to Raj Bhawan",

      imgTag: img7,
    },
    {
      label:
        "Gujarat's Kutch limping back to normalcy in Biparjoy Cyclone aftermath, most roads cleared",
      imgTag: img8,
    },
    {
      label:
        "Operation Ganga indicates resolve to stand with our people: PM on documentary on evacuation of Indians from Ukraine",
      imgTag: img9,
    },
    {
      label:
        "First batch of Agniveers of Jammu and Kashmir Light Infantry attested in befitting ceremony",
      imgTag: img10,
    },
    {
      label:
        "Puri expecting 25 lakh footfall during Lord Jagannath Rath Yatra festival",
      imgTag: img11,
    },
    {
      label:
        "NEET merit list: National Medical Commission revises regulations, Physics marks to get priority over Biology in case of tie",
      imgTag: img12,
    },
  ];
  const jobData = [
    {
      label:
        "Senior Executive (Legal) Vacancy At Pharmaceuticals & Medical Devices Bureau Of India (PMBI)",
      imgTag: img13,
    },
    {
      label: "Presiding Officer Vacancy At Industrial Tribunal, Uttar Pradesh",
      imgTag: img14,
    },
    {
      label:
        "Legal Associate Vacancy At MCO Legals (Meharia and Company) [Apply Now]",
      imgTag: img15,
    },
    {
      label: "Legal Officer Vacancy At Reserve Bank Of India",
      imgTag: img16,
    },
    {
      label: "Presiding Officer Vacancy At Industrial Tribunal, Uttar Pradesh",
      imgTag: img17,
    },
    {
      label:
        "Field Investigator Vacancy At Maharashtra National Law University, Mumbai",
      imgTag: img18,
    },
  ];
  const blogData = [
    {
      label:
        "Kiara Advani joins Hrithik Roshan and Jr NTR in Ayan Mukerji’s actioner War 2",
      imgTag: img19,
    },
    {
      label: "  Grammys Add Three New Categories, Check out",
      imgTag: img20,
    },
    {
      label:
        "Vin Diesel posts throwback picture with Deepika Padukone, says she's one of his favourite people...",
      imgTag: img21,
    },
    {
      label: "5 planets to align in the sky: How to spot them",
      imgTag: img22,
    },
    {
      label:
        "Google launches new program to empower local news publications in India",
      imgTag: img23,
    },
    {
      label:
        "Be your own boss with ChatGPT: Here’s how you can turn entrepreneur with OpenAI’s chatbot",
      imgTag: img24,
    },
  ];
  const extraData = [
    {
      heading:
        "Everyone can make promises but Modi govt's 'strong point' is delivery, says Jaishankar",
      imgTag: img1,
      para: "Everyone can make promises to people but the Modi government's strong point is that it delivers services and projects in a given timeframe, External Affairs Minister S Jaishankar said on Saturday.He was speaking during a function held at Badarpur here as part of the BJP's mega outreach campaign Sampark se Samarthan to mark the completion of the nine years of the Narendra Modi government",
    },
    {
      heading:
        "Gujarat: One dead, policemen injured as mob hurls stones to oppose plan to raze dargah; 174 held",
      imgTag: img2,
      para: "One person died apparently after being hit by a stone, while at least five police personnel were injured in Gujarat's Junagadh city after a group of people hurled stones and torched a vehicle to oppose the civic body's plan to raze a dargah to clear encroachment, officials said on Saturday.The incident occurred on Friday night near Majevadi Darwaja in the city, during which the police lobbed tear gas shells and baton-charged the protesters to control the situation, and later rounded up 174 people, they said.",
    },
    {
      heading:
        "Not just 'nuts and bolts' but BrahMos missiles and drones to be made in UP defence corridor: Rajnath Singh",
      imgTag: img3,
      para: "Defence Minister Rajnath Singh on Saturday said not only nuts and bolts, but BrahMos missiles, drones and electronic warfare systems will also be manufactured and assembled in the Uttar Pradesh defence corridor. The Uttar Pradesh Defence Industrial Corridor (UPDIC) is an aspirational project that intends to reduce the dependence of the Indian aerospace and the defence sectors on foreign suppliers.",
    },
  ];
  const entData = [
    {
      heading:
        "Adipurush box office collection Day 1: Prabhas starrer big budget extravaganza earns Rs 140 crore worldwide, registers biggest opening of the year",
      imgTag: img4,
      para: "Prabhas, Saif Ali Khan and Kriti Sanon starrer Adipurush may have received mixed reactions from critics, but the film’s box office collection of the opening day suggests that the audience is unfazed by the reviews. Producers of the film, T-Series, shared on social media that the film had earned Rs 140 crore worldwide on its opening day Previously, trade analyst Girish Johar had tweeted that the film had collected approximately Rs 35 crores from the overseas market and the overall earning for the first day worldwide was Rs 133 crore.",
    },
    {
      heading:
        "Who is the author of this content? Generative AI wades into murky legal waters in India",
      imgTag: img5,
      para: "Even as artificial intelligence opens up new opportunities, experts are now looking at the legal implications of this cutting-edge technology that has started becoming all pervasive. While India is far from having a suitably defined framework to govern AI, lawyers in India feel this could change soon. Over the past few months since the launch of ChatGPT, there has been a unanimous call for regulation of AI to protect individual rights, counter societal harm, and address issues of liability, personal data, privacy, misinformation as well as the perils of bias",
    },
    {
      heading:
        "Rajeev Chandrasekhar says govt will investigate Realme user data capturing feature",
      imgTag: img6,
      para: "After a Twitter user pointed out that Realme phones come with an “Enhanced Intelligent Services” feature that collected device information, app usage statistics and other user info, Minister of State for Information Technology Rajeev Chandrasekhar said that the government will have it tested and checked.Chandrasekhar made the statement when he retweeted the original tweet, which shared the screenshot and accusations against the Chinese smartphone brand Realme. The original tweet and accusations were shared by user Rishi Bagree, who is known for sharing polarising content on social media.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        color: "white",
        flexDirection: "column",
      }}
    >
      <Navbar logo={Logo} />

      <ExtraInfo myImage={myImage} title="Daily news" cardData={extraData} />

      <Parallax myImage={myImage} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <SplitInfo myImage={myImage} title="NEWS" cardData={newsData} />
        <SplitInfo myImage={myImage} title="JOB UPDATES" cardData={jobData} />
        <SplitInfo myImage={myImage} title="BLOGS" cardData={blogData} />
      </div>

      <Entertainment
        myImage={myImage}
        title="ENTERTAINMENT"
        cardData={entData}
      />

      <Parallax myImage={myImage} />

      <Footer />
    </div>
  );
}
