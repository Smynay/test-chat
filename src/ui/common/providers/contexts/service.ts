import { createContext } from "react";
import { AppServices } from "../../../../services";

export const ServiceContext = createContext<AppServices | null>(null);
