"use client";

import React from "react";

interface IBookModalContext {
  isBookModal: boolean;
  setIsBookModal: (isBookModal: boolean) => void;
}

interface IBookMdalProvider {
  children: React.ReactNode;
}

export const BookModalContext = React.createContext<IBookModalContext>({
  isBookModal: false,
  setIsBookModal: () => {},
});

const BookModalProvider = (props: IBookMdalProvider) => {
  const [isBookModal, setIsBookModal] = React.useState<boolean>(false);

  return (
    <BookModalContext.Provider
      value={{
        isBookModal,
        setIsBookModal,
      }}
    >
      {props.children}
    </BookModalContext.Provider>
  );
};

export default BookModalProvider;
