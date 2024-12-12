import type { IInfoInput } from "./infoInput";

export interface IActivityInput extends IInfoInput {
  max_consumption: number;
  min_consumption: number;
}
