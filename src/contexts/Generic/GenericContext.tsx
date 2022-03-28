import { createContext, useContext } from "react";

type GenericContextData = {};

export const GenericContext = createContext({} as GenericContextData);

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
