import React from 'react'

const LightButton = ({ name }) => {
  return (
    <>
      <span className='flex font-bold uppercase text-sm text-[#0028F2] p-4' >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.5649 8.82586C16.9541 8.43404 16.952 7.80088 16.5602 7.41166C16.1683 7.02244 15.5352 7.02454 15.1459 7.41636L16.5649 8.82586ZM3.56064 9.74147L3.0364 10.593L3.03648 10.5931L3.56064 9.74147ZM3.8467 7.60287L4.12544 8.56324L4.12609 8.56305L3.8467 7.60287ZM19.5022 3.04743L19.2242 2.08685L19.2228 2.08726L19.5022 3.04743ZM20.949 4.51889L19.9907 4.23324L19.9904 4.23418L20.949 4.51889ZM16.304 20.1582L17.2625 20.4432L17.2626 20.4429L16.304 20.1582ZM14.1809 20.4325L15.0371 19.9159L15.0371 19.9158L14.1809 20.4325ZM10.6429 16.5151C10.9273 16.9885 11.5417 17.1416 12.0151 16.8571C12.4885 16.5727 12.6416 15.9583 12.3571 15.4849L10.6429 16.5151ZM14.5384 19.0896L14.0217 18.2334L12.3094 19.2669L12.8261 20.123L14.5384 19.0896ZM15.1459 7.41636L9.48215 13.118L10.9011 14.5275L16.5649 8.82586L15.1459 7.41636ZM10.7158 12.9711L4.0848 8.88985L3.03648 10.5931L9.66744 14.6743L10.7158 12.9711ZM4.08488 8.8899C4.04244 8.86378 4.02481 8.83767 4.01495 8.81549C4.00304 8.78869 3.99644 8.75198 4.00197 8.71059C4.0075 8.6692 4.02341 8.63622 4.04119 8.61446C4.05572 8.59669 4.07852 8.57686 4.12544 8.56324L3.56796 6.64251C1.75027 7.17008 1.43386 9.60649 3.0364 10.593L4.08488 8.8899ZM4.12609 8.56305L19.7816 4.00761L19.2228 2.08726L3.56731 6.6427L4.12609 8.56305ZM19.7802 4.00802C19.9 3.97334 20.0344 4.08655 19.9907 4.23324L21.9073 4.80454C22.3968 3.16238 20.885 1.60622 19.2242 2.08685L19.7802 4.00802ZM19.9904 4.23418L15.3454 19.8735L17.2626 20.4429L21.9076 4.80361L19.9904 4.23418ZM15.3455 19.8732C15.3003 20.025 15.1126 20.0409 15.0371 19.9159L13.3247 20.9491C14.3038 22.5719 16.7257 22.2488 17.2625 20.4432L15.3455 19.8732ZM12.3571 15.4849L11.0487 13.3076L9.33446 14.3378L10.6429 16.5151L12.3571 15.4849ZM15.0371 19.9158L14.5384 19.0896L12.8261 20.123L13.3247 20.9492L15.0371 19.9158Z" fill="#0028F2"></path> </svg>
        {name}</span>
    </>
  )
}

export default LightButton