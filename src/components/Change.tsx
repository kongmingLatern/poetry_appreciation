import { remove } from '@/utils'
import { Modal } from 'antd'
import { useState } from 'react'
import ChangeForm from './ChangeForm'
import Form from './Form'

export default function Change(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <a onClick={showModal}>修改</a>
      <a onClick={() => remove('poem', props.id)}>Delete</a>
      <Modal
        title={props.text}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <ChangeForm {...props} isShow={handleCancel} />
      </Modal>
    </>
  )
}
