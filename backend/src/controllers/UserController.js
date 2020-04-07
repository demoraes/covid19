const User = require('../models/User');

module.exports = {

  async index(request, response) {
    try {
      const users = await User.find();

      return response.json({ users });
    } catch (err) {
      return response.status(400).json({ error: 'Error loading projects' });
    }
  },

  async store(request, response) {
    const { filename } = request.file;
    const { name, email, phone, password } = request.body;

    if (await User.findOne({ email })) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      phone,
      thumbnail: filename,
      password,
    })

    return response.json(user);

  }
}