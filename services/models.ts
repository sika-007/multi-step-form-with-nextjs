import PersonalInfo from "@/pages";
import { Dispatch } from "react";

export interface PersonalInfo {
    name: string;
    email: string;
    telephone: string;
}

export interface InputProps {
	title: string;
	type: string;
	placeholder: string;
    dispatch: Dispatch<Action> | undefined
    value: string | undefined
    action: "setName" | "setEmail" | "setTelephone"
    regex: string
}

export interface Plan {
    title: string;
    billing: {
        monthly: number
        yearly: number
    }
    isSelected: boolean
    id: number;
}

export interface PlanProps extends Plan {
    dispatch: Dispatch<Action> | undefined
}

export interface Addon {
    name: string  // This is the name that will go in as one of the props of atrributes of the input element
    title: string // This is the display name that will show up in the UI
    description: string
    billing: number
    isSelected: boolean
}

export interface AddonProps extends Addon {
    dispatch: Dispatch<Action> | undefined
}

export interface Data {
    personalInfo: PersonalInfo
    plans: Plan[]
    addons: Addon[]
}

export type Action = 
    | {type: "setName", payload: string }
    | {type: "setEmail", payload: string }
    | {type: "setTelephone", payload: string }
    | {type: "choosePlan", payload: number }
    | {type: "selectAddons", payload: string }
    | {type: "reset"}