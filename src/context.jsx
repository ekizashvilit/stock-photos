import { useContext, useState } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  };

  // API KEY -  B_G1ZmyL1gpRNAGR4zXluVxDXli8QorJh20YqDaFcUE

  // const accessKey = 'B_G1ZmyL1gpRNAGR4zXluVxDXli8QorJh20YqDaFcUE';
  // const searchTerm = 'cat';

  // axios
  //   .get(
  //     `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
