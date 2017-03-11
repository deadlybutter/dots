module.exports = {
  meta: {
    title: 'Test project',
    subtitle: 'Testing if Dots works as intended',
  },
  categories: [
    {
      title: 'Animal',
      background: '#0074D9',
    },
    {
      title: 'Human',
      background: '#FF851B',
    },
    {
      title: 'Annoying',
      background: '#F012BE',
    }
  ],
  nodes: [
    {
      title: 'Cat',
      description: 'The only cat.',
      categories: ['Animal', 'Annoying'],
    },
    {
      title: 'Dog',
      description: 'The dog',
      categories: ['Animal'],
    },
    {
      title: 'Santa',
      description: 'The one who lives in the north',
      categories: ['Human'],
    }
  ],
  dots: [
    {
      title: 'Cat attack',
      description: 'The cat attacked the dog.',
      sources: ['https://www.google.com', 'https://www.yahoo.com'],
      date: '12/24/2016',
      nodes: ['Cat', 'Dog']
    },
    {
      title: 'Christmas',
      description: 'Santa delivered the cat & dog presents.',
      sources: ['https://www.google.com'],
      date: '12/25/2016',
      nodes: ['Cat', 'Dog', 'Santa'],
    },
  ],
}
