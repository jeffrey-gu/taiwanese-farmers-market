import { Dish } from "./Dish";
import { Ability } from "./Ability";

export interface Chef {
  id: number,
  name: string,
  chineseName: string,
  isBasic: boolean,
  dishOne: Dish,
  dishTwo?: Dish,
  ability: Ability,
  wage: number
}
