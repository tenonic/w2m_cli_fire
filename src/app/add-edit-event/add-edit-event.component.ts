import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.css'],
})
export class AddEditEventComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;

  constructor(private httpService: HttpService, fb: FormBuilder) {
    this.form = fb.group({
      location: ['test', Validators.required],
    });
  }

  ngOnInit() {


    // this.httpService.get('title.json').subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  ok() {
    //console.log(this.form.value);
    this.httpService.post('locations.json', this.form.value)
      .subscribe(data => console.log(data));
  }
}
