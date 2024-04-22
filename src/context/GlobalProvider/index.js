import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal(!isShowModal);

  return (
    <GlobalContext.Provider value={{ isShowModal, toggleModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
