import { FormEvent } from 'react';

import Input from './Form/Input';

export default function JoinNewsletter() {
  async function handleJoinNewsletter(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.firstName && !data.lastName && !data.email) {
      return;
    }
  }

  return (
    <form
      onSubmit={handleJoinNewsletter}
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
