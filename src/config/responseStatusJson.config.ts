

interface Table {
    resultMsg: string;
    resultCode: number;
    data: any;
    // new(resultMsg: string, data?: any): any;
    // new(resultMsg: string, resultCode: number, data: any): any;
}

export class SuccessResponse {
    public resultMsg: string = "";
    public resultCode: number;
    public data: any;
    constructor(params: Table) {
        this.resultMsg = params.resultMsg;
        this.resultCode = params.resultCode;
        this.data = params.data;
    }
}

export class SuccessResponseJson extends SuccessResponse {
    constructor(resultMsg: string = "成功", data: any = {}) {
        super({ resultMsg, resultCode: 0, data });
    }
}

export class FailResponseJson extends SuccessResponse {
    static FAIL_CODE_1001: number = 1001;
    constructor(resultMsg: string = "未知异常", resultCode: number = -1, data: any = {}) {
        if (resultCode <= 0) resultCode = -1;
        super({ resultMsg, resultCode, data });
    }
}



// export const ResponseStatusJson: Table = ResponseStatusJsonClass;

