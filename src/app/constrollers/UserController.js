import User from '../models/User';

class UserController {
  constructor() {
    this.store = async (req, res) => {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }

      const { id, name, email, provider } = await User.create(req.body);

      return res.json({ id, name, email, provider });
    };

    this.update = async (req, res) => {
      return res.json({ ok: true });
    };
  }
}

export default new UserController();
