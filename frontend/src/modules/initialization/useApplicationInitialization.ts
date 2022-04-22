import { ethers } from "ethers";
import { AsyncActionState } from "../../types/states/asyncActionState";
import { useContracts } from "../../stores/useContracts";

import { useCallback, useEffect, useState } from "react";
import { useProvider } from "../../stores/useProvider";
import { ValleyManager } from "../../contracts/typechain/ValleyManager";
import ValleyManagerContract from "../../contracts/ValleyManager.json";
import { VALLEY_MANAGER } from "../../constants/contracts";

export const useApplicationInitialization = () => {
  const [initializationStatus, setInitializationStatus] =
    useState<AsyncActionState>({ status: undefined });
  const provider = useProvider((state) => state.provider);

  const initializeApplication = useCallback(async () => {
    console.log("calling");
    try {
      setInitializationStatus({ status: "loading" });
      console.log("Setting factory contract");
      if (!provider) throw new Error("Provider is unexpectedly undefined");

      // Application initalization goes here
      const managerContract = new ethers.Contract(
        VALLEY_MANAGER,
        ValleyManagerContract.abi,
        provider.getSigner()
      ) as ValleyManager;
      useContracts.setState({ manager: managerContract });

      setInitializationStatus({ status: "succeeded" });
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
        return setInitializationStatus({ status: "failed", error });
      }

      setInitializationStatus({
        status: "failed",
        error: new Error("Failed to initialize application"),
      });
    }
  }, [provider]);

  useEffect(() => {
    if (provider && initializationStatus.status === undefined) {
      console.log("calling");
      initializeApplication();
    }
  }, [provider, initializationStatus, initializeApplication]);

  return initializationStatus;
};
