import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent ,IonIcon ,IonBadge ,IonAvatar ,IonLabel, IonItem ,IonChip } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {notifications, accessibility, trophy, add} from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [CommonModule, IonChip, IonItem, IonLabel, IonAvatar, IonThumbnail, IonBadge, IonButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public logo = "././assets/icon/logo.png";

  public usuario = {
    nivel: "Nível Roxo",
    avatar: "././assets/icon/avatar.jpg",
    nome: "Leonardo Santos"
  }
  public personalOnline = [
    {titulo: 'Novo Treino', execicios: ['abc1'], bg: "././assets/academia.jpg"},
    {titulo: 'Levantamento de peso', execicios: ['abc2'], bg: "././assets/academia2.jpg", continuarTreinando: true},
    {titulo: 'Yoga express', execicios: ['abc3'], bg: "././assets/academia3.jpg"}
  ]
  public programas = [
    {titulo: 'Corrida', execicios: ['abc1'], bg: "././assets/academia.jpg"},
    {titulo: 'Levantamento de peso', execicios: ['abc2'], bg: "././assets/academia2.jpg", continuarTreinando: true},
    {titulo: 'Yoga express', execicios: ['abc3'], bg: "././assets/academia3.jpg"}
  ]
  constructor() {
    addIcons({notifications, accessibility, trophy, add});
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
