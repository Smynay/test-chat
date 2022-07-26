import { ServiceContext } from "./contexts";
import { APP_SERVICES } from "../../../services";
import React, { FC, PropsWithChildren } from "react";

export const ServiceProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ServiceContext.Provider value={APP_SERVICES}>
      {children}
    </ServiceContext.Provider>
  );
};
