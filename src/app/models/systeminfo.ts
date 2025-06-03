export class DtoSystemInfo 
{
    constructor(
        public platform: string,
        public arch: string,
        public version: string,
        public totalMemory: number,
        public freeMemory: number
    ) 
    {}

    static deserialize(data: string): DtoSystemInfo 
    {
        const obj = JSON.parse(data);
        return new DtoSystemInfo(
            obj.platform,
            obj.arch,
            obj.version,
            obj.totalMemory,
            obj.freeMemory
        );
    }
} 