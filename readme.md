# Mixed Messages Project
**by: Fabien**

## Project description
>For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking. [Project](https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages "Mixed Messages")

## Objectives

| Objective                                 | Status |    
|:----------------------------------------- |:------:|
| Build a **Javascript** message generator  |   [x]  | 
| Use **Git** version control               |   [x]  |
| Use **command line**                      |   [x]  |
| Develop locally on your computer          |   [x]  |


## Quotes
We are using 30+ quotes that are inspirational, factual or funny, and we included the the references.
- [inspirational](https://cdn.graciousquotes.com/wp-content/uploads/2021/02/100-Inspirational-Quotes-on-Learning-.pdf "source")
- [factual](http://brunswicksouthps.vic.edu.au/wp-content/uploads/2015/04/PP-27-Facts-2015.pdf?_sm_au_=iVV552Wr2kfvFSN5 "source")
- [funny](https://www.selfhelpcollective.com/support-files/27_free_funny_inspirational_quotes.pdf "funny")

## Approach
1. we are randomly selecting a *quote* from each *type*
2. we create an object with the quotes
3. we shuffle them 

## Object quote

```javascript
/*     
    Creates an object to store the quotes from each type
    getQuote(): returns a shuffled cobination of the quotes.
  
*/
const quoteFactory = (fact, inspiration, someFun) => {
    return {
        _fact: fact,
        _inspiration: inspiration,
        _fun: someFun,
        _last: -1,        
        getQuote(){
            let shuffle = Math.floor(Math.random() * 5);
            let message = "";
            
            //If called multiple times, avoind repeating 
            while(shuffle === this._last) {
                shuffle = Math.floor(Math.random() * 5);
            }
            switch(shuffle){
                case 0:
                    message = `${this._fact}. ${this._inspiration}. ${this._fun}.`;
                    break;
                    break;
                case 1:
                    message = ` ${this._inspiration}. ${this._fact}. ${this._fun}.`;
                    break;
                case 2:
                    message = `${this._fun}. ${this._inspiration}. ${this._fact}.`;
                    break;
                case 3:
                    message = `${this._fun}. ${this._fact}. ${this._inspiration}.`;
                    break;
                case 4:
                    message = ` ${this._inspiration}. ${this._fun}.  ${this._fact}.`;
                    break;
                default:
                    message = "I am not in the mood, just try another day";
                    break;
            }
            this._last = shuffle;

            return message;
        },
       
     };
}
    
```


