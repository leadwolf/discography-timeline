import moment from 'moment';

const PRECISION_FORMATS = {
    YEAR: 'YYYY',
    MONTH: 'YYYY-MM',
    DAY: 'YYYY-MM-DD',
};

const PRECISION_MAP = new Map(Object.entries(PRECISION_FORMATS));

const getMomentFromReleaseDate = (date, precision) => {
    if (!PRECISION_MAP.get(precision)) return moment(0);
    return moment(date, PRECISION_MAP.get(precision));
};

const dateSorter = (date1, date2) => {
    const moment1 = getMomentFromReleaseDate(date1);
    const moment2 = getMomentFromReleaseDate(date2);

    if (moment1.isBefore(moment2)) return -1;
    if (moment1.isAfter(moment2)) return 1;
    return 0;
};

const reverseDateSorter = (date1, date2) => dateSorter(date1, date2) * -1;

export { getMomentFromReleaseDate, dateSorter, reverseDateSorter };
