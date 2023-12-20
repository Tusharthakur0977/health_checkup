"use client";

import React from "react";

interface IBookModalContext {
  isBookModal: boolean;
  setIsBookModal: (isBookModal: boolean) => void;
  isFormFilled: boolean;
  setIsFormFilled: (isFormFilled: boolean) => void;
  selectedPLan: string;
  setSelectedPLan: (selectedPLan: string) => void;
}

interface IBookMdalProvider {
  children: React.ReactNode;
}

export const BookModalContext = React.createContext<IBookModalContext>({
  isBookModal: false,
  setIsBookModal: () => {},
  isFormFilled: false,
  setIsFormFilled: () => {},
  selectedPLan: "",
  setSelectedPLan: () => {},
});

const BookModalProvider = (props: IBookMdalProvider) => {
  const [isBookModal, setIsBookModal] = React.useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = React.useState(false);
  const [selectedPLan, setSelectedPLan] = React.useState("");
  return (
    <BookModalContext.Provider
      value={{
        isBookModal,
        setIsBookModal,
        isFormFilled,
        setIsFormFilled,
        selectedPLan,
        setSelectedPLan,
      }}
    >
      {props.children}
    </BookModalContext.Provider>
  );
};

export default BookModalProvider;
