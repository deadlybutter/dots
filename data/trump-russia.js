module.exports = {
  meta: {
    title: 'Kompromat',
    subtitle: 'How Trump and Russia are connected',
  },
  categories: [
    {
      title: 'Team Trump',
      background: '#FF4136',
    },
    {
      title: 'Team Putin',
      background: '#0074D9',
    },
    {
      title: 'Organized Crime',
      background: '#85144b',
    },
    {
      title: 'Ukrainian Oligarch',
      background: '#FFDC00',
    },
    {
      title: 'Russian Intelligence',
      background: '#AAAAAA',
    },
    {
      title: 'Opposition Bloc',
      background: '#DDDDDD',
    },
  ],
  nodes: [
    {
      title: 'Paul Manafort',
      description: 'Former Trump campaign manager',
      categories: ['Team Trump', 'Team Putin', 'Opposition Bloc'],
    },
    {
      title: 'Dmytro Firtash',
      description: 'Exiled Ukrainian oligarch',
      categories: ['Team Putin'],
    },
    {
      title: 'Semion Mogilevich',
      description: 'Boss of bosses of most Russian Mafia syndicates in the world.',
      categories: ['Team Putin', 'Organized Crime'],
    },
    {
      title: 'Oleg Deripaska',
      description: `Founder and owner of one of the largest Russian industrial groups Basic Element company, President of En+ Group and United Company RUSAL, the largest aluminium company in the world.`,
      categories: ['Team Putin', 'Organized Crime'],
    },
    {
      title: 'Rinat Akhmetov',
      description: `Founder and President of System Capital Management (SCM), and is ranked among the wealthiest men in Ukraine.`,
      categories: ['Ukrainian Oligarch', 'Organized Crime'],
    },
    {
      title: 'Viktor Yanukovych',
      description: `Ukrainian politician who served as the fourth President of Ukraine from February 2010 until his removal from power in February 2014. He is currently in exile in Russia and wanted by Ukraine for high treason. According to journalist and member of the Ukrainian Parliament Serhiy Leshchenko: “Yanukovych was the ‘super oligarch,’ the main beneficiary of the regime`,
      categories: ['Ukrainian Oligarch', 'Organized Crime', 'Team Putin', 'Opposition Bloc']
    },
    {
      title: 'Konstantin Kilimnik',
      description: `Russian Army-trained linguist who has told a previous employer of a background with Russian intelligence. Kilimnik eventually became “Manafort’s Manafort” in Kiev.`,
      categories: ['Team Putin', 'Russian Intelligence', 'Opposition Bloc']
    },
    {
      title: 'Serhiy Leshchenko',
      description: 'Ukrainian journalist, MP and public figure',
      categories: [],
    },
    {
      title: 'Serhiy Tulub',
      description: `Serhiy Tulub is the former coal industry minister and head of the Cherkasy Regional State Administration, and a close associate of Yanukovych`,
      categories: [],
    },
    {
      title: 'Serhiy Lovochkin',
      description: `Serhiy Lovochkin is a Ukrainian politician, Member of the Parliament of Ukraine, Deputy Head of the Opposition Bloc faction in Verhovna Rada and Mr. Yanukovych’s former chief of staff.`,
      categories: ['Opposition Bloc'],
    }
  ],
  dots: [
    {
      title: 'Attempt to redevelop the Drake Hotel in New York',
      description: `Manafort and business partners, including Firtash, in 2008 negotiated an $895 million deal to buy the site of the Drake Hotel in Manhattan. (Exact date unknown)`,
      date: '1/1/2008',
      nodes: ['Paul Manafort', 'Dmytro Firtash'],
      sources: ['http://www.chicagotribune.com/news/chicagoinc/ct-trump-manafort-firtash-0802-chicago-inc-20160801-story.html']
    },
    {
      title: 'Former US Ukraine ambassador suggests Firtash has ties to Mogilevich',
      description: `In a diplomatic cable sent in November 2008 made public by WikiLeaks, former U.S. Ambassador to Ukraine William B. Taylor called Firtash "one of Ukraine's most wealthy and notorious oligarchs" and suggested that he held ties to Russian organized crime figure Semyon Mogilevich.`,
      date: '11/1/2008',
      nodes: ['Dmytro Firtash', 'Semion Mogilevich', 'Viktor Yanukovych'],
      sources: [
        'http://www.huffingtonpost.com/huff-wires/20140313/eu--austria-ukraine-arrest/',
        'https://www.ft.com/content/abf0144c-6623-11e6-8310-ecf0bddad227',
      ]
    },
    {
      title: 'Russian billionare paid Manafort several million for management fees',
      description: `Companies controlled by another Russian billionaire, Oleg Deripaska, paid $7.35 million toward management fees for Manafort and his partners in connection with an investment fund, Pericles Emerging Markets. The Russian planned to buy a series of assets, including a telecom company called Black Sea Cable, through Pericles. Black Sea Cable, in turn, was controlled by Yanukovych cronies. In 2014, Mr. Deripaska filed a legal action in a Cayman Islands court seeking to recover his investment in Pericles, which is now defunct. (Exact date unknown)`,
      date: '11/1/2008',
      nodes: ['Paul Manafort', 'Oleg Deripaska', 'Viktor Yanukovych'],
      sources: [
        'http://www.nbcnews.com/news/us-news/donald-trump-aide-paul-manafort-scrutinized-russian-business-ties-n631241',
        'https://www.ft.com/content/abf0144c-6623-11e6-8310-ecf0bddad227',
      ],
    },
    {
      title: 'Manafort was asked to run Viktor Yanukovych campaign by Ukrainian Oligarch',
      description: `When Ahmetov summoned Manafort, in 2005, his candidate had suffered a crushing defeat. Yanukovych had just run for president of Ukraine, a campaign that involved rampant fraud and the possible poisoning of his opponent with dioxin. (Exact date unknown)`,
      date: '1/1/2005',
      nodes: ['Paul Manafort', 'Rinat Akhmetov', 'Viktor Yanukovych', 'Konstantin Kilimnik'],
      sources: ['http://www.slate.com/articles/news_and_politics/politics/2016/04/paul_manafort_isn_t_a_gop_retread_he_s_made_a_career_of_reinventing_tyrants.html'],
    },
    {
      title: 'Lawsuit filed against Manafort, Yanukovych, Akhmetov and more',
      description: `The suit alledges a complex scheme of racketeering & political corruption, with Manafort being key to quietly moving the money around and advising`,
      date: '12/19/11',
      nodes: ['Paul Manafort', 'Rinat Akhmetov', 'Viktor Yanukovych'],
      sources: ['http://freebeacon.com/wp-content/uploads/2016/03/manafort-complaint-2.pdf'],
    },
    {
      title: 'Kilimnik travels to US during the campaign season',
      description: `Konstantin Kilimnik traveled to the US in April to meet with Paul Manafort. Kilimnik suggested that he had played a role in gutting a proposed amendment to the Republican Party platform that would have staked out a more adversarial stance towards Russia. (Exact date unknown)`,
      date: '4/1/2016',
      nodes: ['Paul Manafort', 'Konstantin Kilimnik'],
      sources: ['http://www.politico.com/story/2017/03/trump-russia-manafort-235850'],
    },
    {
      title: 'US Media reports Trump aids had repeated contact with Russian intelligence',
      description: `Phone records and intercepted calls show that members of Donald J. Trump’s 2016 presidential campaign and other Trump associates had repeated contacts with senior Russian intelligence officials in the year before the election, according to four current and former American officials.`,
      date: '2/14/2017',
      nodes: ['Paul Manafort'],
      sources: ['https://www.nytimes.com/2017/02/14/us/politics/russia-intelligence-communications-trump.html?_r=0'],
    },
    {
      title: 'Manafort faced blackmail attempt, hacks suggest',
      description: `A cyberhack of the daughter of political consultant Paul Manafort suggests that he was the victim of a blackmail attempt while he was serving as Donald Trump’s presidential campaign chairman last summer. The texts contains a note to Paul Manafort referring to “bulletproof” evidence related to Manafort’s financial arrangement with Ukraine’s former president, the pro-Russian strongman Viktor Yanukovych, as well as an alleged 2012 meeting between Trump and a close Yanukovych associate named Serhiy Tulub. Manafort told Politico that the texts were sent shortly before The New York Times published a report in August (2016) about his Ukraine payments`,
      date: '02/23/17',
      nodes: ['Paul Manafort', 'Serhiy Leshchenko', 'Serhiy Tulub', 'Viktor Yanukovych'],
      sources: [
        'http://www.politico.com/story/2017/02/paul-manafort-blackmail-russia-trump-235275',
        'https://krypt3ia.wordpress.com/2017/02/16/the-russia-connection-paul-manafort/',
      ],
    },
    {
      title: 'Manafort rebranded the Opposition Bloc party',
      description: `Mr. Manafort flew to Ukraine in September 2014 and set to work rebranding a party deeply fractured by the violence and by Russia’s intervention. Rather than try to resurrect the disgraced party, he supported pitching a bigger political tent to help his clients and, he argued, to help stabilize Ukraine. The new bloc would woo everyone in the country angry at the new Western-backed government.`,
      date: '9/1/2014',
      nodes: ['Paul Manafort', 'Konstantin Kilimnik', 'Serhiy Lovochkin'],
      sources: ['https://www.nytimes.com/2016/08/01/us/paul-manafort-ukraine-donald-trump.html?_r=0'],
    },
    {
      title: 'NYT Publishes a story showing Manafort was paid under the table',
      description: `Handwritten ledgers show $12.7 million in undisclosed cash payments designated for Mr. Manafort from Mr. Yanukovych’s pro-Russian political party from 2007 to 2012, according to Ukraine’s newly formed National Anti-Corruption Bureau. Investigators assert that the disbursements were part of an illegal off-the-books system whose recipients also included election officials`,
      date: '8/14/2016',
      nodes: ['Paul Manafort', 'Viktor Yanukovych'],
      sources: ['https://www.nytimes.com/2016/08/15/us/politics/paul-manafort-ukraine-donald-trump.html']
    }
  ],
}
