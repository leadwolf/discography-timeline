import moment from 'moment';

const isAuth = ({ access_token, expiration_date }) =>
    access_token && moment(expiration_date).isAfter(moment());

export { isAuth };
