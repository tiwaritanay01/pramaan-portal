$ErrorActionPreference = 'Stop'

Write-Host "1. Running PPTX Generator..."
node scripts/generate_improved_pptx.js

Write-Host "2. Starting PowerPoint COM Automation..."
$app = New-Object -ComObject PowerPoint.Application

$pptxPath = "C:\dev\sih\Galacticos_SIH2026_Improved.pptx"
$pdfPath = "C:\dev\sih\Galacticos_SIH2026_Improved.pdf"
$publicPdfPath = "C:\dev\sih\public\assets\Galacticos_SIH2026_Improved.pdf"

# Open presentation (ReadOnly = 1, Untitled = 0, WithWindow = 0)
$pres = $app.Presentations.Open($pptxPath, 1, 0, 0)
Write-Host "Presentation opened successfully. Slide count: $($pres.Slides.Count)"

# Export as PDF (ppSaveAsPDF = 32)
$pres.SaveAs($pdfPath, 32)
Write-Host "Exported PDF to: $pdfPath"

# Copy PDF to public/assets
Copy-Item -Path $pdfPath -Destination $publicPdfPath -Force
Write-Host "Copied PDF to web assets: $publicPdfPath"

# Also sync to Desktop and Downloads
$homeDir = [System.Environment]::GetFolderPath('UserProfile')
$destinations = @(
    (Join-Path $homeDir "OneDrive\Desktop\Galacticos_SIH2026_Improved.pdf"),
    (Join-Path $homeDir "Desktop\Galacticos_SIH2026_Improved.pdf"),
    (Join-Path $homeDir "Downloads\Galacticos_SIH2026_Improved.pdf")
)
foreach ($dest in $destinations) {
    $parent = Split-Path $dest
    if (Test-Path $parent) {
        Copy-Item -Path $pdfPath -Destination $dest -Force
        Write-Host "Deployed PDF to: $dest"
    }
}

# Export high-res PNG for each slide (1920x1080)
for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $slide = $pres.Slides.Item($i)
    $pngPath = "C:\dev\sih\public\improved_slide_$i.png"
    $slide.Export($pngPath, "PNG", 1920, 1080)
    Write-Host "Exported Slide $i to: $pngPath"
}

$pres.Close()
$app.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($app) | Out-Null
Write-Host "PowerPoint export completed successfully!"
