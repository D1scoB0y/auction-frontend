import { FC, ReactNode } from 'react'
import { useSnackbarContext } from '../../context/SnackbarContext'


interface Props {
    children: ReactNode
    textToCopy: string
    className: string
}

const CopyText: FC<Props> = ({
    children,
    textToCopy,
    className,
}) => {
    const copyText = () => {
        navigator.clipboard.writeText(textToCopy).then(
            () => showSnackbar('success', 'Скопировано в буфер обмена')
        ).catch(
            () => showSnackbar('fail', 'Ошибка. Попробуте позже')
        )
    }

    const {
        showSnackbar,
    } = useSnackbarContext()

    return (
        <span
            className={className}
            style={{ cursor: "pointer" }}
            onClick={copyText}
        >
            {children}
        </span>
    )
}

export default CopyText
