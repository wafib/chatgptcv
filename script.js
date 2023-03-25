function generatePDF() {
  const cvContent = document.getElementById('cv-content');
  const pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(cvContent, {
    callback: (pdf) => {
      pdf.save('my-cv.pdf');
    },
  });
}
