import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../../shared/api.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public promptControl: FormControl = new FormControl();
  private aliveSubs = true;
  public result: any;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.promptControl.valueChanges.pipe(takeWhile(() => this.aliveSubs)).subscribe();
  }

  public getResult() {
    this.apiService.getCompletion(this.promptControl.value).subscribe(result => this.result = result);
  }
}
