module.exports = {
  meta: {
    title: 'astronomy',
    description: 'observing the stars and connecting the constellations.',
  },
  nodes: [
    {
      title: 'Sherburne Wesley Burnham',
      description: 'He was born at Thetford, Vermont. His parents were Roswell and Marinda (née Foote) Burnham. He graduated from the academy in Thetford, and that was the extent of his schooling.\nHe taught himself shorthand, and by 1858 was in New York City. He was a reporter for the Union Army in New Orleans during the Civil War. In New Orleans, he bought a copy of Geography of the Heavens by Elijah H. Burritt, which piqued his interest in astronomy. After the war, he moved to Chicago and worked as a court reporter for over 20 years. At night he was an amateur astronomer, except for four years (1888-1892) he worked as a full-time astronomer at Lick Observatory. He left court reporting in 1902, but remained in Chicago. From 1897 to 1914 he was an astronomer at Yerkes Observatory.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sherbourne_Wesley_Burnham.jpg/250px-Sherbourne_Wesley_Burnham.jpg',
      category: 'astronomer',
    },
    {
      title: 'Lick Observatory',
      description: 'The Lick Observatory is an astronomical observatory, owned and operated by the University of California. It is situated on the summit of Mount Hamilton, in the Diablo Range just east of San Jose, California, US. The observatory is managed by the University of California Observatories, with headquarters on the University of California, Santa Cruz, campus, where its scientific staff moved in the mid-1960s.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lick_Observatory_Refractor.jpg/240px-Lick_Observatory_Refractor.jpg',
      category: 'observatory',
    },
    {
      title: 'Yerkes Observatory',
      description: 'Yerkes Observatory is an astronomical observatory in Williams Bay, Wisconsin operated by the University of Chicago Department of Astronomy and Astrophysics.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Yerkesobservatoryfromair.jpg/240px-Yerkesobservatoryfromair.jpg',
      category: 'observatory',
    },
    {
      title: 'Ercole Dembowski',
      description: 'Ercole (Hercules) Dembowski (January 12, 1812 – January 19, 1881) was an Italian astronomer.\nHe was born in Milan. He inherited the title of "Baron" as the son of Jan Dembowski (Dębowski), one of Napoleon\'s Polish generals. He served in the navy of Austria-Hungary until 1843 when he retired for health reasons to Naples.',
      category: 'astronomer',
    },
  ],
  connections: [
    {
      nodes: ['Sherburne Wesley Burnham', 'Lick Observatory'],
      description: 'The quality of Burnham\'s work opened the doors of observatories for him and he had access to more powerful instruments. https://en.wikipedia.org/wiki/Sherburne_Wesley_Burnham',
      strong: true,
    },
    {
      nodes: ['Sherburne Wesley Burnham', 'Yerkes Observatory'],
      description: 'The quality of Burnham\'s work opened the doors of observatories for him and he had access to more powerful instruments. https://en.wikipedia.org/wiki/Sherburne_Wesley_Burnham',
      strong: true,
    },
    {
      nodes: ['Sherburne Wesley Burnham', 'Ercole Dembowski'],
      description: 'A European astronomer, Baron Dembowski, helped him by measuring the newly discovered binaries. https://en.wikipedia.org/wiki/Sherburne_Wesley_Burnham',
      strong: true,
    },
  ],
  categories: [
    {
      title: 'astronomer',
      color: '#0074D9',
    },
    {
      title: 'observatory',
      color: '#FF851B',
    }
  ]
}
