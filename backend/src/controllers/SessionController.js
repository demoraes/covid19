const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  async index(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return response.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return response.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    response.json({ user });
  },
}