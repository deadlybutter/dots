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
      background: '#e76b00',
    },
    {
      title: 'White House Inner Circle',
      background: '#7FDBFF',
    },
    {
      title: 'Russian Billionaire',
      background: '#B10DC9',
    },
    {
      title: 'American Billionaire',
      background: '#01FF70',
    },
    {
      title: 'Trump Campaign Donor',
      background: '#ff7169',
    },
    {
      title: 'Team Breitbart',
      background: '#FF851B',
    },
    {
      title: 'Council for National Policy',
      background: '#6f113f',
    },
    {
      title: 'National Front',
      background: '#960a31',
    },
    {
      title: 'UKIP',
      background: '#9c0bb1',
    },
    {
      title: 'Investment Fund',
      background: '#c4c4c4',
    },
    {
      title: 'Bank',
      background: '#ababab',
    },
    {
      title: 'G30',
      background: '#720881',
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
      categories: ['Team Trump', 'American Billionaire'],
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
      categories: ['Kazakh', 'Organized Crime']
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
      categories: ['Investment Fund', 'Organized Crime', 'Russian Billionaire', 'Russian Oligarch'],
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
      categories: ['Team Putin'],
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
      description: 'Russian-born Israeli-Canadian entrepreneur and former commodities trader. He is co-founder with Eduard Shifrin of the Midland Group and a business associate of Trump. His father in law was Boris Birshtein.',
      categories: ['Russian Billionaire'],
    },
    {
      title: 'Jeff Sessions',
      description: 'Attorney General of the United States, served as the junior United States Senator from Alabama from 1997 until 2017.',
      categories: ['Team Trump'],
    },
    {
      title: 'Boris Birshtein',
      description: `Chairman of the Seabeco Group, father-in-law to Alex Shnaider.`,
      categories: ['Organized Crime'],
    },
    {
      title: 'Sergei Mikhaylov',
      description: `Reputed head of Solntsevskaya Bratva, the Russian mob’s largest branch, and the world’s highest-grossing organized crime group as of 2014.`,
      categories: ['Organized Crime'],
    },
    {
      title: 'Alexander Mashkevich',
      description: 'Apart of "the trio" and a major shareholder in ENRC, a miner that was delisted from the London Stock Exchange in 2013 amid corruption allegations.',
      categories: ['Kazakh', 'Organized Crime'],
    },
    {
      title: 'Seabeco',
      description: `“Trading” company that was registered in Zurich in December 1982. By the early 1990s Birshtein and his partners had started many other Seabeco-related companies in a wide variety of locations, inclding Antwerp, Toronto, Winnipeg, Moscow, Delaware, Panama, and Zurich. Several of these are still active. He often staffed them with directors and officers from a far-flung network of Russians, emissaries from other FSU countries like Kyrgyzstan and Moldova, and recent Russia/FSU emigres to Canada. (source http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/)`,
      categories: ['Organized Crime', 'Company'],
    },
    {
      title: 'Brad Zackson',
      description: 'Described by the Observer as "a scrappy former righthand man to Fred Trump Sr".',
      categories: ['Team Trump'],
    },
    {
      title: 'Mike Pence',
      description: '48th Vice President of the United States. He previously served as the 50th Governor of Indiana from 2013 to 2017.',
      categories: ['Team Trump', 'White House Inner Circle'],
    },
    {
      title: 'Reince Priebus',
      description: 'White House Chief of Staff for U.S. President Donald Trump, previously served as the Republican National Committee chairman, RNC general counsel, and chairman of the Republican Party of Wisconsin.',
      categories: ['Team Trump', 'White House Inner Circle']
    },
    {
      title: 'Anatoly Golubchik',
      description: 'Russian mobster that ran an illegal gambling ring out of Trump Tower',
      categories: ['Organized Crime'],
    },
    {
      title: 'Vadim Trincher',
      description: 'Helped organize a wide-scale racketeering and money-laundering operation with direct ties to the Russian Mob. His apartment in Trump Tower was directly below Donald Trumps.',
      categories: ['Organized Crime'],
    },
    {
      title: 'Alimzhan Tokhtakhunov',
      description: 'Known in the criminal world by the nickname "Taivanchik" for his Asian features, is a Russian businessman, criminal, and former sportsman.',
      categories: ['Organized Crime'],
    },
    {
      title: 'YBM Magnex International',
      description: `Fictitious company founded indirectly in Newtown, Bucks County, Pennsylvania in 1995 by Semion Mogilevich`,
      categories: ['Company', 'Organized Crime'],
    },
    {
      title: 'David Bogatin',
      description: `David  served in the Soviet army for three years, and another year as an advisor in what was then North Vietnam. Since the early 1990s he was considered by the FBI to be one of the key members of Mogilevich’s Russian organized crime family in the United States. Brother of Jacob Bogatin. (Source: http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections)`,
      categories: ['Organized Crime'],
    },
    {
      title: 'Jacob Bogatin',
      description: `Chief Executive of YBM, brother of David Bogatin`,
      categories: ['Organized Crime'],
    },
    {
      title: 'Vyacheslav Ivankov',
      description: `Notorious member of the Russian Mafia who was believed to have connections with Russian state intelligence organizations and their organized crime partners, a lieutenant in the United States during the 1990s for Mogilevich.`,
      categories: ['Organized Crime', 'Russian Intelligence'],
    },
    {
      title: 'Dmitry Rybolovlev',
      description: 'Rybolovlev had made his fortune in the wild west of 1990s post-Soviet Russia. He has no significant industrial assets anywhere, and his real estate, yacht, art and jewelry constitute 20 percent of his net worth. (Source on assets https://www.bloomberg.com/view/articles/2014-12-19/russian-billionaires-are-putins-hostages)',
      categories: ['Russian Oligarch', 'Russian Billionaire'],
    },
    {
      title: 'Sheldon Adelson',
      description: `American business magnate, investor, and philanthropist. He is the founder, chairman and chief executive officer of Las Vegas Sands Corporation`,
      categories: ['Team Trump', 'American Billionaire', 'Trump Campaign Donor'],
    },
    {
      title: 'Jared Kushner',
      description: `American real estate investor and developer, publisher, and senior advisor to his father-in-law, President Donald Trump. He was principal owner of the real estate holding and development company Kushner Companies and of Observer Media, publisher of the weekly, on-line New York Observer.`,
      categories: ['Team Trump', 'American Billionaire', 'White House Inner Circle'],
    },
    {
      title: 'Bank of Cyprus',
      description: `Major Cypriot financial institution, it's largest shareholder is Russian oligarch Dmitry Rybolovlev & holds a large amount of assets from a number of Russian oligarchs.`,
      categories: ['Bank']
    },
    {
      title: 'Robert Mercer',
      description: `American computer scientist and co-CEO of Renaissance Technologies, an investment management firm. He is a major donor to conservative political causes such as Breitbart News.`,
      categories: ['Team Trump', 'American Billionaire', 'Trump Campaign Donor', 'Team Breitbart', 'Council for National Policy'],
    },
    {
      title: 'Michael Flynn',
      description: `Retired United States Army lieutenant general who was the eighteenth director of the Defense Intelligence Agency and the first national security advisor appointed by President Donald Trump.`,
      categories: ['Team Trump', 'White House Inner Circle'],
    },
    {
      title: 'Sergey Kislyak',
      description: `Russian diplomat who has served as Russia's Ambassador to the United States since 2008 appointed by former Russian President Dmitry Medvedev. CNN alleged that United States intelligence officials have claimed he is a top Russian spy and spy recruiter.`,
      categories: ['Team Putin', 'Russian Intelligence'],
    },
    {
      title: 'Steve Bannon',
      description: `Assistant to the President and White House Chief Strategist in the Trump administration and a regular attendee to the Principals Committee of the U.S. National Security Council. Additionally, Bannon was the chief executive officer of Trump's 2016 presidential campaign and before his political career, he was executive chair of Breitbart News.`,
      categories: ['Team Trump', 'White House Inner Circle', 'Team Breitbart', 'Council for National Policy'],
    },
    {
      title: 'Kellyanne Conway',
      description: `Counselor to the President for Donald Trump and has also been a Republican Party campaign manager, strategist, and pollster. Was previously a senior advisor and campaign manager.`,
      categories: ['Team Trump', 'White House Inner Circle', 'Council for National Policy'],
    },
    {
      title: 'Patrick Caddell',
      description: `Former Democratic political operative and pollster who, for forty-five years, has been prodding insurgent Presidential candidates to attack the Washington establishment`,
      categories: ['Team Trump']
    },
    {
      title: 'Diana Mercer',
      description: `Runs the Mercer Family Foundation, wife of Robert Mercer.`,
      categories: ['Team Trump', 'American Billionaire', 'Trump Campaign Donor', 'Council for National Policy'],
    },
    {
      title: 'Cambridge Analytica',
      description: `The American affiliate of Strategic Communication Laboratories, in London, has worked for candidates whom Mercer has backed, including Trump. The firm mines online data to reach and influence potential voters. It has created “profiles”—consisting of several thousand data points—for two hundred and twenty million Americans. In promotional materials, S.C.L. has claimed to know how to use such data to wage both psychological and political warfare.`,
      categories: ['Company', 'Team Trump'],
    },
    {
      title: 'Marine Le Pen',
      description: 'President of the National Front, a far right political party.',
      categories: ['National Front', 'Team Putin']
    },
    {
      title: 'Guido Lombardi',
      description: `Lives three stories below Trumps penthouse, member of Mar-a-Lago and longtime friend of Trump. Advisor to Marine Le Pen.`,
      categories: ['Team Trump', 'National Front'],
    },
    {
      title: 'Government Accountability Institute',
      description: `G.A.I. billed itself as a nonpartisan research institute, but in 2015 Bannon told Bloomberg Businessweek that its mission was to dig up dirt on politicians and feed it to the mainstream media.`,
      categories: ['Team Trump'],
    },
    {
      title: 'Breitbart',
      description: `Far-right[ American news, opinion and commentary website founded in 2007 by Andrew Breitbart.`,
      categories: ['Team Trump', 'Team Breitbart'],
    },
    {
      title: 'Peter Schweizer',
      description: `President of G.A.I, business associate of Bannon, author of "Clinton Cash".`,
      categories: ['Team Trump'],
    },
    {
      title: 'Rebekah Mercer',
      description: `Directs the Mercer Family Foundation and served on the Executive Committee of the transition team of United States President-elect Donald Trump.[citation needed] Mercer is the daughter of billionaire hedge fund manager Robert Mercer.`,
      categories: ['Team Trump', 'Trump Campaign Donor'],
    },
    {
      title: 'Nigel Farage',
      description: 'British politician, was the leader of the UK Independence Party (UKIP)',
      categories: ['UKIP', 'Team Trump']
    },
    {
      title: 'Wilbur Ross',
      description: `American investor who is currently the 39th United States Secretary of Commerce, under the Trump Administration. Has a Florida home down the road from Mar-a-Lago.`,
      categories: ['Team Trump', 'American Billionaire'],
    },
    {
      title: 'TUSRIF',
      description: `The U.S. Russia Investment Fund (TUSRIF) was an investment fund from 1995 to 2008. It was established by the United States government to make private investments in the Russian economy.`,
      categories: ['Investment Fund'],
    },
    {
      title: 'Patricia Cloherty',
      description: 'American businesswoman, company director, and private equity financier. Former chairman of TUSRIF.',
      categories: ['Team Putin'],
    },
    {
      title: 'Deutsche Bank',
      description: 'German global banking and financial services company. Deutsche Bank in general as well as specific employees have frequently figured in controversies and allegations of deceitful behavior or illegal transactions.',
      categories: ['Bank'],
    },
    {
      title: 'Rudy Giuliani',
      description: `Former mayor of New York City, and an informal adviser on cybersecurity to the White House.`,
      categories: ['Team Trump'],
    },
    {
      title: 'Kirill Dmitriev',
      description: `Russian businessman and CEO of the Russian Direct Investment Fund (RDIF), a $10 billion sovereign wealth fund created by the Russian government`,
      categories: ['Team Putin'],
    },
    {
      title: 'Delta Private Equity Partners',
      description: `Financial arm of TUSRIF, acquired by subsidiary of Deutsche Bank 2009.`,
      categories: ['Investment Fund'],
    },
    {
      title: 'Anthony Scaramucci',
      description: `American entrepreneur, financier. Following the 2016 election, Scaramucci served on the Presidential Transition Team Executive Committee.`,
      categories: ['Team Trump', 'Trump Campaign Donor']
    },
    {
      title: 'Viktor Vekselberg',
      description: 'Ukrainian-born Russian businessman. He is the owner and president of Renova Group, a large Russian conglomerate. Served on the management board of Russian oil giant Rosneft',
      categories: ['Team Putin', 'Russian Billionaire'],
    },
    {
      title: 'Rosneft',
      description: 'Oil company majority owned by the Government of Russia.',
      categories: ['Company', 'Team Putin'],
    },
    {
      title: 'Josef Ackermann',
      description: 'Swiss banker and former chief executive officer of Deutsche Bank, chairman of the board of directors at the Bank of Cyprus',
      categories: ['G30'],
    },
    {
      title: 'Vladimir Strzhalkovsky',
      description: 'Former mining executive and K.G.B. agent, close ally of Putin',
      categories: ['Team Putin', 'Russian Intelligence'],
    }
  ],
  dots: [
    {
      title: 'Attempt to redevelop the Drake Hotel in New York',
      description: `Manafort and business partners, including Firtash, in 2008 negotiated an $895 million deal to buy the site of the Drake Hotel in Manhattan. (Exact date unknown) \n According to a lawsuit brought against Manafort and Firtash, the key point of the deal was not to make a carefully-planned investment in real estate, but to simply launder part of the huge profits that Firtash had skimmed while brokering dodgy natural gas deals between Russia and Ukraine, with Mogilevich acting as a “silent partner.”`,
      date: '1/1/2008',
      nodes: ['Paul Manafort', 'Dmytro Firtash', 'Semion Mogilevich', 'Brad Zackson'],
      sources: [
        'http://www.chicagotribune.com/news/chicagoinc/ct-trump-manafort-firtash-0802-chicago-inc-20160801-story.html',
        'http://freebeacon.com/wp-content/uploads/2016/03/manafort-complaint-2.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
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
      nodes: ['Felix Sater', 'Bayrock Group LLC'],
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
      title: 'Manafort joins Trump Campaign',
      description: `Paul Manafort joins the Trump campaign to manage his convention strategy.`,
      date: '3/29/2016',
      nodes: ['Paul Manafort', 'Donald Trump'],
      sources: ['http://fortune.com/2017/03/22/paul-manafort-donald-trump-vladimir-putin/'],
    },
    {
      title: 'Manafort becomes Trump campaign chairman',
      description: `Paul Manafort is promoted to campaign chairman & chief strategist. Campaign manager Corey Lewandowski is fired a month later.`,
      date: '5/19/2016',
      nodes: ['Paul Manafort', 'Donald Trump'],
      sources: ['http://fortune.com/2017/03/22/paul-manafort-donald-trump-vladimir-putin/'],
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
      nodes: ['Felix Sater', 'Michael Cohen', 'Andrii Artemenko', 'Michael Flynn'],
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
      description: 'Gref organized the meeting with Agalarov, “Almost all of the oligarchs were in the room,” Trump bragged to Real Estate Weekly upon returning home. (Exact date unknown, near pageant)',
      date: '11/11/2013',
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
      date: '11/10/2013',
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
      date: '9/21/2015',
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
      nodes: ['Alex Shnaider', 'Yuri Shefler', 'FL Group'],
      sources: [
        'http://file.wikileaks.info/leak/kaupthing-bank-before-crash-2008.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
        'https://twitter.com/itsjoekent/status/842224290485424129',
      ],
    },
    {
      title: 'Jeff Sessions grants Salvatore Lauria asylum',
      description: `Less than a month into office & days after Felix Sater met with Michael Cohen, Jeff Sessions intervened in Salvatore Lauria’s petition and granted it, allowing him to stay in the country.`,
      date: '2/24/2017',
      nodes: ['Jeff Sessions', 'Salvatore Lauria'],
      sources: ['https://medium.com/@itsjoekent/jeff-sessions-quietly-pulled-a-favor-for-a-former-russian-mobster-close-to-trump-d52fc61d5437#.rfwt9jx0m'],
    },
    {
      title: 'Alex Shnaider tries to get rid of loan for a Trump property',
      description: `Alex Shnaider began discussions with his lender, Raiffeisen Bank International AG, to dispose of the 65-story luxury tower and the associated loan he has with the bank of about $300 million.`,
      date: '5/27/2016',
      nodes: ['Alex Shnaider', 'The Trump Organization'],
      sources: ['https://www.bloomberg.com/news/articles/2016-05-27/trump-toronto-hotel-on-market-as-billionaire-shnaider-seeks-exit'],
    },
    {
      title: 'Birshtein hosted a meeting in his Tel Aviv office for Mikhaylov, Mogilevich, and several other leaders of the Russo/FSU mafia',
      description: `A 1996 FBI report has the meeting taking place for discussing "sharing interests in Ukraine". (Exact date unknown)`,
      date: '1/1/1996',
      nodes: ['Boris Birshtein', 'Sergei Mikhaylov', 'Semion Mogilevich'],
      sources: ['http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/']
    },
    {
      title: 'Foreign paper citing connection between the Trio and Seabeco',
      description: `Chodiev reportedly first met Birshtein through the Soviet Foreign Ministry, and then went on to run Seabeco’s Moscow office before joining its Belgium office in 1991. Le Soir further claims that Mashkevich worked for Seabeco too, and that this was actually how he and Chodiev had first met. (Exact date unknown)`,
      date: '1/1/1998',
      nodes: ['Boris Birshtein', 'Patokh Chodiev', 'Alexander Mashkevich', 'Seabeco'],
      sources: [
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
        'http://archives.lesoir.be/l-empereur-du-kazakhstan-enquete-sur-un-trio-venu-de-la_t-20000722-Z0JGTU.html'
      ],
    },
    {
      title: 'Shnaider works for Birshtein while finishing school',
      description: `Shnaider started working at Seabeco’s Zurich headquarters, where he was reportedly introduced to steel trading. Evidently this was much more than just a job; the Zurich company registry lists “Alex Shnaider” as a director of “Seabeco Metals AG” from March 1993 to January 1994. (Exact date started unknown)`,
      date: '1/1/1991',
      nodes: ['Boris Birshtein', 'Alex Shnaider', 'Seabeco'],
      sources: [
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
        'http://www.theglobeandmail.com/report-on-business/rob-magazine/the-invisible-man/article18228210/?page=all'
      ],
    },
    {
      title: 'Shnaider and Mikhaylov might have crossed paths',
      description: `Shnaider reportedly left Seabeco in January 1994 to start his own trading company in Antwerp, in partnership with a Belgian trader-partner. Curiously, Le Soir also says that Mikhaylov and Birshtein co-founded MAB International in Antwerp in January 1994. (Exact date unknown)`,
      date: '1/1/1994',
      nodes: ['Alex Shnaider', 'Sergei Mikhaylov', 'Boris Birshtein'],
      sources: ['http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/']
    },
    {
      title: 'Leaked diplomatic cable has Firtash admitting ties to Mogilevich',
      description: `"He acknowledged ties to Russian organized crime figure Seymon Mogilevich, stating he needed Mogilevich's approval to get into business in the first place."`,
      date: '12/10/2008',
      nodes: ['Dmytro Firtash', 'Semion Mogilevich'],
      sources: [
        'https://wikileaks.org/plusd/cables/08KYIV2414_a.html',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/'
      ],
    },
    {
      title: 'Construction begins on Trump Hotel Toronto',
      description: `The tower is located in the Financial District, at 311 Bay Street, on the southeast corner of Bay and Adelaide streets. Construction began with the removal of the sales centre in September 2007, but the official groundbreaking was on October 12, 2007.`,
      date: '9/1/2007',
      nodes: ['Alex Shnaider', 'The Trump Organization'],
      sources: ['https://en.wikipedia.org/wiki/Trump_International_Hotel_and_Tower_(Toronto)'],
    },
    {
      title: 'Manafort, Zackson attempted to bring Trump into the Drake deal',
      description: `Grasping, Mr. Zackson wrote in an email in March 2009: “I have an idea to bring [Donald] Trump in on the Drake. I think it solves a lot of issues right away.” (Exact date unknown)`,
      date: '3/1/2009',
      nodes: ['Paul Manafort', 'Brad Zackson'],
      sources: [
        'http://observer.com/2011/06/the-property-pretenders/3/',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/'
      ]
    },
    {
      title: 'AP finds Manafort took million dollar payment through Cyprus',
      description: `Manafort-linked company received a $1 million payment in October 2009 from a mysterious firm through the Bank of Cyprus. The $1 million left the account the same day — split in two, roughly $500,000 disbursements to accounts with no obvious owner.`,
      date: '10/1/2009',
      nodes: ['Paul Manafort', 'Bank of Cyprus'],
      sources: ['https://www.apnews.com/d43ef4166da6400ab45140978854bbbb']
    },
    {
      title: 'Manafort introduces Pence to Trump',
      description: `First reported by the New York Post, an indecisive Trump had initially decided on Christie after the New Jersey governor made his final case to Trump on July 12. Manafort had arranged for Trump to meet with his first choice for the job on July 13: Indiana Governor Mike Pence. What had previously been reported as a “lucky break” by the New York Times was actually a swift political maneuver devised by the now fired campaign manager. Set on changing Trump’s mind, he concocted a story that Trump’s plane had mechanical problems, forcing the soon-to-be Republican nominee to stay the night in Indianapolis for breakfast with the Pence family on Wednesday morning.`,
      date: '7/13/2016',
      nodes: ['Paul Manafort', 'Mike Pence', 'Donald Trump'],
      sources: ['http://www.cbsnews.com/news/donald-trump-offered-chris-christie-vice-president-role-before-mike-pence/'],
    },
    {
      title: 'Daily Beast runs story suggesting Manafort still influencing Trump on cabinent picks',
      description: `“I think he’s weighing in on everything,” the former official said, “I think he still talks to Trump every day. I mean, Pence? That was all Manafort. Pence is on the phone with Manafort regularly.” Another Trump campaign source who worked alongside Manafort confirmed to The Daily Beast that he is heavily involved in selecting the incoming administration’s “personnel picks.” When The Daily Beast caught up with Manafort sometime later, he would neither confirm nor deny his presence on the Trump transition team.`,
      date: '11/30/2016',
      nodes: ['Paul Manafort', 'Mike Pence', 'Donald Trump'],
      sources: ['http://www.thedailybeast.com/articles/2016/11/30/torture-lobbyist-paul-manafort-still-advising-donald-trump-on-cabinet-picks.html'],
    },
    {
      title: 'US raids Russian organized crime operation in Trump Tower',
      description: `U.S. investigators said was a Russian organized crime operation that included illegal, high-stakes poker games for the rich and famous and threats of violence to make sure customers paid their debts. The court heard that bank accounts and businesses controlled by Trincher, Golubchik and others “laundered approximately $100 million in proceeds from their gambling operation in Russia and Ukraine through shell companies and bank accounts in Cyprus,” as well as through live and online sportsbooks that catered to Russian oligarchs. Prosecutors alleged that Trincher reported directly to Tokhtakounov. In a two-month period beginning in late 2011, the money-laundering ring paid Tokhtakhunov $20 million in illegal proceeds, according to an 83-page indictment unsealed in New York on Tuesday.`,
      date: '4/16/2013',
      nodes: ['Vadim Trincher', 'Alimzhan Tokhtakhunov', 'The Trump Organization'],
      sources: [
        'https://themoscowtimes.com/articles/us-seeks-arrest-of-reputed-russian-mobster-23337',
        'https://www.cardschat.com/news/vadim-trincher-sentenced-five-years-russian-mob-links-3134'
      ],
    },
    {
      title: 'FBI report connects Mogilevich, Tokhtakhunov, Mikhaylov',
      description: `"Their operations and contacts overlap in some instances, as evidenced by meetings, joint investments, and silent partnerships in firms engadged in OC activity". (Page 31 in RBI report)`,
      date: '8/1/1996',
      nodes: ['Semion Mogilevich', 'Alimzhan Tokhtakhunov', 'Sergei Mikhaylov'],
      sources: [
        'http://www.larryjkolb.com/file/docs/fbimogilevich.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
    },
    {
      title: 'Tokhtakhunov attends Trumps Miss Universe 2013 in Russia',
      description: `In a phone interview with Mother Jones, Tokhtakhounov initially said he had not attended the beauty pageant. After being told that there were photos and media reports showing that he had been there, he acknowledged that he had been present at the glitzy gathering. But he denied that he had been a VIP and said he had purchased his own ticket. Tokhtakhounov also said he had no interaction with Trump at the event.`,
      date: `11/10/2013`,
      nodes: ['Donald Trump', 'Alimzhan Tokhtakhunov'],
      sources: [
        'http://visualrian.ru/ru/site/gallery/index/id/2316817/context/%7B%22feature%22%3A%22355363%22%7D/',
        'http://www.motherjones.com/politics/2016/09/trump-russian-mobster-tokhtakhounov-miss-universe-moscow',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
    },
    {
      title: 'Trump cites Miss Universe 2013 as his foreign policy experience',
      description: `Trump has said his understanding of Russia is based in part on the 2013 Miss Universe event in Moscow, where the Manhattan mogul watched 86 contestants don shimmering evening gowns and skimpy swimsuits for what he would call “the world’s biggest and most iconic beauty contest.” “I know Russia well,” Trump told Fox News on May 6. “I had a major event in Russia two or three years ago, which was a big, big incredible event.” Asked whether he had met with Putin there, Trump declined to say, though he added: “I got to meet a lot of people.”`,
      date: '5/6/2016',
      nodes: ['Donald Trump'],
      sources: ['http://www.politico.com/story/2016/05/donald-trump-russia-moscow-miss-universe-223173'],
    },
    {
      title: 'Mogilevich indicted for for YBM',
      description: `A federal indictment, unsealed for Mogilevich on April 24, 2003, in the Eastern District of Pennsylvania, Philadelphia, Pennsylvania, charges him with 45 counts of racketeering, securities fraud, wire fraud, mail fraud, and money laundering.`,
      date: '4/24/2003',
      nodes: ['Semion Mogilevich', 'Jacob Bogatin', 'YBM Magnex International'],
      sources: [
        'https://archives.fbi.gov/archives/philadelphia/press-releases/2009/ph102109a.htm',
        'http://online.wsj.com/public/resources/documents/ruslobby-mogilevich-04172007.pdf',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
    },
    {
      title: 'David Bogatin buys apartments in Trump Tower',
      description: `David Bogatin bought multiple apartments in Trump tower, potentially using them to launder money from his brothers illegal gains at YBM. It's reported Trump sold to David personally.`,
      date: '11/15/1984',
      nodes: ['David Bogatin', 'Jacob Bogatin', 'The Trump Organization'],
      sources: [
        'https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentDetail?doc_id=FT_1530000175753',
        'https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentDetail?doc_id=FT_1980000078698',
        'http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/',
      ],
    },
    {
      title: 'Trump sells mansion to Rybolovlev',
      description: `Rybolovlev would pay Trump $95 million for Maison L’Amitie in what was widely described as the most expensive U.S. residential property sale ever.`,
      date: '7/15/2008',
      nodes: ['The Trump Organization', 'Donald Trump', 'Dmitry Rybolovlev'],
      sources: ['http://www.politico.com/magazine/story/2016/07/donald-trump-2016-russian-ties-214116'],
    },
    {
      title: 'Jets of Trump & Rybolovlev share tarmac',
      description: `Rybolovlev's jet wheeled to a stop at Charlotte Douglas International Airport. Less than 90 minutes later, Donald Trump’s campaign jet arrived on the same tarmac for an afternoon campaign rally.`,
      date: '11/3/2016',
      nodes: ['Donald Trump', 'Dmitry Rybolovlev'],
      sources: ['http://www.mcclatchydc.com/news/politics-government/white-house/article136939868.html'],
    },
    {
      title: `Rybolovlev lands in Adelson's hangar in Las Vegas while Trump is also in Las Vegas at Adelson's casino`,
      description: `Oct. 30, four days before his second Charlotte visit and on the same day that Trump was in Las Vegas, Rybolovlev’s plane landed at Las Vegas’ McCarran International Airport early in the afternoon and taxied to the private hangar of casino tycoon Sheldon Adelson, flight records obtained by McClatchy show. Neither spokespeople for the Sands nor Rybolovlev would comment about why he visited Adelson’s hangar, which does not service most general aviation aircraft.`,
      date: '10/30/2016',
      nodes: ['Donald Trump', 'Dmitry Rybolovlev', 'Sheldon Adelson'],
      sources: ['http://www.charlotteobserver.com/news/politics-government/article137881768.html'],
    },
    {
      title: 'Adelson pours $25MM into anti Hillary Clinton Super PAC',
      description: `Billionaire Sheldon Adelson just committed $25 million to an anti-Hillary Clinton Super PAC to try and help tilt the presidential race and down ballot House and Senate races to Republicans, Fox News learned Monday. There are indications the casino magnate will pony up even more by the end of the week.`,
      date: '10/31/2016',
      nodes: ['Sheldon Adelson'],
      sources: ['http://www.foxnews.com/politics/2016/10/31/adelson-pours-25-million-into-white-house-race-more-may-be-coming.html'],
    },
    {
      title: `Rybolovlev's Jet & Yacht were in Dubrovnik the same time as Ivanka and Jared Kushner`,
      description: `Reporter retrieved Martime data along with flight data to confirm Rybolovlev's presence.`,
      date: '8/9/2016',
      nodes: ['Jared Kushner', 'Ivanka Trump', 'Dmitry Rybolovlev'],
      sources: ['http://www.dailykos.com/stories/2017/3/17/1644558/-Confirmed-Rybolovlev-s-Jet-Yacht-were-in-Dubrovnik-the-same-time-as-Ivanka-and-Jarred-Kushner'],
    },
    {
      title: 'Yachts of Rybolovlev and Mercer are spotted next to eachother',
      description: `Dmitry Rybolovlev's state-of-the-art yacht Anna sat anchored in the British Virgin Islands on Friday night and another equally resplendent luxury liner, the Sea Owl, owned by Robert Mercer, sidled up.`,
      date: '3/10/2017',
      nodes: ['Dmitry Rybolovlev', 'Robert Mercer'],
      sources: ['http://www.mypalmbeachpost.com/news/national-govt--politics/yachts-trump-financial-backer-russian-oligarch-seen-close-together/gI074W3JLqvEYrQ0hm9zlN/']
    },
    {
      title: 'Reuters review: Russian elite invested nearly $100 million in Trump buildings',
      description: `A Reuters review found that at least 63 individuals with Russian passports or addresses have bought at least $98.4 million worth of property in seven Trump-branded luxury towers in southern Florida.`,
      date: '3/17/2017',
      nodes: ['The Trump Organization'],
      sources: ['http://www.reuters.com/investigates/special-report/usa-trump-property/'],
    },
    {
      title: 'Flynn has a conversation with Russian ambassador, Sergey I. Kislyak over sanctions',
      description: `Former President Barack Obama ejected dozens of suspected Russian intelligence operatives from the United States and imposed sanctions on Russia. In a phone conversation around the same time, Mr. Flynn discussed the sanctions with the Russian ambassador, Sergey I. Kislyak, and urged Russia not to retaliate because doing so could complicate future cooperation between the two nations.`,
      date: '12/29/2016',
      nodes: ['Michael Flynn', 'Sergey Kislyak'],
      sources: ['https://www.nytimes.com/2017/02/14/us/politics/michael-flynn-resigns-trump-timeline.html'],
    },
    {
      title: 'Flynn resigns from the administration',
      description: `“Unfortunately, because of the fast pace of events, I inadvertently briefed the vice president-elect and others with incomplete information regarding my phone calls with the Russian ambassador,” Mr. Flynn wrote in his resignation letter.`,
      date: '2/13/2017',
      nodes: ['Michael Flynn'],
      sources: ['https://www.nytimes.com/2017/02/14/us/politics/michael-flynn-resigns-trump-timeline.html'],
    },
    {
      title: 'Flynn gets paid to give a speech at RT event, dines with Putin',
      description: `Flynn took a trip to Russia in December 2015. On the trip, Flynn attended a 10th anniversary gala celebration for RT, the pro-Russia news outlet owned by the Russian government. At the gala, Flynn appeared on a panel and then sat next to Putin during dinner.`,
      date: '12/10/2015',
      nodes: ['Michael Flynn', 'Vladimir Putin'],
      sources: [
        'http://www.motherjones.com/politics/2017/02/michael-flynn-emoluments-clause',
        'http://www.dailymail.co.uk/news/article-4321368/Flynn-got-paid-45-000-speech-sat-Putin.html',
        'http://www.foxnews.com/politics/2017/03/17/flynn-was-paid-67g-by-russian-interests-documents-say.html'
      ],
    },
    {
      title: 'Party at Mercers home with Trump, Conway, Bannon',
      description: `It was a "Villains and Heroes" costume party. None of Trump's immediate family members attended the Long Island party, but his campaign manager, Kellyanne Conway, was on hand, dressed as Super Woman. Trump's designated White House strategist Steve Bannon was also on hand, but appeared not to be in costume.`,
      date: '12/3/2016',
      nodes: ['Donald Trump', 'Robert Mercer', 'Steve Bannon', 'Kellyanne Conway', 'Rebekah Mercer'],
      sources: ['http://www.reuters.com/article/us-usa-trump-idUSKBN13T05D']
    },
    {
      title: 'Trump hires Conway to join campaign',
      description: `On July 1, 2016, after Cruz withdrew from the race, Donald Trump appointed her as a senior advisor`,
      date: '7/1/2016',
      nodes: ['Donald Trump', 'Kellyanne Conway'],
      sources: ['https://www.washingtonpost.com/news/post-politics/wp/2016/07/01/trump-hires-ex-cruz-super-pac-strategist-kellyanne-conway/?utm_term=.a9a43987adad'],
    },
    {
      title: 'Bannon, Conway appointed to lead the Trump campaign',
      description: `Trump's new top operatives—Stephen Bannon, the campaign's new chief executive, and Kellyanne Conway, the campaign manager—are longtime advisers to Robert Mercer and have aided his family on a web of interlocking projects. At a fundraiser in August, Ms. Mercer suggested to Mr. Trump he shake up his campaign, recommending that two of her confidants take control, according to two people familiar with the conversation.`,
      date: '8/17/2016',
      nodes: ['Donald Trump', 'Kellyanne Conway', 'Steve Bannon', 'Diana Mercer'],
      sources: [
        'https://www.bloomberg.com/politics/articles/2016-08-17/trump-s-new-team-brings-deep-ties-to-major-donor',
        'http://www.theaustralian.com.au/business/wall-street-journal/robert-and-rebekah-mercer-billionaire-fatherdaughter-team/news-story/f03eab1d440cc03f7d7f3d5a0b6fb546'
      ]
    },
    {
      title: 'Trump meets with Caddell after rally',
      description: `Trump greeted Caddell warmly in North Charleston, and after giving a speech he conferred privately with him, in an area reserved for V.I.P.s and for White House officials, including Stephen Bannon, the President’s top strategist, and Jared Kushner, Trump’s son-in-law. Caddell is well known to this inner circle. He first met Trump in the eighties. The White House declined to divulge what Trump and Caddell discussed in North Charleston, as did Caddell.`,
      date: '2/17/2017',
      nodes: ['Donald Trump', 'Steve Bannon', 'Jared Kushner', 'Patrick Caddell'],
      sources: ['http://www.newyorker.com/magazine/2017/03/27/the-reclusive-hedge-fund-tycoon-behind-the-trump-presidency'],
    },
    {
      title: `Bannon, Mercer start "Reclaim New York"`,
      description: `Disappointed by President Barack Obama’s 2012 re-election, Mr. Mercer intensified his political activity. In 2013, he and Ms. Mercer, together with Mr. Bannon, started the watchdog group Reclaim New York to track what they viewed as excessive public spending. That year, Patrick Caddell, a former pollster for Jimmy Carter who has been critical of top Democrats, shared data with Mr. Mercer showing voters were becoming alienated from both political parties and mainstream candidates. Also of note: Reclaim New York shares a corporate address with Cambridge Analytica.`,
      date: '9/1/2013',
      nodes: ['Steve Bannon', 'Robert Mercer', 'Patrick Caddell', 'Rebekah Mercer', 'Cambridge Analytica'],
      sources: [
        'https://www.reclaimnewyork.org/about/',
        'http://www.theaustralian.com.au/business/wall-street-journal/robert-and-rebekah-mercer-billionaire-fatherdaughter-team/news-story/f03eab1d440cc03f7d7f3d5a0b6fb546',
        'http://www.newyorker.com/magazine/2017/03/27/the-reclusive-hedge-fund-tycoon-behind-the-trump-presidency'
      ],
    },
    {
      title: `Mercer invests $10MM into Breitbart`,
      description: `Mercer invested $10 million in the media outlet when it was struggling in 2011, according to a person with knowledge of the transaction. (Exact date unknown)`,
      date: '01/01/2011',
      nodes: ['Steve Bannon', 'Robert Mercer', 'Breitbart'],
      sources: ['https://www.bloomberg.com/politics/features/2016-01-20/what-kind-of-man-spends-millions-to-elect-ted-cruz-'],
    },
    {
      title: 'Cambridge Analytica spins off, enters US market',
      description: `When SCL Elections formed Cambridge Analytica in 2013 it hired researchers from Cambridge University, hence the name. Steve Bannon was a board member. (Exact date unknown)`,
      date: '01/01/2013',
      nodes: ['Cambridge Analytica', 'Robert Mercer', 'Steve Bannon'],
      sources: ['https://en.wikipedia.org/wiki/Cambridge_Analytica'],
    },
    {
      title: 'Cambridge Analytica releases press release congradulating Donald Trump',
      description: `Cambridge Analytica, the market leader in the provision of data analytics and behavioral communications, would like to congratulate President-elect Donald Trump and Vice President-elect Mike Pence on their historic victory.`,
      date: '11/9/2016',
      nodes: ['Cambridge Analytica'],
      sources: ['https://cambridgeanalytica.org/news/pressrelease/1293'],
    },
    {
      title: 'Bannon introduced to Trump',
      description: 'David Bossie, Citizens United president and Donald Trump’s former deputy campaign manager, introduced Trump to Bannon in 2011. (Exact date unknown)',
      date: '01/01/2011',
      nodes: ['Donald Trump', 'Steve Bannon'],
      sources: ['http://www.thedailybeast.com/articles/2017/03/06/david-bossie-the-man-the-trump-train-left-behind.html']
    },
    {
      title: 'Marine Le Pen tweets she will work with Trump',
      description: `"I answer yes to the invitation of Stephen Bannon, CEO of @realDonaldTrump presidential campaign, to work together."`,
      date: '11/12/2016',
      nodes: ['Donald Trump', 'Marine Le Pen', 'Steve Bannon'],
      sources: ['https://twitter.com/Marion_M_Le_Pen/status/797489987583438852']
    },
    {
      title: 'Marine Le Pen spotted at Trump tower',
      description: `Le Pen waved off reporters when approached while she sat drinking coffee with three other people outside the Trump Ice Parlor on Thursday. Among them was Guido Lombardi`,
      date: '1/12/2017',
      nodes: ['The Trump Organization', 'Marine Le Pen', 'Guido Lombardi'],
      sources: [
        'https://www.bloomberg.com/politics/articles/2017-01-12/le-pen-in-new-york-for-unannounced-visit-during-french-race',
        'https://twitter.com/passantino/status/819579093847052289',
      ]
    },
    {
      title: `Politico runs profile on Trumps "European Fixer"`,
      description: `Guido Lombardi, who describes himself as a real estate investor with rightward political leanings, said that throughout the presidential campaign he fielded calls from representatives of a veritable Who’s Who of the European Right, including French far-right leader Marine Le Pen, Hungarian Prime Minister Viktor Orbán, members of Austria’s Freedom Party, as well as the center-right French Républicains party who all wanted to meet with Trump. “When there is a high-level request, I pass it on. It may be to Eric [Trump], it may be to someone else. It may be to Donald himself. It depends on who, and what, it is.”`,
      date: '12/5/2016',
      nodes: ['Donald Trump', 'Guido Lombardi'],
      sources: ['http://www.politico.eu/article/trumps-ambassador-europe-far-right-news-lombardi/'],
    },
    {
      title: `Lombardi reveals he told Bannon in advance about Le Pen's Trump tower visit`,
      description: `In a phone interview on Thursday night with The Daily Beast, however, Lombardi told a different story. He said he let incoming White House senior counselor Steve Bannon know about the visit before it happened. Additionally, Lombardi claimed that he mentioned a prospective meeting to Trump recently, telling him: “If you want to meet her [Le Pen], you can say something.” Lombardi claimed that Trump told him to let him know if she ever came to the United States.`,
      date: '1/12/2017',
      nodes: ['Steve Bannon', 'Guido Lombardi'],
      sources: ['http://www.thedailybeast.com/articles/2017/01/12/steve-bannon-knew-about-marine-le-pen-s-trump-tower-party-organizer-claims.html']
    },
    {
      title: 'National front gets millions of dollars from Russian banks',
      description: `"France's far-right Front National Party has sought a loan of 40 million euros from Russian contacts, according to information obtained by Mediapart. After the party's leader Le Pen last weekend confirmed it had been slow 9 million euros from a Moscow bank, a senior party official has told Mediapart that it was a "first instalment" and that another 31 million euros "will follow" Refuted by Le Pen."`,
      date: '11/27/2014',
      nodes: ['Marine Le Pen'],
      sources: ['https://en.wikipedia.org/wiki/National_Front_(France)#cite_note-MP141127-201']
    },
    {
      title: 'Marine Le Pen meets Putin in person',
      description: `Russian President Vladimir Putin made his preferences in the French presidential election clear Friday by hosting far-right candidate Marine Le Pen at the Kremlin. Embracing Le Pen is part of Russia’s efforts to reach out to nationalist and anti-globalist forces to build up its influence in the West and help overcome the strains in relations with the U.S. and the European Union.`,
      date: '3/24/2017',
      nodes: ['Marine Le Pen', 'Vladimir Putin'],
      sources: ['http://www.usatoday.com/story/news/world/2017/03/25/vladimir-putin-marie-le-pen-french-presidential-election/99617564/'],
    },
    {
      title: 'Marine Len Pen struggles to find further funding',
      description: `National Front leader Marine Le Pen is struggling to raise the 20 million euros ($21 million) she needs to fund French presidential and legislative campaigns in 2017 after the party’s Russian lender failed, the party treasurer said. “The loss of the FCRB was a hard blow for us,” Saint Just said in a telephone interview. “The Russia loan was a stable resource. Now we are still searching for loans.”`,
      date: '12/22/2016',
      nodes: ['Marine Le Pen'],
      sources: ['https://www.bloomberg.com/politics/articles/2016-12-22/le-pen-struggling-to-fund-french-race-after-russian-backer-fails'],
    },
    {
      title: 'G.A.I is founded',
      description: `GAI was founded with a $2MM "gift", with both Bannon & Mercers daughter sitting at high level positions`,
      date: '2/17/2012',
      nodes: ['Steve Bannon', 'Robert Mercer', 'Government Accountability Institute', 'Peter Schweizer', 'Rebekah Mercer'],
      sources: ['https://pp-990.s3.amazonaws.com/2013_12_EO/45-4681912_990_201212.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI7C6X5GT42DHYZIA%2F20170326%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20170326T170038Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=329376e0b0bc26af8675cbd472ccb073aa410c19d19288785dabe460290bd809']
    },
    {
      title: 'Through G.A.I, Bannon purchases ad space on Breitbart',
      description: `Bannon while acting Chairman of G.A.I and Breitbart (taking a 6 figure salary at both), purchased space on Breitbart through G.A.I (Exact date unknown)`,
      nodes: ['Government Accountability Institute', 'Steve Bannon', 'Breitbart'],
      date: '01/01/2013',
      sources: [
        'https://pp-990.s3.amazonaws.com/2014_12_EO/45-4681912_990_201312.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI7C6X5GT42DHYZIA%2F20170326%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20170326T165039Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=75a0a0b4ad68a1ca5259e7809cbbf57275c6d10eee0ab82928c5773833df2361',
        'https://twitter.com/itsjoekent/status/846042908050501637',
      ],
    },
    {
      title: 'Mercer suggests Flynn for NSA job',
      description: `"Still, Mercer made her influence felt. Her pick for national-security adviser was Michael Flynn, and Trump chose him for the job." (Exact date unknown, post election)`,
      nodes: ['Michael Flynn', 'Rebekah Mercer'],
      date: '11/10/2016',
      sources: ['http://www.newyorker.com/magazine/2017/03/27/the-reclusive-hedge-fund-tycoon-behind-the-trump-presidency'],
    },
    {
      title: 'Farage hires Cambridge Analytica to assist with Brexit campaign',
      description: `"...in November 2015, the more radical of the two Brexit campaigns, "Leave.EU," supported by Nigel Farage, announced that it had commissioned a Big Data company to support its online campaign: Cambridge Analytica."`,
      nodes: ['Nigel Farage', 'Cambridge Analytica'],
      date: '11/20/2015',
      sources: [
        'https://motherboard.vice.com/en_us/article/how-our-likes-helped-trump-win',
        'https://web.archive.org/web/20160512002859/http://leave.eu/en/news/2015-11-20/the-science-behind-our-strategy'
      ]
    },
    {
      title: 'Ross nominates Ackermann to board of Bank of Cyprus',
      description: `Wilbur Ross & Ackermann are specifically listed in this document for a vote dated Nov. 20th`,
      nodes: ['Bank of Cyprus', 'Wilbur Ross', 'Josef Ackermann'],
      date: '11/20/2014',
      sources: ['http://www.bankofcyprus.com/globalassets/investor-relations/press-releases/eng/20141115ccandidatesforbod_eng.pdf']
    },
    {
      title: 'AP reports Trump plans to nominate Ross for Secretary of Commerce',
      description: `Wilbur Ross, the billionaire investor considered the "king of bankruptcy" for buying beaten-down companies with the potential to deliver profits, is President-elect Donald Trump's choice for commerce secretary, a senior transition official said.`,
      date: '11/24/2016',
      nodes: ['Wilbur Ross', 'Donald Trump'],
      sources: ['https://web.archive.org/web/20161125174500/http://www.msn.com/en-us/news/politics/trump-taps-billionaire-investor-ross-for-commerce-secretary/ar-AAkHUco?OCID=ansmsnnews11']
    },
    {
      title: 'Ross helped Trump structure a bankruptcy filing',
      description: `"Instead of pushing the casino into an immediate bankruptcy, Mr. Ross and Mr. Icahn worked with Mr. Trump and others to structure a more orderly bankruptcy filing in 1991."`,
      date: '7/16/1991',
      nodes: ['Wilbur Ross', 'Donald Trump'],
      sources: [
        'http://www.nytimes.com/1991/07/18/business/chapter-11-for-taj-mahal.html',
        'https://www.nytimes.com/2016/11/25/business/dealbook/wilbur-ross-commerce-secretary-donald-trump.html?_r=0'
      ]
    },
    {
      title: 'Ross appointed to The U.S. Russia Investment Fund',
      description: 'Former president Bill Clinton appointed Wilbur Ross to the U.S. Russia Investment Fund (Exact date unknown)',
      date: '01/01/1995',
      nodes: ['Wilbur Ross', 'TUSRIF', 'Patricia Cloherty', 'Delta Private Equity Partners'],
      sources: [
        'https://en.wikipedia.org/wiki/Wilbur_Ross',
        'http://www.bankofcyprus.com/en-GB/Corporate-Governance/BOARD-COMMITTEES/BoD-Composition/wilbur-L-Ross-Vice-Chairman/'
      ],
    },
    {
      title: 'Cloherty received the Order of Friendship from Russian President Vladimir Putin',
      description: `On March 17, 2008, President of the Russian Federation Vladimir Putin signed a decree awarding the Order of Friendship to Patricia M. Cloherty for her major contribution to the development of Russian business and for strengthening friendship and cooperation between the Russian Federation and the United States of America.`,
      date: '3/17/2008',
      nodes: ['Patricia Cloherty', 'Vladimir Putin'],
      sources: ['http://www.cfe.ru/en/resource_center/press/652.htm'],
    },
    {
      title: 'Kirill Dmitriev joins Delta Private Equity',
      description: 'According to LinkedIn Kirill was the co-managing partner and CEO from 2002-2007. (Exact date joined unknown)',
      date: '01/01/2002',
      nodes: ['Delta Private Equity Partners', 'Kirill Dmitriev'],
      sources: ['https://www.linkedin.com/in/kirilldmitriev/']
    },
    {
      title: 'TUSRIF financial arm purchased by subsidiary of Deutsche Bank',
      description: `Delta Private Equity Partners, the financial arm of The U.S. Russia Investment Fund, was purchased by UFG Private Equity, a subsidiary of Deutsche Bank, in 2009.`,
      date: '8/25/2008',
      nodes: ['TUSRIF', 'Delta Private Equity Partners', 'Deutsche Bank'],
      sources: [
        'https://mergr.com/private-equity/Delta-Private-Equity-Partners',
        'https://en.wikipedia.org/wiki/The_U.S._Russia_Investment_Fund'
      ]
    },
    {
      title: `Giuliani appoints Ross as "privatization advisor"`,
      description: `In that capacity, he helped push to privatize the city’s public television and radio stations and the Port Authority of New York and New Jersey, and worked to sell off empty lots to businesses. (Date unknown, but clearly started in 1995)`,
      date: '01/01/1995',
      nodes: ['Rudy Giuliani', 'Wilbur Ross'],
      sources: [
        'https://thinkprogress.org/who-is-wilbur-ross-5e22fab68f47#.yd64zsrfx',
        'http://www.nytimes.com/1995/03/22/nyregion/new-york-signing-off-to-sell-its-radio-and-tv-stations.html',
      ]
    },
    {
      title: `Kirill Dmitriev holds meeting with Putin`,
      description: `"Vladimir Putin met with CEO of the Russian Direct Investment Fund (RDIF) Kirill Dmitriev to discuss the Fund’s current activities, in particular, investment in agriculture and cooperation with foreign partners."`,
      date: '9/9/2015',
      nodes: ['Vladimir Putin', 'Kirill Dmitriev'],
      sources: [
        'http://en.kremlin.ru/events/president/news/50255',
        'https://rdif.ru/Eng_photogallery72/'
      ]
    },
    {
      title: 'Kirill Dmitriev praises Flynn, Ross for cabinent picks',
      description: `"Mr Dmitriev praised Michael Flynn, the retired three-star general chosen by Mr Trump to be his national security adviser, for his willingness to have open dialogue with Russia. He also said that the appointment of figures such as Wilbur Ross, an investor who is considered a leading candidate to become commerce secretary, would bode well for Russia." “We like that lots of people that he is considering . . . have obviously been very successful in the past,” he said, pointing to Mr Ross in particular. “People like that would be great for business because business likes to see people who have been successful in business in important positions."`,
      date: '11/21/2016',
      nodes: ['Kirill Dmitriev', 'Wilbur Ross', 'Michael Flynn'],
      sources: ['https://www.ft.com/content/6a2cc100-af3d-11e6-a37c-f4a01f1b0fa1'],
    },
    {
      title: 'Dmitriev, Scaramucci discuss joint investments with Russian Direct Investment Fund',
      description: `The meeting with Kirill Dmitriev, head of the Russian Direct Investment Fund, a $10 billion state-run investment vehicle, is the first public contact between the incoming administration and Kremlin-backed business. Trump has suggested he could ease the sanctions on Russia if the Kremlin cooperates on his policy priorities. Scaramucci confirmed the Davos meeting.`,
      date: '1/17/2017',
      nodes: ['Kirill Dmitriev', 'Anthony Scaramucci'],
      sources: ['https://www.bloomberg.com/politics/articles/2017-01-17/in-davos-trump-aide-talks-deals-with-sanctioned-kremlin-fund']
    },
    {
      title: 'Scaramucci joins Trump transition team',
      description: '"Venture capitalist Peter Thiel and financier Anthony Scaramucci have been named to Donald Trump’s transition team".',
      date: '11/11/2016',
      nodes: ['Donald Trump', 'Anthony Scaramucci'],
      sources: [
        'https://twitter.com/Scaramucci/status/797170635654963200',
        'http://www.marketwatch.com/story/thiel-scaramucci-get-spots-on-trumps-transition-team-2016-11-11',
      ],
    },
    {
      title: 'Scaramucci accepts job to serve as a top adviser to Trump and will work as an intermediary between the administration and the business community.',
      description: `On January 12, 2017, President Donald Trump announced his intent to appoint Scaramucci Director of the White House Office of Public Liaison and Intergovernmental Affairs.`,
      date: '1/12/2017',
      nodes: ['Donald Trump', 'Anthony Scaramucci'],
      sources: [
        'https://en.wikipedia.org/wiki/Anthony_Scaramucci',
        'http://nymag.com/daily/intelligencer/2017/01/hedge-funder-anthony-scaramucci-headed-to-white-house.html'
      ],
    },
    {
      title: 'Scaramucci blocked by Preibus for WH role',
      description: `Scaramucci is said to have been aligned with powerful Trump adviser Steve Bannon, who is jostling for power with Trump's Chief of Staff Reince Priebus. Bannon is said to be pushing for Scarammucci's appointment to be made official this week, while Priebus has pushed for continued vetting of his business ties.`,
      date: '1/31/2017',
      nodes: ['Steve Bannon', 'Anthony Scaramucci', 'Reince Priebus'],
      sources: ['http://www.foxbusiness.com/politics/2017/01/31/story-behind-scaramucci-s-delayed-appointment-amid-trump-white-house-bickering.html'],
    },
    {
      title: 'Politico reports Scaramucci still considered for WH role',
      description: `White House Chief of Staff Reince Priebus is still considering offering financier Anthony Scaramucci a role in the West Wing even though the job he was initially promised has been filled, according to a White House official.`,
      date: '3/7/2017',
      nodes: ['Anthony Scaramucci', 'Reince Priebus'],
      sources: ['http://www.politico.com/story/2017/03/anthony-scaramucci-white-house-role-235804']
    },
    {
      title: 'Kirill Dmitriev praises Trump transition, Wilbur Ross',
      description: `"We very much appreciate the professionalism of the new Trump administration,". Clarifying that he was speaking about the broader cabinet and not merely the President-elect, Dmitriev singled out the incoming Commerce Secretary, Wilbur Ross, as particularly suited for his role.`,
      date: '1/16/2017',
      nodes: ['Wilbur Ross', 'Donald Trump', 'Kirill Dmitriev'],
      sources: ['http://www.cnbc.com/2017/01/16/we-appreciate-the-professionalism-of-the-trump-administration-rdif-ceo.html'],
    },
    {
      title: 'Renova Group becomes second largest shareholder of Bank of Cyprus',
      description: `MOSCOW. Sept 19 (Interfax) - Viktor Vekselberg's Renova Group is the second largest shareholder of the Bank of Cyprus, a statement from the bank shows.`,
      date: '9/19/2014',
      nodes: ['Viktor Vekselberg', 'Bank of Cyprus'],
      sources: ['http://connection.ebscohost.com/c/articles/98393231/renova-becomes-second-largest-shareholder-bank-cyprus-sees-as-undervalued'],
    },
    {
      title: 'RUSAL and SUAL merge',
      description: `The United Company was formed by the merger of RUSAL, SUAL, and the alumina assets of Glencore, completed in March 2007. Vekselberg was running Sual, Deripaska was running Rusal`,
      date: '3/1/2007',
      nodes: ['Viktor Vekselberg', 'Oleg Deripaska'],
      sources: [
        'http://www.mcclatchydc.com/news/politics-government/article121981259.html',
        'https://en.wikipedia.org/wiki/Rusal#From_2010'
      ]
    },
    {
      title: 'Manafort secretly worked for a Deripaska to advance the interests of Putin',
      description: `Manafort proposed in a confidential strategy plan as early as June 2005 that he would influence politics, business dealings and news coverage inside the United States, Europe and the former Soviet republics to benefit the Putin government, even as U.S.-Russia relations under Republican President George W. Bush grew worse.`,
      date: '6/1/2005',
      nodes: ['Oleg Deripaska', 'Paul Manafort'],
      sources: ['http://www.msn.com/en-us/news/politics/manaforts-plan-to-greatly-benefit-the-putin-government/ar-BByA7ci'],
    },
    {
      title: 'Deripaska built olympic facilities for 2014 games in Sochi',
      description: `"While much of the funding for the 2014 Sochi Winter Olympics has come from the Russian taxpayer, billionaire businessman Oleg Deripaska has also invested heavily in the event."`,
      date: '2/1/2014',
      nodes: ['Oleg Deripaska', 'Vladimir Putin'],
      sources: [
        'http://a57.foxnews.com/images.foxnews.com/content/fox-news/sports/2013/05/20/russian-oligarchs-foot-much-bill-for-2014-olympics-in-sochi-as-price-doing/_jcr_content/par/featured-media/media-2.img.jpg/876/493/1422557912832.jpg?ve=1&tl=1',
        'http://abcnews.go.com/International/oleg-deripaska-russian-billionaire-worked-paul-manafort/story?id=46303922'
      ],
    },
    {
      title: 'US embassy cable confirms close relationship of Deripaska and Putin',
      description: `he is a more or less permanent fixture on Putin's trips abroad, and he is widely acknowledged by our contacts to be among the 2-3 oligarchs Putin turns to on a regular basis.`,
      date: '11/30/2006',
      nodes: ['Oleg Deripaska', 'Vladimir Putin'],
      sources: [
        'https://wikileaks.org/plusd/cables/06MOSCOW12713_a.html',
        'http://abcnews.go.com/International/oleg-deripaska-russian-billionaire-worked-paul-manafort/story?id=46303922'
      ]
    },
    {
      title: 'Deripaska files lawsuit against Manafort',
      description: `Deripaska filed a lawsuit against Manafort looking to recover several million dollars from a previous deal.  In the filing, the oligarch's lawyers accused Manafort and his partners of having "simply disappeared."`,
      date: '12/9/2014',
      nodes: ['Oleg Deripaska', 'Paul Manafort'],
      sources: [
        'https://www.documentcloud.org/documents/2814130-Pericles-Winding-Up-Petition.html',
        'http://abcnews.go.com/International/oleg-deripaska-russian-billionaire-worked-paul-manafort/story?id=46303922'
      ]
    },
    {
      title: 'After Trump nomination, Deripaska stops commenting on his lawsuit against Manafort',
      description: `"Early in the 2016 presidential campaign, Deripaska's representatives openly accused Manafort of fraud and pledged to recover the money from him. After Trump earned the nomination, Deripaska's representatives said they would no longer discuss the case."`,
      date: '7/19/2016',
      nodes: ['Oleg Deripaska', 'Paul Manafort'],
      sources: ['http://bigstory.ap.org/article/122ae0b5848345faa88108a03de40c5a/manaforts-plan-greatly-benefit-putin-government']
    },
    {
      title: 'Vekselberg sells his stake in TNK-BP to Rosneft',
      description: `Russian state oil company Rosneft closed its deal to buy TNK-BP from UK-based BP and four tycoons on Thursday, releasing $40 billion cash to the sellers and becoming a bigger oil producer than Exxon Mobil.`,
      date: '3/22/013',
      nodes: ['Viktor Vekselberg', 'Rosneft'],
      sources: ['http://uk.reuters.com/article/uk-rosneft-tnkbp-deal-idUKBRE92K0IX20130322'],
    },
    {
      title: 'Ackermann steps down from Deutsche',
      description: `"It was under Ackermann that Deutsche Bank repeatedly ran afoul of U.S. and European regulators."`,
      date: '6/1/2012',
      nodes: ['Josef Ackermann', 'Deutsche Bank'],
      sources: [
        'http://www.marketwatch.com/story/deutsche-bank-details-duties-of-co-ceos-2012-06-01',
        'http://www.mcclatchydc.com/news/politics-government/article121981259.html'
      ]
    },
    {
      title: 'Deutsche Bank Settles Charges of Misleading Clients',
      description: `"Deutsche Bank agreed to admit wrongdoing and pay $18.5 million penalties to the SEC and NYAG for a total of $37 million." Those problems began while Ackermann was still CEO in 2012.`,
      date: '12/16/2016',
      nodes: ['Josef Ackermann', 'Deutsche Bank'],
      sources: [
        'https://www.sec.gov/news/pressrelease/2016-264.html',
        'http://www.mcclatchydc.com/news/politics-government/article121981259.html'
      ]
    },
    {
      title: 'Deutsche Bank pays $630m to settle Russian mirror trades probe',
      description: `Deutsche Bank has agreed to pay $630m to settle US and UK investigations into alleged mirror trades used to launder $10bn out of Russia.`,
      date: '1/31/2017',
      nodes: ['Deutsche Bank'],
      sources: ['https://www.ft.com/content/5bc8008a-e722-11e6-967b-c88452263daf'],
    },
    {
      title: 'Deutsche Bank pays $7.2 billion to settle a years-long U.S. investigation into its dealings in mortgage-backed securities',
      description: `The deal is far below the Justice Department’s initial request of $14 billion.`,
      date: '12/22/2016',
      nodes: ['Deutsche Bank'],
      sources: ['https://www.bloomberg.com/news/articles/2016-12-23/deutsche-bank-to-settle-u-s-mortgage-probe-for-7-2-billion'],
    },
    {
      title: 'Bloomberg Analysis: Trump owes Deutsche $300 million',
      description: `Today, the president-elect owes about $300 million to the bank, nearly half of his outstanding debt, according to a July analysis by Bloomberg. That figure includes a $170-million loan Trump took out to finish his hotel in Washington. He also has two mortgages against his Trump National Doral Miami resort and a loan against his tower in Chicago. All four debts come due in 2023 and 2024`,
      date: '12/22/2016',
      nodes: ['Donald Trump', 'Deutsche Bank'],
      sources: ['https://www.bloomberg.com/news/articles/2016-12-22/deutsche-bank-s-reworking-a-big-trump-loan-as-inauguration-nears']
    },
    {
      title: 'Deutsche conducts internal review of Trump accounts',
      description: `"The scandal-hit bank that loaned hundreds of millions of dollars to Donald Trump has conducted a close internal examination of the US president’s personal account to gauge whether there are any suspicious connections to Russia, the Guardian has learned." "The Guardian has also learned that the president’s immediate family are Deutsche clients. The bank examined accounts held by Ivanka Trump, the president’s daughter, her husband, Jared Kushner, who serves as a White House adviser, and Kushner’s mother."`,
      date: '2/16/2017',
      nodes: ['Donald Trump', 'Deutsche Bank'],
      sources: ['https://www.theguardian.com/us-news/2017/feb/16/deutsche-bank-examined-trump-account-for-russia-links']
    },
    {
      title: 'Strzhalkovsky joins the Bank of Cyprus board',
      description: `Vladimir Strzhalkovsky, nominated by local company Bolestone Trading Ltd, is thought to be the former CEO of Norilsk Nickel, the world's largest nickel and palladium producer. Strzhalkovsky received a 100 million payoff package when he stepped down from Norilsk Nickel in late 2012. His CV was not included in the list of 46 candidates nominated for board positions.`,
      date: '9/10/2013',
      nodes: ['Vladimir Strzhalkovsky', 'Bank of Cyprus'],
      sources: ['http://www.reuters.com/article/bankofcyprus-idUSL5N0H63FF20130910'],
    },
    {
      title: 'Gref, Ackermann seat on same Russian advisory board',
      description: `Both Herman Gref and Josef Ackermann are listed as advisory board members of the Moswcow international finance centre. Confirming Guardian reporting "Ackermann’s ties to Russia were especially strong, including a warm relationship with Putin and Herman Gref of Sberbank."`,
      date: '10/27/2011',
      nodes: ['Herman Gref', 'Josef Ackermann'],
      sources: [
        'http://mfc-moscow.com/index.php?id=103',
        'https://www.theguardian.com/us-news/2017/mar/23/wilbur-ross-russian-deal-bank-of-cyprus-donald-trump-commerce-secretary'
      ]
    }
  ],
}
