import { createContext, useContext, useRef } from "react";

const refsContext = createContext();

export const useRefs = () => {
  const context = useContext(refsContext);
  if (!context) throw new Error("There is no refsContext provider");
  return context;
};

export const RefsContextProvider = ({ children }) => {
  const refHome = useRef(null);
  const refAboutMe = useRef(null);
  const refTechnologies = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);
  const refExperience = useRef(null);
  const refs = {
    refAboutMe,
    refProjects,
    refContact,
    refHome,
    refTechnologies,
    refExperience,
  };

  return (
    <refsContext.Provider
      value={{
        refs,
        refHome,
        refAboutMe,
        refTechnologies,
        refProjects,
        refContact,
        refExperience,
      }}
    >
      {children}
    </refsContext.Provider>
  );
};
