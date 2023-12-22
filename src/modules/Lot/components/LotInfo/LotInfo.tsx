import { FC, useState } from "react"
import { Lot } from "../../../../types/auction"
import styles from './LotInfo.module.css'
import Line from "../../../../UI/Line/Line"
import Timer from "../../../../components/Timer/Timer"
import BidForm from "../BidForm/BidForm"
import formatPrice from "../../../../helpers/priceFormatter"
import formatDate from "../../../../helpers/dateFormatter"
import { useUserContext } from "../../../../context/UserContext"
import AddToFavoritesButton from "../AddToFavoritesButton/AddToFavoritesButton"


const LotInfo: FC<{ lot: Lot }> = ({
    lot,
}) => {
    const [timer, setTimer] = useState<number>(lot.timeToEnd)

    const {
        token,
    } = useUserContext()

    return (
        <div className={styles.info}>
            <AddToFavoritesButton
                isActive={lot.isInFavorites}
                token={token}
                lotId={+lot.lotId}
            />

            <span className={styles.title}>{lot.title}</span>

            <span className={styles.currentBid}>₽ {formatPrice(lot.currentBid)}</span>

            <Line />

            {timer > 0 ? (
                <span className={styles.timeToEnd}>
                    Закрывается через:
                        <Timer
                            timer={timer}
                            setTimer={setTimer}
                            className={styles.timer}
                            withSeconds
                        />
                </span>
            ) : (
                <span className={styles.closed}>
                    Закрыт
                </span>
            )}

            <span className={styles.endDate}>
                Дата закрытия: {formatDate(lot.endDate)}
            </span>

            {timer > 0 && (
                <>
                    <Line />
                    <BidForm
                        lot={lot}
                    />   
                </>
            )}

            {lot.description && (
                <>
                    <Line />
                    <span className={styles.description}>{lot.description.trim()}</span>
                </>
            )}
        </div>
    )
}

export default LotInfo
