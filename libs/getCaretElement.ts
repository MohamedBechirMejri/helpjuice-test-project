const getCaretElement = () => {
  const isSupported = typeof window.getSelection !== "undefined";

  if (isSupported) {
    const selection = window.getSelection();

    if (selection!) {
      return selection;
    }
  }

  return null;
};

export default getCaretElement;
