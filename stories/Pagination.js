import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from '../src/component/Pagination/Pagination';

const numPage = 10;

storiesOf('Pagination', module)
    .add('default', () => {
        return <Pagination numPage={numPage} />
    })