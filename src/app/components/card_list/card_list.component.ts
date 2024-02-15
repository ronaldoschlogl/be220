import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent, IonIcon, IonBadge, IonAvatar, IonLabel, IonItem, IonChip } from '@ionic/angular/standalone';
import { Program } from 'src/app/models/programs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card_list.component.html',
  styleUrls: ['./card_list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonChip, IonItem, IonLabel, IonAvatar, IonThumbnail, IonBadge, IonButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardListComponent implements OnInit {
  @Input() title: string = '';
  @Input() newExercise: boolean = false;
  @Input() newList: boolean = false;
  @Input() list: Program[] = [new Program('', true, ''), new Program('abc', false, '')];
  constructor() { }

  ngOnInit() {
    if(this.newExercise){
      this.list.unshift(new Program('Novo Treino', false, '././assets/academia3.jpg'))
    }

    console.log(this.list)
  }

}
