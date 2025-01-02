import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent { 

  // private route = inject(ActivatedRoute);

  // ngOnInit(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  // }

}
