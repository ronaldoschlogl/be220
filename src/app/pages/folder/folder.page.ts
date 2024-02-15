import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent, IonIcon, IonBadge, IonAvatar, IonLabel, IonItem, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notifications, accessibility, trophy, add } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { register } from 'swiper/element/bundle';
import { CardListComponent } from 'src/app/components/card_list/card_list.component';
import { Program } from 'src/app/models/programs';

register();
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [HeaderComponent, UserProfileComponent, CardListComponent, CommonModule, IonChip, IonItem, IonLabel, IonAvatar, IonThumbnail, IonBadge, IonButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);


  public usuario = {
    level: 5,
    avatar: "././assets/icon/avatar.jpg",
    name: "Leonardo Santos"
  }
  public personalOnline = [
    new Program('Corrida', false, "././assets/academia.jpg"),
    new Program('Levantamento de Peso', true, "././assets/academia2.jpg"),
    new Program('Yoga express', false, "././assets/academia3.jpg")
  ]

  public programas = [
    new Program('Corrida', true, "././assets/academia.jpg"),
    new Program('Levantamento de Peso', true, "././assets/academia2.jpg"),
    new Program('Yoga express', false, "././assets/academia3.jpg")
  ]

  public conteudos = [
    new Program('Corrida', false, "././assets/academia.jpg"),
    new Program('Levantamento de Peso', false, "././assets/academia2.jpg"),
    new Program('Yoga express', false, "././assets/academia3.jpg")
  ]
  constructor() {
    addIcons({ notifications, accessibility, trophy, add });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
