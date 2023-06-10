import { data } from "./data";
import { Action, Data } from "./models";

export const dataReducer = (state: Data, action: Action): Data => {
	switch (action.type) {
		case "setName":
			return { ...state, personalInfo: { ...state.personalInfo, name: action.payload } }
		case "setEmail":
			return { ...state, personalInfo: { ...state.personalInfo, email: action.payload } }
		case "setTelephone":
			return { ...state, personalInfo: { ...state.personalInfo, telephone: action.payload } }
		case "choosePlan":
			return {...state, plans: state.plans.map((plan) => (
				action.payload === plan.id ? {...plan, isSelected: true} : {...plan, isSelected: false}
			))}
		case "selectAddons":
			return {...state, addons: state.addons.map((addon) => (
				action.payload === addon.name ? {...addon, isSelected: !addon.isSelected} : addon
			))}
		default:
			return { ...state }
	}
}