import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import {IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent ,IonIcon ,IonBadge ,IonAvatar ,IonLabel, IonItem ,IonChip } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [CommonModule, IonChip, IonItem, IonLabel, IonAvatar, IonThumbnail, IonBadge, IonButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserProfileComponent  implements OnInit {
  @Input() user: User = new User('',0, './././assets/icon/avatar.jpg');
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }
}
