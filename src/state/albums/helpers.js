import moment from 'moment';

const PRECISION_FORMATS = {
    year: 'YYYY',
    month: 'YYYY-MM',
    day: 'YYYY-MM-DD',
};

const PRECISION_MAP = new Map(Object.entries(PRECISION_FORMATS));

console.log(PRECISION_MAP);

const getMomentFromReleaseDate = (date, precision) => {
    if (!PRECISION_MAP.get(precision)) return moment(0);

    return moment(date, PRECISION_MAP.get(precision));
};

const dateSorter = (album1, album2) => {
    const moment1 = getMomentFromReleaseDate(album1.release_date, album1.release_date_precision);
    const moment2 = getMomentFromReleaseDate(album2.release_date, album2.release_date_precision);

    if (moment1.isBefore(moment2)) return -1;
    if (moment1.isAfter(moment2)) return 1;
    return 0;
};

const reverseDateSorter = (date1, date2) => dateSorter(date1, date2) * -1;

export { getMomentFromReleaseDate, dateSorter, reverseDateSorter };
