import { Component , inject} from '@angular/core';
import { RouterModule , Router} from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [RouterModule , CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // val : number = 5;

  // private router = inject(Router);
  // navigate()
  // {
  //   this.router.navigate(['/about']);
  // }

}
