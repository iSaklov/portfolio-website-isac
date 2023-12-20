import { classNames } from '@/utils/classNames'

type CustomLabelType = {
  position: 'left' | 'right'
}

export default function CustomLabel({ position }: CustomLabelType) {
  return (
    <div
      className={classNames(
        'absolute top-0 inline-flex h-full cursor-pointer items-center justify-center bg-zinc-700/25 hover:bg-zinc-700/40 group-focus:outline-none',
        position === 'left' ? 'left-0 rounded-s-lg' : 'right-0 rounded-e-lg'
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={classNames(
          'h-8 w-8 text-white md:h-10 md:w-10 lg:h-12 lg:w-12',
          position === 'right' ? 'rotate-180' : ''
        )}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </div>
  )
}
