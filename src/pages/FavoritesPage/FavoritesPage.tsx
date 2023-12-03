import PageMetaInfo from "../../components/PageMetaInfo/PageMetaInfo"
import PageTitle from "../../UI/PageTitle/PageTitle"
import { Favorites } from "../../modules/Favorites"


const FavoritesPage = () => {
    return (
        <>
            <PageMetaInfo
                title="Избранное | FotoJäger`s Auctions"
            />

            <div className="content">
                <PageTitle
                    text="Избранное"
                />

                <Favorites />
            </div>
        </>
    )
}

export default FavoritesPage
