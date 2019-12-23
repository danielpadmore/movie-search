import { useEffect, useState } from "react";

/**
 * Hook to debounce a value
 * @param value value to be debounced
 * @param delay delay in ms between permitted updates to the value
 */
function useDebounce<T extends {}>(value: T, delay: number) {
  // Retain state of the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let handler: NodeJS.Timeout | null = null;
    if (value !== null) {
      handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    // Clear timeout on cleanup (unmounting, updating value, etc)
    return () => {
      if (handler) {
        clearTimeout(handler);
      }
    };
    // Synchronise side effect with changes to the value or delay
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
