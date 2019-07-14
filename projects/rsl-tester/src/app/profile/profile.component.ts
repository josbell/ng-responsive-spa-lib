import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../view-models/student-profile';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { profileFormFields as fieldsConfig} from '../form-configs/profile-form-fields';
import { map } from 'rxjs/operators';
import { AppDataService } from '../services/app-data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: StudentProfile;
  operation$: Observable<string>;
  fields = fieldsConfig;

  constructor(
    private dataService: AppDataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.operation$ = this.route.params.pipe(map(p => p.operation));
    this.dataService.getProfile().subscribe(profile => this.profile = profile);
  }

  updateProfile = (data) => {
    this.router.navigate(['../view'], { relativeTo: this.route });
  }

}
