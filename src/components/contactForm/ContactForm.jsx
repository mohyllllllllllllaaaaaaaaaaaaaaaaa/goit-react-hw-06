import { Formik, Form,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import  css from './ContactForm.module.css';
import { useDispatch} from 'react-redux';
import {addContact} from '../../redux/contactsSlice';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(5, 'Too short!').max(15, 'Too long!').required('Required'),
  });
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
       dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field className={css.input}
          type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <Field className={css.input}
          type="number" name="number" id="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit" className={css.add}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;