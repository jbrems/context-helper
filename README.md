# <img src="demo.png" alt="logo" height="35" style="margin-bottom: -5px;"> context-helper
**Daisy chained helper methods for the Canvas 2D context.**

```html
<canvas id="myCanvas" width="110" height="70"></canvas>

<script type="module">
  import { ContextHelper } from 'https://unpkg.com/@jbrems/context-helper'

  const canvas = document.getElementById('myCanvas')
  const ctx = new ContextHelper(canvas.getContext('2d'))

  ctx.line(30, 10, 80, 10).lineWidth(10).stroke('lightseagreen')
  ctx.circle(30, 30, 20).fill('yellow').lineWidth(10).stroke('lightseagreen')
  ctx.circle(80, 30, 20).fill('yellow').lineWidth(10).stroke('lightseagreen')
  ctx.line(50, 40, 55, 60).lineWidth(10).lineCap('round').stroke('lightseagreen')
  ctx.line(60, 40, 55, 60).lineWidth(10).lineCap('round').stroke('lightseagreen')

  ctx.circle(30, 10, 2).fill('violet')
  ctx.circle(80, 10, 2).fill('violet')
  ctx.line(30, 10, 80, 10).lineWidth(2).stroke('violet')

  ctx.circle(30, 30, 2).fill('violet')
  ctx.circle(30, 30, 20).lineWidth(2).stroke('violet')

  ctx.circle(80, 30, 2).fill('violet')
  ctx.circle(80, 30, 20).lineWidth(2).stroke('violet')

  ctx.circle(50, 45, 2).fill('violet')
  ctx.circle(60, 45, 2).fill('violet')
  ctx.circle(55, 60, 2).fill('violet')
  ctx.line(50, 45, 55, 60).lineWidth(2).stroke('violet')
  ctx.line(60, 45, 55, 60).lineWidth(2).stroke('violet')
</script>
```

Creates this awesome logo in a HTML canvas.  
<img src="demo.png" alt="Demo image" height="220"> 

## Verbosity

The Canvas context remembers passed options by default.  
The same example can be written as:

```javascript
ctx.line(30, 10, 80, 10).lineWidth(10).stroke('lightseagreen') // line width and stroke style are remembered
ctx.circle(30, 30, 20).fill('yellow').stroke() // fill style is remembered
ctx.circle(80, 30, 20).fill().stroke() 
ctx.line(50, 40, 55, 60).lineCap('round').stroke() // line cap is remembered
ctx.line(60, 40, 55, 60).stroke()

ctx.circle(30, 10, 2).fill('violet') // fill style is updated
ctx.circle(80, 10, 2).fill()
ctx.line(30, 10, 80, 10).lineWidth(2).stroke('violet') // line width and stroke style are updated

ctx.circle(30, 30, 2).fill()
ctx.circle(30, 30, 20).stroke()

ctx.circle(80, 30, 2).fill()
ctx.circle(80, 30, 20).stroke()

ctx.circle(50, 45, 2).fill()
ctx.circle(60, 45, 2).fill()
ctx.circle(55, 60, 2).fill()
ctx.line(50, 45, 55, 60).stroke()
ctx.line(60, 45, 55, 60).stroke()
```

Or even as:

```javascript
// Set line width, stroke style, fill style, and line cap
ctx.lineWidth(10).strokeStyle('lightseagreen').fillStyle('yellow').lineCap('round')

ctx.line(30, 10, 80, 10).stroke()
ctx.circle(30, 30, 20).fill().stroke()
ctx.circle(80, 30, 20).fill().stroke() 
ctx.line(50, 40, 55, 60).stroke()
ctx.line(60, 40, 55, 60).stroke()

// Update fill style, stroke style, and line width
ctx.fillStyle('violet').strokeStyle('violet').lineWidth(2)

ctx.circle(30, 10, 2).fill()
ctx.circle(80, 10, 2).fill()
ctx.line(30, 10, 80, 10).stroke()

ctx.circle(30, 30, 2).fill()
ctx.circle(30, 30, 20).stroke()

ctx.circle(80, 30, 2).fill()
ctx.circle(80, 30, 20).stroke()

ctx.circle(50, 45, 2).fill()
ctx.circle(60, 45, 2).fill()
ctx.circle(55, 60, 2).fill()
ctx.line(50, 45, 55, 60).stroke()
ctx.line(60, 45, 55, 60).stroke()
```

Noone is stopping you from doing this:
```javascript
ctx.lineWidth(10).strokeStyle('lightseagreen').fillStyle('yellow').lineCap('round').line(30, 10, 80, 10).stroke().circle(30, 30, 20).fill().stroke().circle(80, 30, 20).fill().stroke().line(50, 40, 55, 60).stroke().line(60, 40, 55, 60).stroke().fillStyle('violet').strokeStyle('violet').lineWidth(2).circle(30, 10, 2).fill().circle(80, 10, 2).fill().line(30, 10, 80, 10).stroke().circle(30, 30, 2).fill().circle(30, 30, 20).stroke().circle(80, 30, 2).fill().circle(80, 30, 20).stroke().circle(50, 45, 2).fill().circle(60, 45, 2).fill().circle(55, 60, 2).fill().line(50, 45, 55, 60).stroke().line(60, 45, 55, 60).stroke()
```

Whatever you prefer, works best!