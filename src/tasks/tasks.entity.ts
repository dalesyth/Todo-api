import { Entity } from 'typeorm';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';


@Entity()  // invoke Entity decorator
export class Task {}