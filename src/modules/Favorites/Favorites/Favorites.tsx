import { useEffect, useState } from "react"
import { LotPreview } from "../../../types/auction"
import { useUserContext } from "../../../context/UserContext"
import getFavoriteLots from "../api/getFavoriteLots"
import Pagination from "../../../components/Pagination/Pagination"
import Button from "../../../UI/Button/Button"
import LotsGrid from "../../../UI/LotsGrid/LotsGrid"
import styles from './Favorites.module.css'


const LOTS_PER_PAGE = 18

const Favorites = () => {
    const [lots, setLots] = useState<LotPreview[]>([])
    const [page, setPage] = useState<number>(1)
    const [lotsQty, setLotsQty] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        token,
    } = useUserContext()

    const fetchLots = async () => {
        setIsLoading(true)

        const res = await getFavoriteLots(page, token as string)

        if (res) {
            setLotsQty(res.lotsQty)
            setLots(res.lots)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        fetchLots()
    }, [page])

    return (
        <div className={styles.favorites}>
            {lotsQty ? (
                <>
                    <Button
                        text="Обновить"
                        isLoading={isLoading}
                        className={styles.updateButton}
                        onClick={fetchLots}
                    />

                    <LotsGrid
                        lots={lots}
                    />

                    <Pagination
                        currentPage={page}
                        onPageChange={setPage}
                        totalPages={Math.ceil(lotsQty / LOTS_PER_PAGE)}
                    />
                </>
            ) : (
                <div className={styles.noLots}>
                    Избранных лотов пока нет
                </div>
            )}
        </div>
    )
}

export { Favorites }
