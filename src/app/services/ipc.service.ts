import { Injectable } from '@angular/core';
import { DtoSystemInfo } from '../models/systeminfo';
import { Observable } from 'rxjs';
import { IpcRendererEvent } from 'electron';

@Injectable({
    providedIn: 'root'
})
export class IpcService 
{

    constructor() 
    { }

    openDevTools() 
    {
        window.electron.toggleDevTools();
    }

    getSystemInfoAsync(): Observable<DtoSystemInfo> 
    {
        return new Observable(subscriber => 
        {
            try 
            {
                window.api.electronIpcOnce('systeminfo', (_event, data: string) => 
                {
                    try 
                    {
                        const systemInfo: DtoSystemInfo = DtoSystemInfo.deserialize(data);
                        subscriber.next(systemInfo);
                        subscriber.complete();
                    }
                    catch (error) 
                    {
                        console.error('Error deserializing system info:', error);
                        subscriber.error(error);
                    }
                });
                window.api.electronIpcSend('request-systeminfo');
            }
            catch (error) 
            {
                console.error('Error in getSystemInfoAsync:', error);
                subscriber.error(error);
            }
        });
    }
}
