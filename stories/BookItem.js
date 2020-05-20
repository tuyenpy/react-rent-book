import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import BookItem from '../src/component/BookItem/BookItem';
const book = {
  image: "http://dummyimage.com/200x300.jpg/cc0000/ffffff",
  title: "Cuenca Crime, The (Crimen de Cuenca, El)",
  description: "Alteration of Lower Lip with Synthetic Substitute, External Approach",
  author: "Dorian Dearle",
  price: 95250,
};

storiesOf('BookItem', module)
  .add(
    'default',
    () => (
      <BookItem { ...book } />
    )
  );
