import Swal from 'sweetalert2'

import { CallAlert, CallSuccessAlert, CallErrorAlert } from '../../types'

const styledSwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary'
  },
  buttonsStyling: false
})

export const call: CallAlert = ({ type, title, description, onConfirm }) => {
  void styledSwal
    .fire({
      icon: type,
      title,
      text: description,
      allowOutsideClick: false,
      returnFocus: false
    })
    .then((isConfirm) => {
      if (isConfirm && onConfirm) {
        onConfirm()
      }
    })
}

export const callSuccess: CallSuccessAlert = (input) => {
  return call({ type: 'success', ...input })
}

export const callError: CallErrorAlert = (input) => {
  return call({ type: 'error', ...input })
}
