import Image from 'next/image';

import { signIn } from '@/auth';

export default async function Page() {
  return (
    <div>
      <form
        action={async (formData) => {
          'use server';
          await signIn('nodemailer', formData);
        }}
      >
        <label>
          Email address:
          <input name="email" type="email" />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('yandex');
        }}
      >
        <button type="submit">
          <Image
            src="/providers/yandex.svg"
            alt="yandex"
            width="40"
            height="40"
          />
        </button>
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button type="submit">
          <Image
            src="/providers/google.svg"
            alt="yandex"
            width="40"
            height="40"
          />
        </button>
      </form>
    </div>
  );
}
