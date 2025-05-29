export class ContextHelper {
  constructor(context: CanvasRenderingContext2D);

  // Dynamic properties (getX/setX)
  getCanvas(): HTMLCanvasElement;
  getDirection(): CanvasDirection;
  setDirection(value: CanvasDirection): this;
  getFillStyle(): string | CanvasGradient | CanvasPattern;
  setFillStyle(value: string | CanvasGradient | CanvasPattern): this;
  getFilter(): string;
  setFilter(value: string): this;
  getFont(): string;
  setFont(value: string): this;
  getFontKerning(): CanvasFontKerning;
  setFontKerning(value: CanvasFontKerning): this;
  getFontStretch(): string;
  setFontStretch(value: string): this;
  getFontVariantCaps(): string;
  setFontVariantCaps(value: string): this;
  getGlobalAlpha(): number;
  setGlobalAlpha(value: number): this;
  getGlobalCompositeOperation(): GlobalCompositeOperation;
  setGlobalCompositeOperation(value: GlobalCompositeOperation): this;
  getImageSmoothingEnabled(): boolean;
  setImageSmoothingEnabled(value: boolean): this;
  getImageSmoothingQuality(): ImageSmoothingQuality;
  setImageSmoothingQuality(value: ImageSmoothingQuality): this;
  getLetterSpacing(): string;
  setLetterSpacing(value: string): this;
  getLineCap(): CanvasLineCap;
  setLineCap(value: CanvasLineCap): this;
  getLineDashOffset(): number;
  setLineDashOffset(value: number): this;
  getLineJoin(): CanvasLineJoin;
  setLineJoin(value: CanvasLineJoin): this;
  getLineWidth(): number;
  setLineWidth(value: number): this;
  getMeterLimit(): number;
  setMeterLimit(value: number): this;
  getShadowBlur(): number;
  setShadowBlur(value: number): this;
  getShadowColor(): string;
  setShadowColor(value: string): this;
  getShadowOffsetX(): number;
  setShadowOffsetX(value: number): this;
  getShadowOffsetY(): number;
  setShadowOffsetY(value: number): this;
  getStrokeStyle(): string | CanvasGradient | CanvasPattern;
  setStrokeStyle(value: string | CanvasGradient | CanvasPattern): this;
  getTextAlign(): CanvasTextAlign;
  setTextAlign(value: CanvasTextAlign): this;
  getTextBaseline(): CanvasTextBaseline;
  setTextBaseline(value: CanvasTextBaseline): this;
  getTextRendering(): string;
  setTextRendering(value: string): this;
  getWordSpacing(): string;
  setWordSpacing(value: string): this;

  // Get methods that return values
  getContextAttributes(...args: any[]): any;
  getImageData(...args: any[]): ImageData;
  getLineDash(...args: any[]): number[];
  getTransform(...args: any[]): DOMMatrix;
  isContextLost(...args: any[]): boolean;
  isPointInPath(...args: any[]): boolean;
  isPointInStroke(...args: any[]): boolean;

  // Chained methods
  arc(...args: Parameters<CanvasRenderingContext2D['arc']>): this;
  arcTo(...args: Parameters<CanvasRenderingContext2D['arcTo']>): this;
  beginPath(): this;
  bezierCurveTo(...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>): this;
  clearRect(...args: Parameters<CanvasRenderingContext2D['clearRect']>): this;
  clip(...args: Parameters<CanvasRenderingContext2D['clip']>): this;
  closePath(): this;
  createConicGradient(...args: any[]): this;
  createImageData(...args: any[]): this;
  createLinearGradient(...args: any[]): this;
  createPattern(...args: any[]): this;
  createGradialGradient(...args: any[]): this;
  drawFocusIfNeeded(...args: any[]): this;
  drawImage(...args: Parameters<CanvasRenderingContext2D['drawImage']>): this;
  ellipse(...args: Parameters<CanvasRenderingContext2D['ellipse']>): this;
  fillRect(...args: Parameters<CanvasRenderingContext2D['fillRect']>): this;
  fillText(...args: Parameters<CanvasRenderingContext2D['fillText']>): this;
  lineTo(...args: Parameters<CanvasRenderingContext2D['lineTo']>): this;
  measureText(...args: Parameters<CanvasRenderingContext2D['measureText']>): TextMetrics;
  moveTo(...args: Parameters<CanvasRenderingContext2D['moveTo']>): this;
  putImageData(...args: Parameters<CanvasRenderingContext2D['putImageData']>): this;
  quadraticCurveTo(...args: Parameters<CanvasRenderingContext2D['quadraticCurveTo']>): this;
  rect(...args: Parameters<CanvasRenderingContext2D['rect']>): this;
  reset(): this;
  resetTransform(): this;
  restore(): this;
  rotate(...args: Parameters<CanvasRenderingContext2D['rotate']>): this;
  roundRect(...args: Parameters<CanvasRenderingContext2D['roundRect']>): this;
  save(): this;
  scale(...args: Parameters<CanvasRenderingContext2D['scale']>): this;
  setLineDash(...args: Parameters<CanvasRenderingContext2D['setLineDash']>): this;
  setTransform(...args: Parameters<CanvasRenderingContext2D['setTransform']>): this;
  strokeRect(...args: Parameters<CanvasRenderingContext2D['strokeRect']>): this;
  strokeText(...args: Parameters<CanvasRenderingContext2D['strokeText']>): this;
  transform(...args: Parameters<CanvasRenderingContext2D['transform']>): this;
  translate(...args: Parameters<CanvasRenderingContext2D['translate']>): this;

  // Extra methods
  circle(x: number, y: number, radius: number): this;
  clear(): this;
  fill(fillStyle?: string): this;
  stroke(strokeStyle?: string): this;
  rotateDegrees(degrees: number): this;
  savePNG(): this;

  text(
    text: string,
    x: number,
    y: number
  ): {
    fill: (font?: string, fillStyle?: string) => ContextHelper;
    stroke: (font?: string, strokeStyle?: string) => ContextHelper;
  };
}

declare function addPropertyMethods(instance: ContextHelper, propertyName: string): void;
