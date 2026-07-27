import type { Request, Response } from 'express';

export const getUsers = (_req: Request, res: Response) => {
  res.status(200).send({
    status: 200,
    message: 'Users have been retrieved with success!',
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const userId: number = Number(id);

  if (typeof userId !== 'number') {
    res.status(400).send({
      status: 400,
      message: 'User not found!',
    });
    return;
  }

  res.status(200).send({
    status: 200,
    message: 'User have been retrieved with success!',
  });
};
