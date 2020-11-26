// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MintingInitialized extends ethereum.Event {
  get params(): MintingInitialized__Params {
    return new MintingInitialized__Params(this);
  }
}

export class MintingInitialized__Params {
  _event: MintingInitialized;

  constructor(event: MintingInitialized) {
    this._event = event;
  }

  get speedController(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get treasury(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NewSchedule extends ethereum.Event {
  get params(): NewSchedule__Params {
    return new NewSchedule__Params(this);
  }
}

export class NewSchedule__Params {
  _event: NewSchedule;

  constructor(event: NewSchedule) {
    this._event = event;
  }

  get newSchedule(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timeStamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SIGHBurned extends ethereum.Event {
  get params(): SIGHBurned__Params {
    return new SIGHBurned__Params(this);
  }
}

export class SIGHBurned__Params {
  _event: SIGHBurned;

  constructor(event: SIGHBurned) {
    this._event = event;
  }

  get burntAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalBurnedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get currentSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SIGHMinted extends ethereum.Event {
  get params(): SIGHMinted__Params {
    return new SIGHMinted__Params(this);
  }
}

export class SIGHMinted__Params {
  _event: SIGHMinted;

  constructor(event: SIGHMinted) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get cycle(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get Schedule(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get inflationRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amountMinted(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get mintSpeed(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get current_supply(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get block_number(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SIGH__getMintSnapshotForCycleResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class SIGH__getLatestMintSnapshotResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Address;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Address,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class SIGH extends ethereum.SmartContract {
  static bind(address: Address): SIGH {
    return new SIGH("SIGH", address);
  }

  CYCLE_BLOCKS(): BigInt {
    let result = super.call("CYCLE_BLOCKS", "CYCLE_BLOCKS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_CYCLE_BLOCKS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("CYCLE_BLOCKS", "CYCLE_BLOCKS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FINAL_CYCLE(): BigInt {
    let result = super.call("FINAL_CYCLE", "FINAL_CYCLE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FINAL_CYCLE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FINAL_CYCLE", "FINAL_CYCLE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initMinting(newSpeedController: Address, _treasury: Address): boolean {
    let result = super.call(
      "initMinting",
      "initMinting(address,address):(bool)",
      [
        ethereum.Value.fromAddress(newSpeedController),
        ethereum.Value.fromAddress(_treasury)
      ]
    );

    return result[0].toBoolean();
  }

  try_initMinting(
    newSpeedController: Address,
    _treasury: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "initMinting",
      "initMinting(address,address):(bool)",
      [
        ethereum.Value.fromAddress(newSpeedController),
        ethereum.Value.fromAddress(_treasury)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintCoins(): boolean {
    let result = super.call("mintCoins", "mintCoins():(bool)", []);

    return result[0].toBoolean();
  }

  try_mintCoins(): ethereum.CallResult<boolean> {
    let result = super.tryCall("mintCoins", "mintCoins():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  burn(amount: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_burn(amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMintingActivated(): boolean {
    let result = super.call(
      "isMintingActivated",
      "isMintingActivated():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isMintingActivated(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isMintingActivated",
      "isMintingActivated():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCurrentSchedule(): BigInt {
    let result = super.call(
      "getCurrentSchedule",
      "getCurrentSchedule():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentSchedule(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentSchedule",
      "getCurrentSchedule():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentCycle(): BigInt {
    let result = super.call(
      "getCurrentCycle",
      "getCurrentCycle():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentCycle(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentCycle",
      "getCurrentCycle():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentInflationRate(): BigInt {
    let result = super.call(
      "getCurrentInflationRate",
      "getCurrentInflationRate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentInflationRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentInflationRate",
      "getCurrentInflationRate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBlocksRemainingToMint(): BigInt {
    let result = super.call(
      "getBlocksRemainingToMint",
      "getBlocksRemainingToMint():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getBlocksRemainingToMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBlocksRemainingToMint",
      "getBlocksRemainingToMint():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMintSnapshotForCycle(
    cycleNumber: BigInt
  ): SIGH__getMintSnapshotForCycleResult {
    let result = super.call(
      "getMintSnapshotForCycle",
      "getMintSnapshotForCycle(uint256):(uint256,uint256,uint256,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(cycleNumber)]
    );

    return new SIGH__getMintSnapshotForCycleResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBigInt()
    );
  }

  try_getMintSnapshotForCycle(
    cycleNumber: BigInt
  ): ethereum.CallResult<SIGH__getMintSnapshotForCycleResult> {
    let result = super.tryCall(
      "getMintSnapshotForCycle",
      "getMintSnapshotForCycle(uint256):(uint256,uint256,uint256,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(cycleNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SIGH__getMintSnapshotForCycleResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBigInt()
      )
    );
  }

  getLatestMintSnapshot(): SIGH__getLatestMintSnapshotResult {
    let result = super.call(
      "getLatestMintSnapshot",
      "getLatestMintSnapshot():(uint256,uint256,uint256,uint256,uint256,uint256,address,uint256)",
      []
    );

    return new SIGH__getLatestMintSnapshotResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toBigInt()
    );
  }

  try_getLatestMintSnapshot(): ethereum.CallResult<
    SIGH__getLatestMintSnapshotResult
  > {
    let result = super.tryCall(
      "getLatestMintSnapshot",
      "getLatestMintSnapshot():(uint256,uint256,uint256,uint256,uint256,uint256,address,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SIGH__getLatestMintSnapshotResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toBigInt()
      )
    );
  }

  getCurrentMintSpeed(): BigInt {
    let result = super.call(
      "getCurrentMintSpeed",
      "getCurrentMintSpeed():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentMintSpeed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentMintSpeed",
      "getCurrentMintSpeed():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalSighBurnt(): BigInt {
    let result = super.call(
      "getTotalSighBurnt",
      "getTotalSighBurnt():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalSighBurnt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalSighBurnt",
      "getTotalSighBurnt():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSpeedController(): Address {
    let result = super.call(
      "getSpeedController",
      "getSpeedController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSpeedController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSpeedController",
      "getSpeedController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTreasury(): Address {
    let result = super.call("getTreasury", "getTreasury():(address)", []);

    return result[0].toAddress();
  }

  try_getTreasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("getTreasury", "getTreasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitMintingCall extends ethereum.Call {
  get inputs(): InitMintingCall__Inputs {
    return new InitMintingCall__Inputs(this);
  }

  get outputs(): InitMintingCall__Outputs {
    return new InitMintingCall__Outputs(this);
  }
}

export class InitMintingCall__Inputs {
  _call: InitMintingCall;

  constructor(call: InitMintingCall) {
    this._call = call;
  }

  get newSpeedController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _treasury(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitMintingCall__Outputs {
  _call: InitMintingCall;

  constructor(call: InitMintingCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintCoinsCall extends ethereum.Call {
  get inputs(): MintCoinsCall__Inputs {
    return new MintCoinsCall__Inputs(this);
  }

  get outputs(): MintCoinsCall__Outputs {
    return new MintCoinsCall__Outputs(this);
  }
}

export class MintCoinsCall__Inputs {
  _call: MintCoinsCall;

  constructor(call: MintCoinsCall) {
    this._call = call;
  }
}

export class MintCoinsCall__Outputs {
  _call: MintCoinsCall;

  constructor(call: MintCoinsCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
