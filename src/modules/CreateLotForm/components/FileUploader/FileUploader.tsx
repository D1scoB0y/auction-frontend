import { Dispatch, FC, SetStateAction, useState } from "react"
import styles from './FileUploader.module.css'
import { resizeImage } from "../../helpers/resizer"


interface Props {
    loadedFilesQty: number
    setFiles: Dispatch<SetStateAction<File[]>>
    setPreviews: Dispatch<SetStateAction<string[]>>
}

const FileUploader: FC<Props> = ({
    loadedFilesQty,
    setPreviews,
    setFiles,
}) => {
    const [error, setError] = useState<string>('')

    const handleFilesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (!e.target.files) {
            return
        }

        setError('')

        const files = Array.from(e.target.files)

        if (loadedFilesQty + files?.length > 12) {
            setError('Максимум 12 изображений')
            return
        }

        const allowedExtensions = ['jpeg', 'png']

        for (const file of files) {
            const fileExtension = file.type.split('/')[1]

            if (!allowedExtensions.includes(fileExtension)) {
                setError('Только "jpg" и "png"')
                return
            }
        }

        for (const file of files) {
            if (file.size > import.meta.env.VITE_MAX_FILE_SIZE) {
                setError('Максимальный вес одного файла - 8 MB')
                return
            }

            const imgURL = await resizeImage(file)

            setPreviews(prev => [...prev, imgURL])
            setFiles(prev => [...prev, file])
        }
    }

    return (
        <>
            <label htmlFor="fileUploader" className={styles.fileUploaderLabel}>Или выберите из проводника</label>
            <input
                id="fileUploader"
                className={styles.fileUploader}
                type="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={handleFilesUpload}
            />

            <span className={styles.error}>{error}</span>
        </>
    )
}

export default FileUploader