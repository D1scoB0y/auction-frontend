import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { LotPreview } from "../../../../types/auction"
import LotsGrid from "../../../../UI/LotsGrid/LotsGrid"
import styles from '../../UserLots/UserLots.module.css'
import Pagination from "../../../../components/Pagination/Pagination"
import AuctionService from "../../../../api/AuctionService"
import { useUserContext } from "../../../../context/UserContext"


interface Props {
    lots: LotPreview[]
    setLots: Dispatch<SetStateAction<LotPreview[]>>
}

const ActiveLots: FC<Props> = ({
    lots,
    setLots,
}) => {
    const [page, setPage] = useState<number>(1)
    const [lotsQty, setLotQty] = useState<number>(0)

    const {
        token,
    } = useUserContext()

    useEffect(() => {
        (async () => {
            const res = await AuctionService.getLots(page, token as string)

            if (res) {
                setLotQty(res.lotsQty)
                setLots(res.lots)
            }
        })()
    }, [page])

    return (
        lots.length ? (
            <>
                <LotsGrid lots={lots}/>
                <Pagination
                    currentPage={page}
                    onPageChange={setPage}
                    totalPages={Math.ceil(lotsQty / 18)}
                />
            </>
        ) : (
            <div className={styles.noLots}>Активных лотов пока нет</div>
        )
    )
}

export default ActiveLots
