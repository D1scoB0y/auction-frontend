import { CSSProperties, FC, useState } from 'react'
import styles from './HeartButton.module.css'
import clsx from 'clsx'


interface Props {
    onClick: () => void
    isActive: boolean
    style?: CSSProperties
}

const HeartButton: FC<Props> = ({
    onClick,
    isActive,
    style,
}) => {
    const [heartAnimationActive, setHeartAnimationActive] = useState<boolean>(false)

    return (
        <div
            className={styles.heartContainer}
            onClick={() => {setHeartAnimationActive(true); onClick()}}
            title={isActive ? "Удалить из избранного" : "Добавить в избранное"}
            style={style}
        >
            <img
                src={
                    isActive
                        ? "/active_heart.png"
                        : "/inactive_heart.png"
                }
                alt="add to favorites button"
                className={styles.toggleAddToFavorites}
                draggable="false"
            />

            <img
                src="/active_heart.png"
                alt="add to favorites button"
                className={clsx(styles.tapEffect, heartAnimationActive && styles.heartAnimation)}
                onAnimationEnd={() => setHeartAnimationActive(false)}
                draggable="false"
            />
        </div>
    )
}

export default HeartButton
