import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slices/modalSlice'
import GetDiscountButton from '../../ui/GetDiscountButton/GetDiscountButton'
import styles from './DiscountForm.module.css'
import discountImage from '../../assets/images/svg/image.svg'
import { API_URL } from '../../utils/api'

const DiscountForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isFormValid() || isSubmitting) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post(`${API_URL}/sale/send`, {
        name,
        phone,
        email,
      })

      if (response.status === 200) {
        dispatch(
          openModal({
            title: 'Success',
            content: ['Your request has been submitted successfully!'],
          })
        )
        setIsSubmitted(true)
        clearForm()
      }
    } catch (error) {
      dispatch(
        openModal({
          title: 'Error',
          content:
            'There was an error submitting your request. Please try again later.',
        })
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const isNameValid = () => /^[A-Za-z\s]+$/.test(name)
  const isPhoneValid = () => /^\d{10,15}$/.test(phone)
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isFormValid = () => isNameValid() && isPhoneValid() && isEmailValid()

  const clearForm = () => {
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <div className="globalContainer">
      <div className={styles.discountFormContainer}>
        <h2>5% off on the first order</h2>
        <div className={styles.formContainer}>
          <div className={styles.imageContainer}>
            <img
              src={discountImage}
              alt="Discount"
              className={styles.discountImage}
            />
          </div>
          <div className={styles.formContent}>
            <form onSubmit={handleSubmit} className={styles.formGroupBox}>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-invalid={!isNameValid()}
                  />
                  {!isNameValid() && <div className={styles.tooltip}></div>}
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="tel"
                    value={phone}
                    placeholder="Phone number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-invalid={!isPhoneValid()}
                  />
                  {!isPhoneValid() && <div className={styles.tooltip}></div>}
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={!isEmailValid()}
                  />
                  {!isEmailValid() && <div className={styles.tooltip}></div>}
                </label>
              </div>
              <GetDiscountButton
                onClick={handleSubmit}
                disabled={!isFormValid() || isSubmitting || isSubmitted}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountForm
