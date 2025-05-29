export class ContextHelper {
  constructor(context) {
    this.ctx = context

    addPropertyMethods(this, 'canvas')
    addPropertyMethods(this, 'direction')
    addPropertyMethods(this, 'fillStyle')
    addPropertyMethods(this, 'filter')
    addPropertyMethods(this, 'font')
    addPropertyMethods(this, 'fontKerning')
    addPropertyMethods(this, 'fontStretch')
    addPropertyMethods(this, 'fontVariantCaps')
    addPropertyMethods(this, 'globalAlpha')
    addPropertyMethods(this, 'globalCompositeOperation')
    addPropertyMethods(this, 'imageSmoothingEnabled')
    addPropertyMethods(this, 'imageSmoothingQuality')
    addPropertyMethods(this, 'letterSpacing')
    addPropertyMethods(this, 'lineCap')
    addPropertyMethods(this, 'lineDashOffset')
    addPropertyMethods(this, 'lineJoin')
    addPropertyMethods(this, 'lineWidth')
    addPropertyMethods(this, 'meterLimit')
    addPropertyMethods(this, 'shadowBlur')
    addPropertyMethods(this, 'shadowColor')
    addPropertyMethods(this, 'shadowOffsetX')
    addPropertyMethods(this, 'shadowOffsetY')
    addPropertyMethods(this, 'strokeStyle')
    addPropertyMethods(this, 'textAlign')
    addPropertyMethods(this, 'textBaseline')
    addPropertyMethods(this, 'textRendering')
    addPropertyMethods(this, 'wordSpacing')

    // Getters (get..., is...) cannot be daisy chained since they return a value
    this.getContextAttributes = (...params) => this.ctx.getContextAttributes(...params)
    this.getImageData = (...params) => this.ctx.getImageData(...params)
    this.getLineDash = (...params) => this.ctx.getLineDash(...params)
    this.getTransform = (...params) => this.ctx.getTransform(...params)
    this.isContextLost = (...params) => this.ctx.isContextLost(...params)
    this.isPointInPath = (...params) => this.ctx.isPointInPath(...params)
    this.isPointInStroke = (...params) => this.ctx.isPointInStroke(...params)
  }

  daisyChain(functionName) {
    return (...params) => {
      this.ctx[functionName](...params)
      return this
    }
  }

  arc = this.daisyChain('arc')
  arcTo = this.daisyChain('arcTo')
  beginPath = this.daisyChain('beginPath')
  bezierCurveTo = this.daisyChain('bezierCurveTo')
  clearRect = this.daisyChain('clearRect')
  clip = this.daisyChain('clip')
  closePath = this.daisyChain('closePath')
  createConicGradient = this.daisyChain('createConicGradient')
  createImageData = this.daisyChain('createImageData')
  createLinearGradient = this.daisyChain('createLinearGradient')
  createPattern = this.daisyChain('createPattern')
  createGradialGradient = this.daisyChain('createGradialGradient')
  drawFocusIfNeeded = this.daisyChain('drawFocusIfNeeded')
  drawImage = this.daisyChain('drawImage')
  ellipse = this.daisyChain('ellipse')
  // fill = this.daisyChain('fill') // Enhanced by extras
  fillRect = this.daisyChain('fillRect')
  fillText = this.daisyChain('fillText')
  lineTo = this.daisyChain('lineTo')
  measureText = this.daisyChain('measureText')
  moveTo = this.daisyChain('moveTo')
  putImageData = this.daisyChain('putImageData')
  quadraticCurveTo = this.daisyChain('quadraticCurveTo')
  rect = this.daisyChain('rect')
  reset = this.daisyChain('reset')
  resetTransform = this.daisyChain('resetTransform')
  restore = this.daisyChain('restore')
  rotate = this.daisyChain('rotate')
  roundRect = this.daisyChain('roundRect')
  save = this.daisyChain('save')
  scale = this.daisyChain('scale')
  setLineDash = this.daisyChain('setLineDash')
  setTransform = this.daisyChain('resetTransform')
  // stroke = this.daisyChain('stroke') // Enhanced by extras
  strokeRect = this.daisyChain('strokeRect')
  strokeText = this.daisyChain('strokeText')
  transform = this.daisyChain('transform')
  translate = this.daisyChain('translate')

  // Extras
  /**
   * Prepares a fill circle for stroking or filling with the given x and y values as center and the given radius.
   * @param {number} x 
   * @param {number} y 
   * @param {number} radius 
   * @returns 
   */
  circle(x, y, radius) {
    this.arc(x, y, radius, 0, Math.PI * 2)
    return this
  }

  /**
   * Clears the canvas
   * @returns The ContextHelper instance for daisy chaining
   */
  clear() {
    this.ctx.clearRect(0, 0, this.getCanvas().width, this.getCanvas().height)
    return this
  }

  /**
   * The CanvasRenderingContext2D's fill method with the added option of setting the fillStyle first.
   * @param {string?} fillStyle 
   * @returns The ContextHelper instance for daisy chaining
   */
  fill(fillStyle) {
    if (fillStyle) this.setFillStyle(fillStyle)
    this.ctx.fill()
    return this
  }

  /**
   * Rotates the context by the given degrees.
   * @param {number} degrees 
   * @returns The ContextHelper instance for daisy chaining
   */
  rotateDegrees(degrees) {
    this.ctx.rotate(degrees * Math.PI / 180)
    return this
  }

  /**
   * When used in a browser, prompts the user to save the canvas image as a PNG.
   * @returns The ContextHelper instance for daisy chaining
   */
  savePNG() {
    const dataURL = this.getCanvas().toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "context-helper.png";
    link.click();
    return this
  }

  /**
   * The CanvasRenderingContext2D's stroke method with the added option of setting the strokeStyle first.
   * @param {string?} strokeStyle 
   * @returns The ContextHelper instance for daisy chaining
   */
  stroke(strokeStyle) {
    if (strokeStyle) this.setStrokeStyle(strokeStyle)
    this.ctx.stroke()
    return this
  }

  // TODO: allow for stroking and filling the text
  text(text, x, y) {
    const ctxHelper = this
    return {
      ...ctxHelper,
      fill: (font, fillStyle) => {
        if (font) this.setFont(font)
        if (fillStyle) this.setFillStyle(fillStyle)
        this.ctx.fillText(text, x, y)
        return ctxHelper
      },
      stroke: (font, strokeStyle) => {
        if (font) this.setFont(font)
        if (strokeStyle) this.setStrokeStyle(strokeStyle)
        this.ctx.strokeText(text, x, y)
        return ctxHelper
      },
    }
  }
}

/**
 * Adds a getter and setter instance method for the given property name on the given instance.
 * @param {ContextHelper} instance 
 * @param {string} propertyName 
 */
function addPropertyMethods(instance, propertyName) {
  const capitalizedPropertyName = `${propertyName.at(0).toUpperCase()}${propertyName.slice(1)}`

  instance[`get${capitalizedPropertyName}`] = function() {
    return this.ctx[propertyName]
  }

  // Canvas is a readonly property
  if (propertyName === 'canvas') return

  instance[`set${capitalizedPropertyName}`] = function(value) {
    this.ctx[propertyName] = value
    return this
  }
}
