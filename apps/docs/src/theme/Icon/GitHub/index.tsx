import { IconProps } from "@medusajs/icons/dist/types"
import clsx from "clsx"
import React from "react"

const IconGitHub = (props: IconProps) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("text-ui-fg-subtle", props.className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.22205C5.0275 1.22205 1 5.24955 1 10.222C1 14.2045 3.57625 17.5683 7.15375 18.7608C7.60375 18.8395 7.7725 18.5695 7.7725 18.3333C7.7725 18.1195 7.76125 17.4108 7.76125 16.657C5.5 17.0733 4.915 16.1058 4.735 15.5995C4.63375 15.3408 4.195 14.542 3.8125 14.3283C3.4975 14.1595 3.0475 13.7433 3.80125 13.732C4.51 13.7208 5.01625 14.3845 5.185 14.6545C5.995 16.0158 7.28875 15.6333 7.80625 15.397C7.885 14.812 8.12125 14.4183 8.38 14.1933C6.3775 13.9683 4.285 13.192 4.285 9.74955C4.285 8.7708 4.63375 7.9608 5.2075 7.3308C5.1175 7.1058 4.8025 6.1833 5.2975 4.9458C5.2975 4.9458 6.05125 4.70955 7.7725 5.8683C8.4925 5.6658 9.2575 5.56455 10.0225 5.56455C10.7875 5.56455 11.5525 5.6658 12.2725 5.8683C13.9938 4.6983 14.7475 4.9458 14.7475 4.9458C15.2425 6.1833 14.9275 7.1058 14.8375 7.3308C15.4113 7.9608 15.76 8.75955 15.76 9.74955C15.76 13.2033 13.6562 13.9683 11.6538 14.1933C11.98 14.4745 12.2613 15.0145 12.2613 15.8583C12.2613 17.062 12.25 18.0295 12.25 18.3333C12.25 18.5695 12.4188 18.8508 12.8688 18.7608C16.4238 17.5683 19 14.1933 19 10.222C19 5.24955 14.9725 1.22205 10 1.22205Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconGitHub
