import * as React from 'react'

const NeoAI: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 16 18"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M6.669 9.903A6.667 6.667 0 0 1 .5 16.551V7.169A6.67 6.67 0 0 1 6.669.52zM12.105.5A3.396 3.396 0 0 1 15.5 3.896v.224a3.396 3.396 0 1 1-6.791 0v-.224A3.396 3.396 0 0 1 12.105.5ZM12.105 9.556a3.396 3.396 0 0 1 3.395 3.396v.224a3.396 3.396 0 1 1-6.791 0v-.224a3.396 3.396 0 0 1 3.396-3.396Z"
    ></path>
  </svg>
)

export default React.memo(NeoAI)
