import {React, useState } from 'react'


function ControlPane() {
  return (
    <>
        <div className="main-control-container">
            <label className="control-label">Control</label>
            <div className="control-card">
                <div className="control-buttons">
                <button className="control-btn">control1</button>
                <button className="control-btn">control2</button>
                </div>
                    
                <div className="control-select-group">
                <label htmlFor="fruit">Choose a fruit:</label>
                <select id="fruit" name="fruit" className="control-select">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
                </div>
            </div>
        </div>
    </>
    
  );
}

export default ControlPane