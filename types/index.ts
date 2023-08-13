import { MouseEventHandler } from "react";

export interface ICustomButton {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ISearchManuFacturer {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

  export interface IFilters {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}
  
  export interface IHomeCarCatalogueFilter {
    searchParams: IFilters;
}

  export interface ICarDetails {
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

  export interface ICarCard {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

  export interface ICustomFilterOptions {
    title: string;
    value: string;
}
  
  export interface ICustomFilter {
    title: string;
    options: ICustomFilterOptions[];
}