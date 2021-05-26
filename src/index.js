import './css/stylesheet.css';
import Form from './components/form';

const form = new Form();

form.createForm();
form.submitForm();

/* document.addEventListener('click', (event) => {
  if (event.target.id === 'degrees') {
    console.log('HERE')
  }
});
 */