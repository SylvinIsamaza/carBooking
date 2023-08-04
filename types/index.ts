import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS, MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps{
  title:string,
  value:string
}
export interface CustomFilterProps{
  title:string,
  option:OptionProps[]
}
export interface ShowMoreProps{
  pageNumber:number
  isNext:boolean
}