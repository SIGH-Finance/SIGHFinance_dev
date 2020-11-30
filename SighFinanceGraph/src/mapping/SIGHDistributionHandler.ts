import { Address, BigInt,BigDecimal, log } from "@graphprotocol/graph-ts"
import { InstrumentAdded, InstrumentRemoved, InstrumentSIGHed, SIGHSpeedUpdated, StakingSpeedUpdated, SpeedUpperCheckSwitched
 , minimumBlocksForSpeedRefreshUpdated , PriceSnapped, SIGHBorrowIndexUpdated, AccuredSIGHTransferredToTheUser,
 MaxSIGHSpeedCalculated, refreshingSighSpeeds , SIGHSupplyIndexUpdated } from "../../generated/Sigh_Distribution_Handler/SIGHDistributionHandler"
import { Instrument } from "../../generated/schema"
import { createInstrument,updatePrice } from "./LendingPoolConfigurator"


// FINAL v0. To be Tested : WEI ONLY
export function handleSIGHSupplyIndexUpdated(event: SIGHSupplyIndexUpdated): void {
    let instrumentId = event.params.instrument.toHexString()
    let instrumentState = Instrument.load(instrumentId)

    // Instrument's current Compounded Liquidity Balance
    instrumentState.totalCompoundedLiquidityWEI = instrumentState.totalCompoundedLiquidityWEI.plus( event.params.totalCompoundedSupply )

    // Instrument's life-time $SIGH Accured as part of "Liquidity $SIGH Stream"
    instrumentState.totalLiquiditySIGHAccuredWEI = instrumentState.totalLiquiditySIGHAccuredWEI.plus( event.params.sighAccured )

    // Instrument's current $SIGH Accuredas part of "Liquidity $SIGH Stream" , which is being distributed among the Liquidity Providers
    instrumentState.currentLiquiditySIGHAccuredWEI = instrumentState.currentLiquiditySIGHAccuredWEI.plus( event.params.sighAccured )

    instrumentState.SIGH_Supply_Index = event.params.newIndexMantissa   // INDEX is used for distributing $SIGH on a per token unit basis
    instrumentState.SIGH_Supply_Index_lastUpdatedBlock = event.params.blockNum    // Block Number when it was last updated

    instrumentState.save()
}

// FINAL v0. To be Tested : WEI ONLY
export function handleSIGHBorrowIndexUpdated(event: SIGHBorrowIndexUpdated): void {
    let instrumentId = event.params.instrument.toHexString()
    let instrumentState = Instrument.load(instrumentId)

    // Instrument's current Compounded STABLE Borrow Balance
    instrumentState.totalCompoundedStableBorrowsWEI = instrumentState.totalCompoundedStableBorrowsWEI.plus( event.params.totalCompoundedStableBorrows )

    // Instrument's current Compounded VARIABLE Borrow Balance
    instrumentState.totalCompoundedVariableBorrowsWEI = instrumentState.totalCompoundedVariableBorrowsWEI.plus( event.params.totalCompoundedVariableBorrows )

    // Instrument's life-time $SIGH Accured as part of  "Borrowing $SIGH Stream"
    instrumentState.totalBorrowingSIGHAccuredWEI = instrumentState.totalBorrowingSIGHAccuredWEI.plus( event.params.sighAccured )

    // Instrument's current $SIGH Accured  as part of  "Borrowing $SIGH Stream", which is being distributed among the Instrument Borrowers
    instrumentState.currentBorrowingSIGHAccuredWEI = instrumentState.currentBorrowingSIGHAccuredWEI.plus( event.params.sighAccured )

    instrumentState.SIGH_Borrow_Index = event.params.newIndexMantissa      // INDEX is used for distributing $SIGH on a per token unit basis
    instrumentState.SIGH_Borrow_Index_lastUpdatedBlock = event.params.blockNum    // Block Number when it was last updated
    
    instrumentState.save()
}




