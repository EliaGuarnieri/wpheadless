import { useBreakpoint } from 'hooks';

import FeaturedImage from 'components/FeaturedImage';
import Link from 'next/link';

import SwiperCore, { Pagination, Navigation, Mousewheel, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, Mousewheel, FreeMode]);

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/mousewheel"
import "swiper/css/free-mode"
import styles from './RelatedPosts.module.scss'

const RelatedPosts = ({posts}) => {
  const { md, lg } = useBreakpoint()

  const options = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    mousewheel:{
      forceToAxis: true
    },
    freeMode:{
      "enabled": true,
      "sticky": true
    },
    pagination: {
      clickable: true
    },
    breakpoints: {
      [md]: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      [lg]: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  }

  return (
    <>
    <h2>Related posts</h2>

    <Swiper
      className={styles.reletedPosts}
      {...options}
    >
      {posts.map(({featuredImage, slug, title}) => {
        return (
          <SwiperSlide key={slug}>
            <Link href={slug}>
              <a className={styles.reletedPosts__card}>
                <FeaturedImage
                  className={styles.reletedPosts__featuredImage}
                  src={featuredImage?.sourceUrl}
                  alt={featuredImage?.altText}
                  layout='responsive'
                  objectFit='cover'
                  width={400}
                  height={400}
                />
                <strong>{title}</strong>
              </a>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </>
  )
}

export default RelatedPosts