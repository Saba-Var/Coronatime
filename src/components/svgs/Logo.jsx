import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/'>
      <svg
        className='cursor-pointer'
        width='137'
        height='33'
        viewBox='0 0 137 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M25.2429 24H30.1435V16.8977C30.1435 15.3352 31.2177 14.3054 32.6648 14.3054C33.1708 14.3054 33.9876 14.3853 34.4759 14.554V10.3725C34.0852 10.2571 33.6591 10.1861 33.233 10.1861C31.777 10.1861 30.6406 11.0384 30.1435 12.956H30.0014V10.3636H25.2429V24ZM41.8711 24.2486C46.31 24.2486 48.9379 21.4077 48.9379 17.2173C48.9379 13.027 46.31 10.1861 41.8711 10.1861C37.4322 10.1861 34.8043 13.027 34.8043 17.2173C34.8043 21.4077 37.4322 24.2486 41.8711 24.2486ZM41.9066 20.6264C40.5927 20.6264 39.8114 19.3214 39.8114 17.1818C39.8114 15.0423 40.5927 13.7372 41.9066 13.7372C43.1495 13.7372 43.9308 15.0423 43.9308 17.1818C43.9308 19.3214 43.1495 20.6264 41.9066 20.6264ZM55.8271 16.3295C55.8359 14.9801 56.5994 14.1634 57.8157 14.1634C59.0497 14.1634 59.7777 14.9801 59.7688 16.3295V24H64.6694V15.2997C64.6783 12.3345 62.805 10.1861 59.9109 10.1861C57.9045 10.1861 56.3153 11.2337 55.7205 12.956H55.5785V10.3636H50.9265V24H55.8271V16.3295ZM70.8883 24.2131C72.6639 24.2131 74.0044 23.6094 74.8301 22.0824H74.9366V24H79.5176V14.6605C79.5176 12.1392 77.1294 10.1861 73.2321 10.1861C69.1571 10.1861 67.1507 12.3168 66.9821 14.8026H71.492C71.6074 13.9592 72.2289 13.5597 73.161 13.5597C74.0133 13.5597 74.617 13.9503 74.617 14.6605V14.696C74.617 15.4862 73.747 15.7347 71.4565 15.9034C68.6422 16.1076 66.4494 17.244 66.4494 20.2358C66.4494 22.9524 68.2782 24.2131 70.8883 24.2131ZM72.4863 21.1236C71.6518 21.1236 71.0659 20.7152 71.0659 19.9517C71.0659 19.2504 71.563 18.7088 72.6994 18.5312C73.4806 18.407 74.1376 18.2472 74.6525 18.0341V19.1705C74.6525 20.4134 73.5961 21.1236 72.4863 21.1236ZM89.9912 10.3636H87.6475V7.09659H82.7469V10.3636H81.0068V13.9148H82.7469V20.076C82.7114 22.9347 84.4781 24.3817 87.8605 24.1953C88.9703 24.1332 89.7959 23.9023 90.2398 23.7692L89.5296 20.3246C89.3431 20.369 88.8637 20.4666 88.5708 20.4666C87.9316 20.4666 87.6475 20.1825 87.6475 19.6143V13.9148H89.9912V10.3636ZM91.9909 24H96.8915V10.3636H91.9909V24ZM94.4412 8.94318C95.7729 8.94318 96.856 7.93999 96.856 6.70597C96.856 5.47195 95.7729 4.46875 94.4412 4.46875C93.1096 4.46875 92.0265 5.47195 92.0265 6.70597C92.0265 7.93999 93.1096 8.94318 94.4412 8.94318ZM99.3884 24H104.289V16.0455C104.289 14.8558 104.91 14.1278 105.922 14.1278C106.935 14.1278 107.592 14.8558 107.592 16.0455V24H112.279V16.0455C112.279 14.8558 112.9 14.1278 113.913 14.1278C114.925 14.1278 115.582 14.8558 115.582 16.0455V24H120.482V14.8026C120.482 12.006 118.689 10.1861 116.079 10.1861C114.055 10.1861 112.421 11.2869 111.959 12.956H111.817C111.533 11.2869 110.006 10.1861 108.089 10.1861C106.198 10.1861 104.751 11.2514 104.182 12.956H104.04V10.3636H99.3884V24ZM129.433 24.2486C133.215 24.2486 135.648 22.4375 136.109 19.5966H131.635C131.351 20.369 130.543 20.804 129.54 20.804C128.084 20.804 127.232 19.8452 127.232 18.5312V18.3182H136.109V17.1818C136.109 12.8406 133.446 10.1861 129.327 10.1861C125.101 10.1861 122.402 12.9915 122.402 17.2173C122.402 21.6296 125.065 24.2486 129.433 24.2486ZM127.232 15.6193C127.258 14.4386 128.235 13.6307 129.433 13.6307C130.65 13.6307 131.573 14.4474 131.599 15.6193H127.232Z'
          fill='#2029F3'
        />
        <path
          d='M16 33C11.7565 33 7.68687 31.3143 4.68629 28.3137C1.68571 25.3131 -8.8487e-07 21.2435 -6.99382e-07 17C-5.13895e-07 12.7565 1.68571 8.68687 4.68629 5.68629C7.68687 2.68571 11.7565 1 16 0.999999L16 6.76C13.2842 6.76 10.6796 7.83885 8.75923 9.75923C6.83885 11.6796 5.76 14.2842 5.76 17C5.76 19.7158 6.83885 22.3204 8.75923 24.2408C10.6796 26.1611 13.2842 27.24 16 27.24L16 33Z'
          fill='#0FBA68'
        />
        <path
          d='M16 24C12.134 24 9 20.866 9 17C9 13.134 12.134 10 16 10C19.866 10 23 13.134 23 17C23 20.866 19.866 24 16 24ZM16 13.9673C14.3251 13.9673 12.9673 15.3251 12.9673 17C12.9673 18.6749 14.3251 20.0327 16 20.0327C17.6749 20.0327 19.0327 18.6749 19.0327 17C19.0327 15.3251 17.6749 13.9673 16 13.9673Z'
          fill='#EAD621'
        />
      </svg>
    </Link>
  )
}

export default Logo
