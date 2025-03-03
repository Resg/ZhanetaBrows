import { auth } from '@/auth';
import { SignIn } from '@/components/SignIn';
import { SignOut } from '@/components/SignOut';

import styles from './page.module.css';

export default async function Home() {
  const session = await auth();

  console.log(session);
  return (
    <div className={styles.page}>
      <SignIn />
      <SignOut />
    </div>
  );
}
