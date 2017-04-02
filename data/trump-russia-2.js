module.exports = {
  meta: {
    title: 'Kompromat',
    subtitle: 'How Trump and Russia are connected',
  },
  nodes: [
    // #Geography
    {
      title: ['New York City', 'NYC'],
      description: `The City of New York, often called New York City or simply New York, is the most populous city in the United States.`,
      sources: ['https://en.wikipedia.org/wiki/New_York_City'],
    },
    {
      title: 'Moscow',
      description: `Moscow is a major political, economic, cultural, and scientific center of Russia and Eastern Europe, as well as the largest city entirely on the European continent.`,
      sources: ['https://en.wikipedia.org/wiki/Moscow'],
    },
    {
      title: ['Russia', 'Russian Federation'],
      description: `Russia is the largest country in the world by surface area, covering more than one-eighth of the Earth's inhabited land area,[14][15][16] and the ninth most populous, with over 144 million people at the end of March 2016.`,
      sources: ['https://en.wikipedia.org/wiki/Russia'],
    },
    {
      title: 'Ukraine',
      description: `Sovereign state in Eastern Europe, bordered by Russia to the east and northeast. Ukraine is currently in territorial dispute with Russia over the Crimean Peninsula which Russia annexed in 2014.`,
      sources: ['https://en.wikipedia.org/wiki/Ukraine'],
    },

    // #Donald Trump
    {
      title: ['Donald Trump', 'Trump'],
      description: `Donald Trump is an American businessman, television personality, politician, and the 45th President of the United States.`,
      sources: ['https://en.wikipedia.org/wiki/Donald_Trump'],
    },
    {
      title: 'Trump Campaign',
      description: `The 2016 presidential campaign of Donald Trump, an American businessman, television personality, and author, was formally launched on June 16, 2015, at Trump Tower in New York City.`,
      sources: ['https://en.wikipedia.org/wiki/Donald_Trump_presidential_campaign,_2016'],
    },
    {
      title: 'Trump Campaign Transition',
      description: `Planning for the presidential transition of Donald Trump, led by then Vice President-elect, former Governor Mike Pence of Indiana,[6] began before Donald Trump won the United States presidential election on November 8, 2016, and became the President-elect. The transition was formerly led by Chris Christie until he and a number of his supporters were replaced or demoted on November 11. The transition ended when he was inaugurated at noon EST on January 20, 2017.`,
      sources: ['https://en.wikipedia.org/wiki/Presidential_transition_of_Donald_Trump'],
    },
    {
      title: 'Trump Administration',
      description: `The presidency of Donald Trump began at noon EST on January 20, 2017, the day that Donald Trump became the 45th President of the United States,`,
      sources: ['https://en.wikipedia.org/wiki/Presidency_of_Donald_Trump'],
    },
    {
      title: ['The Trump Organization', 'Trump Organization'],
      description: `The Trump Organization is an American privately owned international conglomerate based in Trump Tower in Midtown Manhattan, New York City.`,
      sources: ['https://en.wikipedia.org/wiki/The_Trump_Organization'],
    },

    // #Manafort
    {
      title: ['Paul Manafort', 'Manafort'],
      description: `American lobbyist and political consultant. He served as campaign manager for the presidential campaign of Donald Trump in 2016. He was previously an adviser to the U.S. presidential campaigns of Republicans Gerald Ford, Ronald Reagan, George H. W. Bush, and Bob Dole. Manafort often lobbied on behalf of controversial foreign leaders such as Ukrainian president Viktor Yanukovych.`,
      sources: ['https://en.wikipedia.org/wiki/Paul_Manafort'],
    },
    {
      title: 'Davis, Manafort, and Freedman',
      description: `Political consulting firm in which Paul Manafort was a senior partner`,
      sources: ['https://en.wikipedia.org/wiki/Paul_Manafort'],
    },

    // #Russian Institutions
    {
      title: ['Federal Security Service', 'FSB'],
      description: `principal security agency of Russia and the main successor agency to the USSR's Committee of State Security (KGB). Its main responsibilities are within the country and include counter-intelligence, internal and border security, counter-terrorism, and surveillance as well as investigating some other types of grave crimes and federal law violations. It is headquartered in Lubyanka Square, Moscow's centre, in the main building of the former KGB.`,
      sources: ['https://en.wikipedia.org/wiki/Federal_Security_Service'],
    },

    // #Russian figures
    {
      title: ['Vladimir Putin', 'Putin'],
      description: `Putin is the current President of the Russian Federation, holding the office since 7 May 2012. On 25 July 1998, Yeltsin appointed Putin as Director of the Federal Security Service, the primary intelligence and security organization of the Russian Federation and successor of the KGB. He held that position until 9 August 1999.`,
      sources: ['https://en.wikipedia.org/wiki/Vladimir_Putin'],
    },

    // #Oligarchs

    // #Events
    {
      description: `Donald Trump gives Bayrock exclusive rights to a project in Moscow, Felix Sater lead the project.`,
      sources: ['https://www.forbes.com/sites/richardbehar/2016/10/03/donald-trump-and-the-felon-inside-his-business-dealings-with-a-mob-connected-hustler/#edd5c4a22824'],
      date: {
        timestamp: '1/1/2005',
        margin: 'year',
      },
    },
  ]
}
