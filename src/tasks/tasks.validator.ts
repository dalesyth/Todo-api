import { body } from "express-validator";
import { Priority } from "../enums/Priority";

export const createValidator = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("The task title is mandatory")
    .trim()
    .isString()
    .withMessage("Title needs to be in text format"),

  body('date').not().isEmpty().withMessage('The task date is mandatory').isString().withMessage('The date needs to be a valid date format'),

  body('description').trim().isString().withMessage('Description needs to be in text format'),

  body('priority').trim().isIn([Priority.normal, Priority.high, Priority.low])
];
