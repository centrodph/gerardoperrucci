/* global it expect describe */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  // Render
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
