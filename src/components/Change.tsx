import { remove } from '@/utils'
import { Button, Modal, Space } from 'antd'
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
        <Button onClick={showModal} type={'primary'}>
          修改
        </Button>
        <Button
          onClick={() => remove(props.type, props.id)}
          danger
        >
          删除
        </Button>
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
