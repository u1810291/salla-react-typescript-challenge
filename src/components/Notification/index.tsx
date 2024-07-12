'use client'
import React from 'react'
import Image from 'next/image'
import CrossIcon from '../../assets/images/icons/cross.svg'
import cn from 'classnames'

export enum NotificationTypeE {
  none = 'none',
  info = 'info',
  error = 'error',
  success = 'success',
  warning = 'warning'
}

export interface NotificationPropsI {
  message: string;
  type: NotificationTypeE;
  timer: number;
  component: React.ReactNode
}

export default function Notification({ message, type, component, timer }: NotificationPropsI) {

  const notificationType = {
    [NotificationTypeE.error]: 'red',
    [NotificationTypeE.none]: 'blue',
    [NotificationTypeE.success]: 'teal',
    [NotificationTypeE.warning]: 'yellow',
  }
  return type === NotificationTypeE.none ? (
    <div className="space-y-3 absolute bottom-0.5">
      <div className={cn(`bg-${notificationType[type]}-100`, `border-${notificationType[type]}-200`,'max-w-xs border text-sm text-gray-800 rounded-lg dark:bg-white/10 dark:border-white/20 dark:text-white" role="alert')}>
        <div className="flex p-4">
          {message} Hello world
          {component}
          <div className="ms-auto">
            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white">
              <Image src={CrossIcon} alt="Cross icon" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ): null
}
