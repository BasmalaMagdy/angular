
//the first letter of each word should be capital for just styling

import { Injectable } from '@angular/core';
import{DownloadModule} from './download/download.module'


@Injectable({
   providedIn: DownloadModule

  })


export class TestService
{
    name:string = "ali";
    printName()
    {
      window.alert(this.name)
    }

}
