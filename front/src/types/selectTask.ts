import { Task } from './task';

export type selectTask = {
  id: number;
  tasks: Array<Task>;
  onOpen: () => void;
};
