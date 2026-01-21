interface FullAlbum {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnaiUrl: string;
}

interface albums {
    userId: number;
    id: number;
    title: string;
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    
}
