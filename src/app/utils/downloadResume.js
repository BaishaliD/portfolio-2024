export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/BaishaliDatta-resume.pdf";
  link.download = "BaishaliDatta-resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
