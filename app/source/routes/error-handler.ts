import express from 'express';
import HTTPErrorResponse from '../util/http/http-error-response';
import HttpException from '../util/http/http-exception-model';

export function erroHandler(
  err: HttpException,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.error(err.message);
  res
    .status(500)
    .send(new HTTPErrorResponse([{ code: 500, message: err.message || 'Unexpected Error' }]));
}
