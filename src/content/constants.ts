/* General constants */
export const REGISTRATION_URL = "#";

/* About Confluence */
export const ABOUT = [
  // Enter new line texts as separate entry in this, use web-safe unicode escapes
  // like '–' should be replaced with '/u2013' where necessary
  "Confluence: Star-Studded Legacy! Get ready to be dazzled like never before! After an eagerly awaited 4-year hiatus, the legendary extravaganza of Hansraj College is back with a BANG!",
  "Don't miss out on the next glittering edition of Confluence  where multicultural magic meets unbridled fun! Mark your calendars and get ready to be swept off your feet! Join us at CONFLUENCE and live a moment of life!",
  "Dive into a hidden realm of artistry and immerse yourself in a symphony of joy at Confluence! From the charismatic charm of Bollywood royalty like Shah Rukh Khan to the electrifying beats of hitmakers like Honey Singh & Diljit Dosanjh, we've had them all grace our stage with their presence!"
]

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
      prefix: "One and Only",
      name: "Shah Rukh Khan",
      description: "The King Khan. The majestic star, yada yada.",
      image: "artist1.png"
    },
    {
      prefix: "Introducing",
      name: "Artist 2 (Day 1)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "artist2.png"
    }
  ],
  [
    // Day 2
    {
      prefix: "Introducing",
      name: "Artist 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "artist2.png"
    },
    {
      prefix: "Introducing",
      name: "Artist 1 (Day 2)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "artist1.png"
    }
  ],
  [
    // Day 3
    {
      prefix: "Introducing",
      name: "Artist 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "artist3.png"
    },
    {
      prefix: "Introducing",
      name: "Artist 2 (Day 1)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "artist2.png"
    }
  ]
];

/* FAQ section constants */
export const FAQ = [
  {
    question: "What is Confluence?",
    answer:
      "Confluence is the annual cultural fest of Hansraj College, University of Delhi."
  },
  {
    question: "Rules and Regulations",
    answer: [
      "Entry will be on first-come basis. Gates will be closed as deemed necessary.",
      "All students must bring their college ID cards. Other attendees/participants must come along with their government-issued ID card.",
      "No food and drinks from outside will be allowed inside the campus.",
      "You are responsible for your belongings. Hansraj  College will not be liable for any loss of the same.",
      "Frisking and bag-checks will be done by the college security team.",
      "Participants are not allowed to loiter around the campus and are requested to stay in the designated areas. Entry to certain areas are out of bound.",
      "Under no circumstance abusive and inappropriate language will be tolerated and strict actions will be taken.",
      "Kindly dispose the waste into proper waste disposal areas. Be responsible of your surrounding and don't do unnecessary litter.",
      "Don't force yourself into the campus after the gates are closed. If found doing so, strict actions will be taken.",
      "Do not damage college property.",
      "After the function finishes for a day, kindly exit from the campus as per instructions given by the security team."
    ]
  },
  {
    question: "Security Guidelines?",
    answer: [
      "You are advised to not bring carry-on bags like totes, big backpacks, etc.",
      "Strictly prohibited items: alcohol, cigarettes, e-cigarettes, vapes, intoxicants, matchboxes, sharp objects,lighters, and tobacco products.",
      "People under the influence of any intoxicating substance will be denied entry. The organizers' decision in this regard will be final.",
      "Students carrying medicines must provide proper prescriptions.",
      "All participants and attendees are required to abide by the guidelines.",
      "As per the Delhi Police and University of Delhi Guidelines, prior registration is mandatory for entry to the College Fests. NO on-the-spot spot registration for entry will be entertained."
    ]
  },
  {
    question: "Where will Confluence take place?",
    answer:
      "Confluence will be held inside the premises of Hansraj College, University of Delhi."
  },
  {
    question: "Will non-DU students be allowed entry?",
    answer:
      "Yes. Confluence is open to all students, regardless of their college or university."
  },
  {
    question: "How can I register for Confluence?",
    answer:
      "Just click on the any of the Register buttons on this website, and you'll be good to go!"
  },
  {
    question:
      "What other societal events are being held, apart from the main fest?",
    answer:
      "Just check out the section below to find out the details and registration links for all the events being organized by different societies of Hansraj College, under the umbrella of Confluence."
  }
];

/* Events section constants */
export const EVENTS = [
  // Order here determines the order on the website
  {
    name: "Event 1",
    day: "Day 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "event1.png",
    organizedBy: "Dramatics Society",
    registrationLink: "#"
  },
  {
    name: "Event 2",
    day: "Day 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "event2.png",
    organizedBy: "Dramatics Society",
    registrationLink: "#"
  },
  {
    name: "Event 3",
    day: "Day 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "event3.png",
    organizedBy: "Dramatics Society",
    registrationLink: "#"
  },
  {
    name: "Event 4",
    day: "Day 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "event4.png",
    organizedBy: "Music Society",
    registrationLink: "#"
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
