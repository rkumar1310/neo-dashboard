import * as React from 'react'

const Supervisor: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor"
    version="1.1"
    viewBox="0 0 59 64"
    {...props}
  >
    <g>
      <g>
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <path d="M47 45v15c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h25.9L47 18.1V33"></path>
          <path d="M47 18.9H30c-1.1 0-2-.9-2-2V1"></path>
          <path d="M9 17h13"></path>
          <path d="M9 27h31"></path>
          <path d="M9 34h31"></path>
          <path d="M9 43h24"></path>
          <path d="M9 49h17"></path>
          <g transform="translate(27 29)">
            <path
              strokeLinejoin="round"
              d="m0 30 3.9-9.4L24.2.3c.4-.4 1.1-.4 1.6 0l3.9 3.9c.4.4.4 1.1 0 1.6L9.4 26.1z"
            ></path>
            <path d="m21.9 2.7 5.4 5.4"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default React.memo(Supervisor)
