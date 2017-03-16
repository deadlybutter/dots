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
    {
      title: 'Russian Oligarch',
      background: '#001f3f',
    },
    {
      title: 'Company',
      background: '#3D9970',
    },
    {
      title: 'Kazakh',
      background: '#FF851B',
    },
    {
      title: 'White House Inner Circle',
      background: '#7FDBFF',
    },
    {
      title: 'Russian Billionaire',
      background: '#B10DC9',
    }
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
      categories: ['Team Putin', 'Ukrainian Oligarch'],
    },
    {
      title: 'Semion Mogilevich',
      description: 'Boss of bosses of most Russian Mafia syndicates in the world.',
      categories: ['Team Putin', 'Organized Crime'],
    },
    {
      title: 'Oleg Deripaska',
      description: `Founder and owner of one of the largest Russian industrial groups Basic Element company, President of En+ Group and United Company RUSAL, the largest aluminium company in the world.`,
      categories: ['Team Putin', 'Russian Oligarch', 'Organized Crime', 'Russian Billionaire'],
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
    },
    {
      title: 'Donald Trump Jr.',
      description: 'Oldest child of Donald Trump, works alongside his brother as a trustee of The Trump Organization',
      categories: ['Team Trump'],
    },
    {
      title: 'Donald Trump',
      description: 'American businessman, television personality, politician, and the 45th President of the United States.',
      categories: ['Team Trump'],
    },
    {
      title: 'Bayrock Group LLC',
      description: `New York real estate development company that surfaced in the early 2000s and, by 2014, had all but disappeared except for a few lawsuits.`,
      categories: ['Company', 'Organized Crime'],
    },
    {
      title: 'Tevfik Arif',
      description: 'Bayrock’s former Chairman',
      categories: ['Organized Crime', 'Kazakh'],
    },
    {
      title: 'Felix Sater',
      description: `The "Number 2 man" at Bayrock`,
      categories: ['Organized Crime', 'Team Trump'],
    },
    {
      title: 'Alexander Mashkevitch',
      description: `Strategic partner to Bayrock and a major shareholder in ENRC, a miner that was delisted from the London Stock Exchange in 2013 amid corruption allegations.`,
      categories: ['Kazakh', 'Organized Crime'],
    },
    {
      title: 'Patokh Chodiev',
      description: `Major shareholder in ENRC, a miner that was delisted from the London Stock Exchange in 2013 amid corruption allegations. In the 1990s he established the Chodiev Group, joining with Michael Cherney, who the FBI believed was a major Russian organized-crime figure. (Listed as Kazakh due to close business proximity)`,
      categories: ['Organized Crime', 'Kazakh']
    },
    {
      title: 'Alijan Ibragimov',
      description: `Major shareholder in ENRC, a miner that was delisted from the London Stock Exchange in 2013 amid corruption allegations.`,
      categories: ['Kazakh'],
    },
    {
      title: 'The Trump Organization',
      description: ` American privately owned international conglomerate based in Trump Tower in Midtown Manhattan, New York City. It comprises the business ventures and investments of Donald Trump. From 1971 to 2017, Trump ran the company as chairman and president.`,
      categories: ['Company'],
    },
    {
      title: 'Ivanka Trump',
      description: 'American businesswoman, former reality TV personality, socialite, author, and fashion model. She is the daughter of U.S. President Donald Trump and his first wife, former model Ivana Trump.',
      categories: ['Team Trump', 'White House Inner Circle']
    },
    {
      title: 'FL Group',
      description: 'Icelands largest private investment fund and strategic financing partner to Bayrock until it went under in 2008. The bank was financed by Russian billionaires & oligarchs.',
      categories: ['Company', 'Organized Crime', 'Russian Billionaire', 'Russian Oligarch'],
    },
    {
      title: 'Tamir Sapir',
      description: `American businessman and investor from the former Soviet republic of Georgia who made millions bartering fertilizer and oil with the Soviets in the 1980s; he took most of his money and put it into New York real-estate. This profile makes a decent argument he was Russian Intelligence http://washingtonmonthly.com/2017/02/20/trumps-soho-project-the-mob-and-russian-intelligence/`,
      categories: ['Russian Intelligence'],
    },
    {
      title: 'Salvatore Lauria',
      description: 'Associate of Mr. Sater, who sometimes showed up to work wearing a court-ordered ankle monitor',
      categories: ['Organized Crime']
    },
    {
      title: 'Andrii Artemenko',
      description: 'Ukrainian politician',
      categories: ['Team Putin'],
    },
    {
      title: 'Michael Cohen',
      description: 'Trumps personal lawyer',
      categories: ['Team Trump', 'White House Inner Circle'],
    },
    {
      title: 'Aras Agalarov',
      description: 'Founder of Crocus Group, one of the Russias largest real-estate companies & same company that hosted his beauty pageant in Moscow.',
      categories: ['Team Putin', 'Russian Billionaire'],
    },
    {
      title: 'Vladimir Putin',
      description: 'President of Russia',
      categories: ['Team Putin', 'Russian Oligarch'],
    },
    {
      title: 'Herman Gref',
      description: 'Chief executive officer of state-controlled Sberbank PJSC, Russia’s biggest bank.  Vladimir Putin’s economy minister from 2000 to 2007.',
      categories: ['Team Putin'],
    },
    {
      title: 'Roustam Tariko',
      description: 'Russian billionaire, owns Russian Standard Vodka and Russian Standard Bank.',
      categories: ['Russian Billionaire'],
    },
    {
      title: 'Emin Agalarov',
      description: 'Singer, son of Aras Agalarov. (Listed as a billionaire because of Dad)',
      categories: ['Russian Billionaire'],
    },
    {
      title: 'Yuri Shefler',
      description: 'Founder of a vodka company named Stolichnaya',
      categories: ['Russian Billionaire'],
    },
    {
      title: 'Alex Shnaider',
      description: 'Russian-born Israeli-Canadian entrepreneur and former commodities trader. He is co-founder with Eduard Shifrin of the Midland Group. Business associate of Trump.',
      categories: ['Russian Billionaire'],
    },
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
      title: 'Russian billionaire paid Manafort several million for management fees',
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
    },
    {
      title: 'Donald Trump Jr. talks about Russian assets at a conference',
      description: `"And in terms of high-end product influx into the US, Russians make up a pretty disproportionate cross-section of a lot of our assets; say in Dubai, and certainly with our project in SoHo and anywhere in New York. We see a lot of money pouring in from Russia. There's indeed a lot of money coming for new-builds and resale reflecting a trend in the Russian economy and, of course, the weak dollar versus the ruble," he said.`,
      date: '9/15/2008',
      nodes: ['Donald Trump Jr.', 'The Trump Organization'],
      sources: ['http://www.eturbonews.com/5008/executive-talk-donald-trump-jr-bullish-russia-and-few-emerging-ma'],
    },
    {
      title: 'Bayrock is founded',
      description: 'The company is founded by Tevfik Arif, eventually moving to the 24th floor of Trump Tower.',
      date: '7/21/2001',
      nodes: ['Tevfik Arif'],
      sources: ['https://en.wikipedia.org/wiki/Bayrock_Group', 'http://imgur.com/a/AWPD3'],
    },
    {
      title: 'Felix Sater joins Bayrock',
      description: `Felix Sater has testified that he joined Bayrock, controlled by Tevfik Arif, around 2002. (Exact date unknown)`,
      date: '1/1/2002',
      nodes: ['Bayrock Group LLC', 'Tevfik Arif', 'Felix Sater'],
      sources: ['https://www.forbes.com/sites/richardbehar/2016/10/03/donald-trump-and-the-felon-inside-his-business-dealings-with-a-mob-connected-hustler/#edd5c4a22824'],
    },
    {
      title: 'Donald Trump gives Bayrock exclusive rights to a project in Moscow',
      description: `According to Sater's 2008 deposition. "I'd come back, pop my head into Mr. Trump's office and tell him, you know, 'Moving forward on the Moscow deal.' And he would say 'All right.'" "I showed him photos, I showed him the site, showed him the view from the site. It's pretty spectacular." (Exact date unknown)`,
      date: '1/1/2005',
      nodes: ['Bayrock Group LLC', 'Donald Trump', 'Felix Sater', 'The Trump Organization'],
      sources: ['https://www.forbes.com/sites/richardbehar/2016/10/03/donald-trump-and-the-felon-inside-his-business-dealings-with-a-mob-connected-hustler/#edd5c4a22824'],
    },
    {
      title: 'Bayrock announces plans for Trump International Hotel & Residence',
      description: 'First joint project between Bayrock and The Trump Organization (Exact date unknown)',
      date: '1/1/2003',
      nodes: ['Bayrock Group LLC', 'Donald Trump', 'The Trump Organization'],
      sources: [
        'https://en.wikipedia.org/wiki/Bayrock_Group#Trump_International_Hotel_.26_Residence',
        'https://en.wikipedia.org/wiki/Trump_International_Hotel_%26_Residence',
      ],
    },
    {
      title: 'Trump SoHo Launch Party',
      description: `After the eventual completion of the hotel Trump invited multiple family members and business parters. Note: Source clearly shows him with Tevfik Arif and Felix Sater.`,
      date: '9/19/2007',
      nodes: ['Bayrock Group LLC', 'Donald Trump', 'Donald Trump Jr.', 'Felix Sater', 'Tevfik Arif', 'The Trump Organization', 'Ivanka Trump', 'Tamir Sapir'],
      sources: [
        'http://www.gettyimages.com/event/trump-soho-launch-party-inside-76839333#donald-trump-tevfik-arif-and-felix-sater-attend-the-trump-soho-launch-picture-id110093705',
        'http://www.gettyimages.com/event/trump-soho-launch-party-inside-76839333#tamir-sapir-attends-the-trump-soho-launch-party-picture-id83540250',
      ],
    },
    {
      title: 'NYT Runs profile on Sater exposing his past',
      description: `Not long after the Trump SoHo launch, The New York Times runs a story exposing Felix Sater's past crimes.`,
      date: '12/7/2007',
      nodes: ['Felix Sater'],
      sources: ['http://www.nytimes.com/2007/12/17/nyregion/17trump.html'],
    },
    {
      title: 'Sater leaves Bayrock',
      description: `"He was involved. No one disputes his involvement at the early stages. But after early 2008 he was no longer affiliated with the company." (Exact date unknown)`,
      date: '1/1/2008',
      nodes: ['Felix Sater'],
      sources: ['http://www.telegraph.co.uk/news/2016/05/26/exclusive-russian-mob-linked-fraudster-a-key-player-in-donald-tr/'],
    },
    {
      title: 'Sater becomes senior advisor to Donald Trump',
      description: `For about a year Sater became a "Senior Advisor to Donald Trump" and was given a Trump Organization e-mail address, business cards and an office there. The phone number listed on his business card previously belonged to a lawyer in Trump's general counsel's office. (Exact date unknown)`,
      date: '1/1/2010',
      nodes: ['Felix Sater', 'Donald Trump', 'The Trump Organization'],
      sources: ['https://www.forbes.com/sites/richardbehar/2016/10/03/donald-trump-and-the-felon-inside-his-business-dealings-with-a-mob-connected-hustler/#edd5c4a22824'],
    },
    {
      title: 'Lawsuit filed against Bayrock for money laundering is unsealed',
      description: `A Manhattan judge has unsealed a civil tax fraud case brought in behalf of New York State against associates of Donald Trump. The suit accuses convicted racketeer and Felix Sater, Bayrock Group, and prominent law firms of conspiring to launder as much as $250 million dollars of profit on Trump projects Bayrock was co-developing out of the country in a scheme to evade $100 million dollars of state and federal income tax.`,
      date: '7/14/2016',
      nodes: ['Felix Sater', 'Donald Trump', 'The Trump Organization', 'Bayrock Group LLC', 'Tevfik Arif'],
      sources: [
        'http://www.prnewswire.com/news-releases/ny-attorney-general-green-lights-250-million-tax-fraud-prosecution-of-trump-projects-300298935.html',
        'https://assets.documentcloud.org/documents/2638421/Kriss-v-Bayrock-Complaint.txt',
      ],
    },
    {
      title: 'Trump signed a consent letter for $50 million deal between Bayrock and FL',
      description: `The deal asked Trump to “indicate your consent to the Transaction as evidenced by the Transaction Documents by counterexecuting and returning to the undersigned a copy of this letter”. The main enclosed document was the loan agreement, which explicitly listed Sater. Mr Trump, Donald Jr and Ivanka were informed of the FL deal in advance and signed letters acknowledging the receipt of the information.`,
      date: '7/16/2007',
      nodes: ['Felix Sater', 'Donald Trump', 'Ivanka Trump', 'Donald Trump Jr.', 'The Trump Organization', 'Bayrock Group LLC', 'FL Group'],
      sources: [
        'https://www.ft.com/content/549ddfaa-5fa5-11e6-b38c-7b39cbb1138a',
        'http://www.telegraph.co.uk/news/2016/05/26/exclusive-russian-mob-linked-fraudster-a-key-player-in-donald-tr/',
      ],
    },
    {
      title: `Trump gives sworn testimony claiming to not know Sater well`,
      description: `Trump has repeatedly said he barely remembers Sater. In sworn testimony in 2013, Trump said he wouldn’t recognize Sater if they were sitting in the same room.`,
      date: '11/5/2013',
      nodes: ['Donald Trump', 'Felix Sater'],
      sources: ['https://www.washingtonpost.com/politics/former-mafia-linked-figure-describes-association-with-trump/2016/05/17/cec6c2c6-16d3-11e6-aa55-670cabef46e0_story.html?utm_term=.aa555999a5ad'],
    },
    {
      title: `Bayrock produces brochure naming the oligarch trio`,
      description: `One of the listed partners is Alexander Mashkevitch and the Eurasia Group, which he controls with Chodiev and Ibragimov (the Trio). Exact date Brochure created is unknown, but had to be during the year of 2007 while Trump SoHo is being worked on.`,
      date: '1/1/2007',
      nodes: ['Alexander Mashkevitch', 'Bayrock Group LLC', 'Patokh Chodiev', 'Alijan Ibragimov'],
      sources: ['https://www.forbes.com/sites/richardbehar/2016/10/03/trump-and-the-oligarch-trio/#2b5d6c165314']
    },
    {
      title: 'Paul Manafort resigns from Trump campaign',
      description: `“This morning Paul Manafort offered, and I accepted, his resignation from the campaign,” Mr. Trump said in a statement. “I am very appreciative for his great work in helping to get us where we are today.”`,
      date: '8/19/2016',
      nodes: ['Paul Manafort', 'Donald Trump'],
      sources: ['https://www.nytimes.com/2016/08/20/us/politics/paul-manafort-resigns-donald-trump.html'],
    },
    {
      title: 'Paul Manafort leaves Yanukovych campaign',
      description: `Manafort also worked as an adviser on the Ukrainian presidential campaign of Viktor Yanukovych (and his Party of Regions during the same time span) from December 2004 until the February 2010 Ukrainian presidential election. (Exact date unknown)`,
      date: '2/1/2010',
      nodes: ['Paul Manafort', 'Viktor Yanukovych'],
      sources: ['https://en.wikipedia.org/wiki/Paul_Manafort#Lobbying_for_Viktor_Yanukovych_and_involvements_in_Ukraine'],
    },
    {
      title: 'Michael Cohen delivers plan to drop Russian sanctions',
      description: 'Cohen hand-delivered a sealed “peace plan” to the White House outlining a way to remove the U.S. sanctions on Russia. (Exact date unknown)',
      date: '2/1/2017',
      nodes: ['Felix Sater', 'Michael Cohen', 'Andrii Artemenko'],
      sources: ['http://nymag.com/daily/intelligencer/2017/02/trumps-lawyer-involved-with-plan-to-lift-russian-sanctions.html']
    },
    {
      title: 'Trump invites Putin to his Moscow pageant',
      description: 'Trump tweeted at Putin an invitation to his Moscow pageant. Behind the scenes Agalarov had a 1:1 meeting scheduled which got cancelled last minute. Putin left a "decorative lacquered box, a traditional Russian gift, and a warm note".',
      date: '6/18/2013',
      nodes: ['Donald Trump', 'Aras Agalarov', 'Vladimir Putin'],
      sources: [
        'https://twitter.com/realDonaldTrump/status/347191326112112640',
        'https://www.washingtonpost.com/politics/inside-trumps-financial-ties-to-russia-and-his-unusual-flattery-of-vladimir-putin/2016/06/17/dbdcaac8-31a6-11e6-8ff7-7b6c1998b7a0_story.html?utm_term=.63e7a9a85daa'
      ]
    },
    {
      title: 'Trump has two hour meeting with "all the oligarchs"',
      description: 'Gref organized the meeting with Agalarov,“Almost all of the oligarchs were in the room,” Trump bragged to Real Estate Weekly upon returning home. (Exact date unknown, near pageant)',
      date: '6/19/2013',
      nodes: ['Donald Trump', 'Aras Agalarov', 'Herman Gref'],
      sources: [
        'https://www.washingtonpost.com/politics/inside-trumps-financial-ties-to-russia-and-his-unusual-flattery-of-vladimir-putin/2016/06/17/dbdcaac8-31a6-11e6-8ff7-7b6c1998b7a0_story.html?utm_term=.63e7a9a85daa',
        'https://www.bloomberg.com/news/articles/2016-12-21/the-day-trump-came-to-moscow-oligarchs-miss-universe-and-nobu',
      ]
    },
    {
      title: 'Herman Gref calls Trump the "president of change"',
      description: `Russia's Sberbank CEO Herman Gref said that Donald Trump is “the president of change,” whose business experience should be sufficient enough to make right steps as the US leader.`,
      date: '12/28/2016',
      nodes: ['Donald Trump', 'Herman Gref'],
      sources: ['https://sputniknews.com/politics/201612281049052490-gref-calls-trump-chenge-president/'],
    },
    {
      title: 'Tariko met Trump separately during his visit to Moscow',
      description: `One face conspicuously absent from the Nobu gathering was vodka tycoon Roustam Tariko, the founder of Russian Standard Corp., another Miss Universe sponsor. Tariko said he met Trump separately during his visit to Moscow after first getting to know him in the mid-2000s during business trips to New York. “I’ve known Donald Trump for many years,” Tariko said in a June interview. “I’ve always found it interesting to talk with him.” (Exact date unknown, near pageant)`,
      date: '6/20/2013',
      nodes: ['Donald Trump', 'Roustam Tariko'],
      sources: ['https://www.bloomberg.com/news/articles/2016-12-21/the-day-trump-came-to-moscow-oligarchs-miss-universe-and-nobu']
    },
    {
      title: 'Bizarre music video shot during Donald Trump’s 2013 visit to Moscow',
      description: 'Trump exercised his drama skills shooting a music video with Emin Agalarov',
      date: '11/9/2013',
      nodes: ['Donald Trump', 'Emin Agalarov'],
      sources: [
        'http://www.thedailybeast.com/articles/2017/01/20/she-met-donald-trump-at-the-moscow-ritz-not-that-way.html',
        'https://www.thesun.co.uk/news/2590466/donald-trump-starred-in-bizarre-music-video-at-hotel-mentioned-in-leaked-dossier-during-2013-moscow-trip-as-experts-claim-his-room-would-have-been-bugged/'
      ]
    },
    {
      title: 'Arif and Eurasia Group members arrested in police raid',
      description: `As for Arif, his most recent visible brush with the law came in 2010, when he and other members of Bayrock’s Eurasian Trio were arrested together in Turkey during a police raid on a suspected prostitution ring`,
      date: '9/28/2010',
      nodes: ['Tevfik Arif', 'Alexander Mashkevitch'],
      sources: [
        'http://www.ynetnews.com/articles/0,7340,L-4048812,00.html',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
    },
    {
      title: 'Sater, Ivanka and DJT Jr. visit Moscow',
      description: `During a trip in 2006, Mr. Sater and two of Mr. Trump’s children, Donald Jr. and Ivanka, stayed at the historic Hotel National Moscow opposite the Kremlin, connecting with potential partners over the course of several days. (Exact date unknown)`,
      date: '1/1/2008',
      nodes: ['Felix Sater', 'Donald Trump Jr.', 'Ivanka Trump'],
      sources: ['https://www.nytimes.com/2017/01/16/us/politics/donald-trump-russia-business.html'],
    },
    {
      title: 'Trump claims to have met "high level people" in Moscow',
      description: `Mr. Trump said of his 2013 trip to Moscow during a September 2015 interview on The Hugh Hewitt Show, “I was with the top-level people, both oligarchs and generals, and top of the government people. I can’t go further than that, but I will tell you that I met the top people, and the relationship was extraordinary.”`,
      date: '9/21/015',
      nodes: ['Donald Trump'],
      sources: ['http://www.hughhewitt.com/donald-trump-returns/']
    },
    {
      title: 'Sater visits Trump Tower during campaign',
      description: `Sater visited Trump Tower last month for undisclosed business, according to POLITICO. He also donated the maximum allowable contribution to Trump’s presidential campaign. (Exact date unknown)`,
      date: '7/1/2016',
      nodes: ['Donald Trump', 'Felix Sater', 'The Trump Organization'],
      sources: ['http://www.politico.com/story/2016/08/donald-trump-russia-felix-sater-227434'],
    },
    {
      title: 'Suit alledges FL & Bayrock agreed to pursue $2 billion in other trump deals',
      description: `The Kriss lawsuit further alleges that FL Group (FLG) also agreed to work with Bayrock to facilitate outright tax fraud on more than $250 million of potential earnings. In particular, it alleges that FLG agreed to provide the $50 million in exchange for a 62 percent stake in the four Bayrock Trump projects. As an equity partner in the Trump SoHo, with a significant 18 percent equity stake in this one deal alone, Donald Trump himself had to sign off on the deal.`,
      date: '5/10/2010',
      nodes: ['Felix Sater', 'The Trump Organization', 'Bayrock Group LLC', 'FL Group', 'Tevfik Arif'],
      sources: [
        'https://assets.documentcloud.org/documents/2638421/Kriss-v-Bayrock-Complaint.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
        'http://www.telegraph.co.uk/news/2016/05/25/exclusive-donald-trump-signed-off-deal-designed-to-deprive-us-of/'
      ],
    },
    {
      title: 'FL Group gives out peculiar loans to Russian billionaires',
      description: `Alex Shnaider secured a €45.8 million loan to buy a yacht from Kaupthing Bank while a company belonging to another Russian billionaire got an even larger loan. In the source powerpoint, look for "p.136 (€79.5mm construction yacht loan to Russian vodka magnate Yuri Shefler’s Serena Equity Ltd.); p. 208 (€45.8 mm yacht construction loan to Canadian-Russian billionaire Alex Shnaider’s Filbert Pacific Ltd.)". Note: The report was produced on Sept. 25th 2008, the loans were presumably made before than.`,
      date: '9/25/2008',
      nodes: ['Alex Shnaider', 'Yuri Shefler'],
      sources: [
        'http://file.wikileaks.info/leak/kaupthing-bank-before-crash-2008.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
        'https://twitter.com/itsjoekent/status/842224290485424129',
      ],
    }
  ],
}
