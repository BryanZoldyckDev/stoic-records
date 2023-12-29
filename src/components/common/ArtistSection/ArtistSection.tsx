import { ArtistCard } from "./../../../components/ui/ArtistCard"

import { JSONResponse } from "./";

export const ArtistSection = ({artists}: JSONResponse) => {
    return(
        <div className="artist-section-container pt-20">
            {artists.map((element, index) => {
                return (
                <ArtistCard
                    key={index}
                    artistWebsite={element.artistWebsite}
                    icons={element.icons}
                    artistName={element.artistName} 
                    imageUrl={element.imageUrl} 
                />
                )
            })}
        </div>
    );
}