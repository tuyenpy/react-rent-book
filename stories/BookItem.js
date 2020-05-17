import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import BookItem from '../src/component/BookItem/BookItem';

storiesOf('BookItem', module)
  .add(
    'default',
    () => (
      <BookItem
        book={{
          image: "https://loremflickr.com/320/240",
          title: "Book 1",
          description: "This is book 1"
        }}
      />
    )
  );
