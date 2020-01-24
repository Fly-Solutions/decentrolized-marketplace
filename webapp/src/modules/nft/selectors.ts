import { createSelector } from 'reselect'
import { createMatchSelector } from 'connected-react-router'
import { getData as getContracts } from '../contract/selectors'
import { getData as getNFTs } from '../nft/selectors'
import { locations } from '../routing/locations'
import { RootState } from '../reducer'
import { ContractState } from '../contract/reducer'
import { NFTState } from './reducer'
import { NFT } from './types'

export const getState = (state: RootState) => state.nft
export const getData = (state: RootState) => getState(state).data
export const getLoading = (state: RootState) => getState(state).loading
export const getError = (state: RootState) => getState(state).error

const matchSelector = createMatchSelector<
  RootState,
  {
    contractAddress: string
    tokenId: string
  }
>(locations.ntf(':contractAddress', ':tokenId'))

export const getContractAddress = createSelector<
  RootState,
  ReturnType<typeof matchSelector>,
  string | null
>(matchSelector, match => match?.params.contractAddress || null)

export const getTokenId = createSelector<
  RootState,
  ReturnType<typeof matchSelector>,
  string | null
>(matchSelector, match => match?.params.tokenId || null)

export const getCurrentNFT = createSelector<
  RootState,
  string | null,
  string | null,
  ContractState['data'],
  NFTState['data'],
  NFT | null
>(
  state => getContractAddress(state),
  state => getTokenId(state),
  state => getContracts(state),
  state => getNFTs(state),
  (contractAddress, tokenId, contracts, nfts) => {
    let nft: NFT | null = null
    if (contractAddress && tokenId && contractAddress in contracts) {
      const contract = contracts[contractAddress]
      if (contract) {
        const nftId = contract.category + '-' + contractAddress + '-' + tokenId
        if (nftId in nfts) {
          nft = nfts[nftId]
        }
      }
    }
    return nft
  }
)
