class Scene {
  constructor (clearColor) {
    this._clearColor = clearColor
    this._meshes = []
    this._ambientLight = null
    this._pointLight = null
  }

  addMesh (mesh) {
    this._meshes.push(mesh)
  }
}

module.exports = Scene
