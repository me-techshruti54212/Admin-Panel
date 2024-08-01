import React from 'react'

const TemplateRow = () => {
  return (
    <>
    <div className="bg-[#fff] font-normal border-b border-slate-200 flex  justify-evenly">
                <span className="border-x-white border-x-2 w-2/5 p-3">
                  Template Name
                </span>
                <span className="border-x-white border-x-2 w-1/4 p-3">
                  Created At
                </span>
                <span className="border-x-white border-x-2 w-1/4 p-3">
                  Updated At
                </span>
                <span className="border-x-white border-x-2 w-[10%] p-3">
                  Action
                </span>
              </div>
    </>
  )
}

export default TemplateRow