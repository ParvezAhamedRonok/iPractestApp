import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["carnivorous"],
    ["scent"],
    ["pouch"],
    ["fossil"],
    ["habitat"],
    ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["FALSE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["NOT GIVEN"],
     ["F"], ["G"], ["A"], ["H"], ["B"], ["E"], ["C"],
    ["B"], ["A"],
    ["solid"],
    ["Sumatran orangutan"],
    ["carbon stocks"],
    ["biodiversity"],
    ["D"], ["B"], ["C"], ["D"], ["C"], 
    ["NO"], ["YES"], ["NOT GIVEN"], ["NO"], ["H"], ["D"], ["I"], ["B"], ["F"]

  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> 
          <h4 className='mt-4 text-xl'>The thylacine</h4> <br />


        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>1,</span>The extinct thylacine, also known as the Tasmanian tiger, was a marsupial* that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine’s average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.

          <br /> <br />
           <span className='text-xl font-bold mr-2'>2,</span>The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably caught its prey by exhausting it during a long pursuit. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name ‘tiger’, the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>3,</span>The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted. <br /> <br />

          <span className='text-xl font-bold mr-2'>4,</span> Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine’s survival there.</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>5,</span>The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters** with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>6,</span>There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania’s Hobart Zoo. The famous naturalist John Gould foresaw the thylacine’s demise when he published his Mammals of Australia between 1848 and 1863, writing, ‘The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.’
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>7,</span> However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania’s Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season. The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936. <br /> <br />

          There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986. <br /> <br />

          ———-
          * marsupial: a mammal, such as a kangaroo, whose young are born incompletely developed and are typically carried and suckled in a pouch on the mother’s belly<br />

          **bounty hunters: people who are paid a reward for killing a wild animal
        </p>
      </div>
    </section>
  )
}

export default Panel1