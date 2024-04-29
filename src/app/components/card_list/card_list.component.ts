import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild } from '@angular/core';
import { IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent, IonIcon, IonBadge, IonAvatar, IonLabel, IonItem, IonChip } from '@ionic/angular/standalone';
import { Program } from 'src/app/models/programs';
import { AlertController } from '@ionic/angular';
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

  modalNovoTreino = false;
  modalContinuarTreino = false;
  treinoEmAndamento: Number = -1;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    if (this.newExercise) {
      this.list.unshift(new Program('Novo Treino', false, '././assets/academia3.jpg'))
    }
  }

  iniciaTreino() {
    this.modalNovoTreino = true;
  }

  fechaModalNovoTreino() {
    this.modalNovoTreino = false;
  }

  async continuarTreino(treino: Program, index: Number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseja continuar seu treino?',
      message: '',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log(index)
            this.treinoEmAndamento = index;
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  fechaModalTreino() {
    this.modalContinuarTreino = false;
  }

}
