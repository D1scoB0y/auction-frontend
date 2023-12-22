import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuctionService from "../../../../api/AuctionService"
import styles from './AddToFavoritesButton.module.css'
import clsx from "clsx"


interface Props {
    isActive: boolean
    lotId: number
    token: string | null
}

const AddToFavoritesButton: FC<Props> = ({
    isActive,
    lotId,
    token,
}) => {
    const [isInFavorites, setIsInFavorites] = useState<boolean>(isActive)
    const [isAnim, setAnim] = useState<boolean>(false)

    const navigate = useNavigate()

    const toggleAddToFavorites = async () => {
        if (!token) {
            navigate('/login')
            return
        }

        setAnim(true)

        const isSuccess = await AuctionService.toggleAddToFavorites(
            lotId,
            token,
        )

        if (isSuccess) {
            console.log('ok')
            setIsInFavorites(prev => !prev)
        }
    }

    return (
        <button
            className={clsx(
                styles.button,
                isAnim && styles.animationActive,
                isInFavorites && styles.buttonActive,
            )}
            onAnimationEnd={() => setAnim(false)}
            onClick={toggleAddToFavorites}
        >
            <img
                src={isInFavorites ? "/active_heart.png" : "/inactive_heart.png"}
                className={styles.heartIcon}
                alt="Heart icon"
            />

            {isInFavorites ? 'В избранном' : 'В избранное'}
        </button>
    )
}

export default AddToFavoritesButton
