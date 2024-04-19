import AlertContext from "@/components/core/AlertProvider";
import { useContext } from "react";

export const useAlert = () => useContext(AlertContext);
