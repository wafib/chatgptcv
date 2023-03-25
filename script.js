function generatePDF() {
  const cvContent = document.getElementById('cv-content');
  const opt = {
    margin: [10, 10, 10, 10],
    filename: 'my-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(cvContent).save();
}
