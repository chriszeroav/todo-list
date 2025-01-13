export type TaskStatus = "To do" | "In progress" | "On approval" | "Done";

export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
  created_at: string;
}
