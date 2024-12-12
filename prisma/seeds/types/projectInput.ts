import { IInfoInput } from "./infoInput";

export interface IProjectInput extends IInfoInput {
  user_id: string;
  connection_id: string;
}
