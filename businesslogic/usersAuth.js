import bcrypt from 'bcrypt';

const users = [];

function signupUser(req, res) {
  {

    const { username, email, password } = req.body;

    if (users.some(user => user.username === username)) {
      const error = new Error('Username is already taken');
      return next(error);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    users.push({ username, email, password: hashedPassword });

    return res.status(201).json({ message: 'Registration successful' });
  }
}


function signinUser(req, res) {


  const { username, password } = req.body;

  const user = users.find(user => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    const error = new Error('Invalid username or password');
    return next(error);
  } else {
  }
  return res.status(200).json({ message: 'Authentication successful' });
}

function validateUser(req, res) {


  return res.status(200).json({ message: 'Object validation successful' });
}

export { signinUser, signupUser, validateUser }