import React from 'react'
import ReactLoading from 'react-loading'

const LoadingScreen = ({ type, color }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center', alignSelf: 'center', marginTop: '20%'}}>
        <ReactLoading type={type} color={color} height={'6%'} width={'6%'} />
    </div>
  )
}

export default LoadingScreen