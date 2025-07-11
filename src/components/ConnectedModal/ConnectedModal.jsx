import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/slices/modalSlice'
import Modal from '../Modal/Modal'

const ConnectedModal = () => {
  const modal = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const content = Array.isArray(modal.content) ? modal.content : []

  return (
    <Modal isOpen={modal.isOpen} onClose={handleClose}>
      <h2>{modal.title}</h2>
      <div>
        {content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </Modal>
  )
}

export default ConnectedModal
