import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../_main/TextChangeFunc";


function Panel1Q_2() {
  return (
    <section className='mainSection p-4 mb-[50px]'
      onMouseDown={() => {
        // console.log(window.getSelection().toString());
        makeEditableAndHighlight("green");
      }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 2 <br /> READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on <span className='font-bold'>Questions 14-26</span> which are based on Reading Passage 2 below. </h5> <br />

        </div>
      </div>
      <div className='main-Passages'>
        <h5 className='text-center'>The global importance of wetlands</h5> <br />
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. These are complex ecosystems, rich in unique plant and animal life. But according to the World Wide Fund for Nature (WWFN), half of the world’s wetlands have disappeared since 1990 – converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat*. Many of those that remain have been damaged by agricultural pesticides and fertilizers, industrial pollutants, and construction works.
            —————————
            * peat: a brown deposit formed by the partial decomposition of vegetation in wet acidic conditions, often cut out and dried for use as fuel
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> Throughout history, humans have gathered around wetlands, and their fertile ecosystems have played an important part in human development. Consequently, they are of considerable religious, historical and archaeological value to many communities around the world. ‘Wetlands directly support the livelihoods and well-being of millions of people,’ says Dr Matthew McCartney, principal researcher and hydrologist at the International Water Management Institute (IWMI). ‘In many developing countries, large numbers of people are dependent on wetland agriculture for their livelihoods.’</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>They also serve a crucial environmental purpose. ‘Wetlands are one of the key tools in mitigating climate change across the planet,’ says Pieter van Eijk, head of Climate Adaptation at Wetlands International (WI), pointing to their use as buffers that protect coastal areas from sea-level rise and extreme weather events such as hurricanes and flooding. Wetland coastal forests provide food and water, as well as shelter from storms, and WI and other agencies are working to restore those forests which have been lost. ‘It can be as simple as planting a few trees per hectare to create shade and substantially change a microclimate,’ he says. ‘Implementing climate change projects isn’t so much about money.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>
            The world’s wetlands are, unfortunately, rich sources for in-demand commodities, such as palm oil and pulpwood. Peatlands – wetlands with a waterlogged organic soil layer – are particularly targeted. When peatlands are drained for cultivation, they become net carbon emitters instead of active carbon stores, and, according to Marcel Silvius, head of Climate-smart Land-use at WI, this practice causes six per cent of all global carbon emissions. The clearance of peatlands for planting also increases the risk of forest fires, which release huge amounts of CO₂. ‘We’re seeing huge peatland forests with extremely high biodiversity value being lost for a few decades of oil palm revenues,’ says Silvius.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>The damage starts when logging companies arrive to clear the trees. They dig ditches to enter the peat swamps by boat and then float the logs out the same way. These are then used to drain water out of the peatlands to allow for the planting of corn, oil palms or pulpwood trees. Once the water has drained away, bacteria and fungi then break down the carbon in the peat and turn it into CO₂ and methane. Meanwhile, the remainder of the solid matter in the peat starts to move downwards, in a process known as subsidence. Peat comprises 90 per cent water, so this is one of the most alarming consequences of peatland clearances. ‘In the tropics, peat subsides at about four centimetres a year, so within half a century, very large landscapes on Sumatra and Borneo will become flooded as the peat drops below water level,’ says Silvius. ‘It’s a huge catastrophe that’s in preparation. Some provinces will lose 40 per cent of their landmass.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> And while these industries affect wetlands in ways that can easily be documented, Dr Dave Tickner of the WWFN believes that more subtle impacts can be even more devastating. ‘Sediment run-off and fertilizers can be pretty invisible,’ says Tickner. ‘Over-extraction of water is equally invisible. You do get shock stories about rivers running red, or even catching fire, but there’s seldom one big impact that really hurts a wetland.’ Tickner does not blame anyone for deliberate damage, however. ‘I’ve worked on wetland issues for 20 years and have never met anybody who wanted to damage a wetland,’ he says. ‘It isn’t something that people generally set out to do. Quite often, the effects simply come from people trying to make a living.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span> Silvius also acknowledges the importance of income generation. ‘It’s not that we just want to restore the biodiversity of wetlands – which we do – but we recognise there’s a need to provide an income for local people.’ This approach is supported by IWMI. ‘The idea is that people in a developing country will only protect wetlands if they value and profit from them,’ says McCartney. ‘For sustainability, it’s essential that local people are involved in wetland planning and decision making and have clear rights to use wetlands.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>H</span> The fortunes of wetlands would be improved, Silvius suggests, if more governments recognized their long-term value. ‘Different governments have different attitudes,’ he says, and goes on to explain that some countries place a high priority on restoring wetlands, while others still deny the issue. McCartney is cautiously optimistic, however. ‘Awareness of the importance of wetlands is growing,’ he says. ‘It’s true that wetland degradation still continues at a rapid pace, but my impression is that things are slowly changing.’
          </p>
        </div>
      </div> <br />

      <div className='text-inherit mt-5'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>READING PASSAGE 3</div> <br />
          <h5>You should spend about 20 minutes on <span className='text-xl font-bold'>Questions 27-40</span> which are based on Reading Passage 3 below.</h5> <br />
          <h4 className='text-center'>Is the era of artificial speech translation upon us?</h4> <br />
          <i>Once the stuff of science fiction, technology that enables people to talk using different languages is now here. But how effective is it?</i> <br />

        </div>
      </div>
      <div className='main-Passages'>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>Noise, Alex Waibel tells me, is one of the major challenges that artificial speech translation has to meet. A device may be able to recognize speech in a laboratory, or a meeting room, but will struggle to cope with the kind of background noise I can hear in my office surrounding Professor Waibel as he speaks to me from Kyoto station in Japan. I’m struggling to follow him in English, on a scratchy line that reminds me we are nearly 10,000 kilometers apart – and that distance is still an obstacle to communication even if you’re speaking the same language, as we are. We haven’t reached the future yet. If we had, Waibel would have been able to speak more comfortably in his native German and I would have been able to hear his words in English.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>At Karlsruhe Institute of Technology, where he is a professor of computer science, Waibel and his colleagues already give lectures in German that their students can follow in English via an electronic translator. The system generates text that students can read on their laptops or phones, so the process is somewhat similar to subtitling. It helps that lecturers speak clearly, don’t have to compete with background chatter, and say much the same thing each year.

            The idea of artificial speech translation has been around for a long time. Douglas Adams’ science fiction novel, The Hitchhiker’s Guide to the Galaxy, published in 1979, featured a life form called the ‘Babel fish’ which, when placed in the ear, enabled a listener to understand any language in the universe. It came to represent one of those devices that technology enthusiasts dream of long before they become practically realizable, like TVs flat enough to hang on walls: objects that we once could only dream of having but that are now commonplace. Now devices that look like prototype Babel fish have started to appear, riding a wave of advances in artificial translation and voice recognition.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>At this stage, however, they seem to be regarded as eye-catching novelties rather than steps towards what Waibel calls ‘making a language-transparent society.’ They tend to be domestic devices or applications suitable for hotel check-ins, for example, providing a practical alternative to speaking traveler’s English. The efficiency of the translator is less important than the social function. However, ‘Professionals are less inclined to be patient in a conversation,’ founder and CEO at Waverly Labs, Andrew Ochoa, observes. To redress this, Waverly is now preparing a new model for professional applications, which entails performance improvements in speech recognition, translation accuracy and the time it takes to deliver the translated speech.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>For a conversation, both speakers need to have devices called Pilots (translator earpieces) in their ears. ‘We find that there’s a barrier with sharing one of the earphones with a stranger,’ says Ochoa. That can’t have been totally unexpected. The problem would be solved if earpiece translators became sufficiently prevalent that strangers would be likely to already have their own in their ears. Whether that happens, and how quickly, will probably depend not so much on the earpieces themselves, but on the prevalence of voice-controlled devices and artificial translation in general.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>Waibel highlights the significance of certain Asian nations, noting that voice translation has really taken off in countries such as Japan with a range of systems. There is still a long way to go, though. A translation system needs to be simultaneous, like the translator’s voice speaking over the foreign politician being interviewed on the TV, rather than in sections that oblige speakers to pause after every few remarks and wait for the translation to be delivered. It needs to work offline, for situations where internet access isn’t possible, and to address apprehensions about the amount of private speech data accumulating in the cloud, having been sent to servers for processing.

            Systems not only need to cope with physical challenges such as noise, they will also need to be socially aware by addressing people in the right way. Some cultural traditions demand solemn respect for academic status, for example, and it is only polite to respect this. Etiquette-sensitive artificial translators could relieve people of the need to know these differing cultural norms. At the same time, they might help to preserve local customs, slowing the spread of habits associated with international English, such as its readiness to get on first-name terms.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span>Professors and other professionals will not outsource language awareness to software, though. If the technology matures into seamless, ubiquitous artificial speech translation, it will actually add value to language skills. Whether it will help people conduct their family lives or relationships is open to question—though one noteworthy possibility is that it could overcome the language barriers that often arise between generations after migration, leaving children and their grandparents without a shared language.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span>Whatever uses it is put to, though, it will never be as good as the real thing. Even if voice-morphing technology simulates the speaker’s voice, their lip movements won’t match, and they will look like they are in a dubbed movie. The contrast will underline the value of shared languages, and the value of learning them. Sharing a language can promote a sense of belonging and community, as with the international scientists who use English as a lingua franca, where their predecessors used Latin. Though the practical need for a common language will diminish, the social value of sharing one will persist. And software will never be a substitute for the subtle but vital understanding that comes with knowledge of a language.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1Q_2