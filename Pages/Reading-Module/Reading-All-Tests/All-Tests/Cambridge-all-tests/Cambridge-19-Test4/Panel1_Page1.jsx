import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    // Passage 1
    ["FALSE"], ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"],
    ["colonies"], ["spring"], ["endangered"], ["habitat", "habitats"],
    ["Europe"], ["southern"], ["diet"],

    // Passage 2
    ["C"], ["F"], ["E"], ["D"], ["D"], ["B"], ["A"], ["E"], ["B"], ["C"],
    ["waste"], ["machinery"], ["caution"],

    // Passage 3
    ["C"], ["C"], ["B"], ["A"], ["egalitarianism"], ["status"], ["hunting"],
    ["domineering"], ["autonomy"], ["NOT GIVEN"], ["NO"], ["YES"],
    ["NOT GIVEN"], ["NO"]
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
        <h5 className=' font-bold mb-2 mt-2'>The impact of climate change on butterflies in Britain</h5>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>
            According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years. If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem. Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly’s lifecycle, consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals. Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Butterflies prefer outdoor conditions to be ‘just right’, which means neither too hot nor too cold. Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this. One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as ‘phenology’, so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be ‘advancing its phenology’.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>These advances have been observed already in a wide range of butterflies – indeed, most species are advancing their phenology to some extent. In Britain, as the average spring temperature has increased by roughly 0.5°C over the past 20 years, species have advanced by between three days and a week on average, to keep in line with cooler temperatures. Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown, but a new study is seeking to answer these questions.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts – people who spend their free time observing the activities of different species. This provided information on 130 species of butterflies in Great Britain every year for a 20-year period. They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved. The data also, crucially, allowed researchers to estimate subtle changes in what time of the year each species was changing into an adult butterfly.

            Analyzing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to be able to benefit from an earlier emergence driven by climate change. Some species are able to go from caterpillar to butterfly twice or more per year, so that the individual butterflies you see flying in the spring are the grandchildren or great-grandchildren of the individuals seen a year previously.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Among these species, researchers observed that those which have been advancing their phenology the most over the 20-year study period also had the most positive trends in abundance, distribution and northwards extent. For these species, such as Britain’s tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> Other species, however, are less flexible and restricted to a single reproductive cycle per year. For these species, there was no evidence of any benefit to emerging earlier. Indeed, worryingly, it was found that the species in this group that specialize in very specific habitat types, often related to the caterpillar’s preferred diet, actually tended to be most at harm from advancing phenology. The beautiful High Brown Fritillary, often described as Britain’s most endangered butterfly, is in this group. It is found only in coppiced woodland and limestone pavement habitats. It is also a single-generation butterfly that has advanced its phenology. This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>All is not lost, however. Many of Britain’s single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm. Therefore, as the climate continues to warm, species like the Silver-studded Blue might be able to switch to multiple generations in the UK as well, and so begin to extract benefits from the additional warmth, potentially leading to population increases.

            More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk. The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years. This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1