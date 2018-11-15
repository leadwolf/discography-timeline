import ReactGA from 'react-ga';

import { history } from '../state/history';

if (process.env.NODE_ENV !== 'development') {
    ReactGA.initialize('UA-129285042-1');

    history.listen(location => ReactGA.pageview(location.pathname));
}
