import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  public write(key: string, value: any) {
    if (value)
      value = JSON.stringify(value);
    localStorage.setItem(key, value);
    return value;
  }

  public read<T>(key: string): T {
    let value: string = localStorage.getItem(key);
    if (value && value != "undefined" && value != "null")
        return <T>JSON.parse(value);
    return null;
  }

}
