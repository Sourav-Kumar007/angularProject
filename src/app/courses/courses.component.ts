import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone:true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  @Input() course:any;
 

}
// const obj1 = {a:1 , b:2};
// const obj2 = {b:3 , c:3};
// const combinedObj = {...obj1...obj2};
// console.log(combinedObj);