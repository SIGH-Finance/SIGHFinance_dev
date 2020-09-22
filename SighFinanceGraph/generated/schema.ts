// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NewSIGHMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewSIGHMinted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewSIGHMinted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewSIGHMinted", id.toString(), this);
  }

  static load(id: string): NewSIGHMinted | null {
    return store.get("NewSIGHMinted", id) as NewSIGHMinted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentCycle(): BigInt {
    let value = this.get("currentCycle");
    return value.toBigInt();
  }

  set currentCycle(value: BigInt) {
    this.set("currentCycle", Value.fromBigInt(value));
  }

  get currentEra(): BigInt {
    let value = this.get("currentEra");
    return value.toBigInt();
  }

  set currentEra(value: BigInt) {
    this.set("currentEra", Value.fromBigInt(value));
  }

  get minter(): Bytes {
    let value = this.get("minter");
    return value.toBytes();
  }

  set minter(value: Bytes) {
    this.set("minter", Value.fromBytes(value));
  }

  get newCoinsMinted(): BigInt {
    let value = this.get("newCoinsMinted");
    return value.toBigInt();
  }

  set newCoinsMinted(value: BigInt) {
    this.set("newCoinsMinted", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class SIGHReservoirChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save SIGHReservoirChanged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SIGHReservoirChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SIGHReservoirChanged", id.toString(), this);
  }

  static load(id: string): SIGHReservoirChanged | null {
    return store.get("SIGHReservoirChanged", id) as SIGHReservoirChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get PreviousReservoir(): Bytes {
    let value = this.get("PreviousReservoir");
    return value.toBytes();
  }

  set PreviousReservoir(value: Bytes) {
    this.set("PreviousReservoir", Value.fromBytes(value));
  }

  get NewReservoir(): Bytes {
    let value = this.get("NewReservoir");
    return value.toBytes();
  }

  set NewReservoir(value: Bytes) {
    this.set("NewReservoir", Value.fromBytes(value));
  }
}

export class Sightroller extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sightroller entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sightroller entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sightroller", id.toString(), this);
  }

  static load(id: string): Sightroller | null {
    return store.get("Sightroller", id) as Sightroller | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get priceOracle(): Bytes | null {
    let value = this.get("priceOracle");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set priceOracle(value: Bytes | null) {
    if (value === null) {
      this.unset("priceOracle");
    } else {
      this.set("priceOracle", Value.fromBytes(value as Bytes));
    }
  }

  get closeFactor(): BigInt | null {
    let value = this.get("closeFactor");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set closeFactor(value: BigInt | null) {
    if (value === null) {
      this.unset("closeFactor");
    } else {
      this.set("closeFactor", Value.fromBigInt(value as BigInt));
    }
  }

  get liquidationIncentive(): BigInt | null {
    let value = this.get("liquidationIncentive");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set liquidationIncentive(value: BigInt | null) {
    if (value === null) {
      this.unset("liquidationIncentive");
    } else {
      this.set("liquidationIncentive", Value.fromBigInt(value as BigInt));
    }
  }

  get maxAssets(): BigInt | null {
    let value = this.get("maxAssets");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxAssets(value: BigInt | null) {
    if (value === null) {
      this.unset("maxAssets");
    } else {
      this.set("maxAssets", Value.fromBigInt(value as BigInt));
    }
  }

  get pauseGuardian(): Bytes | null {
    let value = this.get("pauseGuardian");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set pauseGuardian(value: Bytes | null) {
    if (value === null) {
      this.unset("pauseGuardian");
    } else {
      this.set("pauseGuardian", Value.fromBytes(value as Bytes));
    }
  }

  get gsighRate(): BigInt | null {
    let value = this.get("gsighRate");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set gsighRate(value: BigInt | null) {
    if (value === null) {
      this.unset("gsighRate");
    } else {
      this.set("gsighRate", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Market extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Market entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Market entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Market", id.toString(), this);
  }

  static load(id: string): Market | null {
    return store.get("Market", id) as Market | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get cash(): BigDecimal {
    let value = this.get("cash");
    return value.toBigDecimal();
  }

  set cash(value: BigDecimal) {
    this.set("cash", Value.fromBigDecimal(value));
  }

  get exchangeRate(): BigDecimal {
    let value = this.get("exchangeRate");
    return value.toBigDecimal();
  }

  set exchangeRate(value: BigDecimal) {
    this.set("exchangeRate", Value.fromBigDecimal(value));
  }

  get underlyingAddress(): Bytes {
    let value = this.get("underlyingAddress");
    return value.toBytes();
  }

  set underlyingAddress(value: Bytes) {
    this.set("underlyingAddress", Value.fromBytes(value));
  }

  get underlyingName(): string {
    let value = this.get("underlyingName");
    return value.toString();
  }

  set underlyingName(value: string) {
    this.set("underlyingName", Value.fromString(value));
  }

  get underlyingPrice(): BigDecimal {
    let value = this.get("underlyingPrice");
    return value.toBigDecimal();
  }

  set underlyingPrice(value: BigDecimal) {
    this.set("underlyingPrice", Value.fromBigDecimal(value));
  }

  get underlyingSymbol(): string {
    let value = this.get("underlyingSymbol");
    return value.toString();
  }

  set underlyingSymbol(value: string) {
    this.set("underlyingSymbol", Value.fromString(value));
  }

  get underlyingPriceUSD(): BigDecimal {
    let value = this.get("underlyingPriceUSD");
    return value.toBigDecimal();
  }

  set underlyingPriceUSD(value: BigDecimal) {
    this.set("underlyingPriceUSD", Value.fromBigDecimal(value));
  }

  get underlyingDecimals(): i32 {
    let value = this.get("underlyingDecimals");
    return value.toI32();
  }

  set underlyingDecimals(value: i32) {
    this.set("underlyingDecimals", Value.fromI32(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get totalBorrows(): BigDecimal {
    let value = this.get("totalBorrows");
    return value.toBigDecimal();
  }

  set totalBorrows(value: BigDecimal) {
    this.set("totalBorrows", Value.fromBigDecimal(value));
  }

  get reserves(): BigDecimal {
    let value = this.get("reserves");
    return value.toBigDecimal();
  }

  set reserves(value: BigDecimal) {
    this.set("reserves", Value.fromBigDecimal(value));
  }

  get borrowRate(): BigDecimal {
    let value = this.get("borrowRate");
    return value.toBigDecimal();
  }

  set borrowRate(value: BigDecimal) {
    this.set("borrowRate", Value.fromBigDecimal(value));
  }

  get supplyRate(): BigDecimal {
    let value = this.get("supplyRate");
    return value.toBigDecimal();
  }

  set supplyRate(value: BigDecimal) {
    this.set("supplyRate", Value.fromBigDecimal(value));
  }

  get collateralFactor(): BigDecimal {
    let value = this.get("collateralFactor");
    return value.toBigDecimal();
  }

  set collateralFactor(value: BigDecimal) {
    this.set("collateralFactor", Value.fromBigDecimal(value));
  }

  get numberOfBorrowers(): i32 {
    let value = this.get("numberOfBorrowers");
    return value.toI32();
  }

  set numberOfBorrowers(value: i32) {
    this.set("numberOfBorrowers", Value.fromI32(value));
  }

  get numberOfSuppliers(): i32 {
    let value = this.get("numberOfSuppliers");
    return value.toI32();
  }

  set numberOfSuppliers(value: i32) {
    this.set("numberOfSuppliers", Value.fromI32(value));
  }

  get interestRateModelAddress(): Bytes {
    let value = this.get("interestRateModelAddress");
    return value.toBytes();
  }

  set interestRateModelAddress(value: Bytes) {
    this.set("interestRateModelAddress", Value.fromBytes(value));
  }

  get accrualBlockNumber(): i32 {
    let value = this.get("accrualBlockNumber");
    return value.toI32();
  }

  set accrualBlockNumber(value: i32) {
    this.set("accrualBlockNumber", Value.fromI32(value));
  }

  get blockTimestamp(): i32 {
    let value = this.get("blockTimestamp");
    return value.toI32();
  }

  set blockTimestamp(value: i32) {
    this.set("blockTimestamp", Value.fromI32(value));
  }

  get borrowIndex(): BigDecimal {
    let value = this.get("borrowIndex");
    return value.toBigDecimal();
  }

  set borrowIndex(value: BigDecimal) {
    this.set("borrowIndex", Value.fromBigDecimal(value));
  }

  get reserveFactor(): BigInt {
    let value = this.get("reserveFactor");
    return value.toBigInt();
  }

  set reserveFactor(value: BigInt) {
    this.set("reserveFactor", Value.fromBigInt(value));
  }

  get gsighSpeed(): BigInt {
    let value = this.get("gsighSpeed");
    return value.toBigInt();
  }

  set gsighSpeed(value: BigInt) {
    this.set("gsighSpeed", Value.fromBigInt(value));
  }

  get totalGsighDistributedToSuppliers(): BigInt {
    let value = this.get("totalGsighDistributedToSuppliers");
    return value.toBigInt();
  }

  set totalGsighDistributedToSuppliers(value: BigInt) {
    this.set("totalGsighDistributedToSuppliers", Value.fromBigInt(value));
  }

  get totalGsighDistributedToBorrowers(): BigInt {
    let value = this.get("totalGsighDistributedToBorrowers");
    return value.toBigInt();
  }

  set totalGsighDistributedToBorrowers(value: BigInt) {
    this.set("totalGsighDistributedToBorrowers", Value.fromBigInt(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get countLiquidated(): i32 {
    let value = this.get("countLiquidated");
    return value.toI32();
  }

  set countLiquidated(value: i32) {
    this.set("countLiquidated", Value.fromI32(value));
  }

  get countLiquidator(): i32 {
    let value = this.get("countLiquidator");
    return value.toI32();
  }

  set countLiquidator(value: i32) {
    this.set("countLiquidator", Value.fromI32(value));
  }

  get hasBorrowed(): boolean {
    let value = this.get("hasBorrowed");
    return value.toBoolean();
  }

  set hasBorrowed(value: boolean) {
    this.set("hasBorrowed", Value.fromBoolean(value));
  }
}

export class AccountCToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AccountCToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AccountCToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AccountCToken", id.toString(), this);
  }

  static load(id: string): AccountCToken | null {
    return store.get("AccountCToken", id) as AccountCToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get market(): string {
    let value = this.get("market");
    return value.toString();
  }

  set market(value: string) {
    this.set("market", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get transactionHashes(): Array<Bytes> {
    let value = this.get("transactionHashes");
    return value.toBytesArray();
  }

  set transactionHashes(value: Array<Bytes>) {
    this.set("transactionHashes", Value.fromBytesArray(value));
  }

  get transactionTimes(): Array<i32> {
    let value = this.get("transactionTimes");
    return value.toI32Array();
  }

  set transactionTimes(value: Array<i32>) {
    this.set("transactionTimes", Value.fromI32Array(value));
  }

  get accrualBlockNumber(): i32 {
    let value = this.get("accrualBlockNumber");
    return value.toI32();
  }

  set accrualBlockNumber(value: i32) {
    this.set("accrualBlockNumber", Value.fromI32(value));
  }

  get enteredMarket(): boolean {
    let value = this.get("enteredMarket");
    return value.toBoolean();
  }

  set enteredMarket(value: boolean) {
    this.set("enteredMarket", Value.fromBoolean(value));
  }

  get cTokenBalance(): BigDecimal {
    let value = this.get("cTokenBalance");
    return value.toBigDecimal();
  }

  set cTokenBalance(value: BigDecimal) {
    this.set("cTokenBalance", Value.fromBigDecimal(value));
  }

  get totalUnderlyingSupplied(): BigDecimal {
    let value = this.get("totalUnderlyingSupplied");
    return value.toBigDecimal();
  }

  set totalUnderlyingSupplied(value: BigDecimal) {
    this.set("totalUnderlyingSupplied", Value.fromBigDecimal(value));
  }

  get totalUnderlyingRedeemed(): BigDecimal {
    let value = this.get("totalUnderlyingRedeemed");
    return value.toBigDecimal();
  }

  set totalUnderlyingRedeemed(value: BigDecimal) {
    this.set("totalUnderlyingRedeemed", Value.fromBigDecimal(value));
  }

  get accountBorrowIndex(): BigDecimal {
    let value = this.get("accountBorrowIndex");
    return value.toBigDecimal();
  }

  set accountBorrowIndex(value: BigDecimal) {
    this.set("accountBorrowIndex", Value.fromBigDecimal(value));
  }

  get totalUnderlyingBorrowed(): BigDecimal {
    let value = this.get("totalUnderlyingBorrowed");
    return value.toBigDecimal();
  }

  set totalUnderlyingBorrowed(value: BigDecimal) {
    this.set("totalUnderlyingBorrowed", Value.fromBigDecimal(value));
  }

  get totalUnderlyingRepaid(): BigDecimal {
    let value = this.get("totalUnderlyingRepaid");
    return value.toBigDecimal();
  }

  set totalUnderlyingRepaid(value: BigDecimal) {
    this.set("totalUnderlyingRepaid", Value.fromBigDecimal(value));
  }

  get storedBorrowBalance(): BigDecimal {
    let value = this.get("storedBorrowBalance");
    return value.toBigDecimal();
  }

  set storedBorrowBalance(value: BigDecimal) {
    this.set("storedBorrowBalance", Value.fromBigDecimal(value));
  }
}
