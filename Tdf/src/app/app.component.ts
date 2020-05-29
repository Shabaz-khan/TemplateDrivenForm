import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React' , 'Veu', 'Python'];
  userModel = new User('', '' , 8553714286 , '' , '' , false);
  submitted  = false;
  topicHasError = true;
  errorMsg = '';

  constructor(private enrollmentService: EnrollmentService ) {}

  validateTopic(value){
    if(value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
   this.submitted = true;
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
        data => console.log('success!' , data),
        error => this.errorMsg = error.statusText
    );
  }
}