export function handleInstrumentAdded(event: InstrumentAdded): void {
    log.info('handleInstrumentAdded: 1st ',[])
    let instrumentId = event.params.instrumentAddress_.toHexString()    
    let instrumentState = Instrument.load(instrumentId)
    if (instrumentState == null) {
        log.info('handleInstrumentAdded: createInstrument ',[])
        instrumentState = createInstrument(instrumentId)
    }
    log.info('handleInstrumentAdded: instrumentId {} ',[instrumentId])
    log.info('handleInstrumentAdded: instrumentId  {} ',[instrumentId.toString()])
    instrumentState.isListedWithSIGH_Mechanism = true
    instrumentState.isSIGHMechanismActivated = false
    log.info('handleInstrumentAdded: 3st ',[])
    instrumentState.SIGH_Supply_Index = BigInt.fromI32(10).pow(36 as u8)  
    instrumentState.SIGH_Supply_Index_lastUpdatedBlock = event.block.number
    log.info('handleInstrumentAdded: 4st ',[])
    instrumentState.SIGH_Borrow_Index = BigInt.fromI32(10).pow(36 as u8)  
    instrumentState.SIGH_Borrow_Index_lastUpdatedBlock =  event.block.number
    log.info('handleInstrumentAdded: 5st ',[])

    instrumentState.present_SIGH_Distribution_Side = 'inActive'
    instrumentState.save()
}

export function handleInstrumentRemoved(event: InstrumentRemoved): void {
    let instrumentId = event.params._instrument.toHexString()
    let instrumentState = Instrument.load(instrumentId)
    instrumentState.isListedWithSIGH_Mechanism = false
    instrumentState.isSIGHMechanismActivated = false
    instrumentState.save()
}

export function handleInstrumentSIGHed(event: InstrumentSIGHed): void {
    let instrumentId = event.params.instrumentAddress_.toHexString()
    let instrumentState = Instrument.load(instrumentId)
    instrumentState.isSIGHMechanismActivated = true
    instrumentState.save()
}

export function handleSIGHSpeedUpdated(event: SIGHSpeedUpdated): void {
}

export function handleStakingSpeedUpdated(event: StakingSpeedUpdated): void {
    let instrumentId = event.params.instrumentAddress_.toHexString()
    let instrumentState = Instrument.load(instrumentId)
    instrumentState.present_SIGH_Staking_Speed_WEI = event.params.new_staking_Speed
    instrumentState.present_SIGH_Staking_Speed = instrumentState.present_SIGH_Staking_Speed_WEI.divDecimal( (BigInt.fromI32(10).pow(instrumentState.decimals as u8).toBigDecimal()) )
    instrumentState.save()
}

export function handleSpeedUpperCheckSwitched(event: SpeedUpperCheckSwitched): void {
    // let instrumentId = event.params._instrument.toHexString()
    // let instrumentState = Instrument.load(instrumentId)
}

export function handleMinimumBlocksForSpeedRefreshUpdated(event: minimumBlocksForSpeedRefreshUpdated): void {
    // let instrumentId = event.params._instrument.toHexString()
    // let instrumentState = Instrument.load(instrumentId)
}

export function handlePriceSnapped(event: PriceSnapped): void {
    // let instrumentId = event.params.instrument.toHexString()
    // let instrumentState = Instrument.load(instrumentId)
}

export function handleMaxSIGHSpeedCalculated(event: MaxSIGHSpeedCalculated): void {
    // let instrumentId = event.params._instrument.toHexString()
    // let instrumentState = Instrument.load(instrumentId)
}

export function handleRefreshingSighSpeeds(event: refreshingSighSpeeds): void {
    let instrumentId = event.params._Instrument.toHexString()
    let instrumentState = Instrument.load(instrumentId)
    instrumentState.present_SIGH_Suppliers_Speed_WEI = event.params.supplierSpeed
    instrumentState.present_SIGH_Suppliers_Speed = instrumentState.present_SIGH_Suppliers_Speed_WEI.divDecimal( (BigInt.fromI32(10).pow(instrumentState.decimals as u8).toBigDecimal()) )
    instrumentState.present_SIGH_Borrowers_Speed_WEI = event.params.borrowerSpeed
    instrumentState.present_SIGH_Borrowers_Speed = instrumentState.present_SIGH_Borrowers_Speed_WEI.divDecimal( (BigInt.fromI32(10).pow(instrumentState.decimals as u8).toBigDecimal()) )

    instrumentState.present_24HrVolatility_ETH = event.params._24HrVolatility.toBigDecimal()
    instrumentState.present_percentTotalVolatility = event.params.percentTotalVolatility.toBigDecimal().div(BigDecimal.fromString('10000'))
    instrumentState.present_TotalVolatility_ETH = event.params.totalLosses.toBigDecimal()
    instrumentState.present_24HrWindow_MaxSIGHSpeed = event.params.maxSpeed.toBigDecimal()
    instrumentState.present_SIGH_Distribution_Side = event.params.side

    instrumentState.save()
}



export function handleAccuredSIGHTransferredToTheUser(event: AccuredSIGHTransferredToTheUser): void {
    let instrumentId = event.params.instrument.toHexString()
    // let instrumentState = Instrument.load(instrumentId)
}

