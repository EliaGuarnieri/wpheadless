import { useRouter } from 'next/router'

import { HiArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';

import styles from './GoBack.module.scss'

const GoBack = () => {
  const router = useRouter()

  return (
    <a className={styles.back} onClick={() => router.back()}>
      <ArrowLeft/> Back
    </a>
  )

}

export default GoBack