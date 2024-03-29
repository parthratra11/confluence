/* General constants */
export const REGISTRATION_URL = "#";

/* Dates section constants */
export const DATES = [
  // Keep descriptions short, otherwise the layout will break
  {
    numeral: 6,
    date: "6th April",
    description:
      "Every year, amidst the hallowed halls of Hansraj, a vibrant confluence takes place. Witness the start of this year's extravaganza!"
  },
  {
    numeral: 7,
    date: "7th April",
    description:
      "This Confluence is a testament to the meeting of talents, wits and passions!"
  },
  {
    numeral: 8,
    date: "8th April",
    description:
      "Orchestrated by the Students' Union of Hansraj College, the cultural fest bids adieu, to return the following year!"
  }
];

/* Artists section constants */
export const ARTISTS = [
  [
    // Day 1
    {
      prefix: "One and only",
      name: "DG IMMORTALS",
      description: "Contemporary Hip Hop artist DG IMMORTALS is from Delhi, India. DG IMMORTALS has been creating waves in the Indian music world with its distinctive and modern sound.",
      image: "dgmortal.png"
    },
    {
      prefix: "Keep Waiting!",
      name: "COMING SOON",
      description: "Till then keep guessing and stay tuned.",
      image: "placeholder.png"
    }
  ],
  [
    // Day 2
    {
      prefix: "Keep Waiting!",
      name: "COMING SOON",
      description: "Till then keep guessing and stay tuned.",
      image: "placeholder.png"
    },
    {
      prefix: "Keep Waiting!",
      name: "COMING SOON",
      description: "Till then keep guessing and stay tuned.",
      image: "placeholder.png"
    }
   
  ],
  [
    // Day 3
     {
      prefix: "Keep Waiting!",
      name: "COMING SOON",
      description: "Till then keep guessing and stay tuned.",
      image: "placeholder.png"
    },
    {
      prefix: "Keep Waiting!",
      name: "COMING SOON",
      description: "Till then keep guessing and stay tuned.",
      image: "placeholder.png"
    }
  ]
];

/* FAQ section constants */
export const FAQ = [
 {
    question: " What is Confluence’24?",
    answer:
      "Confluence is annual cultural fest held by prestigious Hansraj college of University of Delhi. Confluence is the ultimate culmination of talent, creativity, and innovation drawing participants and attendees from all the corners of country. It is blend of art, performance, competition and events."
  },
  {
    question: "When and where will the Confluence be organised ?",
    answer:
      "The Confluence will be held on dates of 6th,7th and 8th April and the venue is  campus of Hansraj College, University of Delhi."
  },
  {
    question: "Will non-DU students be allowed entry?",
    answer:
      "Yes. Confluence is open to all students, regardless of their college or university."
  },
  {
    question: "What if I am not able register through website?",
    answer:
      "You can also register through the respective society as well through which you are participating."
  },
  {
    question:
      "What other societal events are being held, apart from the main fest?",
    answer:
      "Just check out the section below to find out the details and registration links for all the events being organized by different societies of Hansraj College, under the umbrella of Confluence."
  },
  {
    question:
      "Whom should I contact if there is further question regarding the event?",
    answer:
      `Contact on the no. given below:\n
  Shivam Kumar-758001927 [President]\n
  Rajeev Rathore-8962345146 [Coordinator]\n
  Kuber Kumar Sahoo -9810778091\n
  Email id – Studentunion@hrc.du.ac.in`
  }
];

/* Events section constants */
export const EVENTS = [
  // Order here determines the order on the website
 {
    name: "GROOVE VOL 3.",
    day: "Day 1",
    description: "Western Group Dance Competition",
    image: "oorja 2.png",
    organizedBy: "Oorja -The Western & Street Dance Society ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSez1_4T3lvjOPyIF0hAHjaBC_VQK5FY01Z5drHJYXrYKw3Mcg/viewform"
  },
  {
    name: "BLEEDAT VOL 3.",
    day: "Day 2",
    description: "Crew VS Crew Dance Competition",
    image: "OORJA 1.png",
    organizedBy: "Oorja -The Western & Street Dance Society ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0CawowgBhW4kHG-E5gY0du4Xlv-CnGOYP3PpA4O_hFt1txQ/viewform"
  },
  {
    name: "BLEEDAT VOL 3.",
    day: "Day 2",
    description: "1 VS 1 Dance Competition ",
    image: "oorja 3.png",
    organizedBy: "Oorja -The Western & Street Dance Society",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfl--JCAKYAwKj0ONir9vBriNFGImX58ijRruxkiEmd4_IZFg/viewform"
  },
  {
    name: "BOLBALA",
    day: "Day 1",
    description: "Let's joyfully honor the boundless range of Nukkad Natak, filling every space with vivid colors.",
    image: "bolbala.jpeg",
    organizedBy: "Dramatics Society",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSctu8xV3CvrImNax8x5z6TbAe5Pa4HpnBErufJZgt5H5pY73A/viewform"
  }
];

/* Sponsors section constants */
type SponsorsObjectType = { name: string; image: string; link: string };
type SponsorsArrayType = [string, SponsorsObjectType[]];
export const SPONSORS: SponsorsArrayType[] = [
  [
    "Title Sponsor",
    [
      {
        name: "Sponsor 1",
        image: "sponsor1.png",
        link: "#"
      }
    ]
  ],
  [
    "Media Sponsor",
    [
      {
        name: "Sponsor 2",
        image: "sponsor2.png",
        link: "#"
      },
      {
        name: "Sponsor 3",
        image: "sponsor3.png",
        link: "#"
      }
    ]
  ],
  [
    "Food Partner",
    [
      {
        name: "Sponsor 4",
        image: "sponsor4.png",
        link: "#"
      },
      {
        name: "Sponsor 5",
        image: "sponsor5.png",
        link: "#"
      },
      {
        name: "Sponsor 6",
        image: "sponsor6.png",
        link: "#"
      }
    ]
  ]
];
