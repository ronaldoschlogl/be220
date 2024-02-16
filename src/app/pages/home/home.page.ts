import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonThumbnail, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonContent, IonIcon, IonBadge, IonAvatar, IonLabel, IonItem, IonChip, LoadingController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notifications, accessibility, trophy, add } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { register } from 'swiper/element/bundle';
import { CardListComponent } from 'src/app/components/card_list/card_list.component';
import { Program } from 'src/app/models/programs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [HeaderComponent, UserProfileComponent, CardListComponent, CommonModule, IonChip, IonItem, IonLabel, IonAvatar, IonThumbnail, IonBadge, IonButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  public home!: string;
  public user: User = new User('', 0, "././assets/icon/avatar.jpg")

  public personalOnline: Program[] = [];
  public programs: Program[] = [];
  public contents: Program[] = [];

  constructor(private loadingController: LoadingController, private userService: UserService) {
    addIcons({ notifications, accessibility, trophy, add });
  }

  async ngOnInit() {
    const loadingIndicator = await this.showLoadingIndictator();

    (await this.userService.getData()).subscribe((data: any) => {
      this.user.name = data['name']
      this.user.level = data['level']

      data['personal'].forEach((element: any) => {
        element['img'] = '././assets/academia.jpg';
        this.personalOnline.push(element);
      });

      data['contents'].forEach((element: any) => {
        element['img'] = '././assets/academia2.jpg';
        this.contents.push(element)
      });

      data['programs'].forEach((element: any) => {
        element['img'] = '././assets/academia3.jpg';
        this.programs.push(element)
      });

      loadingIndicator.dismiss();
    });
  }

  private async showLoadingIndictator() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Aguarde...',
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }

}
