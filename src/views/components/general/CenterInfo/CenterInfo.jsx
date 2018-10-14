import './centerInfo.scss';

import React from 'react';

export const CenterInfo = ({ children }) => (
    <div className="centerinfo--container">
        <div className="centerinfo--content-container">{children}</div>
    </div>
);
