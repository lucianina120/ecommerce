import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

import InputCount from "../InputCount/InputCount";

const Exchance = ({ product }) => {
    const [count, setCount] = useState(true);

    function countModified() {
        setCount(false);
    }

    return (
        <>
            {count === true ? (
                <ItemCount product={product} countModified={countModified} />
            ) : (
                <InputCount />
            )}
        </>
    );
};

export default Exchance;
