import moment from "moment"
import { timezoneOffset } from "./timeFormatter"


const formatDate = (stringDate: string): string => {
    return moment(Date.parse(stringDate) - timezoneOffset()).format(
        'DD.MM.YYYY H:mm',
    )
}

export default formatDate
