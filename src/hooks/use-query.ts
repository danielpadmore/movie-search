import { useLocation } from "react-router";

/**
 * Responsible for parsing and returning query parameters from the URL
 */
export default function useQueryParams<T>() {
  return new URLSearchParams(useLocation<T>().search);
}
