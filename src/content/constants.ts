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
