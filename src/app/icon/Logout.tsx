import * as React from 'react'

const Logout: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M21 12h-8M18 15l2.913-2.913v0a.123.123 0 0 0 0-.174v0L18 9M16 5v-.5 0A1.5 1.5 0 0 0 14.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.5a1.5 1.5 0 0 0 1.5-1.5v0-.5"></path>
    </g>
  </svg>
)

export default React.memo(Logout)
