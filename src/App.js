import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './App.css'; 

const NotesComponent = () => {
  const [notes, setNotes] = useState('');

  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text(notes, 10, 10); 
    pdf.save('downloaded-file.pdf');
  };

  return (
    <div className="container">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter your notes here..."
        className="textarea"
      />
      <button onClick={handleDownload} className="button"> 
        Download Notes as PDF
      </button>
    </div>
  );
};

export default NotesComponent;
