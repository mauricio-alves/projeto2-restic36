import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

bootstrapApplication(AppComponent, {
  // Configuração do HotToast para a aplicação inteira (global)
  providers: [provideHotToastConfig(), ...appConfig.providers],
})
  .then(() => {
    console.log('Aplicação inicializada com sucesso!');
  })
  .catch((err) => console.error(err));
