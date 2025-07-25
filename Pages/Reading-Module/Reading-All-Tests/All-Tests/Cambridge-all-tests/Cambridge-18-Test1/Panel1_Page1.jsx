import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import {makeEditableAndHighlight} from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["lettuces"],
    ["1000 kg"],
    ["consumption"],
    ["pesticides"],
    ["journeys"],
    ["producers"],
    ["flavour"],
    ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["FALSE"], ["NOT GIVEN"], 
    ["B"], ["A"], ["C"], ["E"], ["B"], ["B"], ["C"], ["C"],
    ["fire"],
    ["nutrients"],
    ["cavities"],
    ["hawthorn"],
    ["rare"],
    ["C"], ["F"], ["A"], ["E"], ["B"],
    ["sustainability"],
    ["fuel"],
    ["explosions"],
    ["bankrupt"],
    ["C"], ["D"], ["B"], ["D"], ["A"]
  ]
  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)





  return (
    <section className='mainSection p-4 mb-[50px]'  onMouseDown={() =>{
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
  }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-4 text-justify">
          <div className=''>SECTION 1 <br /> 
          READING PASSAGE 1</div><br /> 
          <div>Questions 1-13</div> 
          <div>Urban farming</div>  
        </div>
      </div>

      
      <div className='main-Passages'>
      <h5 className=' font-bold mb-2'>In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources. Could it help cities face the threats to our food supplies?</h5>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            On top of a striking new exhibition hall in southern Paris, the world’s largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers- as the soil-free plastic tubes are known – on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries. When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. ‘We’re not ever, obviously, going to feed the whole city this way,’ cautions Hardy. ‘In the urban environment you’re working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there’s no reason why you shouldn’t eventually target maybe between 5% and 10% of consumption.’ </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>Perhaps most significantly, however, this is a real-life showcase for the work of Hardy’s flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. ‘The method’s advantages are many,’ he says. ‘First, I don’t much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don’t much like the fact, either, that they’ve travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>Produce grown using this soil-free method, on the other hand- which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays- is ‘produced up here, and sold locally, just down there. It barely travels at all,’ Hardy says. ‘You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they’re really at their best, and not before.’ No soil is exhausted, and the water that gently showers the plants’ roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is ‘virtuous’. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly 100 to 150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. ‘Root vegetables we cannot do, at least not yet,’ he says. ‘Radishes are OK, but carrots, potatoes, that kind of thing- the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.’ Nevertheless, urban farming of the kind being practised in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1