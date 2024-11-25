import { AnyObjectSchema, ValidationError } from "yup";
import { Request, Response, NextFunction } from "express";

const validateInvoice =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: true, strict: true });

      next();
    } catch (e) {
      const error = e as ValidationError;
      res.status(400).send(error.message);
    }
  };

export default validateInvoice;
  