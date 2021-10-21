export const buttonCancelClick = (tdAction) => {
  const div1 = tdAction.children[0];
  const div2 = tdAction.children[1];

  div1.children[0].classList.remove("d-none");
  div1.children[1].classList.remove("d-none");

  div2.children[0].classList.add("d-none");
  div2.children[1].classList.add("d-none");
};
