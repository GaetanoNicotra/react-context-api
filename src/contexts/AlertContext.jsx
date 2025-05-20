import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
const AlertContext = createContext();

// creo il provider per un alert
const AlertProvider = ({ children }) => {
    const initialData = { type: "", message: "" }
    const [alertData, setAlertData] = useState(initialData);

    // restituisco il provider
    return (<AlertContext.Provider value={{ alertData, setAlertData }}>
        {children}
    </AlertContext.Provider>
    );
}

// funzione che consuma il contesto
const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
}

export { AlertProvider, useAlertContext };