{% include utils.js %}

function onFormSubmit(event) {
  event.preventDefault();

  var formEl = event.currentTarget;

  var formData = serializeFormInputs(formEl);
  
  console.log('Submit: ', formData);

  // TODO: API call.
  clearFormValues(formEl);
};

document.querySelector('#joinForm').onsubmit = onFormSubmit;