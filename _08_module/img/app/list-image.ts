export class ListImage {
  private _listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  get listImage() {
    return this._listImage;
  }

  set listImage(value: string[]) {
    this._listImage = value;
  }
  getImgByIndex(index: number) {
    return this._listImage[index];
  }
  getLength(): number{
    return this._listImage.length;
  }
}
