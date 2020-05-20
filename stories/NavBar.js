import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from '../src/component/NavBar/NavBar';

storiesOf('NavBar', module)
    .add('default', () => <NavBar />);