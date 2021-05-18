import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private loader;
  file_tm: any = {
    name: '',
    blob: null
  }
  constructor() { }

  ngOnInit(): void {
  }


  public async onClickUpload($event): Promise<any> {
    let file
    await this.loader.file.then(val => file = val)
    this.file_tm.name  = file.name
    this.file_tm.blob = await this.toBase64(file)
    return this.file_tm;
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);

    localStorage.setItem('A', file)
  });

}
