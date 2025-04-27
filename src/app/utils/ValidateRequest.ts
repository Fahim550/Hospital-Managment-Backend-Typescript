import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { catchAsync } from "./CatchAsync";

export const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({ body: req.body, cookies: req.cookies });
    return next();
  });
};

// export const validateRequest = (schema: AnyZodObject) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.parseAsync({ body: req.body, cookies: req.cookies });
//       return next();
//     } catch (error) {
//       if (error instanceof ZodError) {
//         const messages = error.errors.map((err) => err.message);
//         return sendResponse(res, {
//           statusCode: httpStatus.BAD_REQUEST,
//           success: false,
//           message: "Bad Rquest",
//           data: messages,
//         });
//       }
//     }
//   };
// };
