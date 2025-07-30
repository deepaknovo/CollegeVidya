import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const CompareToast = ({ show, onHide, selected }) => {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onHide, 2000);
      return () => clearTimeout(t);
    }
  }, [show, onHide]);

  return (
    <div className={`compare-toast ${show ? 'show' : ''}`}>
      <Toast show={show} onClose={onHide}>
        <Toast.Header><strong>Compare</strong></Toast.Header>
        <Toast.Body>
          Selected: {selected.map(u => u.name).join(' & ')}<br/>
          (Toast appears slowly in 2s)
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default CompareToast;
