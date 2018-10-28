export const ALBUM_GROUP_ALBUM = 'album';
export const ALBUM_GROUP_SINGLE = 'single';
export const ALBUM_GROUP_COMPILATION = 'compilation';
export const ALBUM_GROUP_APPEARS_ON = 'appears_on';

export const ALBUM_GROUP_TYPES = [
    ALBUM_GROUP_ALBUM,
    ALBUM_GROUP_SINGLE,
    ALBUM_GROUP_COMPILATION,
    ALBUM_GROUP_APPEARS_ON,
];

export const albumTypeToLabel = type => {
    switch (type) {
        default:
            return '';
        case ALBUM_GROUP_ALBUM:
            return 'Album';
        case ALBUM_GROUP_SINGLE:
            return 'Single';
        case ALBUM_GROUP_COMPILATION:
            return 'Compilation';
        case ALBUM_GROUP_APPEARS_ON:
            return 'Appears on';
    }
};
