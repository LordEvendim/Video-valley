import { BigNumber } from "ethers";
import { toast } from "react-toastify";
import create from "zustand";
import { useContracts } from "./useContracts";

interface useSeasonDataStore {
  currentSeason: number;
  seasonEnding: BigNumber | undefined;
  fetchSeasonEnding: () => Promise<void>;
}

export const useSeasonData = create<useSeasonDataStore>((set) => ({
  currentSeason: 0,
  seasonEnding: undefined,
  fetchSeasonEnding: async () => {
    try {
      const manager = useContracts.getState().manager;

      if (!manager) {
        throw new Error("Failed to initialize manager contract");
      }

      const currentSeason = await manager.currentSeason();
      const result = await manager.seasons(currentSeason);

      console.log(result.endingDate.toString());
      console.log(Date.now());

      set({
        seasonEnding: result.endingDate,
        currentSeason: currentSeason.toNumber(),
      });
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      console.log(error);
    }
  },
}));
