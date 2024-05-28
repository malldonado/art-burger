import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="page bg-white border border-gray-300 shadow-md flex justify-center items-center text-lg">
      <h1>{props.children}</h1>
    </div>
  );
});

function FlipBook() {
  return (
    <div className="__screen flex justify-center items-center bg-gray-100">
      <HTMLFlipBook width={500} height={700}>
        <Page>Page 1</Page>
        <Page>Page 2</Page>
        <Page>Page 3</Page>
        <Page>Page 4</Page>
        <Page>Page 5</Page>
        <Page>Page 6</Page>
      </HTMLFlipBook>
    </div>
  );
}

export default FlipBook;
