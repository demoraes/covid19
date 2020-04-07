const ToHelp = require('../models/ToHelp');

module.exports = {

  async index(request, response) {
    try {
      const helps = await ToHelp.find().populate(['help', 'user']);

      return response.json({ helps });
    } catch (err) {
      return response.status(400).json({ error: 'Error loading projects' });
    }
  },

  async store(request, response) {

    const { presentation } = request.body;
    const { user_id } = request.headers;
    const { toHelp_id } = request.params;

    const help = await ToHelp.create({
      presentation,
      user: user_id,
      help: toHelp_id
    });

    await help.populate('help').populate('user').execPopulate();

    return response.json(help);

  }
}