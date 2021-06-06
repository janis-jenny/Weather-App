import Form from './form';

const submitForm = () => {
  const form = document.getElementById('from-city');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityInput = form.elements.city;
    Form.weather(cityInput);
    cityInput.value = '';
  });
}

export default submitForm;