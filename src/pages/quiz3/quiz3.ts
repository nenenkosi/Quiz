import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quiz4Page } from '../quiz4/quiz4';

/**
 * Generated class for the Quiz3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz3',
  templateUrl: 'quiz3.html',
})
export class Quiz3Page {

 Question1;
 Question2;
 Question3;
 Question4;
 Question5;

count1=0;
count2=0;
count3=0;
count4=0;
count5=0;
total=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quiz3Page');
  }
  nxt(){
    console.log(this.Question1)
    if(this.Question1=="Yeast"){
      this.count1=this.count1 +20;
      console.log(this.count1);
    }
    else{
     this.count1=0;
     console.log(this.count1);
  
    }
  
    console.log(this.Question2)
    if(this.Question2=="Panettone"){
      this.count2=this.count2 +20;
      console.log(this.count2);
    }
    else{
     this.count1=0;
     console.log(this.count2);
  
    }
    console.log(this.Question3)
    if(this.Question3=="Greece"){
      this.count3=this.count3 +20;
      console.log(this.count3);
    }
    else{
     this.count1=0;
     console.log(this.count3);
  
    }
    console.log(this.Question4)
    if(this.Question4=="Almonds"){
      this.count4=this.count4 +20;
      console.log(this.count4);
    }
    else{
     this.count4=0;
     console.log(this.count4);
  
    }
  
    console.log(this.Question5)
    if(this.Question5=="Courgette"){
      this.count5=this.count5 +20;
      console.log(this.count5);
    }
    else{
     this.count5=0;
     console.log(this.count5);
  
    }  
  
        this.total=this.total + this.count1 + this.count2 + this.count3 + this.count4 + this.count5;
         console.log(this.total);

         if(this.total == 100){
          const alert = this.alertCtrl.create({
            title: 'Well Done',
            subTitle: this.total +'%'+'   Move to next Level',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(Quiz4Page)
        }
    
      else{
          const alert = this.alertCtrl.create({
            title: 'Failed Try again',
            subTitle: this.total+'%'+ '  Answer all Question Correctly',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(Quiz3Page)
        }
        if(this.total > 100){
          this.total == 0
        }
      }
        
      }
