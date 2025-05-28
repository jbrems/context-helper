# <img src="logo.png" alt="logo" height="100" style="margin-bottom: -25px;"> context-helper
**Daisy chained helper methods for the Canvas 2D context.**

```html
  <canvas id="myCanvas" width="100" height="100"></canvas>
```
```javascript
  const canvas = document.getElementById('myCanvas')
  const ctx = new ContextHelper(canvas.getContext('2d'))

  // Tripod
  ctx.lineWidth(4).lineCap('round').lineJoin('round').strokeStyle('#2B2B2B').fillStyle('#C47A3D')
  ctx.rect(47, 10, 6, 80, 2).stroke().fill()
  ctx.translate(35, 55).rotate(10).rect(-3, -40, 6, 80, 2).stroke().fill()
  ctx.resetTranslate(65, 55).rotate(-10).rect(-3, -40, 6, 80, 2).stroke().fill()
  ctx.resetTranslate(50, 65).rect(-35, -3, 70, 6, 2).stroke().fill()

  // Canvas
  ctx.resetTranslate(50, 42).rect(-30, -20, 60, 40, 2).stroke('#2B2B2B').fill('white')

  // Bracket
  ctx.lineWidth(3)
  ctx.resetTranslate(25, 42).beginPath().moveTo(10, -10).lineTo(0, 0).lineTo(10, 10).stroke('#F35050')
  
  // c
  ctx.translate(18, 0).beginPath().arc(0, 0, 6, 0.25 * Math.PI, 1.75 * Math.PI, false).stroke('#2D8EFF')

  // h
  ctx.translate(10, 0).beginPath().moveTo(0, 6).lineTo(0, -12).moveTo(0, 1).arc(5, 1, 5, Math.PI, 0, false).lineTo(10, 6).stroke('#3DBA73')
  
  // Bracket
  ctx.resetTranslate(75, 42).beginPath().moveTo(-10, -10).lineTo(0, 0).lineTo(-10, 10).stroke('#F35050')
```
Creates this awesome logo:  
<img src="logo.png" alt="Context-helper logo" /> 
