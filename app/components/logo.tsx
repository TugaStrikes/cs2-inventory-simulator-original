/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function Logo(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 521 83"
      {...props}
    >
      <g fill="#fff">
        <path
          d="m0 68.21 11.95-51.84h10.22L10.22 68.21H0zM17.06 68.21l8.42-36.72h9.58l-1.58 6.91h.36L27 68.21h-9.94zm17.21 0 5.83-25.34c.38-1.54.36-2.66-.07-3.38-.43-.72-1.25-1.08-2.45-1.08-1.2 0-2.23.47-3.1 1.4-.86.94-1.51 2.36-1.94 4.28l-.14-5.33c1.2-2.59 2.8-4.57 4.79-5.94 1.99-1.37 4.16-2.05 6.52-2.05 2.69 0 4.67.95 5.94 2.84 1.27 1.9 1.57 4.33.9 7.31l-6.34 27.29h-9.94zM56.23 68.21l-.43-36.72h10.15l-2.3 31.32h-1.73l12.17-31.32h10.37L67.03 68.21h-10.8zM93.53 68.93c-2.54 0-4.74-.59-6.59-1.76-1.85-1.18-3.28-2.84-4.28-5-1.01-2.16-1.51-4.68-1.51-7.56 0-1.82.22-3.8.65-5.94.43-2.13 1.12-4.25 2.05-6.34s2.12-4 3.56-5.72c1.44-1.73 3.17-3.11 5.18-4.14 2.02-1.03 4.32-1.55 6.91-1.55 2.45 0 4.52.49 6.23 1.48 1.7.98 3.01 2.39 3.92 4.21.91 1.82 1.37 4.06 1.37 6.7 0 1.63-.17 3.24-.5 4.82-.34 1.58-.77 2.98-1.3 4.18H87.34l1.37-6.41h15.7l-2.45 2.81c.24-.91.43-1.97.58-3.17.14-1.2.17-2.36.07-3.49-.1-1.13-.41-2.06-.94-2.81-.53-.74-1.34-1.12-2.45-1.12-1.3 0-2.41.5-3.35 1.51s-1.73 2.32-2.38 3.92c-.65 1.61-1.18 3.28-1.58 5-.41 1.73-.7 3.34-.86 4.82-.17 1.49-.25 2.64-.25 3.46 0 1.68.3 2.92.9 3.71.6.79 1.48 1.19 2.63 1.19s2.11-.4 2.88-1.19c.77-.79 1.49-2.12 2.16-4H108c-1.34 3.94-3.24 6.98-5.69 9.14-2.45 2.17-5.37 3.25-8.78 3.25zM110.59 68.21l8.42-36.72h9.58l-1.58 6.91h.36l-6.84 29.81h-9.94zm17.21 0 5.83-25.34c.38-1.54.36-2.66-.07-3.38-.43-.72-1.25-1.08-2.45-1.08-1.2 0-2.23.47-3.1 1.4-.86.94-1.51 2.36-1.94 4.28l-.14-5.33c1.2-2.59 2.8-4.57 4.79-5.94 1.99-1.37 4.16-2.05 6.52-2.05 2.69 0 4.67.95 5.94 2.84 1.27 1.9 1.57 4.33.9 7.31l-6.34 27.29h-9.94zM147.89 39.27l1.8-7.78h20.45l-1.8 7.78h-20.45zm9.14 29.66c-3.7 0-6.26-1.01-7.7-3.02s-1.73-4.9-.86-8.64l7.56-32.9 10.94-4.39L158.19 58c-.19 1.06-.05 1.85.43 2.38.48.53 1.32.79 2.52.79.48 0 .92-.05 1.33-.14.41-.09.85-.24 1.33-.43l-1.8 7.49c-.53.29-1.21.5-2.05.65-.84.12-1.82.19-2.92.19zM180.29 68.93c-2.26 0-4.31-.53-6.16-1.58-1.85-1.06-3.32-2.69-4.43-4.9-1.1-2.21-1.66-4.99-1.66-8.35 0-3.02.44-5.94 1.33-8.75.89-2.81 2.14-5.3 3.74-7.49 1.61-2.18 3.53-3.91 5.76-5.18 2.23-1.27 4.72-1.91 7.45-1.91 2.5 0 4.66.59 6.48 1.76 1.82 1.18 3.24 2.86 4.25 5.04 1.01 2.18 1.51 4.81 1.51 7.88 0 3.07-.44 6.01-1.33 8.82-.89 2.81-2.16 5.32-3.82 7.52-1.66 2.21-3.59 3.95-5.8 5.22-2.19 1.28-4.64 1.92-7.32 1.92zm.64-7.77c1.1 0 2.11-.53 3.02-1.58.91-1.06 1.73-2.44 2.45-4.14.72-1.7 1.27-3.53 1.66-5.47.38-1.94.58-3.8.58-5.58 0-2.02-.26-3.49-.79-4.43-.53-.94-1.27-1.4-2.23-1.4-1.06 0-2.05.53-2.99 1.58-.94 1.06-1.75 2.44-2.45 4.14-.7 1.7-1.24 3.54-1.62 5.51-.38 1.97-.58 3.84-.58 5.62 0 2.02.26 3.48.79 4.39.53.9 1.25 1.36 2.16 1.36zM198.79 68.21l8.5-36.72h9.58l-2.09 9.07h.36l-6.41 27.65h-9.94zm14.9-21.45.36-6.62c1.39-3.41 2.87-5.82 4.43-7.24 1.56-1.42 3.23-2.12 5-2.12.33 0 .68.02 1.04.07s.71.17 1.04.36L223.34 41c-.34-.14-.83-.25-1.48-.32s-1.14-.11-1.48-.11c-1.63 0-3.04.46-4.21 1.37-1.17.9-2 2.51-2.48 4.82zM221.47 82.97l10.3-21.31 2.23-2.09 11.81-28.08h10.44l-24.84 51.48h-9.94zm8.35-13.61-2.23-37.87h10.37l-.94 32.47-7.2 5.4zM276.98 68.93c-2.79 0-5.12-.48-7.02-1.44-1.9-.96-3.35-2.27-4.36-3.92-1.01-1.66-1.61-3.52-1.8-5.58-.19-2.06 0-4.18.58-6.34h9.43c-.24.86-.38 1.84-.43 2.92-.05 1.08.06 2.11.32 3.1.26.98.74 1.79 1.44 2.41.7.62 1.67.94 2.92.94 1.54 0 2.74-.63 3.6-1.91.86-1.27 1.3-2.72 1.3-4.36 0-1.05-.18-2.15-.54-3.28-.36-1.13-1.09-2.27-2.2-3.42l-4.18-4.54c-1.63-1.78-2.9-3.68-3.82-5.72-.91-2.04-1.37-4.16-1.37-6.37 0-2.69.55-5.22 1.66-7.6 1.1-2.38 2.78-4.31 5.04-5.8 2.26-1.49 5.14-2.23 8.64-2.23 2.59 0 4.73.44 6.41 1.33 1.68.89 2.96 2.06 3.85 3.53.89 1.46 1.4 3.12 1.55 4.97.14 1.85-.02 3.71-.5 5.58h-9.22c.24-.96.38-2.03.43-3.2.05-1.18-.17-2.18-.65-3.02-.48-.84-1.42-1.26-2.81-1.26-1.1 0-2 .32-2.7.97-.7.65-1.19 1.42-1.48 2.3-.29.89-.43 1.72-.43 2.48 0 1.2.23 2.3.68 3.31.46 1.01 1.19 2.06 2.2 3.17l4.1 4.54c1.73 1.92 3.01 3.96 3.85 6.12.84 2.16 1.26 4.56 1.26 7.2 0 2.5-.58 4.91-1.73 7.24s-2.89 4.22-5.22 5.69c-2.31 1.46-5.25 2.19-8.8 2.19zM294.77 68.21l8.42-36.72h9.94l-8.42 36.72h-9.94zm9.21-41.25 2.23-10.58h10.37l-2.23 10.58h-10.37zM311.11 68.21l8.42-36.72h9.58l-1.58 6.91h.36l-6.84 29.81h-9.94zm16.41 0 5.83-25.34c.38-1.54.38-2.66 0-3.38-.38-.72-1.08-1.08-2.09-1.08-1.06 0-1.99.47-2.81 1.4-.82.94-1.44 2.36-1.87 4.28l-.14-5.33c1.2-2.59 2.77-4.57 4.72-5.94s4.02-2.05 6.23-2.05c2.54 0 4.42.95 5.62 2.84 1.2 1.9 1.46 4.33.79 7.31l-6.34 27.29h-9.94zm16.49 0 5.83-25.34c.38-1.54.38-2.66 0-3.38-.38-.72-1.08-1.08-2.09-1.08-1.06 0-1.99.48-2.81 1.44-.82.96-1.46 2.42-1.94 4.39l-.86-5.33c1.58-2.69 3.31-4.72 5.18-6.08s4.01-2.05 6.41-2.05c1.73 0 3.16.43 4.28 1.3 1.13.86 1.91 2.05 2.34 3.56.43 1.51.41 3.28-.07 5.29l-6.34 27.29h-9.93zM368.49 68.93c-2.59 0-4.51-.95-5.76-2.84-1.25-1.9-1.54-4.33-.86-7.31l6.34-27.29h9.94l-5.9 25.34c-.34 1.49-.29 2.6.14 3.35.43.74 1.18 1.12 2.23 1.12 1.1 0 2.06-.47 2.88-1.4.82-.94 1.44-2.36 1.87-4.28l.14 5.33c-1.2 2.59-2.77 4.57-4.72 5.94-1.94 1.36-4.04 2.04-6.3 2.04zm8.28-.72 1.66-6.91h-.36l6.84-29.81h9.94l-8.5 36.72h-9.58zM392.68 68.21l11.95-51.84h9.94l-11.95 51.84h-9.94zM416.95 68.93c-2.16 0-3.84-.68-5.04-2.05-1.2-1.37-1.8-3.28-1.8-5.72 0-2.02.41-3.86 1.22-5.54.82-1.68 2.03-3.17 3.64-4.46s3.59-2.38 5.94-3.24l10.73-3.96-1.66 6.98-4.46 1.8c-1.92.77-3.38 1.66-4.39 2.66-1.01 1.01-1.51 2.18-1.51 3.53 0 .82.25 1.49.76 2.02s1.21.79 2.12.79c.82 0 1.49-.23 2.02-.68.53-.46.89-1.07 1.08-1.84l-.29 4.39c-1.06 1.68-2.27 2.99-3.64 3.92-1.38.93-2.95 1.4-4.72 1.4zm7.84-.72c-.14-.96-.17-1.92-.07-2.88.09-.96.24-1.97.43-3.02l-.29-.07 4.39-19.37c.14-.67.24-1.38.29-2.12.05-.74-.08-1.39-.4-1.94-.31-.55-.9-.83-1.76-.83-.96 0-1.78.38-2.45 1.15-.67.77-1.2 1.92-1.58 3.46h-8.57c.82-3.84 2.42-6.77 4.82-8.78 2.4-2.02 5.45-3.02 9.14-3.02 3.02 0 5.34.61 6.95 1.84 1.61 1.22 2.64 2.81 3.1 4.75.46 1.94.42 4-.11 6.16l-4.54 19.66c-.19.86-.32 1.69-.4 2.48-.07.79-.04 1.64.11 2.56h-9.06zM443.01 39.27l1.8-7.78h20.45l-1.8 7.78h-20.45zm9.14 29.66c-3.7 0-6.26-1.01-7.7-3.02-1.44-2.02-1.73-4.9-.86-8.64l7.56-32.9 10.94-4.39L453.31 58c-.19 1.06-.05 1.85.43 2.38.48.53 1.32.79 2.52.79.48 0 .92-.05 1.33-.14.41-.09.85-.24 1.33-.43l-1.8 7.49c-.53.29-1.21.5-2.05.65-.84.12-1.81.19-2.92.19zM475.41 68.93c-2.26 0-4.31-.53-6.16-1.58-1.85-1.06-3.32-2.69-4.43-4.9-1.1-2.21-1.66-4.99-1.66-8.35 0-3.02.44-5.94 1.33-8.75.89-2.81 2.14-5.3 3.74-7.49 1.61-2.18 3.53-3.91 5.76-5.18 2.23-1.27 4.72-1.91 7.45-1.91 2.5 0 4.66.59 6.48 1.76 1.82 1.18 3.24 2.86 4.25 5.04 1.01 2.18 1.51 4.81 1.51 7.88 0 3.07-.44 6.01-1.33 8.82-.89 2.81-2.16 5.32-3.82 7.52-1.66 2.21-3.59 3.95-5.8 5.22-2.18 1.28-4.63 1.92-7.32 1.92zm.65-7.77c1.1 0 2.11-.53 3.02-1.58.91-1.06 1.73-2.44 2.45-4.14.72-1.7 1.27-3.53 1.66-5.47.38-1.94.58-3.8.58-5.58 0-2.02-.26-3.49-.79-4.43s-1.27-1.4-2.23-1.4c-1.06 0-2.05.53-2.99 1.58-.94 1.06-1.75 2.44-2.45 4.14-.7 1.7-1.24 3.54-1.62 5.51-.38 1.97-.58 3.84-.58 5.62 0 2.02.26 3.48.79 4.39.53.9 1.25 1.36 2.16 1.36zM493.91 68.21l8.5-36.72h9.58l-2.09 9.07h.36l-6.41 27.65h-9.94zm14.91-21.45.36-6.62c1.39-3.41 2.87-5.82 4.43-7.24 1.56-1.42 3.23-2.12 5-2.12.33 0 .68.02 1.04.07s.71.17 1.04.36L518.47 41c-.34-.14-.83-.25-1.48-.32s-1.14-.11-1.48-.11c-1.63 0-3.04.46-4.21 1.37-1.17.9-2 2.51-2.48 4.82z"
          className="st0"
        />
      </g>
      <g fill="#898686">
        <path
          d="M32.9 26.87c-1.12 0-2.11-.26-2.98-.79-.87-.52-1.54-1.3-2.02-2.32-.48-1.02-.71-2.26-.71-3.72 0-.95.11-1.98.34-3.07.23-1.09.57-2.17 1.04-3.23.46-1.06 1.05-2.02 1.77-2.89.71-.87 1.56-1.57 2.54-2.09.98-.52 2.08-.79 3.32-.79 1.24 0 2.24.23 3 .7.76.46 1.33 1.08 1.71 1.84.38.76.6 1.58.66 2.45.06.87-.01 1.72-.2 2.55h-4.29c.12-.45.2-.96.23-1.54s-.04-1.07-.21-1.48-.55-.62-1.13-.62-1.07.24-1.5.71c-.43.48-.79 1.08-1.07 1.82s-.52 1.52-.7 2.34c-.18.82-.31 1.59-.39 2.3s-.12 1.27-.12 1.68c0 .88.14 1.49.41 1.82.27.33.6.5.98.5.55 0 1.04-.3 1.48-.89.44-.59.82-1.55 1.13-2.86h4.29c-.55 2.57-1.52 4.48-2.93 5.72-1.41 1.24-2.96 1.86-4.65 1.86zM46.87 26.87c-1.26 0-2.34-.25-3.23-.75s-1.53-1.2-1.91-2.11c-.38-.9-.45-1.98-.21-3.21h3.93c-.05.41-.03.8.05 1.18.08.38.26.7.54.95.27.25.66.38 1.16.38.57 0 1.01-.15 1.3-.45.3-.3.45-.68.45-1.16 0-.43-.11-.82-.34-1.16-.23-.34-.57-.7-1.02-1.05l-1.54-1.25c-.76-.62-1.32-1.26-1.68-1.91-.36-.65-.54-1.42-.54-2.3 0-1.14.27-2.17.8-3.09.54-.92 1.27-1.64 2.21-2.18.94-.54 2.01-.8 3.2-.8 1.02 0 1.91.21 2.66.63.75.42 1.3 1.02 1.64 1.82.34.8.42 1.79.23 2.98h-3.93c.07-.33.08-.64.02-.91a1.22 1.22 0 0 0-.38-.66c-.19-.17-.46-.25-.82-.25-.45 0-.81.15-1.07.45-.26.3-.39.68-.39 1.16 0 .33.08.63.23.89.15.26.43.56.84.89l1.82 1.46c.71.57 1.26 1.24 1.64 2 .38.76.57 1.64.57 2.64 0 1.17-.26 2.19-.77 3.05s-1.24 1.55-2.18 2.04c-.92.47-2.02.72-3.28.72zM56.27 12.15l.89-3.86h10.15l-.89 3.86H56.27zm4.53 14.72c-1.83 0-3.11-.5-3.82-1.5s-.86-2.43-.43-4.29L60.3 4.75l5.43-2.18-4.36 18.86c-.1.52-.02.92.21 1.18.24.26.65.39 1.25.39.24 0 .46-.02.66-.07s.42-.12.66-.21l-.89 3.72c-.26.14-.6.25-1.02.32-.41.07-.89.11-1.44.11zM65.34 26.51l4.22-18.22h4.75l-1.04 4.5h.18l-3.18 13.72h-4.93zm7.39-10.65.18-3.29c.69-1.69 1.42-2.89 2.2-3.59.77-.7 1.6-1.05 2.48-1.05.17 0 .34.01.52.04.18.02.35.08.52.18L77.52 13c-.17-.07-.41-.12-.73-.16-.32-.04-.57-.05-.73-.05-.81 0-1.51.23-2.09.68-.59.45-1 1.25-1.24 2.39zM76.45 26.51l4.18-18.22h4.93l-4.18 18.22h-4.93zm4.57-20.47L82.13.79h5.15l-1.11 5.25h-5.15zM84.52 26.51 90.45.79h4.93l-5.93 25.72h-4.93zm8.83 0-2.11-9.47 5.43-8.75h5.47l-6.61 9.58-.18-1.68 2.93 10.33h-4.93zM106.43 26.87c-1.26 0-2.35-.29-3.27-.88-.92-.58-1.63-1.41-2.13-2.48s-.75-2.32-.75-3.75c0-.91.11-1.89.32-2.95s.55-2.11 1.02-3.14c.46-1.04 1.05-1.98 1.77-2.84.71-.86 1.57-1.54 2.57-2.05 1-.51 2.14-.77 3.43-.77 1.21 0 2.24.25 3.09.73.85.49 1.49 1.19 1.95 2.09.45.91.68 2.01.68 3.32 0 .81-.08 1.61-.25 2.39-.17.79-.38 1.48-.64 2.07h-10.86l.68-3.18h7.79l-1.21 1.39c.12-.45.21-.98.29-1.57.07-.59.08-1.17.04-1.73-.05-.56-.2-1.02-.46-1.39-.26-.37-.67-.55-1.21-.55-.64 0-1.2.25-1.66.75s-.86 1.15-1.18 1.95c-.32.8-.58 1.63-.79 2.48-.2.86-.35 1.66-.43 2.39s-.12 1.31-.12 1.71c0 .83.15 1.45.45 1.84.3.39.73.59 1.3.59.57 0 1.05-.2 1.43-.59s.74-1.05 1.07-1.98h4.29c-.67 1.95-1.61 3.46-2.82 4.54-1.25 1.07-2.7 1.61-4.39 1.61zM116.21 10.54l.57-2.46c1.19-.17 2.04-.54 2.55-1.13.51-.58.88-1.35 1.09-2.3l1.82.5h-4.75L118.72 0h5.61l-.96 4.25c-.38 1.74-1.14 3.14-2.27 4.2-1.14 1.06-2.77 1.76-4.89 2.09zM123.82 26.87c-1.26 0-2.34-.25-3.23-.75s-1.53-1.2-1.91-2.11c-.38-.9-.45-1.98-.21-3.21h3.93c-.05.41-.03.8.05 1.18.08.38.26.7.54.95.27.25.66.38 1.16.38.57 0 1.01-.15 1.3-.45.3-.3.45-.68.45-1.16 0-.43-.11-.82-.34-1.16-.23-.34-.57-.7-1.02-1.05L123 18.22c-.76-.62-1.32-1.26-1.68-1.91-.36-.65-.54-1.42-.54-2.3 0-1.14.27-2.17.8-3.09.54-.92 1.27-1.64 2.21-2.18.94-.54 2.01-.8 3.2-.8 1.02 0 1.91.21 2.66.63.75.42 1.3 1.02 1.64 1.82.34.8.42 1.79.23 2.98h-3.93c.07-.33.08-.64.02-.91a1.22 1.22 0 0 0-.38-.66c-.19-.17-.46-.25-.82-.25-.45 0-.81.15-1.07.45-.26.3-.39.68-.39 1.16 0 .33.08.63.23.89.15.26.43.56.84.89l1.82 1.46c.71.57 1.26 1.24 1.64 2 .38.76.57 1.64.57 2.64 0 1.17-.26 2.19-.77 3.05s-1.24 1.55-2.18 2.04c-.91.49-2.01.74-3.28.74z"
          className="st1"
        />
      </g>
    </svg>
  );
}
