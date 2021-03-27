import React, { useRef } from 'react';
import './componentSwitch.less';
import 'antd/dist/antd.css';
import { Switch } from 'antd';


const ComponentSwitch = () => {
    const detailsRef1 = useRef();
    const detailsRef2 = useRef();
    

    function onChange1(checked) {
        detailsRef1.current.className = detailsRef1.current.className !== "click-yes" ? "click-yes" : "click-no";
      }
      function onChange2(checked) {
        detailsRef2.current.className = detailsRef2.current.className !== "click-yes" ? "click-yes" : "click-no";
      }


    return (
        <>
        <div className="switch__wrapper">
            <div>
                <div className="switch__box-left">
                    <span ref={detailsRef1} className="click-yes"></span>
                    <Switch defaultChecked onChange={onChange1} />
                </div>
            
                <div className="switch__box-right">
                    <span ref={detailsRef2} className="click-yes"></span>
                    <Switch defaultChecked onChange={onChange2} />
                </div>
            </div>
        </div>
    </>
    )
}


export default ComponentSwitch; 