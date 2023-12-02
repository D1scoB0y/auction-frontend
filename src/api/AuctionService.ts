import client from './client'
import type { LotPreview } from '../types/auction'


interface GetLotsResponse {
    lotsQty: number
    lots: LotPreview[]
}

const AuctionService = {
    getLots: async (
        page: number,
        token: string | null
    ): Promise<GetLotsResponse | null> => {
        const headers = {
            Authorization: 'Bearer ' + token,
        }

        try {
            const lots = await client.get('auction/active-lots', { headers, searchParams: { page } }).json()
            return lots as GetLotsResponse
        } catch (e) {
            return null
        }
    },
    toggleAddToFavorites: async (
        lotId: number,
        token: string,
    ): Promise<boolean> => {
        const headers = {
            Authorization: 'Bearer ' + token,
        }

        try {
            await client.post('auction/add-to-favorites', { headers, json: { lotId } })
            return true
        } catch (e) {
            return false
        }
    }
}

export default AuctionService
