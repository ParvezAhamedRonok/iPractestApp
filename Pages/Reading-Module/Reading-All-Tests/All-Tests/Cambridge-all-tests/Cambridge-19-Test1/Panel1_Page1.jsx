import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    // Passage 1
    ["FALSE"], ["FALSE"], ["NOT GIVEN"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["TRUE"], 
    ["paint"], ["topspin"], ["training"], ["intestines", "gut"], ["weights"], ["grips"], 

    // Passage 2
    ["D"], ["G"], ["C"], ["A"], ["G"], ["B"], ["B"],["A"], ["C"],["B"], 
    ["grain"], ["punishment"], ["ransom"], 

    // Passage 3
    ["D"], ["A"], ["C"], ["D"], ["G"], ["J"], ["H"], ["B"], ["E"], ["C"], 
    ["YES"], ["NOT GIVEN"], ["NO"], ["NOT GIVEN"]
];

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)





  return (
    <section className='mainSection p-4 mb-[50px]' onMouseDown={() => {
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
    }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-4 text-justify">
          <div className=''>SECTION 1 <br />
            READING PASSAGE 1</div><br />
          <div>Questions 1-13</div>
        </div>
      </div>


      <div className='main-Passages'>
        <h6>You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below.</h6>
        <h5 className=' font-bold mb-2'>How tennis rackets have changed</h5>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            In 2016, the British professional tennis player Andy Murray was ranked as the world’s number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport’s history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player’s playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. ‘Touring professionals have their rackets customised to their specific needs,’ says Colin Triplow, a UK-based professional racket stringer. ‘It’s a highly important part of performance maximisation.’ Consequently, the specific rackets used by the world’s elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: ‘We’re very particular with our racket specifications,’ they say. ‘All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a . . . thorough customisation process.’ They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains).
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage. Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.
            At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a ‘hybrid set-up’, where a combination of both synthetic and natural strings are used.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> Of the synthetics, co-polyester is by far the most widely used. It’s a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.
            However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>Other changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Gonçalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.

            Racket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it’s exciting to see what further developments there will be in the future.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1