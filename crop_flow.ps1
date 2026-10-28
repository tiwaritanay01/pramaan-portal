Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path (Get-Location) "public\assets\solution_flow_original.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Image($x, $y, $w, $h, $outName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $dest = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $outPath = Join-Path (Get-Location) "public\assets\$outName"
    $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $dest.Dispose()
    Write-Output "Saved $outName : $w x $h"
}

# 1. Incident / One-Click Go (City crash with red pin)
# In original: starts below "Multiple Sources call/Alert" (~y=180), down to ~y=500, x=35 to x=280
Crop-Image 30 180 250 310 "clean_step1_incident.png"

# 2. Smart Dispatch (Central blue grid with AI chip & 4 vehicles)
# In original: starts below "resource allocation" (~y=260), down to ~y=560, x=310 to x=690
Crop-Image 310 260 380 295 "clean_step2_dispatch.png"

# 3. Dynamic Routing (Green & red traffic trajectory road)
# In original: starts below "Multiple Sources call/Aleart" (~y=150), down to ~y=430, x=740 to x=1000
Crop-Image 740 150 260 280 "clean_step3_routing.png"

# 4. Smart Clearance (Intersection traffic lights with green wave)
# Text "traffic intervention" ends around y=440. Road starts y=440 down to y=610, x=45 to x=270
Crop-Image 45 440 230 170 "clean_step4_clearance.png"

# 5. Destination Matching (Command center operators & giant screen)
# Text "Recommendation" ends around y=425. Screen & operators: y=425 to y=600, x=670 to x=990
Crop-Image 670 425 325 180 "clean_step5_matching.png"

$src.Dispose()
