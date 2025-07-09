import React from 'react'
import styles from './Footer.module.css'
import instagram from '../../assets/images/svg/ic-instagram.svg'
import whatsapp from '../../assets/images/svg/ic-whatsapp.svg'


const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div>
        <h1>Contact</h1>
      </div>
      <div className={styles.footer_cards}>
        <div className={styles.footer_info_wrapper}>
          <div className={styles.footer_phone_socials}>
            <div className={styles.footer_phone}>
              <p>Phone</p>
              <p>+49 30 915-88492</p>
            </div>
            <div className={styles.footer_socials}>
              <p>Socials</p>
              <a href="#">{instagram}</a>
              <a href="#">{whatsapp}</a>
            </div>
          </div>
          <div className={styles.footer_address_working_hours}>
            <div className={styles.footer_address}>
              <p>Address</p>
              <p>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
            </div>
            <div className={styles.footer_working_hours}>
              <p>Working Hours</p>
              <p>24 hours a day</p>
            </div>
          </div>
        </div>
        <div className={styles.footer_map}>
          {' '}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.826268337366!2d13.414859276739949!3d52.51314577981495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e56fa34a65%3A0x80b6a3f172a2270b!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1622039898429!5m2!1sen!2sus&zoom=15&disableDefaultUI=true&scrollwheel=false"></iframe>
        </div>
      </div>
    </footer>
  )
}

export default Footer
