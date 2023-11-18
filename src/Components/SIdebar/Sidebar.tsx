import React from 'react';
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  const userInfo = {
    fullName: "Test UserName",
    img: ""
  }
  const menuItems = [
    {
      title: 'Search',
      img: '/assets/icons/search.png'
    },
    {
      title: 'Home',
      img: '/assets/icons/home.png'
    },
    {
      title: 'TV Show',
      img: '/assets/icons/series.png'
    },
    {
      title: 'Movies',
      img: '/assets/icons/movie.png'
    },
    {
      title: 'Genres',
      img: '/assets/icons/genres.png'
    },
    {
      title: 'Watch Later',
      img: '/assets/icons/history.png'
    },
  ]

  const menuRestItem = [
    {title: "Language"},
    {title: "Help"},
    {title: "Exit"},
  ]

  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuContent}>
        <div className={styles.profileInfo}>
          <span>{userInfo.fullName}</span>
        </div>
        <div className={styles.menuItems}>
          {
            menuItems.map((item, index) => {
              return (
                <div className={styles.menuItem} key={index}>
                  <img src={item.img} alt="" style={{width: "26px", height: "26px"}}/>
                  <span>{item.title}</span>
                </div>
             )
            })
          }
        </div>
        <div className={styles.menuRest}>
          {menuRestItem.map((item, index) => {
            return (
              <span key={index}>{item.title}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;