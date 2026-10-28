/**
 * Reliable PPTX Download Helper
 * Ensures exact filename and official Microsoft PowerPoint MIME type
 */
export async function downloadPPTX(filename = 'Galacticos_SIH2026_Edited_Presentation.pptx') {
  try {
    const response = await fetch(`/assets/${filename}?t=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch PPTX: ${response.statusText}`);
    }
    const blob = await response.blob();
    const pptxBlob = new Blob([blob], {
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    });
    const downloadUrl = window.URL.createObjectURL(pptxBlob);
    const tempLink = document.createElement('a');
    tempLink.href = downloadUrl;
    tempLink.setAttribute('download', filename);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 2000);
  } catch (err) {
    console.warn('Blob download fallback triggered:', err);
    // Standard direct link fallback
    const directLink = document.createElement('a');
    directLink.href = `/assets/${filename}`;
    directLink.setAttribute('download', filename);
    document.body.appendChild(directLink);
    directLink.click();
    document.body.removeChild(directLink);
  }
}
