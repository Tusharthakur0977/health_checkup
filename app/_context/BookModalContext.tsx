"use client";

import React from "react";

interface IBookModalContext {
  isBookModal: boolean;
  setIsBookModal: (isBookModal: boolean) => void;
  isFormFilled: boolean;
  setIsFormFilled: (isFormFilled: boolean) => void;
}

interface IBookMdalProvider {
  children: React.ReactNode;
}

export const BookModalContext = React.createContext<IBookModalContext>({
  isBookModal: false,
  setIsBookModal: () => {},
  isFormFilled: false,
  setIsFormFilled: () => {},
});

const BookModalProvider = (props: IBookMdalProvider) => {
  const [isBookModal, setIsBookModal] = React.useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = React.useState(false);
  return (
    <BookModalContext.Provider
      value={{
        isBookModal,
        setIsBookModal,
        isFormFilled,
        setIsFormFilled,
      }}
    >
      {props.children}
    </BookModalContext.Provider>
  );
};

export default BookModalProvider;
