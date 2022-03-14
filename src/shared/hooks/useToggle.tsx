/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState, useCallback } from "react"

const useToggle = (initialState = false): [boolean, any] => {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);

    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    // const toggle = useCallback((): void => setState(value => !value), []);
    
      const toggle = useCallback(function toggleValue(value) {
        setState(currentValue =>
          typeof value === "boolean" ? value : !currentValue
        )
      }, []);

    return [state, toggle]
}

export default useToggle