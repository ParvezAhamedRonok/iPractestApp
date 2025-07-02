import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    // Passage 1
    ["FALSE"], ["FALSE"], ["TRUE"], ["NOT GIVEN"], ["TRUE"], ["NOT GIVEN"], ["FALSE"],
    ["caves"], ["stone"], ["bones"], ["beads"], ["pottery"], ["spices"],

    // Passage 2
    ["G"], ["A"], ["H"], ["B"], ["carbon"], ["fires"], ["biodiversity"],
    ["ditches"], ["subsidence"], ["A"], ["C"], ["D"], ["B"],

    // Passage 3
    ["D"], ["A"], ["C"], ["B"], ["C"], ["E"], ["F"], ["B"],
    ["NO"], ["YES"], ["NO"], ["NOT GIVEN"], ["NOT GIVEN"], ["YES"]
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
          <div className='font-pacifico'>SECTION 1 <br />
            READING PASSAGE 1</div><br />
          <div>Questions 1-13</div>
        </div>
      </div>


      <div className='main-Passages'>
        <h6>You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below.</h6> <br />
        <h5 className=' font-bold mb-2'>Archaeologists discover evidence of prehistoric island settlers</h5>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            In early April 2019, Dr Ceri Shipton and his colleagues from Australian National University became the first archaeologists to explore Obi, one of many tropical islands in Indonesia’s Maluku Utara province. The research team’s discoveries suggest that the prehistoric people who lived on Obi were adept on both land and sea, hunting in the dense rainforest, foraging on the seashore, and possibly even voyaging between islands.
            The excavations were part of a project to learn more about how people first dispersed from mainland Asia, through the Indonesian archipelago and into the prehistoric continent that once connected Australia and New Guinea. The team’s earlier research suggested that the northernmost islands in the group, known as the Wallacean islands, including Obi, would have offered the easiest migration route. It also seemed likely that these islands were crucial ‘stepping stones’ on humans’ island-hopping voyages through this region millennia ago. But to support this idea, they needed archaeological evidence for humans living in this remote area in the ancient past. So, they travelled to Obi to look for sites that might reveal evidence of early occupation.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Just inland from the village of Kelo on Obi’s northern coast, Shipton and his colleagues found two caves containing prehistoric rock shelters that were suitable for excavation. With the permission and help of the local people of Kelo, they dug a small test excavation in each shelter. There they found numerous artefacts, including fragments of axes, some dating to about 14,000 years ago. The earliest axes at Kelo were made using clam shells. Axes made from clam shells from roughly the same time had also previously been found elsewhere in this region, including on the nearby island of Gebe to the northeast. As on Gebe, it is highly likely that Obi’s axes were used in the construction of canoes, thus allowing these early peoples to maintain connections between communities on neighbouring islands..</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>The oldest cultural layers from the Kelo site provided the team with the earliest record for human occupation on Obi, dating back around 18,000 years. At this time the climate was drier and colder than today, and the island’s dense rainforests would likely have been much less impenetrable than they are now. Sea levels were about 120 metres lower, meaning Obi was a much larger island, encompassing what is today the separate island of Bisa, as well as several other small islands nearby.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>Roughly 11,700 years ago, as the most recent ice age ended, the climate became significantly warmer and wetter, no doubt making Obi’s jungle much thicker. According to the researchers, it is no coincidence that around this time the first axes crafted from stone rather than sea shells appear, likely in response to their heavy-duty use for clearing and modification of the increasingly dense rainforest. While stone takes about twice as long to grind into an axe compared to shell, the harder material keeps its sharp edge for longer.
            Judging by the bones which the researchers unearthed in the Kelo caves, people living there mainly hunted the Rothschild’s cuscus, a possum-like creature that still lives on Obi today. As the forest grew more dense, people probably used axes to clear patches of forest and make hunting easier.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Shipton’s team’s excavation of the shelters at the Kelo site unearthed a volcanic glass substance called obsidian, which must have been brought over from another island, as there is no known source on Obi. It also revealed particular types of beads, similar to those previously found on islands in southern Wallacea. These finds again support the idea that Obi islanders routinely travelled to other islands.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span>The excavations suggest people successfully lived in the two Kelo shelters for about 10,000 years. But then, about 8,000 years ago, both were abandoned. Did the residents leave Obi completely, or move elsewhere on the island? Perhaps the jungle had grown so thick that axes were no longer a match for the dense undergrowth. Perhaps people simply moved to the coast and turned to fishing rather than hunting as a means of survival.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>Whatever the reason for the departure, there is no evidence for use of the Kelo shelters after this time, until about 1,000 years ago, when they were re-occupied by people who owned pottery as well as items made out of gold and silver. It seems likely, in view of Obi’s location, that this final phase of occupation also saw the Kelo shelters used by people involved in the historic trade in spices between the Maluku islands and the rest of the world.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1