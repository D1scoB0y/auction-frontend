import client from "../../../api/client"
import { LotPreview } from "../../../types/auction"


interface Response {
    lotsQty: number
    lots: LotPreview[]
}

const getFavoriteLots = async (
    page: number,
    token: string,
): Promise<Response | null> => {
    const headers = {
        Authorization: 'Bearer ' + token
    }

    try {
        return await client.get('auction/favorite-lots', { headers, searchParams: { page } }).json()
    } catch (e) {
        return null
    }
}

export default getFavoriteLots
