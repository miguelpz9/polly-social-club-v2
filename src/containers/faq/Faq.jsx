import React from 'react';

const Faq = () => {
    return (
      <div className="flex flex-col items-center h-fit bg-light-bg" id="about">
        <div className="text-full-white flex flex-col bg-dark-bg sticky z-10 top-16 font-title p-4 md:text-3xl w-full text-5xl mb-10">
            <h3 className="font-title justify-center mx-auto md:text-3xl text-5xl">FaQ</h3>
        </div>
        <div className="accordion lg:w-[75%] xl:w-2/3 w-1/2 py-14" id="accordionExample">
          <div className="accordion-item bg-dark-bg border border-red-200">
            <h2 className="accordion-header font-title mb-0" id="headingOne"><button className="accordion-button relative flex items-center first-letter:w-full w-full py-4 px-5 text-xl text-full-white text-left bg-dark-bg border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why is GOLB amazing?</button></h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body font-text text-full-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark-bg border border-red-200">
            <h2 className="accordion-header font-title mb-0" id="headingTwo"><button className="accordion-button text-xl collapsed relative flex items-center first-letter:w-full w-full py-4 px-5 text-full-white text-left bg-dark-bg border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Why is GOLB amazing?</button></h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-full-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark-bg border border-red-200">
            <h2 className="accordion-header font-title mb-0" id="headingThree"><button className="accordion-button text-xl collapsed relative flex items-center first-letter:w-full w-full py-4 px-5 text-full-white text-left bg-dark-bg border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Why is GOLB amazing?</button></h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-full-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark-bg border border-red-200">
            <h2 className="accordion-header font-title mb-0" id="headingFour"><button className="accordion-button text-xl collapsed relative flex items-center first-letter:w-full w-full py-4 px-5 text-full-white text-left bg-dark-bg border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Why is GOLB amazing?</button></h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-full-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Faq;