import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable
} from "kysely";

export interface Database {
  todo: TodoTable;
}

export interface TodoTable {
  id: Generated<number>;
  owner_id: number;

  title: string;
  description: string | null;
  status: TodoStatus;

  created_at: ColumnType<Date, string | undefined, never>;
}

export type TodoStatus = "todo" | "done";

export type Todo = Selectable<TodoTable>;
export type NewTodo = Insertable<TodoTable>;
export type TodoUpdate = Updateable<TodoTable>;
