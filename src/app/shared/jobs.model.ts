export class Jobs {
  jobName: string;
  partId: number;
  qty: number;

  constructor(jobName: string, partId: number, qty: number) {
    this.jobName = jobName;
    this.partId = partId;
    this.qty = qty;
  }
}

export class Ordered_Jobs {
  partId: number;
  jobName: string;
  userId: number;
  qty: number;

  constructor(partId: number, jobName: string, userId: number, qty: number) {
    this.partId = partId;
    this.jobName = jobName;
    this.userId = userId;
    this.qty = qty;
  }
}

export interface JobResponse_OrderedJob {
  success: boolean;
  statusCode: number;
  message?: string;
  Items?: Ordered_Jobs[];
  error?: any;
}

export interface JobResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  Items?: Jobs[];
  error?: any;
}
