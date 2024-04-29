import { useState } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

function GlobalProvider ({children}){
    const [filterCategories, setFilterCategories] = useState([]);

    const value = {filterCategories, setFilterCategories};

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;