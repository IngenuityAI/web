import { ApplicationConfig, IApplicationConfig } from "@/config";
import { create } from "zustand";

export interface IConfigState {
  configuration: IApplicationConfig;
  setConfiguration: (configuration: IApplicationConfig) => void;
}

export const useConfigState = create<IConfigState>((set) => ({
  configuration: {} as IApplicationConfig,

  setConfiguration: (configuration: IApplicationConfig) =>
    set({ configuration }),
}));
