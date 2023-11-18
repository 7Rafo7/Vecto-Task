import React, {useEffect, useState} from "react";
import styles from './Content.module.css'
import CardSlider from "../CardSlider/CardSlider";
import {MovieType} from "../../types";

const cards = [
  {
    id: 1,
    title: "The Irishman",
    coverImage: "https_specials-1.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-24T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "2000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 2,
    title: "Title 2",
    coverImage: "https_specials-2.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-12T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "2300",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 3,
    title: "Title 3",
    coverImage: "https_specials-3.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-11T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "6000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 4,
    title: "Title 4",
    coverImage: "https_specials-4.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-10T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "4000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 5,
    title: "Title 5",
    coverImage: "https_specials-5.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-15T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "5300",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 6,
    title: "Title 6",
    coverImage: "https_specials-6.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-10-22T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "1200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 7,
    title: "Title 7",
    coverImage: "https_specials-7.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-11-22T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "4500",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 8,
    title: "Title 8",
    coverImage: "https_specials-8.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-07-14T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "2000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 9,
    title: "Title 9",
    coverImage: "https_specials-1.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-04-03T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "2300",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 10,
    title: "Title 10",
    coverImage: "https_specials-2.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-11-23T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "6000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 11,
    title: "Title 11",
    coverImage: "https_specials-3.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-11-04T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "1200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 12,
    title: "Title 12",
    coverImage: "https_specials-4.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-03-03T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "3400",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 13,
    title: "Title 13",
    coverImage: "https_specials-5.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-12-30T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "6500",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 14,
    title: "Title 14",
    coverImage: "https_specials-6.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-07-10T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "5000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 15,
    title: "Title 15",
    coverImage: "https_specials-7.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-05-14T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "1300",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 16,
    title: "Title 16",
    coverImage: "https_specials-8.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-03-25T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "Movie",
    duration: "5000",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 17,
    title: "Title 17",
    coverImage: "https_specials-1.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-08-24T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "400",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  },
  {
    id: 18,
    title: "Title 18",
    coverImage: "https_specials-2.png",
    titleImage: "FeaturedTitleImage.png",
    date: "2021-07-21T12:16:50.894556",
    releaseYear: "2021",
    mpaRating: "18+",
    category: "TV Show",
    duration: "1200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Info About it"
  }
]

//@ts-ignore
let id = null
const Content = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieType>(cards[0]);
  const [enableVideo, setEnableVideo] = useState(false);

  const handleMovieSelect = (movie: MovieType) => {
    setEnableVideo(false)
    setSelectedMovie(movie)
    //@ts-ignore
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(() => {
      setEnableVideo(true)
    }, 2000)

  }

  useEffect(() => {
    setEnableVideo(false)
    id = setTimeout(() => {
      setEnableVideo(true)
    }, 2000)

    return () => {
      //@ts-ignore
      clearTimeout(id)
    }
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.videoContainerWrapper}>
        <div className={styles.videoContainer}>
          {enableVideo ?
            <video autoPlay muted loop>
              <source src={selectedMovie.videoUrl} type="video/mp4"/>
            </video> :
            <img src="/assets/FeaturedCoverImage.png" alt=""/>
          }
        </div>
      </div>

      <div className={styles.featuredMovie}>
        <div className={styles.featuredMovieContainer}>
          <div className={styles.movieLogo}>
            <div className={styles.movieCategory}>{selectedMovie.category}</div>
            <div className={styles.movieTitle}>{selectedMovie.title}</div>
          </div>

          <div className={styles.movieDescription}>
            <div>{selectedMovie.releaseYear} {selectedMovie.mpaRating} {selectedMovie.duration}</div>
            <div>{selectedMovie.description}</div>
          </div>

          <div className={styles.movieActions}>
            <div className={`${styles.btn} ${styles.playButton}`}>Play</div>
            <div className={`${styles.btn} ${styles.infoButton}`}>More Info</div>
          </div>
        </div>
      </div>

      <div className={styles.trendingNow}>
        <CardSlider items={cards} onSelect={handleMovieSelect}/>
      </div>
    </div>
  )
}

export default Content