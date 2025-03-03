import Image from 'next/image';

import { auth } from '@/auth';
import { Card } from '@/components/Card';

import styles from './styles.module.scss';

export default async function Page() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Card>
        <Image
          src={session?.user?.image || ''}
          alt={'avatar'}
          width={200}
          height={200}
          className={styles.image}
        />
        <div>{session?.user?.name}</div>
        <div>{session?.user?.email}</div>
      </Card>
    </div>
  );
}
