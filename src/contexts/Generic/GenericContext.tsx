import { createContext, useContext } from "react";

const GenericContext = createContext({} as GenericContextData);

type GenericContextData = {};

type GenericContextProviderProps = {
  children: JSX.Element;
};

export function GenericContextProvider({
  children,
}: GenericContextProviderProps): JSX.Element {
  return (
    <GenericContext.Provider value={{}}>{children}</GenericContext.Provider>
  );
}

export const useGeneric = () => {
  return useContext(GenericContext);
};
