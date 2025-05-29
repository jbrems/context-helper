# <img src="logo.png" alt="logo" height="100" style="margin-bottom: -25px;"> context-helper
**Daisy chained helper methods for the Canvas 2D context.**

```html
  <canvas id="myCanvas" width="100" height="100"></canvas>
```
```javascript
  const canvas = document.getElementById('myCanvas')
  const ctx = new ContextHelper(canvas.getContext('2d'))

  // Tripod
  ctx.setLineWidth(8).setLineCap('round').setLineJoin('round').setStrokeStyle('#2B2B2B').setFillStyle('#C47A3D')
  ctx.beginPath().roundRect(93, 20, 12, 150, 4).stroke().fill()
  ctx.translate(70, 110).rotateDegrees(10).beginPath().roundRect(-6, -80, 12, 160, 4).stroke().fill()
  ctx.resetTransform().translate(128, 110).rotateDegrees(-10).beginPath().roundRect(-6, -80, 12, 160, 4).stroke().fill()
  ctx.resetTransform().translate(100, 130).beginPath().roundRect(-70, -6, 140, 12, 4).stroke().fill()

  // Canvas
  ctx.resetTransform().translate(100, 84).beginPath().roundRect(-60, -40, 120, 80, 4).stroke('#2B2B2B').fill('white')

  // Bracket
  ctx.setLineWidth(6)
  ctx.resetTransform().translate(50, 88).beginPath().moveTo(10, -10).lineTo(0, 0).lineTo(10, 10).stroke('#F35050')
  
  // c
  ctx.translate(34, 0).beginPath().arc(0, 0, 12, 0.25 * Math.PI, 1.75 * Math.PI, false).stroke('#2D8EFF')

  // h
  ctx.translate(22, 0).beginPath().moveTo(0, 12).lineTo(0, -24).moveTo(0, 2).arc(10, 2, 10, Math.PI, 0, false).lineTo(20, 12).stroke('#3DBA73')
  
  // Bracket
  ctx.resetTransform().translate(150, 88).beginPath().moveTo(-10, -10).lineTo(0, 0).lineTo(-10, 10).stroke('#F35050')
    
```
Creates this awesome logo:  
<img src="logo.png" alt="Context-helper logo" /> 
