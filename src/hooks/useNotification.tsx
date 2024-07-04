import { useContext, createContext, useState } from 'react'
import Notification, { NotificationTypeE } from '../components/Notification'

const NotificationContext = createContext({
  setTimer: (state: number) => {},
  setMessage: (state: string) => {},
  setType: (state: NotificationTypeE) => {},
  setComponent: (state: React.ReactNode) => {}
})

export const NotificationProvider = ({ children }) => {
  const [timer, setTimer] = useState<number>(1000)
  const [message, setMessage] = useState<string>('')
  const [component, setComponent] = useState<React.ReactNode>(null)
  const [type, setType] = useState<NotificationTypeE>(NotificationTypeE.none)

  return (
    <NotificationContext.Provider value={{ setType, setTimer, setMessage, setComponent }}>
      <Notification message={message} type={type} timer={timer} component={component} />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
