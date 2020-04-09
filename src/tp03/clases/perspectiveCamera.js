const Camera = require('./camera')
const glMatrix = require('gl-matrix')

class PerspectiveCamera extends Camera {
  constructor (fovy, aspect, near, far) {
    super()
    this._fovy = fovy
    this._aspect = aspect
    this._near = near
    this._far = far

    //  Generar la Matriz de proyección en perspectiva
    this.updateProjectionMatrix()
  }
  //  Función para que, antes de leer la matriz de proyección,
  //  se actualize con los valores necesarios
  updateProjectionMatrix () {
    const temp = glMatrix.mat4.create()
    this._projectionMatrix = glMatrix.mat4.perspective(temp, this._fovy,
      this._aspect, this._near, this._far)
  }
  get projectionMatrix () {
    this.updateProjectionMatrix()
    return this._projectionMatrix
  }
}

module.exports = PerspectiveCamera