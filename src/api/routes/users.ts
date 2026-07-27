import { Router } from 'express';

import { getUser, getUsers } from '../controllers/users';

export default Router().get('/', getUsers).get('/:id', getUser);
