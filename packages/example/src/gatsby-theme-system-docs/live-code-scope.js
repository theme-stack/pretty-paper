import React from 'react';

const result = {
  url: ['https://www.google.de/'],
  source: ['source'],
  title: ['title'],
  snippet: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
  collection: ['Sharepoint'],
  user: ['Person_1', 'Person_2']
}

const Example = ({children}) => (
  <button>
    {children}
  </button>
)

export default { result, Example }
