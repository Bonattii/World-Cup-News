import { ChangeEvent, FormEvent, useState } from 'react';
import { send } from '@emailjs/browser';

import Input from './Form/Input';

export default function JoinNewsletter() {
  const [toSend, setToSend] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!toSend.firstName && !toSend.lastName && !toSend.email) {
      return;
    }

    try {
      send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        toSend,
        `${process.env.REACT_APP_USER_ID}`
      )
        .then(response =>
          console.log('SUCCESS!', response.status, response.text)
        )
        .catch(err => console.log('FAILED!', err));
      setToSend({ ...toSend, firstName: '', lastName: '', email: '' });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-4 w-[600px]"
    >
      <div className="flex gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg font-semibold pl-1" htmlFor="firstName">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Your First Name"
            required
            type="text"
            onChange={handleChange}
            value={toSend.firstName}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg font-semibold pl-1" htmlFor="lastName">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            required
            type="text"
            onChange={handleChange}
            value={toSend.lastName}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <label className="text-lg font-semibold pl-1" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          placeholder="Your Email"
          required
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={handleChange}
          value={toSend.email}
        />
      </div>

      <footer className="mt-8 flex justify-center w-full items-center">
        <button
          className="w-full rounded-full py-2 bg-background text-primary font-semibold text-lg border border-primary hover:bg-primary hover:text-background hover:border-background duration-200"
          type="submit"
        >
          Join Now!
        </button>
      </footer>
    </form>
  );
}
