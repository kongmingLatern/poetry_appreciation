import { remove } from '@/utils'
import { Modal, Space } from 'antd'
import { useState } from 'react'
import ChangeForm from './ChangeForm'

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
      <Space>
        <a onClick={showModal}>修改</a>
        <a onClick={() => remove('poem', props.id)}>
          Delete
        </a>
      </Space>
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
