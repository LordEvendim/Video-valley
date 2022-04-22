import create from "zustand";
import { ValleyManager } from "../contracts/typechain/ValleyManager";

interface ContractStore {
  manager: ValleyManager | undefined;
  setManager: (contract: ValleyManager) => void;
}

export const useContracts = create<ContractStore>((set) => ({
  manager: undefined,
  setManager: (contract: ValleyManager) => set(() => ({ manager: contract })),
}));
