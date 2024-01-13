import { Component, OnInit, QueryList } from '@angular/core';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit{
 
  faqItemsList : AccordionItem[] = [];
  questionList : string[] = ["What is URL Shortener?",
                            "What is a custom URL shortener?",
                            "How do I shorten a URL for free?",
                            "Can I use a domain I already own?",
                            "What is your privacy and data protection policy?",
                            "What are the benefits of a short URL?",
                            "Which link shortener is best?",
                            "How do I change a long URL to a short URL?"];
  answerList : string[] = ["A URL shortener streamlines lengthy web addresses for easy sharing. Clicking the shortened link seamlessly directs users to the intended destination—a catchy alias for your webpage. Our user-friendly link shortener enhances URLs, boosting your online content strategy. Try it free above.",
                            "A custom URL shortener is a URL shortening service such as QuickLink that allows you to personalize the shortened links into branded links.. Instead of a randomly generated alphanumeric code, you can specify a word or phrase to be included in the URL. This also enables you to turn your custom domain into a branded domain with a shortened URL. This can enhance brand visibility and recall, as well as increase trust in the link since the custom part can provide some context about where the link leads.",
                            "To shorten a URL for free, you can use online services such as QuickLink on all your links. The process is simple: you use QuickLink's URL shortener generator, paste the long URL into the designated field, and then click a button to generate the shortened URL.",
                            "Absolutely! Personalization, flexibility, and control are what QuickLink is all about. With each of our paid plans, you can register or connect at least one top-level domain (your-domain.com) or subdomains (sub.your-domain.com) that you already own to create your branded short links using QuickLink.",
                            "We take your data privacy and security seriously and implement stringent measures to protect your links and information. QuickLink is the only SOC2 Type 2 certified platform for branded and shortened URLs; we are also GDPR compliant.",
                            "There are several benefits to using a short URL. First, they are more manageable and look cleaner, especially in contexts with character restrictions such as social media posts. This matters because cleaner URLs are more appealing to the user, and that translates to a higher conversion or click through rate. They are also easier to remember and type manually.",
                            "QuickLink is one of the most popular and best URL shorteners due to its reliability and additional personalization, security, and management features. It not only provides a short URL but also allows users to track the URL's performance through click-through rates and branded URLs. QuickLink offers premium features that you can explore for more comprehensive link management at scale.",
                            "Changing a long URL to a short one involves using a URL shortening service such as QuickLink. You first copy the long URL that you wish to shorten. Then, use the URL shortener generator. You will find a field where you can paste the long URL. After pasting the URL, click on the button 'Shorten URL.' QuickLink will then provide you with a shortened version of your original URL, which redirects to the same page when clicked."];

                           
constructor(private dservice :DialogServiceService){}
  
 
ngOnInit(): void {
    this.addItems(this.questionList,this.answerList);
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
}

addItems(questions:string[],answers:string[]){
  for(let i =0;i<questions.length;i++){
    let item = new AccordionItem(questions[i],answers[i]);
    this.faqItemsList.push(item);
  }
}


toggleItem(item:AccordionItem){
  item.isExpanded = !item.isExpanded;
}
}

class AccordionItem{
  question : string;
  answer:string;
  isExpanded :boolean;
 
  public constructor(question:string,answer:string){
    this.question = question;
    this.answer = answer;
    this.isExpanded = false;
  }
}
