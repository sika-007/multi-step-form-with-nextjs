import { Dispatch, createContext, useReducer } from "react";
import { dataReducer } from "./reducer";
import { data } from "./data";
import { Action, Data } from "./models";

interface ContextProps {
	children: React.ReactNode
}

interface ContextObjects {
	state: Data;
	dispatch: Dispatch<Action>
}

export const UserDataContext = createContext({})


const ContextProvider = ({ children }: ContextProps): JSX.Element => {

	const [state, dispatch] = useReducer(dataReducer, {...data})

	const contextObjects: ContextObjects = {
		state,
		dispatch
	}

	return (
		<UserDataContext.Provider value={contextObjects}>
			{children}
		</UserDataContext.Provider>
	)
}

export default ContextProvider
