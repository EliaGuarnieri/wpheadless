import { useRouter } from 'next/router'

import { HiArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';

import styles from './GoBack.module.scss'

const GoBack = () => {
  const router = useRouter()

  return (
    <span className={styles.back} onClick={() => router.back()}>
      <ArrowLeft/> Back
    </span>
  )

}

export default GoBack