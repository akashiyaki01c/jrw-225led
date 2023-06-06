

class LedDisplay {
    constructor(id, imagePath, sizeX, sizeY) {
        this.id = id || "";
        this.sizeX = sizeX || 0;
        this.sizeY = sizeY || 0;

        this._element = document.getElementById(id);
        this._element.style.backgroundImage = `url(${imagePath})`;
        this._element.style.backgroundPositionX = 0;
        this._element.style.backgroundPositionY = 0;
        this._element.style.width = `${sizeX}px`;
        this._element.style.height = `${sizeY}px`;
        this._element.style.imageRendering = `pixelated`;
    }

    update(x, y) {
        this._element.style.backgroundPositionX = `-${x * this.sizeX}px`;
        this._element.style.backgroundPositionY = `-${y * this.sizeY}px`;
    }
}