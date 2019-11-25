import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/datatypes/user';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/interfaces/question';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-tela-de-correcao',
  templateUrl: './tela-de-correcao.component.html',
  styleUrls: ['./tela-de-correcao.component.scss']
})
export class TelaDeCorrecaoComponent implements OnInit {

  constructor(
    private QuestionService: QuestionService,
    private UserService: UserService, 
    private ChallengerService: ChallengerService,
    private routeActive: ActivatedRoute,
    private router: Router) { }

  answers
  user: User

  ngOnInit() {
    this.routeActive.params.subscribe((data)=>{
          this.getAnswersUser(data.aluno, data.challenger);
          this.UserService.getUser(data.aluno).subscribe((user: User)=>{
              this.user = user;
          })

        
    })

  }

  getAnswersUser(userid, challengerid){
        this.ChallengerService.getAnswersUser(userid, challengerid).subscribe((result)=>{
              this.answers = result
        })
  }

    correctAnswer(question, user, answerID){

    

    var habilidade;
    this.routeActive.params.subscribe((dataParams)=>{
      this.QuestionService.getQuestionById(dataParams.aluno).subscribe((quest: Question)=>{
          habilidade = quest.habilidade

          var data = {
            question: question,
            user: user,
            experience: 50,
            skil: "",
            answerID: answerID
          }
        
        if(habilidade == "Abstração"){
            data.skil = "1";
        }
        if(habilidade == "Herança"){
        data.skil = "2" 
        }
        if(habilidade == "Polimorfismo"){
        data.skil = "3"
        
        }
        if(habilidade == "Objetos"){
        data.skil = "4"   
        }
        
        
        this.ChallengerService.setExperienceCorrectQuestion(data).subscribe(()=>{
          console.log("Sucesso")
          this.getAnswersUser(data.user, dataParams.challenger)
        })
      })
    })
  }

  finalizaDesafio(user){
    this.routeActive.params.subscribe((dataParams)=>{
      this.QuestionService.getQuestionById(dataParams.aluno).subscribe((quest: Question)=>{
        let data = {
          challenger: dataParams.challenger,
          skil: quest.habilidade,
          user: user 
        }

        this.ChallengerService.finishChallenger(data).subscribe(()=>{
          this.router.navigateByUrl("/profile")
        })
      })
   
    })

  
  
    
  }
 

 

}
