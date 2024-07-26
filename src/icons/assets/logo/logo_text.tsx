import type React from 'react'
import type { IconProps } from 'icons/IconProps'

export const SolidLogoText: React.FC<IconProps> = ({ className, size }) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width={size}
		height={size}
		viewBox='0 0 2500 2500'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M630.19 825.94c7.13 13.36 17.81 25.87 31.74 37.18 10.82 8.79 28.72 18.68 54.72 30.24 9.37 4.17 19.79 8.54 31.16 13.09-2.96 39.36-3.64 78.79-2.01 117.88 2.46 58.88 9.64 105.78 15.83 136.77-15.44 12.79-28.04 23.25-36.3 30.11-3.49.13-6.99.28-10.51.51-40.83 2.61-80.85 51.4-85.27 56.95-4.32 5.41-5.49 13.39-2.97 20.23 2.48 6.74 8.06 11.07 14.21 11.07h.28c.78-.02 32.68-.61 81.9 1.87a1310.39 1310.39 0 0 0-29.07 33.86c-29.87 36.07-46.46 60.13-47.15 61.13a23.732 23.732 0 0 0-4.16 12.95c-4.5 8.15-7.33 14.28-8.19 16.19-2.97 6.58-2.33 14.64 1.61 20.45 3 4.41 7.45 6.86 12.06 6.86 1.46 0 2.92-.24 4.37-.75.4-.14 9.37-3.25 24.98-8.12 20.24 11.43 52.7 28.7 95.1 47.7l29.62-10.78c-39.65-16.98-72.12-33.22-95.46-45.72 41.48-12.03 103.14-28.12 172.1-40.15 9.9 15.72 22.2 30.66 36.62 44.65l27.76-10.1c4.35-1.58 8.91-2.39 13.54-2.39 14.91 0 28.5 8.44 35.24 21.43l50.81-8.96c-5.01-7.78-9.24-15.37-12.79-22.49-6.55 3.95-12.62 6.52-17.02 6.52-1.86 0-3.42-.46-4.6-1.46-4.03-3.42-6.16-8.25-6.16-13.95 0-9.86 6.34-21.14 16.97-30.16 17.02-14.46 39.87-18.58 50.93-9.18 1.54 1.31 2.95 3.92.86 8.85-1.26 2.99-3.68 6.59-7.17 10.71-.21.25-.44.5-.66.76 19.56 11.91 43.44 24.28 70.77 34.34l92.77-16.36c2.27-.4 4.59-.6 6.88-.6 5.85 0 11.43 1.27 16.47 3.57 5.04-2.3 10.62-3.57 16.47-3.57 2.3 0 4.61.2 6.88.6l93.14 16.42c27.25-10.06 51.02-22.43 70.47-34.34-.24-.27-.48-.55-.71-.82-3.49-4.11-5.91-7.71-7.17-10.71-2.09-4.94-.68-7.54.86-8.85 11.06-9.4 33.9-5.28 50.93 9.18 10.62 9.03 16.97 20.3 16.97 30.16 0 5.7-2.13 10.53-6.16 13.95-1.18 1-2.74 1.46-4.6 1.46-4.39 0-10.42-2.55-16.94-6.47-3.51 7.12-7.7 14.7-12.67 22.48l50.61 8.92c6.74-13 20.33-21.44 35.24-21.44 4.63 0 9.18.8 13.54 2.39l28.49 10.37c14.48-14.01 26.84-28.99 36.78-44.74 68.58 12.02 129.89 28.02 171.21 39.99-23.34 12.5-55.8 28.74-95.45 45.71l29.62 10.78c42.39-19 74.86-36.27 95.09-47.7 15.61 4.87 24.58 7.98 24.99 8.12 1.44.51 2.91.75 4.36.75 4.61 0 9.06-2.45 12.06-6.86 3.94-5.81 4.58-13.87 1.61-20.45-.86-1.91-3.69-8.03-8.19-16.19-.1-4.59-1.52-9.1-4.16-12.95-.69-1.01-17.28-25.07-47.15-61.13a1290.96 1290.96 0 0 0-29.07-33.86c49.21-2.48 81.11-1.88 81.9-1.87h.28c6.15 0 11.73-4.34 14.21-11.07 2.52-6.84 1.35-14.82-2.97-20.23-4.43-5.55-44.45-54.35-85.27-56.95-3.52-.22-7.02-.38-10.51-.51-8.26-6.86-20.86-17.32-36.3-30.11 3.07-15.39 6.39-34.71 9.25-57.47 17.18-3.2 33.36-7.08 48.18-11.61 23.12-7.07 41.84-15.38 55.63-24.71 18.54-12.54 28.37-27.09 29.21-43.25.48-9.04-1.83-22.56-15.5-35.61-8.37-7.99-19.95-14.87-35.43-21.03-19.15-7.63-44.36-14.1-75.27-19.33-1.31-38.2-4.75-76.46-10.36-114.41-11.67-79.07-32.72-156.98-62.54-231.56-4.27-10.69-14.37-17.07-27.01-17.07-5.03 0-20.32 0-68.35 25.17-16.18 8.48-33.61 18.56-51.31 29.61l-17.84-48.22-224.66 20.57-280.03-55.37-60.49 74.89c-13.11-7.88-25.93-15.13-38.04-21.48-48.03-25.17-63.33-25.17-68.35-25.17-12.64 0-22.74 6.38-27.01 17.07-15.73 39.34-28.99 79.61-39.75 120.48-60.17-17.4-97.21-28.52-98.02-28.77a23.61 23.61 0 0 0-6.84-1.01c-6 0-11.88 2.28-16.35 6.53-1.04.99-10.47 10.11-19.65 24.64-12.88 20.38-19.27 42-18.47 62.54.5 13.7 4.15 26.96 10.8 39.41Zm10.64 437.52c-.78 0-1.49-.42-1.84-1.11-.34-.7-.26-1.53.23-2.13 1.62-2.03 39.99-49.66 76.3-51.97 88.61-5.66 166.92 21.43 217.01 45.15 54.26 25.69 88.06 53.12 88.39 53.39a2 2 0 0 1 .51 2.47 1.996 1.996 0 0 1-2.32.99c-177.5-50.56-376.29-46.83-378.28-46.79Zm341.21-133c0-30.65 4.33-59.95 12.38-84.93l136.31 42.65c1.87 13.58 2.86 27.78 2.86 42.28 0 4.03-.1 8.03-.25 12.01l-66.85 38.59 55.43 32c-2.89 9.32-6.27 18.08-10.15 26.1-14.29 29.53-33.45 45.79-53.96 45.79-20.51 0-39.68-16.26-53.96-45.79-14.07-29.07-21.81-67.67-21.81-108.7ZM850.77 1293.3c.03.46.06.91.1 1.37-39.57 1.16-84.42 7.45-130.59 23.5 9.16-10.8 19.35-22.45 30.5-34.68 29.71 1.99 63.77 5.07 99.99 9.81Zm-202.05 123.35c-.22.08-.44.11-.66.11-.55 0-1.09-.23-1.47-.65-.54-.59-.68-1.44-.35-2.17 1.11-2.46 27.55-60.39 61.98-74.03 84.22-33.36 165.75-31.9 219.31-24.8 58.03 7.7 96.73 23.51 97.11 23.67.87.36 1.37 1.27 1.2 2.2-.17.92-.95 1.61-1.89 1.65-182.37 7.15-373.32 73.35-375.23 74.02Zm601.28-36.73c-29.74 0-52.06-19.94-62.71-31.82-15.72-17.53-25.87-39.21-25.87-55.25 0-19.54 55.68-24.76 88.59-24.76 32.91 0 88.59 5.21 88.59 24.76 0 16.04-10.16 37.72-25.87 55.25-10.67 11.89-32.99 31.82-62.73 31.82Zm603.41 36.2c-.39.42-.92.65-1.47.65-.22 0-.44-.04-.66-.11-1.91-.67-192.85-66.87-375.22-74.01-.94-.04-1.73-.72-1.89-1.65-.17-.93.34-1.84 1.2-2.2.38-.16 39.08-15.98 97.11-23.67 53.56-7.1 135.09-8.57 219.31 24.8 34.43 13.64 60.87 71.57 61.98 74.03.32.71.18 1.57-.36 2.16Zm-73.7-97.95c-45.79-15.92-90.28-22.23-129.6-23.46.04-.51.08-1.02.11-1.54 35.85-4.67 69.56-7.71 98.99-9.68 11.15 12.22 21.34 23.88 30.5 34.68Zm81.07-57.96c.48.61.57 1.44.23 2.13-.34.7-1.05 1.11-1.84 1.11-1.98-.04-200.79-3.76-378.28 46.79-.18.05-.37.08-.55.08-.73 0-1.42-.4-1.77-1.07-.44-.84-.23-1.87.51-2.47.33-.27 34.14-27.7 88.39-53.39 50.09-23.72 128.41-50.8 217.01-45.15 36.31 2.31 74.68 49.94 76.3 51.97Zm-834.1-664.25a2.01 2.01 0 0 1 1.94-.71l260.11 51.43 208.61-19.1c.9-.08 1.74.45 2.06 1.3l83.72 226.19c-56.42-5.35-249.25-23.91-280.47-30.83-31.17-6.91-288.39-93.13-364.48-118.72l88.51-109.56ZM672.46 715.12c.52-.5 48.88 13.63 121.81 34.6 11.37-47.42 26.2-94.1 44.36-139.52.59-1.49 2.18-3.28 6.38-3.39.15 0 .3-.01.45-.01 14.21 0 50.65 16.93 92.6 41.98l-93.21 115.4s296.19 113.04 454.04 153.44c157.85 40.4 353.25 39.07 353.25 39.07l-109.56-296.02c49.78-31.42 95.59-53.87 111.95-53.87.15 0 .31 0 .45.01 4.19.11 5.78 1.91 6.38 3.39 29.2 73.01 49.79 149.28 61.22 226.67 6.36 43.09 9.9 86.59 10.6 129.92 83.71 12.05 128.03 31.95 125.7 56.94-1.87 20.02-35.63 39.92-90.3 53.22-12.97 3.16-26.59 5.84-40.71 8.04-3.92 36.17-9.23 64.87-13.45 84.13 10.01 8.29 19.1 15.82 26.94 22.32-56.4 2.72-107.04 16.99-146.94 32.74-6.99-3.05-14.53-5.95-22.58-8.71 2.71-19.74 4.12-39.99 4.12-60.62 0-21.95-1.6-43.46-4.65-64.39-1.74-.13-3.48-.26-5.22-.4-15.43-1.25-32.33-3.09-50.51-5.45 2.21 14.66 3.37 30.07 3.37 45.85 0 2.35-.03 4.7-.08 7.03l-75.46 43.57 62.57 36.12c-2.59 7.78-5.53 15.15-8.83 21.98-14.29 29.53-33.45 45.79-53.96 45.79-20.51 0-39.68-16.26-53.97-45.79-14.06-29.07-21.81-67.67-21.81-108.7 0-14.51.99-28.7 2.86-42.28l56.23-17.6c-104.7-18.84-234.14-49.14-370.52-87.17a4830.3 4830.3 0 0 1-84.57-24.39c-29.45 57.2-46.39 124.2-46.39 195.82 0 20.63 1.41 40.88 4.12 60.62-8.23 2.82-15.93 5.79-23.05 8.91-39.76-15.74-90.25-30.04-146.52-32.89 7.64-6.33 16.46-13.65 26.17-21.68-6.4-29.06-15.44-80.19-18.2-146.36-1.82-43.52-.7-87.49 3.3-131.28-47.55-18.36-80.8-34.21-95.19-45.91-22.06-17.92-33.68-38.3-34.54-60.56-1.53-38.88 30-69.29 31.35-70.57Zm244.12 947.46c-7.78 1.3-14.74 3.62-20.81 6.92 6.74-2.57 13.2-4.02 19.33-4.33 1.01-.04 1.98.02 2.98.08l-.07-.15-.08-.17c-.33-.85-.78-1.64-1.35-2.35Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M690.55 1535.69a7.888 7.888 0 0 0-4.48 4.12c-.9 1.93-1 4.09-.27 6.08l147.23 404.52c1.14 3.13 4.16 5.24 7.5 5.24.92 0 1.83-.16 2.7-.48l148.99-54.23-38.51-218.39c-.32 1.98-.73 4.02-1.25 6.12-2.33 9.32-6.48 19.48-12.34 30.21-2.26 4.26-5.89 6.09-10.48 5.28-3.61-.68-6.28-2.49-7.96-5.4-2.66.43-6.05-.08-9.39-3.56-3.44-3.7-4.06-8-1.82-12.46 1.57-3.25 3.08-6.91 4.47-10.85.53-2.15.48-3.71-.13-4.18-.46-.36-3.4-1.76-16.54 5.37-16.93 9.17-31.9 20.48-44.51 33.62l-5.16 5.63c-5.59 12.93-8.52 24.51-8.73 34.41 0 2.32.05 4.69.14 7.02 8.91 18.38 25.33 24.02 50.17 17.23a81.145 81.145 0 0 0 15.25-15l.09-.11c2.44-2.72 6.69-5.2 13.15-1.56 5.13 2.89 6.83 7.17 4.81 12.04-7.19 17.25-16.96 30.41-29.05 39.14-10.16 12.26-22.19 18.42-35.9 18.42-5.41 0-11.08-.96-17.01-2.88-7.49-2.38-14.88-7.13-21.97-14.11-6.85-6.74-11.76-13.94-14.59-21.41-6.92-18.43-4.32-38.72 7.74-60.33-.48-16.19 2.11-32.48 7.68-48.45 6.06-16.98 13.45-31.46 21.95-43.06 10.92-15.05 23.69-25.08 37.94-29.79 16.86-5.62 32.02-5.2 45.04 1.26 9.97 4.99 17.49 12.91 22.45 23.6l-29.35-166.44c-1.84-10.42.5-20.94 6.57-29.62.79-1.13 1.63-2.2 2.52-3.23l-236.95 86.23Zm140.61 33.09c2.7 7.24 2.32 15.12-1.07 22.19-3.37 7.04-9.32 12.45-16.75 15.21l-.23.09a29.128 29.128 0 0 1-17.58.79c1.07 1.72 2.13 3.34 3.07 4.45 5.82 6.88 11.81 9.5 13.78 10.36.76.33 1.91.83 1.86 2.23-.03.82-.56 1.55-1.33 1.83l-32.09 11.68a2.04 2.04 0 0 1-2.2-.55c-.93-1.04-.37-2.17 0-2.91.96-1.92 3.86-7.78 3.89-16.79.01-1.47-.22-3.39-.5-5.39-3.44 4.9-8.24 8.61-13.94 10.68l-.31.11c-7.44 2.64-15.46 2.33-22.57-.9-7.14-3.25-12.5-9.04-15.08-16.31-4.38-12.35 1.55-21.93 8.41-33.03 1.36-2.2 2.69-4.35 4.04-6.65 8.89-15.23 14.26-33.05 15.25-36.47.28-.97.89-1.35 1.4-1.5.9-.27 1.55.17 1.84.36 4.17 2.79 19.04 12.36 35.09 18.11 2.54.91 4.99 1.72 7.36 2.5 12.37 4.11 23.07 7.64 27.66 19.91Zm304.44 84.17c6.61-2.56 13.38-4.59 20.18-6.04l.46-19.27c.15-5.35.22-10.29.22-14.78-7.25 10.71-14.24 24.15-20.86 40.09Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M1169.14 1883.29a40 40 0 0 1-9.92-9.89c-6.07-8.68-8.41-19.2-6.57-29.62l16.57-93.99c-.01-.24-.02-.48-.02-.73l.15-4.07c-6.96-16.84-11.34-35.65-13.06-55.96l-13.48 6.33-15.78 7.48c-7.04 4.83-12.99 8.8-17.7 11.81-8.29 16.3-19.31 34.44-32.74 53.94-1.99 2.78-4.49 4.38-7.45 4.79-2.35.34-4.58-.08-6.65-1.24-1.64.97-3.39 1.46-5.2 1.46-1.52 0-3.08-.34-4.65-1.02-4.26-1.73-6.4-5.08-6.13-9.67 1.87-38.52 12.44-77.25 31.41-115.09 21.12-41.8 47.72-71.22 79.05-87.43 4.31-2.22 8.69-1.68 12.69 1.53 5.32 4.17 8.48 11.98 9.38 23.21 6.39 5.37 11.09 14.84 14.17 28.63l34.19-193.91.02-.12-271.37 47.85a7.93 7.93 0 0 0-5.13 3.28 7.955 7.955 0 0 0-1.33 5.94l74.75 423.93a7.951 7.951 0 0 0 9.22 6.46l135.58-23.9Zm-157.79-406.38c.21-.73.82-1.28 1.57-1.42.75-.13 1.51.17 1.96.79 11.44 15.69 32.63 35.93 47.24 45.13.48.3.81.79.9 1.34.1.56-.04 1.13-.39 1.57-10.58 13.66-23.57 39.93-28.95 58.57-.21.73-.82 1.28-1.57 1.42a2.013 2.013 0 0 1-1.97-.79c-11.43-15.67-32.62-35.92-47.24-45.13-.48-.3-.81-.79-.9-1.35-.09-.56.04-1.13.39-1.57 10.58-13.63 23.57-39.9 28.96-58.56Zm388.87 418.61-17.73-6.45c-9.94-3.62-17.88-10.9-22.36-20.51-4.48-9.61-4.96-20.38-1.34-30.32l86.33-237.19c-8.69 1.96-20.01 4.23-33.74 6.76a626.684 626.684 0 0 0-21.65 46.28c-2.06 5.43-4.78 12.3-8.04 20.34l-8.04 20.35c-7.05 19.31-13.83 40.04-20.14 61.58-1.37 4.79-4.56 7.43-9.1 7.59l-.68 9.24c-.27 3.22-1.63 5.79-4.05 7.67-2.08 1.69-4.55 2.56-7.31 2.56-2.92 0-5.36-.9-7.27-2.67-2.11-1.97-3.04-4.62-2.77-7.87.5-7.12 1.1-14.23 1.79-21.17-2.3-.59-4.29-1.87-5.92-3.82-2.27-2.67-2.98-5.86-2.04-9.22a495.44 495.44 0 0 1 19.39-58.7c5.13-22.01 11.68-42.42 19.51-60.74-12.85 3.11-24.39 6.47-34.33 10.02-2.99 1.09-5.78.86-8.29-.67-2.19-1.37-3.7-3.47-4.49-6.25-.67-2.67-.47-5.25.57-7.73 1.21-2.83 3.31-4.8 6.25-5.87l6.63-2.09c-1.11-5.42 1.34-8.66 4.13-10.56-.17-5.05 2.26-8.72 7.09-10.65 26.94-10.62 48.28-17.51 63.43-20.47 21.91-4.3 42.68-3.93 61.81 1.08l38.87-106.79-228.89-40.36a7.951 7.951 0 0 0-9.22 6.46l-74.75 423.94c-.76 4.32 2.13 8.46 6.45 9.22l209.9 37.01Zm-140.6-394.34c2.58-14.6 16.53-24.38 31.14-21.81 1.44.25 2.86.63 4.24 1.12-1.39-4.2-1.73-8.7-.96-13.09 1.25-7.07 5.17-13.24 11.05-17.36 5.88-4.12 13.01-5.7 20.09-4.45 7.07 1.25 13.23 5.17 17.35 11.05 4.12 5.88 5.7 13.02 4.45 20.09-.78 4.39-2.64 8.5-5.38 11.97 1.46.01 2.92.15 4.37.4 14.59 2.57 24.37 16.54 21.8 31.14-2.58 14.6-16.54 24.38-31.13 21.8-9.1-1.6-16.5-7.72-20.01-15.79-.64 6.44.76 12.44 8.18 22.27.5.66.54 1.55.11 2.25a2.013 2.013 0 0 1-2.06.93l-31.79-5.61c-.81-.14-1.45-.77-1.61-1.57-.16-.81.18-1.63.87-2.08 10.14-6.56 13.5-11.72 15.17-18.04-6.07 6.32-15.08 9.49-24.08 7.91-14.59-2.57-24.37-16.54-21.8-31.13Zm340.99 213.86c-2.89 6.39-2.96 12.08-.22 17.28 2.6 2.62 6.09 5.04 10.42 7.23-2.94-5.38-5.23-10.01-6.83-13.8-1.5-3.59-2.63-7.17-3.37-10.71Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M1656.77 1955.17c.87.32 1.78.48 2.7.48 3.35 0 6.37-2.1 7.51-5.23l147.23-404.51c1.5-4.13-.64-8.71-4.76-10.21l-263.43-95.88c-.87-.32-1.78-.48-2.7-.48a8 8 0 0 0-7.5 5.24l-147.23 404.51c-1.5 4.13.63 8.7 4.75 10.2l263.43 95.88Zm41.64-288.11c-2.58 8.97-8.84 18.17-18.62 27.36a99.042 99.042 0 0 1-4.86 10.63c-1.8 3.84-4.8 5.76-8.72 5.6-2.87 3.84-5.77 7.39-8.64 10.57-3.35 3.76-7.48 4.54-11.93 2.24-3.54-1.88-5.61-4.81-6.08-8.53-1.96-1.07-3.55-2.66-4.75-4.73-1.52-2.62-1.72-5.35-.59-7.89 1.24-3.21 2.49-7.02 3.68-11.23l2.06-7.31c-9.19 4.93-14.6 10.54-16.09 16.7-1.41 5.54.2 12.97 4.77 22.12.97 1.82 2.12 4.02 3.43 6.54l3.74 6.5c3.42 6.07 5.98 10.92 7.63 14.44 5.79 11.8 8.68 22.77 8.57 32.57-.12 10.25-3.4 19.71-9.77 28.12-5.63 7.54-13.5 13.88-23.37 18.81-7.07 3.54-13.86 6.18-20.19 7.85-9.64 3.25-18.66 4.87-27.01 4.87-6.84 0-13.21-1.09-19.1-3.27-15.45-5.88-23.51-18.59-23.97-37.79-.13-3.46 1.34-6.43 4.27-8.56 2.79-2 5.88-2.6 9.2-1.81 15.88 3.86 29.54 4.96 40.62 3.25 13.81-2.05 24.45-8.51 31.64-19.23-1.62-5.13-7.31-9.85-16.94-14.04l-1.39-.46c-.14-.05-.27-.11-.4-.18l-.68-.41c-3.59-1.42-6.48-2.7-8.58-3.81-3.42-1.65-6.39-3.37-8.77-5.07-6.59-4.74-10.45-10.36-11.46-16.71-9.52-14.5-11.48-28.96-5.82-42.99 7.26-17.99 21.1-32.58 41.14-43.39 6.63-3.59 12.93-6.47 18.74-8.57 28.5-20 52-20.92 69.86-2.73 8.83 8.95 11.65 19.23 8.38 30.54Zm-103.99-178.48c5.17-4.24 15.4-9.38 30.26-2.13l.14.07c17.27 10.16 17.18 28.94 9.43 43.06-7.64 13.91-25.95 20.08-42.1 25.52-9.74 3.28-18.95 6.38-23.57 10.61l-.54.48c-.37.33-.85.5-1.33.5-.23 0-.47-.04-.69-.12-.69-.26-1.19-.87-1.29-1.6l-.09-.68c-.83-6.22-5.89-14.51-11.24-23.28-8.88-14.55-18.95-31.05-15.86-46.61 3.14-15.79 15.14-30.23 34.91-26.92l.15.03c16.06 3.97 20.59 14.49 21.82 21.07Zm-869.28 551.67c-11.75-5.82-25.28-6.18-40.6-1.07-12.97 4.29-24.46 13.33-34.47 27.12-7.87 10.72-14.61 23.96-20.22 39.68-5.21 14.91-7.56 29.93-7.05 45.04-11.23 19.92-13.69 38.3-7.35 55.16 2.55 6.74 6.95 13.18 13.18 19.3 6.44 6.33 13.02 10.57 19.76 12.72 18.89 6.13 34.73 1.43 47.5-14.1 11.13-7.97 20.02-19.92 26.66-35.85 1.53-3.68.31-6.64-3.68-8.89-3.98-2.25-7.3-1.89-9.96 1.07a77.345 77.345 0 0 1-14.86 14.56c-24.31 6.74-40.81.97-49.49-17.31-.1-2.35-.15-4.7-.15-7.05.2-9.6 3.01-20.63 8.43-33.09l5.06-5.52c11.95-12.46 25.94-23.03 41.98-31.71 14.3-7.76 20.38-7.4 18.23 1.07-1.33 3.78-2.76 7.25-4.29 10.42-1.74 3.47-1.28 6.64 1.38 9.5 2.55 2.66 5.36 3.47 8.43 2.45 1.23 2.96 3.47 4.75 6.74 5.36 3.47.61 6.08-.71 7.81-3.98 5.41-9.91 9.19-19.15 11.34-27.73 2.76-11.13 2.4-20.27-1.07-27.42-4.1-14.1-11.87-24.01-23.31-29.73Zm-96.21 151.07c3.17 9.19 8.12 17.37 14.86 24.51-8.38-6.02-13.33-14.19-14.86-24.51Zm37.38-119.05c5.92-7.35 13.53-12.92 22.83-16.7 9.7-4.08 18.44-4.9 26.2-2.45-17.98-1.23-34.78 5.72-50.41 20.84l1.38-1.69Zm50.25 5.52c-10.21.51-21.35 4.5-33.4 11.95l1.53-1.68 1.69-1.53c8.17-7.97 18.9-12.97 32.17-15.02 1.02 1.02 1.79 2.2 2.3 3.52.31.61.61 1.63.92 3.07-1.73-.21-3.47-.31-5.21-.31Zm173.35-21.14c-1.74-6.53-5.46-11.74-11.18-15.63-5.11-3.57-11.18-5.57-18.23-5.98-10.52-.61-21.65 3.42-33.4 12.1-4.5 3.47-9.19 7.66-14.1 12.56-3.58 3.58-7.46 7.87-11.64 12.87-1.74 1.94-2.45 4.14-2.14 6.59-13.18 20.84-23.08 44.94-29.72 72.31-5.31 21.86-8.89 48.06-10.72 78.6-.31 3.98-.51 8.02-.61 12.1-.1 2.45.67 4.39 2.3 5.82 1.43 1.33 3.27 1.99 5.52 1.99 2.15 0 4.03-.67 5.67-1.99 1.74-1.43 2.65-3.37 2.76-5.82v-.77c3.98.1 6.48-1.84 7.51-5.82 3.98-15.42 9.4-32.73 16.24-51.94 6.74 1.53 12.31 2.86 16.7 3.98l14.4 5.98 14.4 6.13c11.03 4.5 20.73 8.22 29.11 11.18 2.45.92 4.65.67 6.59-.77 1.63-1.23 2.66-3.06 3.06-5.52 3.17-.31 5.46-1.99 6.89-5.06 1.63-3.17 1.12-6.08-1.53-8.73-14-13.89-32.79-25.13-56.38-33.71 13.48-7.76 25.33-16.7 35.55-26.81 11.74-11.64 19.87-23.34 24.36-35.09 1.84-4.8 1.99-9.55.46-14.25.89-8.24.27-16.36-1.87-24.32Zm-32.64 26.81c-2.04 13.08-7.15 24.72-15.32 34.93-6.03 7.46-15.37 15.73-28.04 24.82 3.37-8.27 7.76-18.79 13.18-31.56l6.74-15.63 6.59-15.63c5.52-2.04 10.72-3.16 15.63-3.37l1.23 1.84.31.61c-.01 1.54-.11 2.87-.32 3.99Zm13.95-19.92c-2.25-4.7-5.88-7.51-10.88-8.43a86.799 86.799 0 0 0-3.22-3.06c10.11-2.45 16.14 1.84 18.08 12.87l-3.98-1.38Zm115.58 34.47c3.47-6.74 6.38-12.72 8.73-17.93 15.53-4.8 30.49-6.64 44.89-5.52 4.7.41 7.25-1.73 7.66-6.43.41-4.49-1.43-7.56-5.52-9.19.71-2.35.61-4.54-.31-6.59-.92-2.25-2.55-3.63-4.9-4.14-10.93-2.14-21.86-2.81-32.79-1.99-31.26.72-55.62 10.17-73.08 28.34-2.45 2.55-3.01 5.42-1.69 8.58l-.15.15c-1.63 1.84-2.35 3.88-2.14 6.13.2 2.15 1.12 3.93 2.76 5.36l-1.53 1.07c-3.17 2.14-4.29 5.06-3.37 8.73.82 3.58 2.81 5.72 5.98 6.44-7.76 14.91-14.2 30.03-19.3 45.35-1.43 3.98-2.55 7.76-3.37 11.34-1.12 4.5-1.94 8.68-2.45 12.56-1.02 10.01.26 18.08 3.83 24.21-.1 7.25.15 14.15.77 20.68.61 6.13 4.03 8.73 10.27 7.81 14.81-2.14 29.72-7.81 44.74-17.01 10.21-1.33 22.68-9.04 37.38-23.13 5-4.9 10.21-10.47 15.63-16.7 1.94-2.25 3.88-4.54 5.82-6.89.71-.92 1.48-1.89 2.3-2.91l.92-1.23.92-1.07c2.86-3.57 3.01-7.1.46-10.57-2.55-3.37-5.98-4.08-10.27-2.14-4.9 2.25-10.32 4.96-16.24 8.12l-15.78 8.58c-14 7.66-24.67 13.18-32.02 16.55l-.15-1.38-.15-1.38c-.31-2.45-.51-5.21-.61-8.27 1.53-7.15 3.88-14.76 7.05-22.83 18.9-3.37 35.95-6.89 51.17-10.57 4.39-1.02 6.28-3.83 5.67-8.43l1.23-.15c4.7-.71 6.59-3.47 5.67-8.27-.82-4.8-3.42-7.35-7.81-7.66-12.67-.92-25.84-.87-39.53.15l4.75-8.89 4.56-8.88Zm-51.63 99.75-2.6.77c1.53-8.99 2.91-16.65 4.14-22.98l.15 1.84c-1.13 7.03-1.69 13.83-1.69 20.37Zm255-78.45c-3.27.31-7 .87-11.18 1.69l-1.23-.15h-1.07c-1.53-29.82-7.15-48.52-16.85-56.08-.72-10.42-3.42-17.47-8.12-21.14-3.17-2.55-6.44-2.96-9.81-1.22-29.01 15.01-53.32 41.93-72.93 80.74-17.67 35.24-27.37 70.78-29.11 106.63-.2 3.47 1.33 5.88 4.6 7.2 3.06 1.33 5.87 1.02 8.43-.92 1.84 1.33 3.83 1.84 5.97 1.53 2.25-.31 4.14-1.53 5.67-3.68 12.66-18.38 22.88-35.24 30.64-50.56 4.49-2.86 10.16-6.64 17.01-11.34l14.86-7.05 15.02-7.05c1.43 20.02 5.57 38.25 12.41 54.7l-.15 4.14c0 4.29 2.14 6.84 6.43 7.66 4.19.72 7.15-.61 8.89-3.98 1.74-1.53 2.6-3.32 2.6-5.36.1-1.33.41-4.6.92-9.81l.15-1.68.15-1.99.31-3.98c.31-3.27.61-6.33.92-9.19 1.43-17.26 2.2-32.68 2.3-46.27l8.58-3.83 8.73-3.83c3.68-1.63 4.9-4.65 3.68-9.04-1.23-4.4-3.83-6.45-7.82-6.14Zm-93.3-11.95-2.14 4.29-2.3 3.98c-1.84 3.58-3.22 6.23-4.14 7.97-9.09 16.75-17.57 34.22-25.43 52.4 11.64-31.36 26.2-60.01 43.67-85.95-2.77 4.9-5.99 10.67-9.66 17.31Zm45.35-3.83-.46 19.46c-8.17 1.63-16.19 4.14-24.05 7.51 7.76-19.41 15.98-34.93 24.67-46.58.09 5.62.04 12.16-.16 19.61Zm190.65-31.56c1.02-2.14 1.23-4.34.61-6.59l5.06-.46c4.49-.51 7.1-2.96 7.81-7.35s-1.17-7.25-5.67-8.58c-18.79-5.72-39.12-6.44-60.98-2.14-14.1 2.76-33.71 9.09-58.83 19-4.09 1.63-5.88 4.7-5.36 9.19-3.88 2.15-5.06 5.52-3.52 10.11l-3.98 1.22-3.83 1.23c-2.25.82-3.83 2.3-4.75 4.44-.82 1.94-.97 3.93-.46 5.97.61 2.15 1.74 3.73 3.37 4.75 1.84 1.13 3.88 1.28 6.13.46 10.32-3.68 22.27-7.1 35.85-10.26-7.97 17.98-14.5 37.95-19.61 59.9a456.66 456.66 0 0 0-18.08 54.7c-.71 2.55-.21 4.85 1.53 6.89 1.63 1.94 3.68 3.01 6.13 3.22-.72 7.05-1.33 14.2-1.84 21.45-.21 2.45.46 4.39 1.99 5.82 1.43 1.33 3.27 1.99 5.52 1.99 2.15 0 4.03-.67 5.67-1.99 1.84-1.43 2.86-3.37 3.06-5.82l.77-10.42c4.39.51 7.2-1.38 8.43-5.67 5.92-20.22 12.21-39.43 18.84-57.61l7.51-19c3.06-7.56 5.57-13.89 7.51-19a581.25 581.25 0 0 1 20.68-44.12c15.02-2.76 26.86-5.16 35.55-7.2 2.24-.51 3.87-1.88 4.89-4.13Zm111.76-5.36c4.19-.71 6.53-3.27 7.05-7.66.51-4.39-1.38-7.1-5.67-8.12-29.93-6.44-56.33-2.09-79.21 13.02-3.88 2.55-4.8 6.03-2.76 10.42-1.84 2.76-1.68 5.67.46 8.73-3.37 2.35-3.83 5.52-1.38 9.5 2.35 3.88 5.57 5.21 9.65 3.98-18.69 36.36-28.86 70.38-30.49 102.04-8.58 1.94-16.24 3.88-22.98 5.82-2.35.72-3.98 2.09-4.9 4.14-.82 1.84-.97 3.83-.46 5.97.61 2.14 1.74 3.73 3.37 4.75 1.84 1.23 3.93 1.48 6.28.77l.77-.15c.21 1.23.67 2.3 1.38 3.22-.41 2.66.36 5.06 2.3 7.2 2.04 2.35 4.65 3.27 7.81 2.76 22.37-3.37 40.04-8.27 53.01-14.71 3.06-1.43 4.49-3.57 4.29-6.43-.21-2.66-1.58-4.85-4.14-6.59 2.04-2.65 2.45-5.57 1.23-8.73-1.23-3.37-3.63-4.9-7.2-4.6-3.58.31-8.07.87-13.48 1.69 5.92-17.57 14.1-37.02 24.51-58.37 3.98-8.07 8.78-17.52 14.4-28.34l7.2-14.1 7.35-13.94 15.93-4.6c3.99-1.03 5.88-3.59 5.68-7.67Zm95.66 3.83c-3.47-.61-7-.46-10.57.46-.82-1.84-2.15-3.27-3.98-4.29l4.14-2.3c2.14-1.23 3.47-2.86 3.98-4.9.41-1.84.05-3.73-1.07-5.67-1.13-1.84-2.66-3.12-4.6-3.83-2.15-.71-4.34-.61-6.59.31-1.94.92-4.24 2.14-6.89 3.68-.82-2.66-2.6-4.49-5.36-5.52-3.06-1.12-5.87-.66-8.43 1.38-14.71 12.05-27.17 26.1-37.38 42.13-13.59 18.9-22.32 37.64-26.2 56.23-.82.92-1.43 1.99-1.84 3.22-2.86 11.13-3.73 22.52-2.6 34.17 1.23 12.16 4.6 22.98 10.11 32.48 5.11 8.79 11.85 13.74 20.22 14.86 7.45 1.02 15.32-.87 23.59-5.67 13.28-.92 26.05-9.91 38.3-26.96 6.74-6.23 13.43-14.04 20.07-23.44 5.11-7.25 9.7-14.76 13.79-22.52 8.68-16.24 12.41-32.58 11.18-49.03-1.42-20.14-11.38-31.73-29.87-34.79Zm-7.66 77.98c-6.74 12.05-15.73 24.51-26.97 37.38-1.02 1.22-1.94 2.3-2.76 3.22a125.4 125.4 0 0 0-3.68 3.83c-3.17 3.17-6.13 5.62-8.89 7.35-4.6-.2-7.25-3.62-7.97-10.26 1.43-4.8 3.73-11.03 6.89-18.69l1.99-4.6 1.84-4.6c1.43-3.37 2.55-6.28 3.37-8.73.61-1.53 1.38-3.68 2.3-6.43l1.23-3.37 1.23-3.52c1.94-5.72 3.73-10.57 5.36-14.56 2.55-3.57 4.95-6.79 7.2-9.65.71-.92 1.63-1.99 2.76-3.22l4.14-4.14c3.68-3.58 7.1-6.38 10.26-8.43 8.99-5.82 13.79-4.19 14.4 4.9.83 12.37-3.41 26.87-12.7 43.52Zm189.74-114.75c-2.04-.61-3.93-.46-5.67.46-1.84.92-2.91 2.6-3.22 5.06l-.61 3.22c-4.6-1.33-7.87.51-9.81 5.52-4.7 11.95-8.94 24.97-12.72 39.07-.92.92-1.63 2.04-2.14 3.37l-6.43 17.62-6.28 17.77c-4.8 13.59-8.48 25.54-11.03 35.85l-1.23 2.76c.31-38.2-2.3-67.21-7.81-87.02-.61-2.04-1.74-3.58-3.37-4.6-5.52-18.28-14.91-18.39-28.19-.31-4.6 6.23-9.4 14.35-14.4 24.36-1.84 3.78-3.68 7.61-5.52 11.49-1.33 2.96-2.5 5.72-3.52 8.27-.31.61-.82 1.74-1.53 3.37l-.46 1.07-.46 1.23c-.51 1.02-.92 1.94-1.23 2.76-2.14 5.11-4.14 9.86-5.98 14.25-5.52 13.99-9.86 26.46-13.02 37.38-9.81 33.91-7.76 51.84 6.13 53.78 2.66.41 4.95-.1 6.89-1.53 1.94 1.94 4.19 2.86 6.74 2.76 2.76-.1 4.7-1.48 5.82-4.14 15.53-34.93 27.12-66.7 34.78-95.3.92 30.75 5.21 58.99 12.87 84.73 1.23 4.19 3.88 6.08 7.97 5.67.92 3.37 3.11 5.42 6.59 6.13 3.47.72 6.18-.56 8.12-3.83 2.45-4.29 5.06-9.24 7.81-14.86 1.53-.71 2.66-1.79 3.37-3.22 11.54-20.84 21.14-47.34 28.8-79.52 3.06-12.66 5.98-26.86 8.73-42.59 1.84-10.11 4.08-23.85 6.74-41.21.31-2.45-.26-4.6-1.69-6.43-1.21-1.66-2.9-2.78-5.04-3.39Zm157.1 16.85c-16.04-16.34-37.03-15.37-62.97 2.91-5.41 1.94-11.24 4.6-17.47 7.97-18.38 9.91-30.9 23.08-37.54 39.53-5.11 12.67-3.27 25.59 5.51 38.76v.15c.82 5.52 4.14 10.37 9.96 14.56 2.14 1.53 4.8 3.06 7.97 4.6 1.94 1.02 4.6 2.2 7.97 3.52l.77.46 1.38.46c10.11 4.39 15.83 9.45 17.16 15.17-7.05 10.93-17.47 17.42-31.25 19.46-10.62 1.63-23.49.61-38.61-3.06-2.55-.61-4.9-.15-7.05 1.38-2.25 1.64-3.32 3.78-3.22 6.43.41 17.16 7.46 28.34 21.14 33.55 11.85 4.39 25.79 3.88 41.83-1.53 5.82-1.53 12-3.93 18.54-7.2 8.99-4.49 16.03-10.16 21.14-17.01 5.72-7.56 8.63-15.93 8.73-25.13.1-8.89-2.5-18.74-7.81-29.57-1.53-3.27-3.88-7.71-7.05-13.33l-3.52-6.13c-1.22-2.35-2.3-4.39-3.22-6.13-4.5-8.99-6.03-16.29-4.6-21.91 1.74-7.15 8.32-13.38 19.76-18.69l-3.06 10.88c-1.13 3.98-2.3 7.56-3.52 10.72-.82 1.84-.67 3.73.46 5.67 1.12 1.94 2.65 3.32 4.6 4.14.1 3.37 1.69 5.88 4.75 7.51 3.37 1.74 6.33 1.18 8.89-1.69 2.86-3.16 5.72-6.69 8.58-10.57 3.37.51 5.82-.87 7.35-4.14 1.74-3.27 3.27-6.64 4.6-10.11 9.09-8.48 14.81-16.8 17.16-24.97 2.85-9.91.4-18.8-7.36-26.66Zm-83.81 89.17c-3.68-6.74-2.76-14.4 2.76-22.98.41 4.9 1.68 9.91 3.83 15.01 1.94 4.6 4.95 10.47 9.04 17.62-6.84-2.76-12.05-5.97-15.63-9.65ZM801.04 542.32c5.68-.14 9.2-2.71 10.56-7.71l3.65-15.22c3.65-.41 6.22-2.16 7.71-5.28 8.39-16.1 16.31-35.05 23.75-56.84 35.86-10.96 68-30.25 96.42-57.85 33.42-32.48 46.69-64.62 39.79-96.42-3.65-16.78-14.08-29.84-31.26-39.18-15.7-8.39-32.28-11.64-49.73-9.74l-5.28.81c-2.3-2.97-5.41-4.6-9.34-4.87-4.33-.13-7.44 1.56-9.34 5.07l-1.42 3.04-1.62 3.25c-27.34 11.64-49.26 31.8-65.77 60.49-2.57 4.33-2.37 8.19.61 11.57 2.71 3.25 6.22 4.54 10.56 3.86-1.9 3.25-2.17 6.7-.81 10.35-14.21 30.72-23.95 61.85-29.23 93.38-5.55 33.97-5.41 65.16.41 93.58 1.21 5.27 4.66 7.84 10.34 7.71Zm131.74-218.63c-.14 2.57-.41 4.94-.81 7.1-.68 3.52-1.49 6.97-2.44 10.35.13-6.63-.61-13.33-2.23-20.1-.41-1.89-1.02-3.79-1.83-5.68 3.25 1.5 5.69 4.27 7.31 8.33Zm-64.95 65.16 6.7-22.53c5.28-16.92 10.49-31.73 15.63-44.46 12.04-1.89 17.86 3.99 17.46 17.66-.54 15.29-5.41 29.23-14.62 41.82-6.9 9.61-17.53 19.62-31.87 30.04l6.7-22.53Zm112.13 18.68c-3.79 14.75-4.94 29.84-3.45 45.27 1.62 16.11 6.09 30.45 13.4 43.03 6.77 11.64 15.7 18.2 26.8 19.69 9.88 1.35 20.3-1.15 31.26-7.51 17.59-1.22 34.51-13.12 50.75-35.73 8.93-8.25 17.79-18.61 26.59-31.06 6.77-9.61 12.86-19.55 18.27-29.84 11.5-21.52 16.44-43.17 14.82-64.96-1.9-26.66-15.09-42.02-39.58-46.08-4.6-.81-9.27-.61-14.01.61-1.08-2.44-2.84-4.33-5.28-5.68l5.48-3.04c2.84-1.62 4.6-3.79 5.28-6.5.54-2.44.07-4.94-1.42-7.51-1.49-2.44-3.52-4.13-6.09-5.08-2.84-.95-5.75-.81-8.73.41-2.57 1.22-5.62 2.84-9.14 4.87-1.08-3.52-3.45-5.95-7.1-7.31-4.06-1.49-7.78-.88-11.17 1.83-19.49 15.97-36 34.58-49.53 55.82-18 25.04-29.57 49.87-34.71 74.5-1.09 1.22-1.9 2.65-2.44 4.27Zm71.25 26.39 2.64-6.09 2.44-6.09c1.89-4.46 3.38-8.32 4.47-11.57.81-2.03 1.83-4.87 3.04-8.52l1.62-4.47 1.62-4.67c2.57-7.58 4.94-14.01 7.1-19.28 3.38-4.73 6.56-9 9.54-12.79.95-1.22 2.16-2.64 3.65-4.26l5.48-5.48c4.87-4.74 9.4-8.46 13.6-11.17 11.91-7.71 18.27-5.55 19.08 6.5 1.08 16.38-4.54 35.59-16.85 57.65-8.93 15.97-20.84 32.48-35.73 49.53-1.36 1.62-2.57 3.04-3.65 4.26-1.76 1.76-3.38 3.45-4.87 5.08-4.2 4.2-8.12 7.44-11.77 9.74-6.09-.27-9.61-4.8-10.56-13.6 1.91-6.37 4.95-14.62 9.15-24.77Zm118.83.4c-3.11 11.91-5.55 22.74-7.31 32.48-.95 5.41 1.15 9.41 6.29 11.98-3.92 20.57-6.16 40.53-6.7 59.88-.13 5.95 3.11 9.41 9.74 10.35 6.63.95 10.42-1.56 11.37-7.51.81-5.28 1.76-10.76 2.84-16.44 4.6-.27 7.51-2.84 8.73-7.71 4.47-18.13 10.83-37.89 19.08-59.27 34.78 3.65 63.87 9.13 87.29 16.44 2.84.95 5.55.54 8.12-1.22 2.44-1.62 4.06-3.86 4.87-6.7 5.41 1.08 9.2-1.08 11.37-6.5 2.3-5.41 1.02-9.88-3.86-13.4-21.52-15.15-45.67-25.44-72.47-30.85l27.2-19.28 27.2-18.88c21.79-15.29 39.79-28.28 54-38.97 2.71-2.03 4.26-4.8 4.67-8.32.27-3.38-.54-6.29-2.44-8.73 1.76-3.65 1.15-7.31-1.83-10.96-2.98-3.79-6.63-5.21-10.96-4.26-27.47 5.96-51.97 14.35-73.48 25.17l5.08-9.13 5.08-8.93c3.92-6.9 7.24-12.79 9.95-17.66 2.03-3.66 2.03-7.17 0-10.56-2.03-3.11-4.8-4.94-8.32-5.48l1.42-5.07c1.62-6.09-.34-10.15-5.89-12.18-5.55-2.03-10.15-.68-13.8 4.06l-1.01 1.22-1.02 1.42c-2.3-1.62-4.81-2.23-7.51-1.83-3.11.41-5.68 2.03-7.71 4.87-33.97 46.69-58.53 93.31-73.69 139.86l-5.68.61c-6.76.54-10.22 4.33-10.35 11.37 0 2.84.81 5.21 2.44 7.1 1.74 2.16 4.18 3.17 7.29 3.03Zm189.47-5.07c-1.49 5.96-2.57 11.5-3.25 16.65-1.35 13.26.34 23.95 5.08 32.07-.13 9.61.2 18.75 1.01 27.41.81 8.12 5.34 11.57 13.6 10.35 19.62-2.84 39.38-10.35 59.27-22.53 13.53-1.76 30.04-11.98 49.53-30.65 6.63-6.5 13.53-13.87 20.71-22.13 2.57-2.98 5.14-6.02 7.71-9.14.95-1.22 1.96-2.5 3.05-3.86l1.22-1.62 1.22-1.42c3.79-4.74 3.99-9.41.61-14.01-3.38-4.47-7.92-5.41-13.6-2.84-6.5 2.98-13.67 6.57-21.52 10.76l-20.91 11.37c-18.54 10.15-32.68 17.46-42.43 21.92l-.2-1.83-.2-1.83c-.41-3.25-.68-6.9-.81-10.96 2.03-9.47 5.14-19.55 9.34-30.25 25.03-4.47 47.63-9.14 67.8-14.01 5.82-1.35 8.32-5.08 7.51-11.17l1.62-.2c6.22-.95 8.73-4.6 7.51-10.96-1.08-6.36-4.54-9.74-10.35-10.15-16.78-1.22-34.24-1.15-52.37.2l6.29-11.77 6.09-11.77c4.6-8.93 8.46-16.85 11.57-23.75 20.57-6.36 40.4-8.79 59.48-7.31 6.22.54 9.61-2.3 10.15-8.53.54-5.95-1.9-10.01-7.31-12.18.95-3.11.81-6.02-.41-8.73-1.22-2.97-3.38-4.8-6.5-5.48-14.48-2.84-28.96-3.72-43.44-2.64-41.41.95-73.69 13.47-96.83 37.55-3.25 3.38-3.99 7.17-2.23 11.37l-.2.2c-2.17 2.44-3.11 5.14-2.84 8.12.27 2.84 1.49 5.21 3.65 7.1l-2.03 1.42c-4.2 2.84-5.68 6.7-4.47 11.57 1.08 4.74 3.72 7.58 7.92 8.53-10.29 19.76-18.81 39.79-25.58 60.08-1.89 5.31-3.37 10.31-4.46 15.05Zm37.15 10.35.2 2.44c-1.49 9.34-2.23 18.34-2.23 27l-3.45 1.01c2.03-11.91 3.86-22.06 5.48-30.45Zm139.54 72.27c-.41 5.28-.67 10.62-.81 16.04-.13 3.25.88 5.82 3.04 7.71 1.9 1.76 4.33 2.64 7.31 2.64 2.84 0 5.34-.88 7.51-2.64 2.3-1.9 3.52-4.47 3.65-7.71v-1.01c5.28.13 8.59-2.44 9.95-7.71 5.28-20.43 12.45-43.37 21.52-68.81 8.93 2.03 16.31 3.79 22.13 5.28l19.08 7.92 19.08 8.12c14.62 5.96 27.47 10.9 38.57 14.82 3.25 1.22 6.16.88 8.73-1.02 2.16-1.62 3.52-4.06 4.06-7.31 4.19-.41 7.24-2.64 9.13-6.7 2.16-4.19 1.49-8.05-2.03-11.57-18.54-18.4-43.44-33.29-74.7-44.66 17.86-10.28 33.56-22.13 47.09-35.52 15.56-15.43 26.32-30.92 32.28-46.48 2.44-6.36 2.64-12.65.61-18.88 1.22-10.96.41-21.72-2.44-32.28-2.3-8.66-7.24-15.56-14.82-20.71-6.77-4.74-14.82-7.37-24.16-7.92-13.94-.81-28.69 4.54-44.25 16.04-5.96 4.6-12.18 10.15-18.67 16.65-4.74 4.74-9.88 10.42-15.43 17.05-2.3 2.57-3.25 5.48-2.84 8.73-17.46 27.61-30.58 59.55-39.38 95.81-7.04 28.94-11.78 63.65-14.21 104.12Zm154.27-218.83-5.28-1.83c-2.98-6.22-7.78-9.95-14.41-11.17-1.35-1.35-2.77-2.71-4.26-4.06 13.4-3.24 21.38 2.45 23.95 17.06Zm-63.74 61.91 8.93-20.71 8.73-20.7c7.31-2.71 14.21-4.19 20.71-4.47l1.63 2.44.41.81c0 2.03-.14 3.79-.41 5.28-2.71 17.32-9.47 32.75-20.3 46.28-7.99 9.88-20.37 20.84-37.15 32.88 4.46-10.95 10.28-24.89 17.45-41.81Z'
			fill='currentColor'
		/>
	</svg>
)
