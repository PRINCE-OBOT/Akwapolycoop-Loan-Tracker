import pipe from '../composition/pipe';

const createFormElement = (document) => {
  const form = document.createElement('form');
  return form;
};

const addClassToFormElement = (form) => {
  form.classList.add('form-status');
  return form;
};

const createH4Element = (document) => {
  const h4 = document.createElement('h4');
  return h4;
};

const addClassToH4Element = (h4) => {
  h4.classList.add('status');
  return h4;
};

const appendH4ElementToForm = (form) => {
  form.appendChild(h4);
  return form;
};

const processH4 = pipe(createH4Element, addClassToH4Element);
const processForm = pipe(createFormElement, addClassToFormElement, appendH4ElementToForm);

const h4 = processH4(document);
const formStatus = processForm(document);

export { formStatus, h4 };
