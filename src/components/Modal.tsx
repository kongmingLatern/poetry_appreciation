import { useState } from 'react'
import { Button, Modal } from 'antd'
import Form from './Form'

const App = props => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button
        type={'dashed'}
        onClick={showModal}
        className="bg-orange-500 color-white"
        size='large'
      >
        {props.text}
      </Button>
      <Modal
        title={props.text}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...props} isShow={handleCancel} />
      </Modal>
    </>
  )
}

export default App
