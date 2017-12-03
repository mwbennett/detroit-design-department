function serializeFormInputs(formEl){
  var formData = {};

  formEl.querySelectorAll('input').forEach(function(input){
    formData[input.name] = input.value;
  });

  formEl.querySelectorAll('textarea').forEach(function(input){
    formData[input.name] = input.value;
  });

  return formData;
};

function clearFormValues(formEl){
  formEl.querySelectorAll('input').forEach(function(input){
    input.value = '';
  });

  formEl.querySelectorAll('textarea').forEach(function(input){
    input.value = '';
  });
};
