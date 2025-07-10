import styles from './Counter.module.css'
import minus from '../../assets/images/svg/minus.svg'
import plus from '../../assets/images/svg/plus.svg'

const Counter = ({ quantity, setQuantity }) => {
  const handleIncrement = (e) => {
    e.stopPropagation()
    setQuantity(quantity + 1)
  }

  const handleDecrement = (e) => {
    e.stopPropagation()
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }

  const handleChange = (e) => {
    e.stopPropagation()
    const value = Number(e.target.value)
    setQuantity(value >= 1 ? value : 1)
  }

  return (
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={handleDecrement}>
        <img src={minus} alt="Decrease" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className={styles.quantityInput}
        min="1"
        onFocus={(e) => e.stopPropagation()}
      />

      <button className={styles.button} onClick={handleIncrement}>
        <img src={plus} alt="Increase" />
      </button>
    </div>
  )
}

export default Counter

//
// const Counter = ({ quantity, setQuantity }) => {
//   const handleIncrement = (e) => {
//     e.stopPropagation();
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = (e) => {
//     e.stopPropagation();
//     setQuantity(quantity > 0 ? quantity - 1 : 0);
//   };

//   const handleChange = (e) => {
//     e.stopPropagation();
//     setQuantity(Number(e.target.value));
//   };

//   return (
//     <div className={styles.counterContainer}>
//       <button className={styles.button} onClick={handleDecrement}></button>
//       <input
//         type="number"
//         value={quantity}
//         onChange={handleChange}
//         className={styles.quantityInput}
//         min="1"
//         onFocus={(e) => e.stopPropagation()} // Ensure focus doesn't cause issues
//       />
//       <button className={styles.button} onClick={handleIncrement}></button>
//     </div>
//   );
// };

// export default Counter;
