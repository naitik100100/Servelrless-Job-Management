export class Parts {
  partId: number;
  partName: string;
  qoh: number;

  constructor(partId: number, partName: string, qoh: number) {
    this.partId = partId;
    this.partName = partName;
    this.qoh = qoh;
  }
}
