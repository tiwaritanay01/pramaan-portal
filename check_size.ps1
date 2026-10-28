Add-Type -AssemblyName System.Drawing
$filePath = Join-Path (Get-Location) "public\assets\solution_flow_original.png"
$img = [System.Drawing.Image]::FromFile($filePath)
Write-Output "Size: $($img.Width) x $($img.Height)"
$img.Dispose()
