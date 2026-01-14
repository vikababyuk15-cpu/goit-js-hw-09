const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = { email:"", message:"" };
form.addEventListener('input', (event) => 
{const { name, value } = event.target;
  
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));


});

form.addEventListener('submit', (event) => {
  event.preventDefault();
if(formData.email === '' || formData.message === '')  {
    return alert('Fill please all fields');
  }
console.log(formData);
localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: "", message: "" };
});
