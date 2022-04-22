import { BigNumber } from "ethers";
import create from "zustand";
import { useContracts } from "./useContracts";
import { useSeasonData } from "./useSeasonData";

interface useVideosStore {
  videos: VideoDetails[] | undefined;
  fetchVideos: (season: number) => Promise<void>;
}

export interface VideoDetails {
  submitter: string;
  title: string;
  description: string;
  id: string;
  url: string;
  votes: BigNumber;
}

export const useVideos = create<useVideosStore>((set) => ({
  videos: undefined,
  fetchVideos: async (season: number) => {
    try {
      const manager = useContracts.getState().manager;

      if (!manager) {
        throw new Error("Failed to initialize manager contract");
      }

      const result = await manager.getAllVideos(BigNumber.from(season));

      console.log(result);

      const resultTransformed = result.map((element) => ({
        submitter: element.submitter,
        title: element.title,
        description: element.description,
        id: element.id,
        url: element.url,
        votes: element.votes,
      }));

      set({ videos: resultTransformed });
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      }

      console.log(error);
    }
  },
}));
