import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButtons, IonLabel, IonItem, IonInput, IonButton, LoadingController } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  providers: [AuthService],
  imports: [IonButton, IonInput, IonItem, IonLabel, IonButtons, IonContent, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  public email = '';
  public password = '';
  constructor(
    private auth: AuthService,
    private loadingController: LoadingController,
    private router: Router,) { }

  ngOnInit() {
  }

  signIn() {
  }

  async login() {
    const loadingIndicator = await this.showLoadingIndictator();
    try {
      // await this.authService.login(this.email, this.password).then(() => {
      //   this.router.navigate(['/home'])
      // }
      //);
      const login = await this.auth.login(this.email, this.password)
    } catch (e) {
      console.error(e);
    } finally {
      loadingIndicator.dismiss();
    }
  }

  private async showLoadingIndictator() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Aguarde...',
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }
}
