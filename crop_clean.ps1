Add-Type -AssemblyName System.Drawing
$a4 = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\art_4_clearance.png"))
$a5 = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\art_5_matching.png"))
Write-Host "art_4: $($a4.Width) x $($a4.Height)"
Write-Host "art_5: $($a5.Width) x $($a5.Height)"

# Now let's crop just the pure graphic from art_4 and art_5 without the top text:
# In art_4 (230 wide? let's see), the top ~45px has "junctions foir traffic intervention".
# Let's crop from y=48 down to Height.
$a4_clean_h = $a4.Height - 48
$rect4 = New-Object System.Drawing.Rectangle(0, 48, $a4.Width, $a4_clean_h)
$dest4 = New-Object System.Drawing.Bitmap($a4.Width, $a4_clean_h)
$g4 = [System.Drawing.Graphics]::FromImage($dest4)
$g4.DrawImage($a4, 0, 0, $rect4, [System.Drawing.GraphicsUnit]::Pixel)
$g4.Dispose()
$dest4.Save((Join-Path (Get-Location) "public\assets\art_4_clean.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$dest4.Dispose()

# In art_5, top ~35px has "Recommendation".
# Let's crop from y=36 down to Height.
$a5_clean_h = $a5.Height - 36
$rect5 = New-Object System.Drawing.Rectangle(0, 36, $a5.Width, $a5_clean_h)
$dest5 = New-Object System.Drawing.Bitmap($a5.Width, $a5_clean_h)
$g5 = [System.Drawing.Graphics]::FromImage($dest5)
$g5.DrawImage($a5, 0, 0, $rect5, [System.Drawing.GraphicsUnit]::Pixel)
$g5.Dispose()
$dest5.Save((Join-Path (Get-Location) "public\assets\art_5_clean.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$dest5.Dispose()

$a4.Dispose()
$a5.Dispose()
Write-Host "Saved art_4_clean.png and art_5_clean.png!"
