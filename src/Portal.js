import React, { useState } from 'react';
import Modal from './Modal';

const btn_style = {
    position: 'relative',
    zIndex: 1
}

const content_style = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

const Portal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div style={btn_style}>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={() => {setIsOpen(false)}}>
                    Fancy Modal
                </Modal>
            </div>

           

            <div style={content_style}>
                Content
            </div>
            
        </div>
    )
}

export default Portal


//separate from root
//css handling in better way
//event delegation occurs even if it is outside the same root