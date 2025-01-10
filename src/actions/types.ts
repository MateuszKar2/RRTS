import { FetchTodosAcion, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos,
     deleteTodo
}

export type Action = FetchTodosAcion | DeleteTodoAction;