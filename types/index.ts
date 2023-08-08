import { MouseEventHandler } from "react";

export interface ICustomButton {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>
}