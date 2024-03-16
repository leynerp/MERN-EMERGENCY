import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'
export default function Header () {
  return (
    <Menubar className='flex pl-10 items-end justify-between pr-4'>
      <MenubarMenu>
        <svg
          viewBox='0 0 16 16'
          version='1.1'
          height='30'
          width='30'
          className='si-glyph si-glyph-ambulance'
          fill='#000000'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <title>831</title> <defs> </defs>{' '}
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              {' '}
              <g transform='translate(0.000000, 2.000000)' fill='#434343'>
                {' '}
                <g transform='translate(2.000000, 0.000000)'>
                  {' '}
                  <circle
                    cx='1.433'
                    cy='9.433'
                    r='1.433'
                    className='si-glyph-fill'
                  >
                    {' '}
                  </circle>{' '}
                  <ellipse
                    cx='9.451'
                    cy='9.474'
                    rx='1.451'
                    ry='1.474'
                    className='si-glyph-fill'
                  >
                    {' '}
                  </ellipse>{' '}
                  <path
                    d='M8.953,2.047 C8.953,0.925 9.053,0.016 8.009,0.016 C6.964,0.016 7.016,0.925 7.016,2.047 L8.953,2.047 L8.953,2.047 Z'
                    className='si-glyph-fill'
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
                <path
                  d='M15.338,5.735 C15.338,5.735 12.729,2 11.994,2 L1.392,2 C0.659,2 0.064,2.599 0.064,3.336 L0.064,8.651 C0.064,9.387 0.392,9.987 0.392,9.987 L0.945,9.987 C0.922,9.846 0.902,9.704 0.902,9.556 C0.902,8.118 2.062,6.954 3.504,6.954 C4.938,6.954 6.102,8.118 6.102,9.556 C6.102,9.703 6.082,9.846 6.059,9.987 L8.946,9.987 C8.923,9.846 8.903,9.704 8.903,9.556 C8.903,8.118 10.063,6.954 11.505,6.954 C12.939,6.954 14.103,8.118 14.103,9.556 C14.103,9.703 14.083,9.846 14.06,9.987 L14.654,9.987 C15.388,9.987 15.983,9.387 15.983,8.651 L15.983,7.321 C15.981,6.487 15.338,5.735 15.338,5.735 L15.338,5.735 Z M8.047,5.047 L7.043,5.047 L7.043,6.052 L5.958,6.052 L5.958,5.047 L4.953,5.047 L4.953,3.963 L5.958,3.963 L5.958,2.958 L7.043,2.958 L7.043,3.963 L8.047,3.963 L8.047,5.047 L8.047,5.047 Z M9.918,6.042 L9.918,2.904 L11.285,2.904 C11.921,2.904 12.66,3.935 12.66,3.935 L14.124,6.041 L9.918,6.041 L9.918,6.042 Z'
                  className='si-glyph-fill'
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        <h1 className='font-bold text-lg text-pretty'>Medical Emergency Management System </h1>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger> </MenubarTrigger>
        <MenubarContent>
          <MenubarItem inset>Edit...</MenubarItem>

          <MenubarSeparator />
          <MenubarItem className='flex gap-x-2' inset>
            <svg
              viewBox='0 0 24 24'
              height='20'
              width='20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.51998 21.7626 10.4466 21.9359 12 21.9827M8 8C8 5.17157
              8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157
              21 8V10V14V16C21 18.8284 21 20.2426 20.1213 21.1213C19.3529 21.8897 18.175 21.9862 16 21.9983'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{' '}
                <path
                  d='M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447
              19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{' '}
                <path
                  d='M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>{' '}
              </g>
            </svg>{' '}
            <span>Log In</span>{' '}
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className='flex gap-x-2' inset>
            <svg
              height='20'
              width='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M15 12L6 12M6 12L8 14M6 12L8 10'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>{' '}
                <path
                  d='M12 21.9827C10.4465 21.9359 9.51995 21.7626 8.87865 21.1213C8.11027 20.3529 8.01382 19.175 8.00171 17M16 21.9983C18.175 21.9862 19.3529 21.8897 20.1213 21.1213C21 20.2426 21 18.8284 21 16V14V10V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1715 2 9.75733 2 8.87865 2.87868C8.11027 3.64706 8.01382 4.82497 8.00171 7'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{' '}
                <path
                  d='M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>{' '}
              </g>
            </svg>
            <span>Log Out</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
