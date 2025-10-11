import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20"
    viewBox="-11.5 -10.232 23 20.463"
    {...props}
  >
    <circle r={2.05} fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB">
      <ellipse rx={11} ry={4.2} />
      <ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </g>
  </svg>
)
export default SvgComponent