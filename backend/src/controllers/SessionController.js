//const User = require('../models/User');

module.exports = {
  async store(request, response) {

    /*const { email } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create(request.body);
    }*/

    console.log(request.body);
    console.log(request.file);

    return response.json({ ok: true });
  }
}