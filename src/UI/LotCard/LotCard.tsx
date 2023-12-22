import { FC, useState } from 'react'
import styles from './LotCard.module.css'
import { LotPreview } from '../../types/auction'
import Timer from '../../components/Timer/Timer'
import { Link, useNavigate } from 'react-router-dom'
import formatPrice from '../../helpers/priceFormatter'
import { useUserContext } from '../../context/UserContext'
import AuctionService from '../../api/AuctionService'
import HeartButton from '../HeartButton/HeartButton'


interface Props {
    lot: LotPreview
}

const LotCard: FC<Props> = ({
    lot,
}) => {
    const [timer, setTimer] = useState<number>(lot.timeToEnd)
    const [isInFavorites, setIsInfavorites] = useState<boolean>(lot.isInFavorites)

    const {
        token,
    } = useUserContext()

    const navigate = useNavigate()

    const toggleAddToFavorites = async () => {
        if (!token) {
            navigate('/login')
            return
        }

        const isSuccess = await AuctionService.toggleAddToFavorites(
            lot.id,
            token,
        )

        if (isSuccess) {
            setIsInfavorites(prev => !prev)
        }
    }

    return (
        <div className={styles.lotCard}>
            <Link
                to={`/lot/${lot.id}`}
                className={styles.imgContainer}
                title={lot.title}
            >
                <img
                    className={styles.img}
                    src={lot.image}
                    alt="lot image"
                    loading="lazy"
                />
            </Link>

            <div className={styles.titleHeartContainer}>
                <Link to={`/lot/${lot.id}`}>
                    <span className={styles.title} title={lot.title}>{lot.title}</span>
                </Link>

                <HeartButton
                    isActive={isInFavorites}
                    onClick={toggleAddToFavorites}
                    style={{ marginRight: 8 }}
                />
            </div>

            <span className={styles.currentBidText}>
                {timer ? (<>Текущая ставка</>) : (<>Финальная ставка</>)}
            </span>

            <span className={styles.currentBid}>₽ {formatPrice(lot.currentBid)}</span>

            {!timer ? (
                <span className={styles.auctionClosed}>Закрыт</span>
            ) : (
                <Timer
                    timer={lot.timeToEnd}
                    setTimer={setTimer}
                    className={styles.timer}
                />
            )}
        </div>
    )
}

export default LotCard
