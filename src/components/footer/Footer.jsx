import React from 'react';

const HeaderContent = () => {
    return (
        <div className="grow w-full mt-20 border-t-2 border-tiffany bg-tiffany60 flex flex-row">
          <div className="max-w-2xl justify-center p-10 align-middle mx-auto my-auto">
            <h4 className="text-white text-6xl font-title"> <b className="text-tiffany">POLLY</b> SOCIAL CLUB</h4>
            <div className="flex flex-col mb-2 mt-6">
              <button type="button" class="text-tiffany hover:text-white font-text bg-white hover:bg-tiffany focus:ring-4 focus:ring-blue-300 rounded-3xl font-medium m-2 h-12 text-lg text-center">Join the club</button>
            </div>
            <p className="text-white p-2 font-text">© 2022 Polly social Club. All rights reserved.</p>
          </div>
        </div>
    );
  };
  
  export default HeaderContent;