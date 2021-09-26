/*  @project: Mixed Messages project
    @author: fabien
    @date: Sept 2021
*/

// Quotes
//@source: http://brunswicksouthps.vic.edu.au/wp-content/uploads/2015/04/PP-27-Facts-2015.pdf?_sm_au_=iVV552Wr2kfvFSN5

const facts = [
        ["Research has demonstrated that recognising and allowing, rather than forbidding, one’s thoughts to be present reduces their power", "Sarah Neil"],
        ["Positive psychology offers effective techniques which can be used to turn around the lives of teenagers who are suffering from alcoholism", "Jones DurcFahrenhorst"],
        ["Positivity relaxes the mind and promotes creativity", "Natalie White"],
        ["Positive psychology interventions have the power to reduce depressive symptoms", "Jones DurcFahrenhorst"],
        ["Physical acivity is linked with a variety of positive states, including optimism and self-efficacy", "Lauren Morgan"],
        ["The principles and practice of positive psychology are relevant to brain injury rehabilitation","Aleksandra Grzywinska"],
        ["A flow state leads to increased performance. Imagery and confidence appear to be important ingredients.", "Rebecca Strange"],
        ["Children’s generosity seems to be influenced by the generosity of their parents","Gabriella Bitar"], 
        ["Women are more likely to feel and express gratitude, make less critical evaluations of gratitude, and derive more benefits","Katherine Watson"],
        ["Happiness can be found even under conditions of extreme poverty.","Melissa Jackson"],
        ["Writing about personal experiences can positively influence both mental and physical health","Lauren Morgan"],
        ["Humility is positively linked with helping behaviour.","Courtney Whittaker"]
];

// @source: https://cdn.graciousquotes.com/wp-content/uploads/2021/02/100-Inspirational-Quotes-on-Learning-.pdf
const inspirational = [
        ["No man ever prayed heartily without learning something","Ralph Waldo Emerson"],
        ["The highest activity a human being can attain is learning for understanding, because to understand is to be free","Baruch Spinoza"],
        ["The main part of intellectual education is not the acquisition of facts, but learning how to make facts live", "Oliver Wendell Holmes"],
        ["The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living","Roy T. Bennett"],
        ["If you think education is expensive, try estimating the cost of ignorance","Howard Gardner"],
        ["It is not that I’m so smart. But I stay with the questions much longer", "Albert Einstein"],
        ["Learning is a treasure that will follow its owner everywhere","Chinese Proverb"],
        ["A man who asks is a fool for five minutes. A man who never asks is a fool for life","Chinese Proverb"],
        ["I don't think much of a man who is not wiser today than he was yesterday","Abraham Lincoln"],
        ["Never let formal education get in the way of your learning","Mark Twain"],
        ["To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future", "Plutarch"]
    ];
//@source: https://www.selfhelpcollective.com/support-files/27_free_funny_inspirational_quotes.pdf
const funny = [
        ["Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That's relativity", "Albert Einstein"],
        ["Don't go around saying the world owes you a living. The world owes you nothing. It was here first","Mark Twain"],
        ["Families are like fudge... mostly sweet with a few nuts","unkown"],
        ["If at first you don't succeed, think how many people you've made happy", "H. Duane Black "],
        ["Success is simply a matter of luck. Ask any failure", "unkown"],
        ["Those are my principles, and if you don't like them... well, I have others", "Groucho Marx"],
        ["Patience is something you admire in the driver behind you, but not in one ahead","Bill McGlashen"],
        ["Eat well, stay fit, die anyway","Ahmad"],
        ["Men, chocolate, and coffee are all better rich", "unkown"],
        ["I believe in the discipline of silence, and could talk for hours about it","George Bernard Shaw"],
        ["A verbal contract isn't worth the paper it is written on", "Samuel Goldwyn"]
];

/*     
    Creates an object to store the quotes from each type
    getQuote(): returns a shuffled cobination of the quotes.
  
*/
const quoteFactory = (fact, inspiration, someFun) => {
    return {
        _fact: fact,
        _inspiration: inspiration,
        _fun: someFun,        
        getQuote(){
            const shuffle = Math.floor(Math.random() * 5);
            let message = "";
            console.log(shuffle);
            
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
                message = `${this._fun}.  ${this._fact}. ${this._inspiration}.`;
                break;
                default:
                message = "I am not in the mood, just try another day";
                break;
            }
            return message;
        },
       
     };
}
    

/* Create a quote from quote.
*/
const pickAnIndex = num => Math.floor(Math.random() * num);

//Get a random quote of each type
const aFact = facts[pickAnIndex(facts.length)][0];
const anInspiration = inspirational[pickAnIndex(inspirational.length)][0];
const someFun = funny[pickAnIndex(funny.length)][0];

//Store the randowm quotes
const quote = quoteFactory(aFact,anInspiration,someFun);

//Display a random combination of the quotes
console.log(quote.getQuote());
    

