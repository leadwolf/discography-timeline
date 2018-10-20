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

export { getMomentFromReleaseDate };
