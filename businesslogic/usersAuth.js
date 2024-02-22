import bcrypt from 'bcrypt';

const users = [];

function signupUser(req, res) {
  {
    /*const { error } = signupSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  */
    const { username, email, password } = req.body;

    // Перевірка унікальності імені користувача
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Хешування пароля перед збереженням
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Збереження користувача
    users.push({ username, email, password: hashedPassword });

    return res.status(201).json({ message: 'Registration successful' });
  }
}


function signinUser(req, res) {
  /*const { error } = signinSchema.validate(req.body);
 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }*/

  const { username, password } = req.body;

  // Пошук користувача в базі даних
  const user = users.find(user => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  return res.status(200).json({ message: 'Authentication successful' });
}

function validateUser(req, res) {
  /*const { error } = recordCreateSchema.validate(req.body);
 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }*/

  return res.status(200).json({ message: 'Object validation successful' });
}

export { signinUser, signupUser, validateUser }