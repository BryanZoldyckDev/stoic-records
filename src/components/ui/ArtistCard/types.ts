export interface ArtistCardElement {
    artistName: string;
    artistWebsite?: string;
    imageUrl?: string;
    icons: {
        icon: string;
        iconLink: string;
    }[];
}
