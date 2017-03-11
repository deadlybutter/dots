const db = require('../db');

const id = ['_id'];
const nodeFields = ['title', 'description', 'sources', 'x', 'y', 'color', 'photo'];
const connectionFields = ['nodes', 'strong', 'description', 'sources', 'dates'];

module.exports = {
  versions: {
    'v1': {
      entities: [
        {
          id: 'node',
          getBy: id,
          createFields: ['title', 'x', 'y', 'color'],
          edit: {
            by: id,
            fields: nodeFields,
          },
          deleteBy: id,
          model: db.Node,
        },
        {
          id: 'connection',
          getBy: id,
          createFields: ['nodes', 'strong'],
          edit: {
            by: id,
            fields: connectionFields,
          },
          deleteBy: id,
          model: db.Connection,
          populate: {
            path: 'nodes',
            model: 'Node'
          },
        }
      ]
    }
  },
  security: {
    key: process.env.API_KEY || '12345',
  },
}
