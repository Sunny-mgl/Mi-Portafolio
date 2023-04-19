import React from 'react';
   import Wave from 'react-wavify'
   
const WaveComponents = () => {
    return (
        <div>
         
            <Wave
                data-bs-theme="dark"
                className='wave'
                fill='#1277b0'
                //  paused={false}
                paused={false}
                options={
                    {
                        height: 80,
                        amplitude: 40,
                    }
                }
            />
        </div>
    );
};

export default WaveComponents;