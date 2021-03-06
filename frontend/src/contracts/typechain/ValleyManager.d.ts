/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ValleyManagerInterface extends ethers.utils.Interface {
  functions: {
    "addVideo(string,string,string,string)": FunctionFragment;
    "balances(address)": FunctionFragment;
    "currentSeason()": FunctionFragment;
    "getAllVideos(uint256)": FunctionFragment;
    "idsToSubmissions(uint256,string)": FunctionFragment;
    "isAlreadySubmitted(uint256,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "pushSeason()": FunctionFragment;
    "seasonLength()": FunctionFragment;
    "seasons(uint256)": FunctionFragment;
    "submissionFee()": FunctionFragment;
    "submittedVideosIds(uint256,uint256)": FunctionFragment;
    "totalUserLockedBalanceInSeason(uint256,address)": FunctionFragment;
    "vote(string)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addVideo",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "currentSeason",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllVideos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "idsToSubmissions",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAlreadySubmitted",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pushSeason",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seasonLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seasons",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submissionFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submittedVideosIds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalUserLockedBalanceInSeason",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "vote", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addVideo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllVideos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idsToSubmissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAlreadySubmitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushSeason", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "seasonLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seasons", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submissionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submittedVideosIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUserLockedBalanceInSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class ValleyManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ValleyManagerInterface;

  functions: {
    addVideo(
      _title: string,
      _description: string,
      _id: string,
      _url: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    currentSeason(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllVideos(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, string, string, string, string, BigNumber] & {
          submitter: string;
          title: string;
          description: string;
          id: string;
          url: string;
          votes: BigNumber;
        })[]
      ]
    >;

    idsToSubmissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, BigNumber] & {
        submitter: string;
        title: string;
        description: string;
        id: string;
        url: string;
        votes: BigNumber;
      }
    >;

    isAlreadySubmitted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pushSeason(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seasonLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    seasons(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalValue: BigNumber;
        endingDate: BigNumber;
        collectedFees: BigNumber;
      }
    >;

    submissionFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    submittedVideosIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalUserLockedBalanceInSeason(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vote(
      _id: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      season: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addVideo(
    _title: string,
    _description: string,
    _id: string,
    _url: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

  getAllVideos(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([string, string, string, string, string, BigNumber] & {
      submitter: string;
      title: string;
      description: string;
      id: string;
      url: string;
      votes: BigNumber;
    })[]
  >;

  idsToSubmissions(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, BigNumber] & {
      submitter: string;
      title: string;
      description: string;
      id: string;
      url: string;
      votes: BigNumber;
    }
  >;

  isAlreadySubmitted(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pushSeason(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seasonLength(overrides?: CallOverrides): Promise<BigNumber>;

  seasons(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalValue: BigNumber;
      endingDate: BigNumber;
      collectedFees: BigNumber;
    }
  >;

  submissionFee(overrides?: CallOverrides): Promise<BigNumber>;

  submittedVideosIds(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  totalUserLockedBalanceInSeason(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vote(
    _id: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    season: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addVideo(
      _title: string,
      _description: string,
      _id: string,
      _url: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

    getAllVideos(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([string, string, string, string, string, BigNumber] & {
        submitter: string;
        title: string;
        description: string;
        id: string;
        url: string;
        votes: BigNumber;
      })[]
    >;

    idsToSubmissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, BigNumber] & {
        submitter: string;
        title: string;
        description: string;
        id: string;
        url: string;
        votes: BigNumber;
      }
    >;

    isAlreadySubmitted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pushSeason(overrides?: CallOverrides): Promise<void>;

    seasonLength(overrides?: CallOverrides): Promise<BigNumber>;

    seasons(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalValue: BigNumber;
        endingDate: BigNumber;
        collectedFees: BigNumber;
      }
    >;

    submissionFee(overrides?: CallOverrides): Promise<BigNumber>;

    submittedVideosIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    totalUserLockedBalanceInSeason(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(_id: string, overrides?: CallOverrides): Promise<void>;

    withdraw(season: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addVideo(
      _title: string,
      _description: string,
      _id: string,
      _url: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

    getAllVideos(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idsToSubmissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAlreadySubmitted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pushSeason(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seasonLength(overrides?: CallOverrides): Promise<BigNumber>;

    seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    submissionFee(overrides?: CallOverrides): Promise<BigNumber>;

    submittedVideosIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalUserLockedBalanceInSeason(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      _id: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      season: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVideo(
      _title: string,
      _description: string,
      _id: string,
      _url: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllVideos(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idsToSubmissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAlreadySubmitted(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pushSeason(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seasonLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seasons(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submissionFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submittedVideosIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalUserLockedBalanceInSeason(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      _id: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      season: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
