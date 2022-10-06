import getCaretIndex from "./getCaretIndex";

const clearCommand = (caret: any, command: string) => {
  const caretIndex = getCaretIndex(caret.focusNode.parentElement);

  const { innerHTML } = caret.focusNode.parentElement;
  const newInnerHTML =
    innerHTML.substring(0, caretIndex - command.length) +
    innerHTML.substring(caretIndex);

  caret.focusNode.parentElement.innerHTML = newInnerHTML;
};
export default clearCommand;
