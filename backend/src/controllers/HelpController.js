const Help = require('../models/Help');

module.exports = {

  async index(request, response) {
    try {
      const helps = await Help.find().populate(['user']);

      return response.json({ helps });
    } catch (err) {
      return response.status(400).json({ error: 'Error loading projects' });
    }
  },

  async store(request, response) {
    const { filename } = request.file;
    const { title, city, description, contribution } = request.body;
    const { user_id } = request.headers;


    const help = await Help.create({
      user: user_id,
      title,
      city,
      description,
      contribution,
      thumbnail: filename,
    })

    return response.json(help);

  }
}