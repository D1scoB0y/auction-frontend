import { forwardRef, useState, useImperativeHandle } from 'react'

import clsx from 'clsx'

import styles from './Snackbar.module.css'

import type { TypeSnackbarType } from '../../context/SnackbarContext'


const Snackbar = forwardRef(({}, ref) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const [type, setType] = useState<TypeSnackbarType>('success')
    const [text, setText] = useState<string>('')

    useImperativeHandle(ref, () => ({
        show(type: TypeSnackbarType, text: string) {
            setType(type)
            setText(text)

            setIsActive(true)

            setTimeout(() => setIsActive(false), 3000)
        },
    }))

    return (
        <div
            className={clsx(
                styles.snackbar,
                isActive && styles.active,
            )}
        >
            <img
                className={styles.statusIcon}
                src={type === 'success' ? '/success.png' : '/alert.png'}
                alt="cross icon"
            />

            <span className={styles.text}>{text}</span>
        </div>
    )
})

export default Snackbar
